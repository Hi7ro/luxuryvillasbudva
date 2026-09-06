<?php

declare(strict_types=1);

const VILLA_CACHE_SECONDS = 300;
const VILLA_FETCH_TIMEOUT_SECONDS = 8;
const VILLA_MAX_FEED_BYTES = 2097152;

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: private, max-age=60');
header('X-Content-Type-Options: nosniff');

if (($_SERVER['REQUEST_METHOD'] ?? 'GET') !== 'GET') {
    header('Allow: GET');
    sendJson(405, ['error' => 'Method not allowed.']);
}

$villa = isset($_GET['villa']) && is_string($_GET['villa']) ? $_GET['villa'] : '';
$allowedVillas = ['villa-lumina', 'villa-monte-mare'];
if (!in_array($villa, $allowedVillas, true)) {
    sendJson(400, ['error' => 'Unknown villa.']);
}

$configPath = findCalendarConfig();
if ($configPath === null) {
    sendJson(503, ['error' => 'Calendar feeds are not configured.']);
}

$config = require $configPath;
if (!is_array($config)) {
    sendJson(503, ['error' => 'Calendar configuration is invalid.']);
}

$urls = normaliseFeedUrls($config[$villa] ?? []);
if ($urls === []) {
    sendJson(503, ['error' => 'No calendar feed is configured for this villa.']);
}

$cacheFile = calendarCacheFile($villa);
$cached = readFreshCache($cacheFile);
if ($cached !== null) {
    sendJson(200, $cached);
}

$blockedDates = [];
$successfulSources = 0;
foreach ($urls as $url) {
    try {
        foreach (parseBlockedDates(fetchCalendar($url)) as $date) {
            $blockedDates[$date] = true;
        }
        $successfulSources++;
    } catch (Throwable $error) {
        // Do not expose private feed URLs or provider responses to visitors.
        error_log('Villa calendar source failed: ' . $error->getMessage());
    }
}

ksort($blockedDates);
$response = [
    'villa' => $villa,
    'blockedDates' => array_keys($blockedDates),
    'lastUpdated' => gmdate('c'),
    'sourceCount' => $successfulSources,
    'configuredSourceCount' => count($urls),
    'complete' => $successfulSources === count($urls),
];

if ($successfulSources === 0) {
    sendJson(502, $response + ['error' => 'Calendar feeds are temporarily unavailable.']);
}

writeCache($cacheFile, $response);
sendJson(200, $response);

function findCalendarConfig(): ?string
{
    $fromEnvironment = getenv('CALENDAR_CONFIG_FILE');
    $candidates = [];
    if (is_string($fromEnvironment) && trim($fromEnvironment) !== '') {
        $candidates[] = trim($fromEnvironment);
    }

    // Preferred: one level above the domain document root.
    $candidates[] = dirname(__DIR__, 2) . '/private/villa-calendar.php';
    // Fallback for accounts where the domain points directly to the account root.
    $candidates[] = dirname(__DIR__) . '/private/villa-calendar.php';

    foreach ($candidates as $candidate) {
        if (is_file($candidate) && is_readable($candidate)) {
            return $candidate;
        }
    }
    return null;
}

function normaliseFeedUrls($configured): array
{
    if (is_string($configured)) {
        $configured = preg_split('/[\r\n,]+/', $configured) ?: [];
    }
    if (!is_array($configured)) {
        return [];
    }

    $urls = [];
    foreach ($configured as $url) {
        if (!is_string($url)) {
            continue;
        }
        $url = trim($url);
        if (filter_var($url, FILTER_VALIDATE_URL) === false) {
            continue;
        }
        if (strtolower((string) parse_url($url, PHP_URL_SCHEME)) !== 'https') {
            continue;
        }
        $urls[$url] = true;
    }
    return array_keys($urls);
}

function fetchCalendar(string $url): string
{
    if (function_exists('curl_init')) {
        $curl = curl_init($url);
        if ($curl === false) {
            throw new RuntimeException('Unable to initialise calendar request.');
        }
        curl_setopt_array($curl, [
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_MAXREDIRS => 3,
            CURLOPT_CONNECTTIMEOUT => 4,
            CURLOPT_TIMEOUT => VILLA_FETCH_TIMEOUT_SECONDS,
            CURLOPT_HTTPHEADER => ['Accept: text/calendar, text/plain;q=0.9, */*;q=0.1'],
            CURLOPT_USERAGENT => 'LuxuryVillasBudva-Availability/1.0',
            CURLOPT_PROTOCOLS => CURLPROTO_HTTPS,
            CURLOPT_REDIR_PROTOCOLS => CURLPROTO_HTTPS,
        ]);
        $body = curl_exec($curl);
        $status = (int) curl_getinfo($curl, CURLINFO_RESPONSE_CODE);
        $message = curl_error($curl);
        curl_close($curl);
        if (!is_string($body) || $status < 200 || $status >= 300) {
            throw new RuntimeException('Calendar request failed with HTTP ' . $status . ($message !== '' ? '.' : ''));
        }
    } else {
        $context = stream_context_create([
            'http' => [
                'method' => 'GET',
                'timeout' => VILLA_FETCH_TIMEOUT_SECONDS,
                'ignore_errors' => true,
                'header' => "Accept: text/calendar, text/plain;q=0.9, */*;q=0.1\r\nUser-Agent: LuxuryVillasBudva-Availability/1.0\r\n",
            ],
        ]);
        $body = @file_get_contents($url, false, $context);
        $statusLine = $http_response_header[0] ?? '';
        if (!is_string($body) || !preg_match('/\s2\d\d\s/', $statusLine)) {
            throw new RuntimeException('Calendar request failed.');
        }
    }

    if (strlen($body) > VILLA_MAX_FEED_BYTES) {
        throw new RuntimeException('Calendar response exceeds the size limit.');
    }
    return $body;
}

function parseBlockedDates(string $ical): array
{
    $unfolded = preg_replace('/\r\n[ \t]|\n[ \t]|\r[ \t]/', '', $ical) ?? $ical;
    preg_match_all('/BEGIN:VEVENT\R([\s\S]*?)END:VEVENT/i', $unfolded, $matches);
    $blocked = [];

    foreach ($matches[1] ?? [] as $event) {
        if (preg_match('/^STATUS:CANCELLED\s*$/mi', $event)) {
            continue;
        }
        if (preg_match('/^TRANSP:TRANSPARENT\s*$/mi', $event)) {
            continue;
        }
        if (!preg_match('/^DTSTART(?:;[^:]*)?:(\d{8})/mi', $event, $startMatch)) {
            continue;
        }
        $start = parseIcalDate($startMatch[1]);
        if ($start === null) {
            continue;
        }
        $end = null;
        if (preg_match('/^DTEND(?:;[^:]*)?:(\d{8})/mi', $event, $endMatch)) {
            $end = parseIcalDate($endMatch[1]);
        }
        $end = $end ?? $start->modify('+1 day');

        $date = $start;
        for ($guard = 0; $date < $end && $guard < 730; $guard++) {
            $blocked[$date->format('Y-m-d')] = true;
            $date = $date->modify('+1 day');
        }
    }

    ksort($blocked);
    return array_keys($blocked);
}

function parseIcalDate(string $value): ?DateTimeImmutable
{
    $date = DateTimeImmutable::createFromFormat('!Ymd', $value, new DateTimeZone('UTC'));
    $errors = DateTimeImmutable::getLastErrors();
    if ($date === false || (is_array($errors) && ($errors['warning_count'] > 0 || $errors['error_count'] > 0))) {
        return null;
    }
    return $date;
}

function calendarCacheFile(string $villa): string
{
    $installation = substr(hash('sha256', __DIR__), 0, 16);
    return rtrim(sys_get_temp_dir(), DIRECTORY_SEPARATOR)
        . DIRECTORY_SEPARATOR . 'luxury-villas-' . $installation . '-' . $villa . '.json';
}

function readFreshCache(string $path): ?array
{
    if (!is_file($path) || (int) filemtime($path) < time() - VILLA_CACHE_SECONDS) {
        return null;
    }
    $contents = @file_get_contents($path);
    if (!is_string($contents)) {
        return null;
    }
    $decoded = json_decode($contents, true);
    return is_array($decoded) ? $decoded : null;
}

function writeCache(string $path, array $response): void
{
    $encoded = json_encode($response, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
    if (is_string($encoded)) {
        @file_put_contents($path, $encoded, LOCK_EX);
    }
}

function sendJson(int $status, array $payload): void
{
    http_response_code($status);
    echo json_encode($payload, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
    exit;
}

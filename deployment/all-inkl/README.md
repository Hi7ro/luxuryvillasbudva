# ALL-INKL deployment

The production build contains a PHP availability endpoint for regular
ALL-INKL webhosting. A permanent Node.js process is not required for this
deployment variant.

## 1. Build and upload

Run `npm run build`, then upload the **contents** of
`dist/villa-montemare-lumina/browser/` into the document root assigned to the
domain in KAS. Include hidden files so that `.htaccess` is uploaded as well.

Do not upload the `server/` folder for this static/PHP deployment.

## 2. Add the private calendar configuration

Copy `villa-calendar.php.example` to `villa-calendar.php` and insert the private
Airbnb iCal export URLs. Never commit this file and never place the URLs in an
Angular/TypeScript file.

Preferred layout when the domain document root is a subdirectory:

```text
account-root/
├── private/
│   └── villa-calendar.php
└── domain-root/
    ├── index.html
    ├── .htaccess
    └── api/
        └── availability.php
```

If the domain points directly to the account root, create
`private/villa-calendar.php` inside it and deny public access to `/private` in
KAS or with a `.htaccess` containing `Require all denied`. The PHP file itself
does not output its returned configuration when executed, but blocking the
directory adds another protection layer.

## 3. Activate HTTPS

In KAS, activate a Let's Encrypt certificate for `luxuryvillasbudva.com` and,
if used, `www.luxuryvillasbudva.com`. Choose one primary hostname and redirect
the other hostname to it only after both names are covered by the certificate.

## 4. Verify

Open these URLs after deployment:

```text
https://luxuryvillasbudva.com/api/availability?villa=villa-lumina
https://luxuryvillasbudva.com/api/availability?villa=villa-monte-mare
```

Both responses must contain `"complete":true`, a `sourceCount` equal to
`configuredSourceCount`, and the booked days in `blockedDates`. Then open
`/de#verfuegbarkeit` and verify that those days are marked as occupied.

The endpoint caches results for five minutes. Airbnb's own import of external
calendars can still take longer; iCal is not a real-time channel-manager API.


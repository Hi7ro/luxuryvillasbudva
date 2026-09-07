/**
 * Post-build step for the static ALL-INKL deployment.
 *
 * With SSR enabled, Angular names the client-side-rendering shell in
 * `browser/` `index.csr.html` (so it never collides with a Node server's
 * per-request `index.html`). This project is uploaded as plain static files,
 * so we make sure a plain `index.html` also exists — the shell is *copied*,
 * not renamed, so BOTH `index.html` and `index.csr.html` are present. That way
 * the site keeps working no matter which `.htaccess` version is live on the
 * server or how `%{DOCUMENT_ROOT}` resolves there.
 *
 * Runs automatically after `npm run build` via the `postbuild` script.
 */
import { copyFile, access, constants } from 'node:fs/promises';
import { join } from 'node:path';

const browserDir = join('dist', 'villa-montemare-lumina', 'browser');
const csr = join(browserDir, 'index.csr.html');
const html = join(browserDir, 'index.html');

async function exists(path) {
  try {
    await access(path, constants.F_OK);
    return true;
  } catch {
    return false;
  }
}

if (await exists(csr)) {
  await copyFile(csr, html);
  console.log(`finalize-dist: copied index.csr.html -> index.html (both kept)`);
} else if (await exists(html)) {
  await copyFile(html, csr);
  console.log(`finalize-dist: copied index.html -> index.csr.html (both kept)`);
} else {
  console.log('finalize-dist: no SPA shell found, nothing to do');
}

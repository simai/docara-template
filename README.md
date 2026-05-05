# Docara Documentation Template

Thin starter project for Docara with GitHub Codespaces support.

The repository stores only project-owned files: documentation content, site config, Composer setup, and Codespaces setup. Docara core files are generated from the Composer package with `docara init --update`.

## Start in Codespaces

Open this repository in GitHub Codespaces. The container will:

1. Install PHP dependencies.
2. Run `php vendor/bin/docara init --update`.
3. Configure development scripts.
4. Install Node dependencies with Yarn.
5. Build the site.
6. Start live preview.

The live preview is served through BrowserSync on port `3000`.

## Local Setup

```bash
composer install
DOCARA_SKIP_FRONTEND_INSTALL=true php vendor/bin/docara init --update
node scripts/configure-template.js
corepack enable
corepack prepare yarn@1.22.22 --activate
yarn install
yarn prod
yarn start
```

On Windows PowerShell, use:

```powershell
$env:DOCARA_SKIP_FRONTEND_INSTALL='true'; php vendor/bin/docara init --update
node scripts/configure-template.js
corepack enable
corepack prepare yarn@1.22.22 --activate
yarn install
yarn prod
yarn start
```

## Useful Commands

```bash
yarn start
yarn build
yarn serve
yarn serve:local
yarn translate:test
```

## Structure

- `source/docs` contains documentation content.
- `config.php` configures locales, navigation, layout, and site metadata.
- `.devcontainer/devcontainer.json` configures GitHub Codespaces.
- `scripts/configure-template.js` patches generated frontend scripts for this template.

# Home Cleanse

A private, mobile-first home cleanse app for the move on 12 October 2026. Built around room photography, translucent glass panels and a circular after-photo completion view.

## What works

- Room and area management, before galleries, hero photos, and a separate after photo.
- Not started / cleansing / cleansed states and editable tasks.
- Daily plans and 10 / 20 / 30 / 60 minute sessions.
- Op shop bags, Vinted, Marketplace, council pickup, and bin/recycle workflows.
- Separate house-sorted and unwanted-items-cleared progress. Sold items remain outstanding until collected or posted and gone.
- Do not pack and first-night collections.
- Saved state in D1 and uploaded images in R2, with stale-write protection.

## Local development

Requires Node.js 22.13 or newer.

```sh
npm ci
npm run build
node --import ./scripts/sites-env.mjs ./node_modules/wrangler/bin/wrangler.js d1 execute DB --local --config dist/server/wrangler.json --persist-to .wrangler/state --file drizzle/0000_dashing_landau.sql
npm run dev
```

Apply the initial migration only once per local database. The development server prints its URL. Local progress lives under the ignored `.wrangler/` directory and is separate from hosted progress.

## Hosting

This app is configured for owner-private Sites hosting. The logical D1 `DB` and R2 `BUCKET` bindings are declared in `.openai/hosting.json`; the hosting platform provisions the production resources and applies the checked-in migrations.

GitHub stores the source; GitHub Pages cannot run this app's server routes. Publishing to another provider requires configuring actual database and bucket bindings, applying migrations and protecting **all** pages, APIs and photo assets with access control. The current app relies on the owner-private hosting boundary, so do not deploy it to an unrestricted public endpoint.

## Data and photographs

Do not commit environment files, tokens, local databases or build output. Private repository access is separate from private app access. Anyone given repository access can read files committed to it.

Uploads accept JPEG, PNG and WebP, up to 12 MB each. HEIC conversion is attempted in the browser where supported; other browsers require JPEG export. The supplied bedroom HEIC photographs were converted to JPEG for the initial app.

Example records are editable and removable. Use “clear examples” in the app to remove the sample items and task and reset example progress while preserving room photos and user-created records.

Example interior photography: [Lui Peng / Unsplash](https://unsplash.com/photos/brown-wooden-table-beside-white-couch-8NxTrV6i4WQ).

## Verification

```sh
npx tsc --noEmit
npm run build
```

During initial development, persistence, image upload/read, sold-versus-collected accounting, invalid-state rejection and stale-write conflicts were checked against the local app. Mobile layout was checked at 390 px.

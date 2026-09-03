# ODOP Bharat — Agent development rules

Permanent rules for work on this project. Follow them on every change unless the user explicitly overrides a rule in that request.

## Source of truth

- Treat `index.html` as the source of truth for existing content, features, copy, flows, and visual identity.
- Existing screens: Home, Marketplace, Register, Dashboard, Cart.
- Existing dashboard tools (modals): Finance & schemes, AI assistant, Brand Studio, Logistics.
- Existing working integrations: Google Forms for enterprise registration, buyer registration, and order/payment checkout (including order-summary prefills).
- Local assets live in `image/` (logo) and `assets/images/` (hero and craft photography). Product thumbnails currently use Wikimedia URLs defined on the `PRODUCTS` array in `index.html`.
- Cart, billing, and checkout-initiation state currently persist in `localStorage` (`odop_cart_v1`, `odop_billing_details`, `odop_order_initiated`).

## Change policy

1. Preserve all existing working functionality unless the user explicitly asks to change it.
2. Do not delete existing features.
3. Do not replace working integrations with mock implementations.
4. Do not rewrite the entire application for a small feature.
5. Prefer incremental, controlled changes.
6. Preserve the existing ODOP branding, visual identity, content, and assets.
7. The application must be mobile-first.
8. Desktop functionality must continue working.
9. Use reusable components and clean architecture.
10. Avoid unnecessary dependencies.
11. Never hardcode secrets or API keys.
12. Do not introduce a backend unless explicitly requested.
13. Do not remove Google Forms integrations unless explicitly requested.
14. Treat the current `index.html` as the source of truth for existing content, features, and visual identity.
15. Before changing an existing feature, inspect how it currently works.
16. Do not silently change business logic.
17. After significant changes, run the appropriate build/type/lint checks.
18. Fix errors caused by your own changes before finishing.
19. Optimize for mobile performance.
20. Keep accessibility in mind.
21. Respect `prefers-reduced-motion`.
22. Do not replace real existing assets with generated placeholders unless explicitly requested.
23. Keep the application functional after every phase.

## How to change existing features

- Read the current implementation in `index.html` (markup, CSS, and both script blocks) before editing.
- Preserve Google Form URLs and checkout field IDs unless the user asks to change them:
  - Enterprise: `https://forms.gle/Qxaf4jSUY3YYUNXx7`
  - Buyer: `https://forms.gle/7JJ8C3C7UtkCSXMN9`
  - Order form: `https://docs.google.com/forms/d/e/1FAIpQLSc2JX8syB6SOXAnQlwpVqN6BoD9RSslYfyjDQEPIT5OkxxM6Q/viewform`
  - Prefill entries: `entry.1000057` (order summary), `entry.1000027` (total)
- Do not swap the mock AI, Brand Studio, eligibility checker, or logistics demo for “new mocks.” Leave them in place until the user asks to upgrade them. Do not replace the live Google Forms checkout/register flow with a fake submit.
- Do not change cart merge rules, price parsing, eligibility matching, or form-prefill construction unless asked.
- Dead code that still documents old behavior (`handleRegister`, `#registerForm`, `renderCart` / `#cartContent`) must not be deleted as a drive-by cleanup unless the user asks. If touching those areas, keep current user-visible behavior intact.

## UI, branding, and assets

- Keep the ODOP Bharat identity: logo `image/ODOP.jpeg`, existing photography, fonts (Space Grotesk, Work Sans, JetBrains Mono), and the current color tokens in `:root`.
- Do not invent a new brand palette or rewrite marketing copy unless asked.
- Do not replace `assets/images/*` or `image/ODOP.jpeg` with generated placeholders.
- Mobile-first layout is required; breakpoints and desktop layout must still work (nav, marketplace grid, cart two-column layout, dashboard cards).
- Honor `prefers-reduced-motion` for animations (including the view fade). Avoid adding motion that ignores this preference.
- Accessibility: usable tap targets, visible focus, labels on form controls, meaningful button text, keyboard access to nav/modals, and sufficient contrast.

## Architecture constraints

- This repo is currently a static site: one `index.html`, local assets, no `package.json`, no backend, no database.
- Do not add a backend, database, auth server, or payment gateway unless the user explicitly requests it.
- Do not add a framework or large dependency set unless needed for a requested phase. Prefer small, incremental steps toward reusable components over a greenfield rewrite.
- Never commit or hardcode secrets, API keys, or credentials. This project currently has none; keep it that way.
- After each phase, the site must still open and the existing flows must still work: browse marketplace, add to cart, edit cart, billing local save, Google Form checkout, register form links, dashboard modals.

## Commands

This repository has **no `package.json`**, no npm/yarn/pnpm scripts, and no configured test, lint, or TypeScript toolchain.

### Development

Open the site as static files:

```bash
# from the project root (C:\Users\pc\Desktop\ODOP)
# Option A: open in the default browser (Windows)
start index.html
```

For local development that preserves relative asset paths (`image/`, `assets/images/`), serve the folder with any static server, for example:

```bash
npx --yes serve .
```

Then open the printed local URL. Do not assume Vite/Next/React scripts exist until they are added in-repo.

### Build

There is no build step. `index.html` is the production artifact.

If a bundler is added later, document the real script here and use that. Until then, do not invent `npm run build`.

### Preview

Same as development: open `index.html` or the static server URL. There is no `preview` script.

### Testing

No test runner or test files exist. Do not assume `npm test`. After UI changes, verify in the browser:

- Home, Marketplace, Register, Dashboard, Cart
- Add/update/remove cart items
- Checkout still opens the prefilled Google Form
- Register / buyer buttons still open their Google Forms
- Desktop and a mobile-width viewport

### Linting / typechecking

No ESLint, Prettier, or `tsconfig.json` is present. There is nothing to run for lint or types.

If those tools are added later, run the scripts defined in `package.json` after significant changes and fix errors caused by the change before finishing.

### After tooling is added

When `package.json` exists, prefer the scripts actually defined there (commonly `dev`, `build`, `preview`, `test`, `lint`, `typecheck`). Do not run commands that are not in the repo.

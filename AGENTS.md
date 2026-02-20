<!-- Generated: 2026-02-21 | Updated: 2026-02-21 -->

# UchiX Docs

## Purpose
VitePress documentation site for UchiX browser extension. Russian-language user guides covering installation, usage, payments, and troubleshooting. Deployed to docs.uchix.app (+ docs.cdz.rip proxy) via GitHub Pages.

## Key Files

| File | Description |
|------|-------------|
| `package.json` | pnpm project, vitepress 1.6.x |
| `index.md` | Home page with hero, features grid |
| `rules.md` | Usage rules and ban conditions |
| `troubleshooting.md` | Connection errors, maintenance, account blocks |
| `outdated-extension.md` | Hidden page linked from old extension versions |

## Subdirectories

| Directory | Purpose |
|-----------|---------|
| `.vitepress/` | VitePress config and custom theme (see `.vitepress/AGENTS.md`) |
| `guides/` | Step-by-step user guides (see `guides/AGENTS.md`) |
| `public/` | Static assets — logo, favicon, screenshots |
| `.github/` | CI/CD — GitHub Actions deploy workflow |

## For AI Agents

### Working In This Directory
- All content is in Russian
- VitePress markdown — use `::: info` / `::: warning` for callouts
- Use `<a class="action-button">` for CTA buttons (styled in theme CSS)
- Image paths: `/guide/{section}/filename.ext` (served from `public/`)
- Force dark mode — no light theme support
- `AGENTS.md` files are excluded from build via `srcExclude`

### Testing Requirements
- `pnpm build` must pass with zero errors
- Check all image paths resolve to files in `public/`

### Common Patterns
- Frontmatter `description` on every content page for SEO
- H2 sections with `{#anchor}` for deep linking (e.g. install page platform sections)
- `<div class="side-by-side">` for PC/mobile comparison layouts

## Dependencies

### External
- `vitepress` ^1.6.x — static site generator
- Google Fonts — Unbounded (headings), Onest (body)

<!-- MANUAL: -->

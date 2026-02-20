<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-02-21 | Updated: 2026-02-21 -->

# .vitepress

## Purpose
VitePress configuration and custom cosmic theme matching the frontend-new design system.

## Key Files

| File | Description |
|------|-------------|
| `config.ts` | Site config — nav, sidebar, SEO meta, sitemap, search, JSON-LD |
| `theme/index.ts` | Custom theme entry — extends default VitePress theme |
| `theme/style.css` | Cosmic dark theme — colors, fonts, glassmorphism, scrollbar, containers |

## For AI Agents

### Working In This Directory
- `config.ts` controls all navigation, sidebar, and global head tags
- `theme/style.css` overrides VitePress CSS variables under `.dark {}` selector
- Color tokens: `cosmic-*` (bg), `nebula-*` (purple), `plasma-*` (pink), `stellar-*` (cyan), `solar-*` (orange)
- Fonts: Unbounded for headings (`h1-h4`), Onest for body, JetBrains Mono for code
- `appearance: 'force-dark'` — never add light mode variables
- Custom classes: `.action-button`, `.side-by-side`, `.tabs`, `.feature-card`, `.glass`

### Common Patterns
- All Russian UI strings are in `config.ts` themeConfig (search, footer, nav labels)
- SEO: global meta in `head[]`, per-page via frontmatter `description`
- JSON-LD WebSite schema injected via `head[]` script tag

## Dependencies

### Internal
- `../public/logo.png` — referenced in config and OG tags
- `../public/favicon.ico` — favicon link

<!-- MANUAL: -->

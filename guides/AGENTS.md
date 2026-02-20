<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-02-21 | Updated: 2026-02-21 -->

# guides

## Purpose
User-facing step-by-step guides for the UchiX extension — installation, usage, and payment/coins.

## Key Files

| File | Description |
|------|-------------|
| `install.md` | Installation instructions for PC (Chrome/Yandex), Android (Kiwi), iOS (Orion) |
| `how-to-use.md` | Authorization via VK, solving Uchi cards/tests/exams, Skysmart answers |
| `how-to-get-coins.md` | Balance top-up (Telegram bot, Stars, web cabinet), bonuses, promo codes |

## For AI Agents

### Working In This Directory
- Each guide has platform-specific sections (PC/Android/iOS or Telegram/Web)
- Screenshots are in `/public/guide/{page-name}/` — update paths if adding images
- Use `::: info` blocks for prerequisites and warnings
- Use `<a class="action-button">` for download/action CTAs
- `install.md` uses `{#pc}`, `{#android}`, `{#ios}` anchors for deep linking
- `how-to-get-coins.md` uses `<div class="side-by-side">` for PC/mobile comparison

### Testing Requirements
- Verify all `![alt](/guide/...)` image paths have matching files in `public/guide/`
- Check internal links like `[text](/guides/install)` resolve correctly

<!-- MANUAL: -->

# GBS website prototype (lean package, 2026-10-13)

## Structure
- index.html: homepage (was gbs-homepage-teal.html)
- training.html, modification.html, medicine.html, pricing.html,
  meet-the-team.html, referring-vets.html, client-portal.html
- gbs-shared.css: design tokens + components that are identical on every page
  (reset, stage bar, vet bar, footer, reveal animation, shared responsive rules).
  Linked before each page's own <style>, so page rules still win.
- images/: homepage photos (hero-walk, training-indoor, collab-kneeling)

## Rules going forward
- Change shared things (tokens, stage bar, vet bar, footer) ONLY in gbs-shared.css.
- Page <style> blocks hold page-specific styling only.
- Never embed images as base64. Put them in images/ and reference them by path.

## Known drift (not yet unified, intentionally left as-is)
- Nav + progress bar CSS has a different version on almost every page
  (colors, CTA style, sticky vs fixed, transparent vs solid). Next step: pick one
  canonical nav and move it into gbs-shared.css.
- Reveal delay class names differ: .reveal-1..4 / .reveal-d1..4 / .reveal-delay-1..4;
  training uses .revealed instead of .visible.
- Training page uses a different footer from the others.
- Modification Starting Point price: $250 on stage bars + pricing card, $225 on
  pricing hero/anchor strip + modification page.

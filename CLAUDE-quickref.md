# REDESIGN BRANCH (Oct 27, 2026) · read this first on the `redesign` branch

The `redesign` branch rebuilds all 8 pages in homepage direction D + the handwritten layer (Design canvas "Gigi's Behavior · Homepage Directions", artboards D and E). `staging` still holds the previous design; nothing here is on `main`.

- One stylesheet: site/gbs-site.css (?v=20261027a). gbs-shared.css is retired on this branch. Quiz JS unchanged (gbs-class-quiz.js).
- Look: cream ground (#F4F1E9), black and deep green (#16291F) bands, bright teal on dark, teal-deep on cream. Square, ALL CAPS buttons only: NEVER rounded buttons (Justin, inflexible).
- Every graphic (photo, placeholder, data figure) carries a hand-drawn element: Gochi Hand note (6 words max), drawn arrow, sparkle, squiggle, or drawn ring (.ring / .dd / .note helpers in the CSS). Handwriting never on nav, buttons, forms, pricing rows.
- Fonts: EB Garamond (display), Montserrat (body), Gochi Hand (notes), Courier New (figures, prices).
- Top menu: utility bar (Client portal, Refer a patient) + black bar; same six links with classes nl-*; active = 3px underline in the section color; hamburger below 1180px. CTA "Book a free call" (For Vets: "Refer a patient"; Portal: "Log in").
- Stage tracker and sticky bottom bar kept, restyled square.
- Homepage concern finder: routing text is a DRAFT for the team to correct (in the FINDER_JS block of index.html).
- HTML files are the source of truth from here; edit them directly.

# GBS Website Rebuild 2.1.1 — Quick Reference
Session opened: 2026-10-13 · Working dir: /home/claude/gbs-2.1.1/

## Files
index.html · training.html · modification.html · medicine.html · pricing.html ·
meet-the-team.html · referring-vets.html · client-portal.html · gbs-shared.css · images/
(hero-walk.jpg, training-indoor.jpg, collab-kneeling.jpg)

## Workflow
- Edit in working dir → copy to /mnt/user-data/outputs/ → present for screenshot review.
- One change at a time (3–4 closely related changes may be batched).
- Shared tokens / stage bar / vet bar / footer: change ONLY in gbs-shared.css.
- Never base64 images — images/ folder, referenced by path.
- Prior [DECISION]s are locked unless Justin reopens them.
- Flag design tensions with a recommendation before building. No narration after.
- Change only what was literally asked (structural vs. typographic).

## Locked content
- Specialist names: Behavior Trainers · Behavior Consultants · Veterinary Behaviorist (always capitalized, spelled out).
- Hero headlines (locked): "Training is the foundation of a healthy mind." · "Modification is where progress happens." · "Medicine treats the brain behind the behavior." No "root" (held back) and no "impact stick".
- Analogies: Training = "your dog's life coach" · Modification = "your dog's therapist" · Medicine = "your dog's psychiatrist".
- CTA routing: Training → Offering Tree (Book now → qualification quiz, inert for now); Modification + Medicine → Care Navigation Call.
- Brand is "Gigi's Behavior." GBS is retired publicly (internal shorthand only).
- Service-line names in running copy: ALL CAPS + italic via <i class="svc">Modification</i> (CSS uppercases it) (body copy only: not in headlines, pull quotes, nav, buttons, card titles, role titles, appointment names, or For Vets clinical copy). Spelling: "judgement" (Euro).
- Vet-to-vet services appear only on the For Vets page or vet-referral content. The homepage For Vets band counts as vet-referral content (Justin, Oct 15). Vet referrals are a key part of the business plan: give them prominence, not a footnote.
- Service-line pages: Training shows full pricing; Modification + Medicine show Starting Point pricing only and link to Cost Transparency for the rest.
- After structural regex edits, run an HTML tag-balance check on every page (a bad match broke Medicine once).
- "Stage," never "step" or "tier" for levels of care. "Family," never "owner." Dog everywhere. Never "pet." Never "dog-only." Cats only via the Medicine clarifier; "animals" only in booking/legal/policy.
- "1:1" is the standard (not "private" or "one-on-one").
- No "fail/failure/failing" anywhere; keep the judgment-free sentiment.
- No individual names except Dr. Gilbert-Gregory (Lead Veterinary Behaviorist, sees Medicine clients) and Dr. Meghan Herron. Lacey → "Client Success Manager."
- In-home Modification follow-ups stay (behaviorally required cases, at Gigi's discretion).
- Public web address: gigisbehavior.org (moves under gigis.org long-term). For Vets page keeps clinical language.
- Full stage names: Behavioral Training / Behavioral Modification / Behavioral Medicine.
- Stage indicator: .stage-tracker (gbs-shared.css) — eyebrow-scale labels; inactive gray outline; ACTIVE = FILLED in the stage color (matches the top menu); stage tag above it = OUTLINED in the stage color; hover = outline in the stage color (variants: .on-light, .on-teal). Replaces the radio dials AND the eyebrow over hero/section headlines. Homepage cards carry no indicator. Compact size (10px labels, 6x12 padding, 1px outline). Stage tag sits directly over the ACTIVE segment (each segment wrapped in .st-col; tag lives in the active column). Heroes + Pricing carry the tag; Meet the Team carries the tag too. All three segments + tag are equal width (132px desktop, equal thirds on mobile).
- Hero standard = Training page (1080px container, H1 clamp(36px,4.5vw,58px)/1.08, body 16px/1.7, 4:3 image, content-then-image on mobile). Mod + Med carry a "Hero matched to the Training page" override block.
- Sticky bar: For Vets cell sits right of "Not sure? Book a call" (.sbar-vet); old #vet-bar row removed.
- Prices: Training from $42 · Modification from $250 · Medicine from $590.
- Nav (6 links): Training | Modification | Medicine | Cost Transparency | Team | For Vets.
- Homepage For Vets band is INVERTED (black w/ cream) on the homepage only. The For Vets page itself is cream-heavy; only the referral form section stays black.
- Section colors: Training = butter · Modification = teal · Medicine = black w/ teal + white · For Vets = cream w/ black (nav active link, sticky bar cell, homepage vet band). Cost Transparency + Team active link stay butter.
- Top menu bar is defined ONCE in gbs-shared.css (#nav block + progress bar). Main row: logo · Training · Modification · Medicine · CTA. Secondary row (.nav-sub, 30px, desktop only): Cost Transparency · Team · For Vets, left-aligned under Training by CSS grid (row 2 of .nav-inner, column 3); no script. No third tier (homepage section menu removed Oct 15). Each page adds +30px to its opening section on desktop to clear it. Pages must not restyle it. Logo: images/gigis-behavior-logo-teal.png (teal, transparent bg). Active link = butter fill; CTA = butter fill; hamburger below 1080px.
- No aversive-trainer counts in the funnel chart.
- Hand-drawn elements are real SVG, not CSS gradients.
- Hosting: static HTML → GoDaddy cPanel (public_html); team reviews on Netlify.

## Never select by href
- Netlify can rewrite links (modification.html -> /modification), so CSS/JS must never target a[href="..."]. Nav links carry classes: nl-training, nl-mod, nl-med, nl-cost, nl-team, nl-vets.
- Pages must not show/hide the menu with their own scripts; the shared CSS owns the 1080px breakpoint.

## Cache-busting
- Shared files load as gbs-shared.css?v=XXXX, gbs-class-quiz.js?v=XXXX. Bump the version string in all 8 pages whenever a shared file changes.

## Class readiness quiz
- site/gbs-class-quiz.js + .cq-* styles in gbs-shared.css. Opens from ANY element with data-quiz-trigger="training" (all Book a class / class Book now / Offering Tree buttons).
- Pass = Yes, No, No → 'Choose your class'. Anything else → Care Navigation Call.
- Booking URLs are dead (#) on purpose: set CLASS_BOOKING_URL and CARE_NAV_URL at the top of the JS when Justin sends them.

## Known drift (carried in from README)
- Reveal delay classes: .reveal-1..4 / .reveal-d1..4 / .reveal-delay-1..4; training uses .revealed.
- Training page has a different (strip) footer.
- Modification Starting Point: $250 (stage bars, pricing card, multi-animal) vs $225
  (pricing hero, anchor strip, modification page, homepage stage + cost cards).
- Mobile nav menus omit "For Vets" and use "Pricing"/"Meet the Team" labels (desktop says
  "Cost Transparency"/"Team"), except referring-vets.html.
- Training "From $42" (stage bar, pricing) vs "Starting at $35" (homepage stage card, cost card, impact strip).

## Change log
- 2.2.0 · Team feedback round applied (see commit 79c15e9): rules above, Home/Training/Modification/Medicine/Meet the Team copy + structure.
- (none yet)
- 2.1.1 · Radio dials (.stage-dial in gbs-shared.css) replace 01/02/03 stage numerals on index, training, modification, medicine, pricing, meet-the-team. Process/requirement step numbers untouched.
- 2.1.1 · Pricing page: headings → Behavior Training / Modification / Medicine; "dog-only" removed (SOT: dog is default, only call out cats);
  Tricks $42; Puppy Preschool drop-in; Training Book now = inert <button data-quiz-trigger="training"> until qualification quiz;
  Modification section → teal-deep fill, intro trimmed, Book now → Care Nav Call, Starting Point block ($250/$400) mirrors Medicine header;
  Medicine-Led cards moved into Medicine section (#medicine-led-pricing) with teaser at bottom of Modification; Mod $225 → $250 (hero, anchor strip);
  multi-animal box copy + "See multi-animal details" CTA; multi-animal section headline/subhead swapped, Training card + callout removed, "flat"/"(a $300 add-on)" removed.
- Locked change: Modification CTAs route to the Care Navigation Call (supersedes Offering Tree note).

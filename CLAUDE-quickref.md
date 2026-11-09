# REDESIGN BRANCH (Oct 27, 2026) · read this first on the `redesign` branch

The `redesign` branch rebuilds all 8 pages in homepage direction D + the handwritten layer (Design canvas "Gigi's Behavior · Homepage Directions", artboards D and E). `staging` now matches `redesign` (merged Nov 9); nothing here is on `main`.

- One stylesheet: site/gbs-site.css (?v=20261109i). gbs-shared.css is retired on this branch. Quiz JS unchanged (gbs-class-quiz.js).
- Look: cream ground (#F4F1E9), black and deep green (#16291F) bands, bright teal on dark, teal-deep on cream. Square, ALL CAPS buttons only: NEVER rounded buttons (Justin, inflexible).
- Every graphic (photo, placeholder, data figure) carries a hand-drawn element: Gluten note (6 words max), drawn arrow, hand-drawn asterisk (replaced the sparkle Nov 9), squiggle, or drawn ring (.ring / .dd / .note helpers in the CSS). Handwriting never on nav, buttons, forms, pricing rows.
- Voice notes (Nov 9): .vn handwritten asides with drawn up-arrow, in the flow (not absolute), 6 words max, never on nav/buttons/forms/price rows; none on For Vets (clinical audience). Team to review all wording.
- For Vets positioning (Justin, Nov 9): "Your trusted partner for behavior." Comprehensive behavior at every stage; "We handle behavior, so you can focus on the rest." Medicine = "our most collaborative referral program". Three service-line cards sit under the hero. Model cards are bullets.
- Medicine = "animal" rule (Justin, Nov 9): whenever copy talks about Medicine, say animal(s), not dog(s) (Medicine also sees cats). Includes the Judgement Free line on the Medicine page ("If your animal struggles...").
- Service-name styling REVERSED (Justin, Nov 9): service names in body copy are plain text (no italic caps; <i class="svc"> removed).
- Team page (Nov 9): people-focused grid per stage (bio photo, name, role, credential chips, brief bio, 'Their dog') with placeholders; analogy sections removed. Analogies live under each service-line hero: Like your dog's life coach / therapist / Like your animal's psychiatrist.
- Stage order rule (Justin, Nov 9): always list in stage order: Training → Modification → Medicine; classes Puppy Preschool → Skills & Manners (Foundations, Advanced) → Tricks.
- Heading rule (Nov 9, option B): serif (EB Garamond) for EVERY heading level incl. .h4 item titles; Montserrat for body and labels; body text steps lighter (#5A544B, small muted #6E685E). No eyebrow that repeats the card title. Prices in Courier with a drawn ring.
- Gluten is NEVER bold (weight 400 only, Justin Nov 9).
- Gluten color rule (Justin, Nov 9): butter on black / deep teal / kale; dark teal (#0A6660) on white / cream. Set in CSS (no inline colors on .hand/.vn/.analogy). Notes on photos stay white.
- Fonts: EB Garamond (display), Montserrat (body), Gluten (informal handwritten notes, chosen Nov 9), Courier New (figures, prices).
- Top menu (customer-first, Nov 9): black bar (utility row REMOVED Nov 9; "Refer a patient" lives on For Vets and in the phone menu): "What's going on?" dropdown (finder concerns -> index.html?c=KEY#concerns preselects the finder), "Services" dropdown (3 stages, eyebrow/one-liner/from price), Cost, Our team, header buttons (Nov 9): teal outline "For vets" + teal outline "For clients" (client-portal.html) + solid teal "Book a free call"; outlines hide below 1180px. Every dropdown ends with the free-call panel. Phone: CTA stays in header; menu = uppercase main-section rows with accordions, subsections indented under a teal rule (Justin: subsections must not look like main sections). Subsections (desktop dropdowns + phone accordion panels) are CREAM with black text, chosen Nov 9; free-call panel stays kale. CSS block "Customer-first menu" at end of gbs-site.css (?v=20261109i); NAV JS before </body>. Dropdown panel class is .ddp (NOT .dd: .dd is the doodle class with pointer-events:none, which broke hover).
- rVetLink (Nov 9): "Enter referral portal" buttons on For Vets open gbs-vet-modal.js popup: Returning vet -> Log in (https://gigis.rvetlink.com/Account/Login?ReturnUrl=%2FChart, new tab, password help note) / New here -> guest referral https://gigis.rvetlink.com/referral/new (standard rVetLink path, pending Justin test). The /api/ URL is a server-to-server PIMS API (ezyVet integration), never for the website; never put rVetLink credentials in site code.
- Referral CTA rule (Justin, Nov 9): every referral CTA sitewide reads "Submit a referral" and opens the vet popup (data-portal-link; gbs-vet-modal.js loaded on all pages). Placeholder referral form removed from For Vets.
- CTA rule (Justin, Nov 9): every call CTA reads "Book a free call" (sticky: "Not sure? Book a free call"); never "Care Navigation Call" in a CTA. Body copy may still name the Care Navigation Call.
- Care Navigation Call popup (Nov 9): gbs-call-modal.js on every page intercepts any link whose text matches "book a (free) call" or "care navigation call" (incl. quiz fallback, sticky bar, footer), shows 3 expectation steps (create account / tell us about your dog / pick a time), then Continue -> Vello https://app.vello.idexx.com/book/hcNFo5meTuC2VaM_ydL3mw (VELLO_URL at top of the file; quiz CARE_NAV_URL set to the same).
- Stage tracker RETIRED (Nov 9): every former tracker is now an eyebrow reading "Stage: Service line" (Foundations: Training · Support: Modification · Specialty: Medicine), in the stage color. Sticky bottom bar REMOVED from all pages (Justin, Nov 9).
- Homepage concern finder: routing text is a DRAFT for the team to correct (in the FINDER_JS block of index.html).
- HTML files are the source of truth from here; edit them directly.
- GBS messaging v2.6 DECIDED items applied (Nov 9): Medicine Starting Point $690 everywhere; "medication will help" replaced with SOT §06/§03 conditional wording; 14-day prescription-transfer story, Ohio telemedicine section, VCPR cameo and Vet-to-Vet Medicine Transition Call removed; five-touchpoint timeline and all Medicine durations removed (G3/G4 HOLD); vet referral REQUIRED for anything Medicine (Justin, Nov 9, overrides v2.6 "expected"); Gigi's can request it with family authorization; medication copy rewritten in plain language (Justin, Nov 9). Vet-to-Vet Consulting Call kept. Still HOLD: appointment durations.
- Justin, Nov 9: second dog Medicine +$300 ($990 for two); medication NOT included in the $690, medication management IS (Medicine line); For Vets shows three models (Gigi's-Managed featured, Vet-Partnered, Vet-to-Vet) using Justin's vet-facing copy; families only ever see Gigi's-Managed. Durations still HOLD.
- `redesign` was merged into `staging` on Nov 9 (old design is in git history). `main` untouched until "ship it."

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

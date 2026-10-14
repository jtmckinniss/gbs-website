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
- Analogies: Training = "your dog's life coach" · Modification = "your dog's therapist" · Medicine = "your dog's psychiatrist".
- CTA routing: Training → Offering Tree (Book now → qualification quiz, inert for now); Modification + Medicine → Care Navigation Call.
- Brand is "Gigi's Behavior." GBS is retired publicly (internal shorthand only).
- Dog everywhere. Never "pet." Never "dog-only." Cats only via the Medicine clarifier; "animals" only in booking/legal/policy.
- "1:1" is the standard (not "private" or "one-on-one").
- No "fail/failure/failing" anywhere; keep the judgment-free sentiment.
- No individual names except Dr. Gilbert-Gregory (Lead Veterinary Behaviorist, sees Medicine clients) and Dr. Meghan Herron. Lacey → "Client Success Manager."
- In-home Modification follow-ups stay (behaviorally required cases, at Gigi's discretion).
- Public web address: gigisbehavior.org (moves under gigis.org long-term). For Vets page keeps clinical language.
- Full stage names: Behavioral Training / Behavioral Modification / Behavioral Medicine.
- Prices: Training from $42 · Modification from $250 · Medicine from $590.
- Nav (6 links): Training | Modification | Medicine | Cost Transparency | Team | For Vets.
- No aversive-trainer counts in the funnel chart.
- Hand-drawn elements are real SVG, not CSS gradients.
- Hosting: static HTML → GoDaddy cPanel (public_html); team reviews on Netlify.

## Known drift (carried in from README)
- Nav + progress-bar CSS differs page to page → pick one canonical nav, move to shared CSS.
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

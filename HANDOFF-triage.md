# Handoff: Triage tool ("What's going on with your dog?" finder)

**Date:** 2026-11-19
**Repo:** jtmckinniss/gbs-website (static HTML in `site/`)
**Owner:** Justin McKinniss

## Start here
1. Clone the repo and check out `redesign`. Create a new branch: `git checkout -b triage`.
2. Read `CLAUDE-quickref.md` (top "REDESIGN BRANCH" section) for every locked site rule.
3. Work only on `triage`. When Justin approves, merge `triage` → `redesign` → `staging` (fast-forward) and push.
   Staging preview: staging--gigisbehaviorservices.netlify.app. **Never merge to `main`** (production, costs Netlify credits) until Justin says "ship it."
4. Workflow: show changes as screenshots, not code. Change only what's asked. Flag design tensions with a recommendation.
5. While triage is in progress, the main chat holds homepage edits, so the two chats don't collide in `site/index.html`.

## Where the tool lives today
- **Markup:** `site/index.html`, `<section id="concerns">`.
  - Six concern buttons, `.concern[data-concern=KEY]`: reactive · separation · aggression · fighting · listen · notsure.
  - Result band: `.result.result-wide`. Left column `.rw-step1` (title `#r-start`, meta `#r-meta`, explanation `#r-usually`). Right column `.rw-right` (kale panel, "here's what happens next", `#r-steps` numbered 2–4, optional footnote `#r-foot`). CTA row `.rw-cta` (`#r-cta` + "no judgement, only progress").
- **Logic:** inline script near the bottom of `index.html`.
  - `var D = { KEY: [title, meta, ctaLabel, ctaHref|'quiz', explanation, [step2, step3, step4], footnote?] }`
  - `fill(d)` writes the result.
  - A teal line reveal (`.r-line`, clip-path on `.r-body`) runs on change and respects reduced motion.
  - `?c=KEY` in the URL preselects a concern. The nav "What's going on?" dropdown links to `index.html?c=KEY#concerns`, so keep the keys stable or update the nav on all 8 pages.
- **CSS:** `site/gbs-site.css`. Search "Finder, wide result layout" and "the starting point is step 1". Bump `?v=` on all pages after CSS edits.
- **Related scripts:**
  - `gbs-call-modal.js`: any link whose text matches "book a (free) call" / "care navigation call" opens the expectations popup, then goes to Vello.
  - `gbs-class-quiz.js`: `[data-quiz-trigger="training"]` opens the 3-question class readiness quiz.

## Current outcomes per concern
| Concern | Step 1 (starting point) | Usually leads to |
|---|---|---|
| Barks or lunges on walks | Free call | Modification (Certified Dog Behavior Consultant) |
| Panics when left alone | Free call | Modification; sometimes Medicine |
| Growls, snaps or bites | Free call | Modification or Medicine |
| My animals fight at home | Free call | Modification; both animals evaluated in one appointment* (*not necessarily in the same room) |
| Doesn't listen to me | A class (quiz) | Training |
| Not sure / something else | Free call | — |

## Rules the triage tool must follow
- **CTAs:** every call CTA reads exactly "Book a free call" (never "Care Navigation Call" in a button). Classes route through the readiness quiz.
- **Stage order everywhere:** Training → Modification → Medicine. Classes: Puppy Preschool → Skills & Manners (Foundations, Advanced) → Tricks.
- **Dog vs. animal:** "dog" by default. Switch to "animal(s)" whenever copy is about Medicine, and for multi-animal conflict.
- **Medicine:**
  - A vet referral is required (Gigi's can request it with the family's authorization).
  - All telehealth appointments are virtual visits.
  - Starting Point is $690, +$300 for a second animal.
  - Medication itself is not included; medication management is.
- **Medication language is conditional and plain:** "can make learning easier", never "will help".
- **Language:** no failure, fix or quick-fix language; Judgement Free; "family", never "owner"; "1-on-1".
- **Service names:** plain text in body copy (the italic-caps rule was reversed).
- **Analogies:** "Like your dog's life coach / therapist", "Like your animal's psychiatrist".
- **Design:**
  - Square buttons only (never rounded).
  - Every graphic has a hand-drawn element.
  - Gluten handwriting: weight 250 only (never bold), tilted −2°, 6 words max, butter on dark / dark teal on light, never on buttons, prices, forms or the nav.
- **Don't publish HOLD items:** appointment durations, on-campus exam mechanism.
- **Urgent / safety:** any logic that detects a bite to a person or imminent danger should surface the urgent path (call directly). Don't invent clinical thresholds; ask Justin.

## Open questions to settle before building more logic
1. What new branches or questions does Justin want (e.g. severity, age/puppy, number of animals, cats, prior training, already on medication)?
2. Should results ever route straight to Medicine, or always through the free call first?
3. Is the Urgent Behavioral Appointment ready to surface? Its price, length and provider are still open in the SOT.
4. Who signs off clinically on the triage wording (Dr. Herron / Dr. Gilbert-Gregory)?

## Verification before handing back
- Tag balance, no horizontal overflow at 390px, no console errors.
- Every concern renders correctly, the `?c=KEY` preselect works, and the CTAs open the right popup or quiz.
- Screenshots at desktop and phone width for Justin.

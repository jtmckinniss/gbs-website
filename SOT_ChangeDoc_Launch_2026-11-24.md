# SOT Change Doc: GBS website launch session (Nov 23 to Nov 24, 2026)

**Purpose:** everything decided in the launch build that changes, or isn't yet in, the Sources of Truth. Each item says where it belongs. Fold these in with the triage change doc (`claude/SOT_ChangeDoc_Triage_2026-11-24.md`) when GBS moves to v2.7.

**Targets:**
- **GBS** = WIP_GBS_BrandMessaging v2.6, to become v2.7
- **DS** = SOT_gigis-design-system 2.12
- **Gigi's** = SOT_GIGIS_BrandMessaging v2.13

**Status key:**
- **LOCKED** = Justin decided it in this session.
- **TEAM** = from the Nov 24 team feedback file, approved by Justin.
- **PENDING** = still open.

**Launch record:** gigisbehavior.org went live on GoDaddy cPanel Web Hosting (Deluxe) on Nov 24, 2026. GitHub `main` matches the live site (commit 7782cb9).

---

## 1. Business identity (GBS §01, new "Business details" entry)

| # | Change | Status |
|---|---|---|
| 1.1 | **Address: 6175 Wright Rd, Canal Winchester, OH 43110.** This is the address on the site and in its search data for Google. Use it exactly, in this form, everywhere the business address appears (site, Google listings, directories). | LOCKED |
| 1.2 | **Gigi's Behavior has no email on the gigisbehavior.org domain.** No DNS record for the domain carries email. | LOCKED (fact) |
| 1.3 | **Phone number for public listings:** none chosen yet. Add one to the site's search data when it's decided. | PENDING |
| 1.4 | **Google Business Profile:** Gigi's Behavior has always run through the main Gigi's listing. A separate Gigi's Behavior listing (behavior or veterinary category, own phone and hours, same address) is recommended after launch. Not decided. | PENDING |

## 2. Tagline and anchor phrases (GBS §08)

| # | Change | Status |
|---|---|---|
| 2.1 | **"Judgement Free Behavior Care. At Every Stage." is the Gigi's Behavior tagline.** | LOCKED |
| 2.2 | **It is used broadly, overriding the §08 rule that anchor phrases are "used sparingly."** The reason: it ties Gigi's Behavior to the parent brand's Judgement Free Adoption™. | LOCKED |
| 2.3 | **Where it appears:** the homepage sticky bottom bar (see triage change doc 4.1), the footer on every page, under the Modification hero buttons, under the headline of the free call popup, the homepage browser title and every page's search description. | LOCKED |
| 2.4 | **"Judgement Free" is always title case, every time,** including short UI lines ("Judgement Free. Change anything, anytime."). | LOCKED (restates Gigi's §05) |

## 3. Analogies (GBS §02, §08)

The analogy is **the same role in every location**:
- Training is "your dog's life coach."
- Modification is "your dog's therapist."
- Medicine is "your animal's psychiatrist."

The lead-in varies by location. **All of the following forms are approved**, each for the location shown:

| Location | Form | Example |
|---|---|---|
| Service page hero (Gluten handwriting line) | "We're like…" | "We're like your dog's life coach." |
| Care team section on a service page | "They're like…" (about the clinicians) | "They're like your dog's therapist." |
| Homepage stage cards and the Services menu | "Think of it as…" | "Think of it as your animal's psychiatrist." |
| Triage result pathway cards | "Like your…" | "Like your dog's life coach or therapist" |

**Status: LOCKED.** This replaces the rule that analogies use only "We're like…" or "They're like…," and it resolves triage change doc 3.3. The combined Modification line on the triage card ("life coach or therapist") and its handwriting length are still open in triage change doc 4.3.

## 4. Pricing and services (GBS §14.1, §14.2)

| # | Change | Status |
|---|---|---|
| 4.1 | **Classes are 50 minutes.** | TEAM |
| 4.2 | **Puppy Preschool is a 4-class series on a rotating schedule.** Families can start any week. Drop-in $42; 4-class package $150. Ages 8 to 20 weeks. | TEAM |
| 4.3 | **Tricks is an 8-class rotating series.** Drop-in $42; 4-class package $150. The Advanced Tricks card is removed for launch. | TEAM |
| 4.4 | **Skills & Manners: Foundations and Advanced are 6-week series at $225 each.** | Reconfirmed |
| 4.5 | **Skills & Manners: 1-on-1 is $699 for 6 sessions,** following the same curriculum. | LOCKED |
| 4.6 | **In-home sessions (Consultant-led and Medicine-led) are $225 within 25 miles of campus, add $50 for 25 to 35 miles, and aren't available beyond 35 miles.** | LOCKED |
| 4.7 | **Conflict between animals:** each additional dog in conflict adds $150 to the Modification Starting Point. All dogs are assessed at the Starting Point, though not always in the same room. Shared sessions are only for animals in conflict, and the consultant (or care team) decides; they may ask for individual follow-ups with each dog. Medicine: +$300 per additional animal; the care team may combine sessions. | LOCKED |
| 4.8 | **Medicine-led Modification:** the name stays. Bundles (Virtual 140 / 480 / 900; @ Gigi's 175 / 600 / 1,150; Mini Virtual 135 / 270; Mini @ Gigi's 175 / 335) per the team list. Mini sessions have no single-session price. | TEAM |
| 4.9 | **Medicine add-ons:** Medicine Check-In $210; Extended Medicine Check-In $300. The Urgent Behavioral Appointment is removed. | LOCKED |
| 4.10 | **Consultant-led follow-ups:** Virtual $125, @ Gigi's $150, In-home $225. | Live on site |
| 4.11 | **Consultant-led prices and the new 30-minute sessions.** | PENDING |
| 4.12 | **Free webinars:** How to Train / Dog Body Language (required before a first class; added at booking) and Potty Train Your Puppy. Both register at gigisbehavior.as.me/pps. | LOCKED |

## 5. Booking and routing (GBS §04 operational specifics)

| # | Change | Status |
|---|---|---|
| 5.1 | **All class booking goes to one page:** https://gigisbehavior.as.me/schedule/f381a863. This covers puppy and adult classes, from every class button, and replaces the placeholder in GBS §04. | LOCKED |
| 5.2 | **Class readiness quiz: 3 questions.** (1) takes treats and focuses around other dogs and people, (2) barks at new people or dogs, (3) has bitten since 6 months, puppy biting aside. Pass = Yes, No, No. A pass leads to "Choose your class"; any other answer leads to the free call. There is no age question. | LOCKED |
| 5.3 | **Free call (Care Navigation Call):** books through Vello (IDEXX). A short popup explains what to expect first; booking also sets up the family's client account. | LOCKED |
| 5.4 | **Booking links open in a new tab.** | LOCKED |
| 5.5 | **Urgent behavior concerns:** a popup first confirms the person is a current client, then opens the urgent Jotform. | LOCKED |
| 5.6 | **The triage tool is linked from the Training, Modification and Medicine pages.** Training: an "Explore first" card in "Where to begin." Modification and Medicine: "Or tell us what's going on" under the closing buttons. This answers the open question in triage change doc 2.1. | LOCKED |

## 6. Language (GBS §03, §06)

| # | Change | Status |
|---|---|---|
| 6.1 | **"Credentialed Trainers"** replaces "Behavior Trainers" as the Training role label. Every trainer at Gigi's holds two or more of the listed credentials (CPDT-KSA, Fear Free, IAABC, KPA-CPT, CTDI). | TEAM |
| 6.2 | **Every consultant at Gigi's holds two or more of CDBC, CBCC-KA and Fear Free.** | LOCKED |
| 6.3 | **Everyone at Gigi's is Fear Free Shelter Certified.** | LOCKED |
| 6.4 | **No team member names on the site for launch.** Roles only: Veterinary Behaviorist, Behavioral Medicine Tech, Certified Dog Behavior Consultant, Credentialed Trainers, Client Success Manager, on-site veterinarian. This tightens GBS §03, which allowed Dr. Gilbert-Gregory by name. | LOCKED |
| 6.5 | **Medication headline:** "For some animals, medication is a game changer." "Game changer" only in conditional form ("for some," "can"). Medication "can make learning easier." | LOCKED |
| 6.6 | **"Safer" is not used** in medication or care copy. | LOCKED |
| 6.7 | **"Vet-to-Vet Medication Consult"** is the name of the vet-to-vet service, with medication-only scope. Length (15 or 20 minutes) and who pays are open. | LOCKED name; PENDING details |
| 6.8 | **"1-on-1"** is the only form, including for 1-on-1 training. | Restates Gigi's §05 |

## 7. Design and site rules (DS)

| # | Change | Status |
|---|---|---|
| 7.1 | **Accessibility standard: WCAG 2.1 AA.** The launch build passes an automated audit (axe-core) on every page, desktop and mobile. Every new page or component must pass before shipping. | LOCKED |
| 7.2 | **Butter text color is #7A5D0F** (was #8A6A12). The old value fell just short of AA contrast on cream. | LOCKED |
| 7.3 | **Bright teal (#2AD2C9) is never used on cream or white.** Light surfaces use deep teal (#0E8079) or teal text (#0A6660). | LOCKED |
| 7.4 | **Service page order:** hero, how it works (cream), care team (Kale), pricing (cream). The same order on Training, Modification and Medicine. | LOCKED |
| 7.5 | **Lists use the hand-drawn slanted dash bullet;** checklists use the tick. No browser-default bullets. | LOCKED |
| 7.6 | **Class card buttons:** "Book now" and "Class details." | LOCKED |
| 7.7 | **Homepage stage cards use the same photo as each service page hero.** | LOCKED |
| 7.8 | **Photography:** Gigi's staff and families in brand colors (teal and kale wardrobe and gear). Gigi's-specific photos replace stock where possible. Retouching of a person is done only at their request. | LOCKED |
| 7.9 | **Search basics on every page:** a title, a description carrying the tagline, link-preview tags, the dog-mark browser icon, a sitemap and business data for Google. | LOCKED |

## 8. Hosting and process (operational, not brand)

- **Hosting:** static HTML on GoDaddy cPanel Web Hosting (Deluxe). Files live in `public_html`. The domain is connected through the hosting plan, and https comes from AutoSSL.
- **Workflow:** edit on `redesign`, then review on staging (Netlify). "Ship it" from Justin merges to `main`. Each release goes out as a zip uploaded to `public_html`.
- **Old-site redirects** live in `.htaccess`: /000061752018 goes to For Clients; /for-vets to Referring Vets; /service-prices-&-packages to Cost; /specialties-&-services to the homepage stages; /for-behavior-pros and /our-experts to the homepage.
- **No credentials in site code** (API keys, FTP passwords). FTP details, if automatic publishing is set up, go only into GitHub Secrets.

---

## Open items carried forward

- Consultant-led prices and 30-minute sessions (4.11).
- Public phone number (1.3) and the Google Business Profile decision (1.4).
- Vet-to-Vet Medication Consult length and payer (6.7).
- Phase 2: Meet the Team page, a class schedule promo (possibly from Acuity), Tricks Foundations and Advanced, and the triage backlog.
- Cancel the old Websites + Marketing site once the new site loads everywhere.

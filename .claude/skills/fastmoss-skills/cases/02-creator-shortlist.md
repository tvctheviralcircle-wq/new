# Case 02 — Build a creator shortlist you can actually email

| | |
|---|---|
| **Role** | Brand / agency BD seeding a skincare launch |
| **Market · Category** | US · Skincare |
| **Decision** | Which 5 creators to contact first, and which to skip despite high GMV |
| **Tools** | `creator_search` → `creator_profile_overview` → `creator_cargo_summary` |
| **Calls** | 1 for the shortlist, +2 per creator you diligence |
| **Data as of** | 2026-08-21 (L28d metrics) |

---

## 1. The job

BD teams do not need 2,000 creators. They need the 5 to email on Monday, ranked by fit, with a reason attached to each so the outreach message writes itself.

The trap: **sorting by GMV gives you a list of people who sell, not a list of people who will sell your product.** The top of a GMV-sorted list is full of general "finds" accounts, live-only sellers, and creators whose audience is the wrong age and gender. All three failure modes appear in the real result below.

---

## 2. The prompt

```
Find me US creators to seed a skincare launch. 10K-100K followers,
actively selling in the last 28 days, and I need to be able to reach them.
Rank by fit rather than raw GMV, and tell me who to skip and why.
```

Variants:

- `Same list, but only creators whose audience is majority women 25-44.`
- `Is @mirandacorneliusbeauty worth partnering with for a $23 serum?`
- `Which of these creators are already selling a competing collagen product?`

---

## 3. The tool chain

| # | Tool | Arguments that matter | Why this step |
|---|---|---|---|
| 1 | `creator_search` | `keywords: "skincare"`, `filter.region: US`, `follower_range {min:10000,max:100000}`, `is_ecommerce_creator: true`, `orderby: day28_gmv desc` | One call returns the roster with `day28_gmv`, `has_email`, `engagement_rate_percent`, and audience age/gender |
| 2 | `creator_profile_overview` | `uid` | Only for finalists — profile and lifetime performance |
| 3 | `creator_cargo_summary` | `uid` | Video-vs-live selling split and the categories they actually push |

Step 1 alone is usually enough to shortlist. Spend steps 2–3 on the 3–5 you intend to contact.

---

## 4. What came back

Source: FastMoss · US · keyword `skincare` · followers 10K–100K · ecommerce creators only · sorted by L28d GMV · 2,000 matches.

| # | Creator | Followers | L28d GMV | L28d videos | Engagement | Email | Read |
|---|---|---|---|---|---|---|---|
| 1 | [cakedfinds](https://www.fastmoss.com/influencer/detail/7436686228703265838) | 75.3K | $674,438 | 42 | 0.28% | yes | Volume machine, generalist "finds" account |
| 2 | [mikeyandmandy_](https://www.fastmoss.com/influencer/detail/7481828593170564142) | 45.2K | $466,939 | 130 | 1.04% | **no** | No contact path |
| 3 | [ericsfindss](https://www.fastmoss.com/influencer/detail/7289195477476262958) | 16.1K | $463,988 | 141 | 0.54% | yes | Generalist, high output |
| 4 | [mirandacorneliusbeauty](https://www.fastmoss.com/influencer/detail/7347836626330141739) | 72.5K | $423,012 | 221 | 0.37% | yes | **"Miranda \| 40+ Skincare" — 82.7% female, 35–54 skew** |
| 5 | [muariana](https://www.fastmoss.com/influencer/detail/6751530992210723845) | 84.5K | $421,542 | 193 | **7.14%** | yes | Beauty vertical, 90.3% female, 18–34 |
| 6 | [yourglowsistert](https://www.fastmoss.com/influencer/detail/7577876155203503118) | 28.4K | $408,148 | 43 | 1.15% | yes | Personal care lead category |
| 7 | [ttrdfinds](https://www.fastmoss.com/influencer/detail/7505215282039669790) | 20.7K | $395,175 | 62 | 0.75% | **no** | No contact path |
| 8 | [thedealdiaries](https://www.fastmoss.com/influencer/detail/6871275560091436038) | 15.8K | $341,761 | 113 | 0.56% | yes | **$332,666 of $341,761 is live GMV** |
| 9 | [affiliatetammytaylor](https://www.fastmoss.com/influencer/detail/6905935568997663749) | 44.1K | $338,480 | 288 | 0.71% | **no** | No contact path |
| 10 | [rackolickzz](https://www.fastmoss.com/influencer/detail/6955912614632326150) | 34.4K | $330,718 | 122 | 0.92% | yes | Beauty vertical, 18–34 audience |

---

## 5. The decision

**Contact these five, in this order:**

| Priority | Creator | Reason to lead with |
|---|---|---|
| 1 | mirandacorneliusbeauty | The only creator on the list whose identity *is* the category. 82.7% female, 35–54 — the demographic that buys anti-aging skincare at $20–60. Ships 221 videos in 28 days, so a seeding unit gets used. |
| 2 | muariana | 7.14% engagement — 20× the list median. Small GMV-per-video but the audience actually responds, which is what a launch needs before it has social proof. |
| 3 | cakedfinds | Highest raw GMV and reachable. Treat as a volume channel, not a brand fit: 42 videos produced $674K, so one placement carries real weight. |
| 4 | yourglowsistert | Personal Care & Health is the lead selling category and the roster is small enough that a new product gets attention. |
| 5 | rackolickzz | Beauty vertical, younger audience — the hedge if the product skews below 35. |

**Skip, with reasons:**

- **thedealdiaries** — 97% of GMV comes from live selling. A product seeding kit aimed at video content is the wrong ask; approach only if you are booking live slots.
- **mikeyandmandy_, ttrdfinds, affiliatetammytaylor** — `has_email: false`. Strong sellers with no direct contact path. Route them through an agency instead ([Case 07](07-agency-partner-selection.md)) rather than burning BD hours hunting for a DM reply.
- **ericsfindss** — a generalist whose top categories are Electronics and Home. High GMV, low relevance; keep as a later-wave volume play.

Note what this ranking did: **the #1 creator by GMV is #3 by priority, and the #8 creator was disqualified by a field that has nothing to do with sales volume.**

---

## 6. Pitfalls and cost

- **Target the niche with `keywords`, then verify the vertical.** `creator.category.name` is the creator's own content vertical; `commerce_summary.trend_categories` is what they actually sell. The two often disagree — three of the five creators recommended above are tagged as something other than Beauty — and the second is the one that matters. Check it before the list leaves your hands. See [GOTCHAS](../GOTCHAS.md).
- **`has_email` is a boolean, not an address.** The tool tells you a contact path exists; it does not hand over PII.
- **Use `day28_gmv`, not `total_gmv`.** Lifetime GMV rewards creators who were big two years ago. `creator_profile_overview` returns mostly cumulative figures for the same reason — pair it with `day28_gmv` from search.
- **Check the live/video split before you send a seeding kit.** `day28_live_gmv` vs `day28_gmv` in the search response already tells you; `creator_cargo_summary` confirms it.
- **Cost:** 1 call for the shortlist. Diligencing 5 finalists costs 10 more.

**Next:** [Case 05 — Content brief](05-content-brief.md) to tell those creators what to shoot.

# Case 07 — Pick an MCN partner on output, not roster size

| | |
|---|---|
| **Role** | Brand seeking an agency partner / agency benchmarking itself |
| **Market · Category** | US · all categories, beauty-led |
| **Decision** | Which of 1,376 US agencies to shortlist, and on what metric |
| **Tools** | `agency_rank_top` → `agency_profile_overview` → `agency_creator_analysis` |
| **Calls** | 1 for the shortlist, +2 per agency you diligence |
| **Data as of** | 2026-08-21 (ranking week 2026-33 = 2026-08-10 → 2026-08-16) |

---

## 1. The job

Agencies sell themselves on roster size: "we work with 1,500 creators." That number is free to inflate and tells you nothing about whether those creators sell.

Two ratios in a single leaderboard response replace the entire pitch deck:

- **Activation rate** = `creators_with_sales_count` ÷ `collaborating_creator_count`
- **GMV per productive creator** = `gmv` ÷ `creators_with_sales_count`

Neither is returned by the API. Both are one division away, and they reorder the ranking completely.

---

## 2. The prompt

```
Rank the top US MCN agencies for last week, then re-rank them by
what share of their roster actually sold and how much GMV each productive
creator produced. I care about beauty. Tell me who's growing and who's
coasting on a big roster.
```

Variants:

- `Which US agencies grew week-over-week and which shrank?`
- `Tell me about Evolution — roster size, tiers, top creators.`
- `I need an agency for a $25 skincare launch. Who should I talk to?`

---

## 3. The tool chain

| # | Tool | Arguments that matter | Why this step |
|---|---|---|---|
| 1 | `agency_rank_top` | `region: US`, `date_type: week`, `date_value: 2026-33`, `orderby: gmv desc` | Everything below comes from this one call, including `top_product_categories` and `gmv_growth_rate` |
| 2 | `agency_profile_overview` | `agency_id`, `time_range_days: 28` | Longer window on a finalist — one week is noisy |
| 3 | `agency_creator_analysis` | `agency_id`, `orderby: agency_collaboration_gmv desc` | Tier mix and named creators, to check overlap with your own shortlist |

`agency_rank_top` supports **week and month only** — no daily period.

---

## 4. What came back

Source: FastMoss · US · week 2026-33 · 1,376 ranked agencies · sorted by GMV.
Activation rate and GMV per productive creator are derived.

| Rank | Agency | Weekly GMV | WoW | Roster | With sales | **Activation** | **GMV / productive creator** |
|---|---|---|---|---|---|---|---|
| 1 | Evolution | $4.27M | **−8.7%** | 1,540 | 1,116 | 72.5% | $3,827 |
| 2 | The Alps Us | $3.82M | −3.2% | 598 | 447 | 74.7% | $8,546 |
| 3 | Outlandish US | $2.41M | −1.6% | 1,137 | 518 | **45.6%** | $4,653 |
| 4 | The Fast Track Girl | $2.02M | **−10.3%** | 414 | 355 | **85.7%** | $5,703 |
| 5 | TABOOST | $1.48M | **+21.7%** | 254 | 171 | 67.3% | $8,639 |
| 6 | MediaLabs | $1.46M | +13.2% | 433 | 216 | 49.9% | $6,776 |
| 7 | borg rise | $1.37M | +14.9% | 147 | 107 | 72.8% | **$12,777** |
| 8 | 2739 Agency | $1.05M | +12.8% | 436 | 292 | 67.0% | $3,581 |
| 9 | Live Academy | $1.04M | −8.5% | 151 | 114 | 75.5% | $9,166 |
| 10 | NextWave | $1.03M | −0.5% | 683 | 316 | 46.3% | $3,271 |

Estimated commission sits in a narrow 13.8%–15.3% band across all ten — **price is not a differentiator in this market**, so selecting on rate card is selecting on noise.

Lead categories: eight of the ten list Beauty & Personal Care first or second. Only The Fast Track Girl (Textiles, Household Appliances) leads elsewhere.

---

## 5. The decision

**Shortlist borg rise, TABOOST and The Alps Us. Do not lead with Evolution.**

1. **The GMV leaderboard is upside down for this purpose.** Evolution is #1 by GMV and last of the ten by output per productive creator ($3,827). It is a volume house: 1,540 creators producing less per head than agencies a tenth its size. Big rosters win on reach, not on attention to your product.
2. **borg rise is the outlier that matters.** 147 creators, 107 of them selling, **$12,777 per productive creator** — 3.3× Evolution — and growing 14.9% week over week. That is a small roster that is actually worked.
3. **Growth has moved to the middle of the table.** All four of the top four are shrinking (−1.6% to −10.3%); TABOOST (+21.7%), borg rise (+14.9%), MediaLabs (+13.2%) and 2739 (+12.8%) are all rising. The order on the GMV leaderboard is a snapshot of last year's winners.
4. **Activation rate is the honest disqualifier.** Outlandish US and NextWave sign creators at scale and activate fewer than half of them (45.6% and 46.3%). A brand paying for roster access there is paying for names that never post.

**How to open the conversation:** ask each shortlisted agency for their activation rate before they quote a rate card. You already know the answer; the value is in whether they do.

**Where this connects:** [Case 02](02-creator-shortlist.md) surfaced three strong US skincare creators with `has_email: false`. Agency access is the route to creators you cannot reach directly — which is the actual reason to hire one.

---

## 6. Pitfalls and cost

- **`agency_rank_top` supports week/month only.** No `day`.
- **One week is a noisy window** for agencies with concentrated rosters — a single creator's viral week moves a 147-creator agency far more than a 1,540-creator one. Confirm finalists with `agency_profile_overview` at `time_range_days: 28` before signing anything.
- **`collaborating_product_count` is close to meaningless** as a quality signal: several agencies report 100K+ "collaborating products," which reflects catalogue access, not active promotion. Use `products_with_sales_count` instead.
- **Commission percentages are estimates**, and in this market they are effectively identical across the top ten. Don't build a selection model on a 1.5-point spread.
- **Cost:** 1 call for the whole table above. Full diligence on three finalists: 6 more.

**Next:** [Case 04 — Cross-market shop teardown](04-cross-market-shop-teardown.md), where agency access is the practical answer to reaching a few hundred vertical creators in a market you don't operate in.

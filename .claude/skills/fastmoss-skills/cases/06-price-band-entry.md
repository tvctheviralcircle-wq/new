# Case 06 — Which price band should a new entrant attack?

| | |
|---|---|
| **Role** | Brand owner / product planner choosing where to position a new SKU |
| **Market · Category** | US · Beauty & Personal Care |
| **Decision** | Price band, and which sub-category to launch into |
| **Tools** | `market_category_analysis` (price_distribution) → `market_category_author_sales_matrix` |
| **Calls** | 2 |
| **Data as of** | 2026-08-21 (period: July 2026, last completed month) |

---

## 1. The job

"Where's the money?" has an easy answer and a useful answer. The easy answer is the band with the most GMV — which is also, reliably, the most crowded shelf in the category. The useful answer divides GMV by the number of listings competing for it.

The trap: **a price-band chart is a distribution, not a recommendation.** Reading the tallest bar as "go here" sends every new entrant into the same fight.

---

## 2. The prompt

```
I'm launching a beauty product in the US. Show me the price band
distribution for the category last month, but rank bands by GMV per
listed product rather than total GMV — I want to know where the money
per competitor is best. Then tell me which sub-category is actually growing.
```

Variants:

- `Which follower tier of creators moves the most GMV in US beauty?`
- `Is $23 a sensible price for a serum in this market?`
- `Which beauty sub-categories grew month-over-month and which shrank?`

---

## 3. The tool chain

| # | Tool | Arguments that matter | Why this step |
|---|---|---|---|
| 1 | `market_category_analysis` | `analysis_type: price_distribution`, `region: US`, `category_id: 14`, `date_type: month`, `date_value: 2026-07` | Returns GMV, units **and product count** per band, plus sub-category MoM change |
| 2 | `market_category_author_sales_matrix` | `region: US`, `category_id: 14`, `date_value: 2026-07` | GMV by creator follower tier — who you would need to recruit at that price |

`category_id` here accepts **level-1 categories only**. Use `search_category_by_words` first if you only have a name.

---

## 4. What came back

Source: FastMoss · US · Beauty & Personal Care (id 14) · July 2026 · 1,491,568 listed products · $434.2M GMV · 17.70M units.

The third column is the one that changes the answer — it is derived, not returned:

| Price band | GMV | Units | Listings | **GMV per listing** |
|---|---|---|---|---|
| $0–5 | $3.0M | 1.23M | 202,225 | $15 |
| $5–10 | $16.3M | 2.07M | 292,552 | $56 |
| $10–15 | $44.4M | 3.56M | 266,080 | $167 |
| $15–20 | $49.0M | 2.84M | 196,606 | $249 |
| **$20–30** | **$99.4M** | **4.18M** | 226,323 | $439 |
| $30–40 | $53.5M | 1.56M | 120,407 | $445 |
| $40–60 | $64.0M | 1.36M | 100,631 | **$636** |
| $60–80 | $27.1M | 0.39M | 37,269 | **$726** |
| $80–100 | $17.6M | 0.20M | 17,734 | **$992** |
| >$100 | $59.8M | 0.30M | 31,741 | **$1,885** |

**Sub-category momentum, MoM units change:**

| Sub-category | Units (July) | MoM |
|---|---|---|
| Hand, Foot & Nail Care | 1.30M | **+30.5%** |
| Perfume | 1.83M | **+19.8%** |
| Nasal & Oral Care | 1.01M | +11.6% |
| Eye & Ear Care | 0.13M | +10.7% |
| Bath & Body Care | 2.17M | +8.7% |
| Men's Care | 0.22M | +4.8% |
| Haircare & Styling | 1.96M | +3.3% |
| Skincare | 3.59M | **+2.5%** |
| Makeup | 4.11M | **+0.4%** |
| Personal Care Appliances | 1.14M | −0.2% |
| Feminine Care | 0.16M | −8.3% |
| Special Personal Care | 0.07M | −32.1% |

**Who moves the goods — creator follower tiers, US beauty, July 2026:**

| Tier | Creators | Share of creators | GMV | Share of GMV | Avg GMV per creator |
|---|---|---|---|---|---|
| <10K | 186,575 | 61.4% | $62.0M | 19.1% | $332 |
| **10K–100K** | 100,017 | 32.9% | **$134.0M** | **41.2%** | $1,340 |
| 100K–1M | 16,072 | 5.3% | $101.0M | 31.1% | $6,282 |
| 1M–5M | 1,116 | 0.4% | $26.8M | 8.3% | **$24,054** |
| >5M | 94 | 0.03% | $1.2M | 0.4% | $12,514 |

---

## 5. The decision

**Enter at $40–60, in a sub-category outside skincare and makeup, and recruit 10K–100K creators.**

1. **$20–30 is the volume trap.** It carries the most GMV ($99.4M) and the most units (4.18M) — and 226,323 listings chasing them, for $439 of GMV per listing. It is the correct band only if you can buy traffic, which is exactly the situation [Case 01](01-follow-seller-timing.md) describes.
2. **GMV per listing rises monotonically with price.** $40–60 returns $636 per listing — 45% more than $20–30 with 55% fewer competitors. $80–100 returns $992 across only 17,734 listings. The premium end of this category is under-served relative to the money in it, and nobody's price-band chart shows that because the bars are short.
3. **The growth is not where the volume is.** Makeup (+0.4%) and Skincare (+2.5%) are the two largest sub-categories and both are flat. Hand/Foot/Nail Care (+30.5%) and Perfume (+19.8%) are where the month-over-month movement went. Launching into a flat sub-category at the most crowded price band is the default mistake; this pairing avoids both halves of it.
4. **Recruit the middle tier.** 10K–100K creators are 33% of the population and 41% of GMV. Mega-creators are a mirage: the >5M tier averages $12,514 per creator, **half** what the 1M–5M tier averages. Above a certain audience size, selling stops scaling with reach.

**Caveat to state out loud:** FastMoss shows market price, not your cost. This analysis tells you where the revenue per competitor is best; it cannot tell you whether you have margin at $40–60. Pair it with your own landed cost before committing.

---

## 6. Pitfalls and cost

- **Level-1 category IDs only** for `market_category_analysis` and `market_category_ranking`. A level-2 id (e.g. Skincare `848776`) fails rather than degrading gracefully.
- **`date_value` must be a completed month.** `2026-07` works in August; `2026-08` does not.
- **Do not mix totals across tools.** Price distribution totals $434.2M for the category; the creator matrix totals $325.0M. Different denominators — the matrix counts only creator-attributed GMV. Quoting both in one paragraph as "category GMV" is wrong.
- **Bands are left-open, right-closed.** `$20–30` means (20, 30]. A $30.00 product is in the $20–30 band, not $30–40.
- **GMV per listing is a derived metric.** The API does not return it. Compute it, label it as derived, and say so — it is the whole reason this case reaches a different conclusion than the chart does.
- **Cost:** 2 calls.

**Next:** [Case 02 — Creator shortlist](02-creator-shortlist.md) to staff the 10K–100K tier you just decided to recruit.

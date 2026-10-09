# Case 01 — Is this bestseller still worth following?

| | |
|---|---|
| **Role** | Follow-seller / reseller sourcing a product to list |
| **Market · Category** | US · Beauty & Personal Care → Skincare |
| **Decision** | Enter now, enter with conditions, or skip |
| **Tools** | `product_rank_top_selling` → `product_overview` → `product_investment` → `product_creator_analysis` |
| **Calls** | 4 |
| **Data as of** | 2026-08-21 (window: L28d = 2026-07-24 → 2026-08-20; leaderboard week 2026-33) |

---

## 1. The job

A product jumped up the weekly leaderboard. The seller wants to know whether the window is still open — not a list of ten more products.

The trap this case exists to teach: **a big week-over-week number is not evidence of an open window.** Growth can be organic (creators piling in on their own) or bought (the brand raised ad spend). Those two look identical on a leaderboard and lead to opposite decisions. FastMoss can separate them; almost nothing else can.

---

## 2. The prompt

```
Dr.Melaxin's Calcium Dark Spot Eye Cream is #3 on the US beauty
leaderboard this week and up 51% in units. I sell skincare in the US.
Is the follow-sell window still open? Tell me whether that growth is
organic or paid, and give me a verdict, not just numbers.
```

Variants worth keeping:

- `Pull the US beauty bestseller list for last week, then tell me which of the top 10 are still worth following and which are already closed.`
- `Here's a TikTok Shop product link — is it too late to follow-sell this?`
- `Compare the top two risers in US beauty last week. Which one is real growth?`

---

## 3. The tool chain

| # | Tool | Arguments that matter | Why this step |
|---|---|---|---|
| 1 | `product_rank_top_selling` | `date_type: week`, `date_value: 2026-33`, `region: US`, `category_id: 14` | Get the candidate plus `product_id`. **Always pass `category_id`** — see Pitfalls. |
| 2 | `product_overview` | `product_id`, `time_range_days: 28` | The core split: ad vs non-ad traffic, channel mix, and the daily series with `daily_new_linked_creator_count` |
| 3 | `product_investment` | `product_id`, `time_range_days: 28` | Estimated ad spend and ROAS by day — tells you whether the ad engine is getting more or less efficient |
| 4 | `product_creator_analysis` | `product_id`, `orderby: product_gmv desc` | Concentration and follower-tier mix: who you'd be competing against for creators |

Steps 2–4 are independent once you have `product_id`; run them in parallel.

---

## 4. What came back

**Dr.Melaxin Calcium Dark Spot Eye Cream** · $19.55 · listed 2025-01-02
[FastMoss product page](https://www.fastmoss.com/e-commerce/detail/1729718097057910811)

Source: FastMoss · US · Beauty & Personal Care · L28d 2026-07-24 → 2026-08-20 unless noted.

| Metric | Value |
|---|---|
| Week 2026-33 GMV / units | $376,358 / 19,008 (units +50.99% WoW, category rank 3) |
| L28d GMV / units | $1,220,098 / 62,410 |
| Cumulative GMV / creators | $8,197,083 / 4,034 |
| Ad-attributed GMV | $962,086 — **78.85%** of L28d GMV |
| Estimated ad spend / ROAS | $208,965 / **4.6** |
| Channel mix | Affiliate 86% · Product card 11% · Shop account 3% |
| Content mix | Video 83% · Live 6% · Product card 11% |

The two series that decide the answer, first week of the window vs last week:

| Signal | Jul 24–30 | Aug 14–20 | Change |
|---|---|---|---|
| New linked creators | 668 | 675 | **+1%** |
| New linked videos | 281 | 350 | +25% |
| Estimated ad spend | $46,189 | $73,729 | **+60%** |
| ROAS | 4.95 | 4.42 | **−11%** |

Creator concentration (cumulative, 4,072 linked creators):

| Cut | Share of cumulative GMV |
|---|---|
| Top creator (`authenticallypriscilla`, 15.8K followers) | 12.3% |
| Top 3 | 24.4% |
| Top 10 | **46.3%** |

Follower tiers: 10K–50K is the workhorse (1,546 creators), 5K–10K next (1,196). Creators with ≥100K followers are only 324 of 4,072.

---

## 5. The decision

**Window narrowing. Follow only if you have an ad budget and a differentiated angle — do not follow expecting organic affiliate pickup.**

The reasoning, in the order it should be read:

1. **The +51% week is bought, not earned.** Ad spend rose 60% across the same window in which organic creator influx was flat (+1%). On TikTok Shop, creator influx is the leading indicator and GMV is the lagging result; a flat leading indicator behind a rising lagging one means the brand is paying for the lift.
2. **The ad engine is getting less efficient while it scales.** ROAS 4.95 → 4.42 as spend grew 60%. That is a brand pushing into diminishing returns, not a product finding new demand.
3. **The affiliate shelf is already full.** 86% of sales run through affiliate and 4,034 creators have already linked it. A new follow-seller arrives to a crowded creator market, not an empty one.
4. **But the floor is solid.** $1.22M in 28 days at ROAS 4.6 with 46% of GMV outside the top 10 creators means it converts. This is not a collapsing product — it is a product whose easy phase is over.

What would change the verdict: new linked creators re-accelerating above ~120/day for a week, or ROAS recovering above 5.0 at the higher spend level. Both are checkable with a re-run of steps 2 and 3.

Compare with [Case 03](03-growth-attribution.md), where a product on the same leaderboard grew 135% for entirely different reasons — and gets the opposite answer.

---

## 6. Pitfalls and cost

- **Always scope the leaderboard by `category_id`.** The unfiltered US weekly top 10 for the same week was dominated by auction listings, `NO GIFT ! ! ! WARRANTY CARD` placeholder SKUs, and $2,000 trading-card breaks. Those are real transactions but useless as sourcing candidates. One argument turns the tool from noise into signal.
- **`date_value` must be a completed period.** `2026-33` is the last full ISO week. The current week returns nothing.
- **Do not read `units_sold_growth_rate_percent` alone.** It is the single most misleading field in the response for exactly the reason this case exists.
- **`product_creator_analysis` returns cumulative contribution**, not the 28-day window. State that when you quote concentration numbers.
- **Cost:** 4 calls. Re-running the check weekly on one product is a 3-call habit (steps 2–4).

**Next:** [Case 05 — Content brief](05-content-brief.md) if you decide to enter, or [Case 06 — Price band entry](06-price-band-entry.md) if you want a less crowded shelf.

# Case 03 — Why did this product jump 135% in a week?

| | |
|---|---|
| **Role** | Category manager / competitive analyst |
| **Market · Category** | US · Beauty & Personal Care → Bath & Body Care |
| **Decision** | What mechanism drove the jump, and which parts of it you can copy |
| **Tools** | `product_overview` → `product_video_list` (×2) → `product_rank_top_selling` for context |
| **Calls** | 4 |
| **Data as of** | 2026-08-21 (L28d = 2026-07-24 → 2026-08-20) |

---

## 1. The job

"Competitor X is blowing up" is where most competitive analysis stops. The useful version answers: *which lever moved*, and *is that lever available to me*.

This case is deliberately the twin of [Case 01](01-follow-seller-timing.md). Same market, same week, same leaderboard, similar-looking headline growth — and a completely different engine underneath. Run them side by side and the point of the tooling becomes obvious.

---

## 2. The prompt

```
medicube's Smooth & Clear Body Care Set was #1 in US Beauty last week
with units up 135%. Break down why it grew — traffic sources, channel mix,
who's selling it — and tell me which parts of that playbook I could
copy with a $50K budget.
```

Variants:

- `Compare how medicube's body set and Dr.Melaxin's eye cream each grew last week. Same growth, same mechanism?`
- `What share of this product's sales is live vs video vs product card?`
- `Show me the top organic videos for this product and the top paid ones separately.`

---

## 3. The tool chain

| # | Tool | Arguments that matter | Why this step |
|---|---|---|---|
| 1 | `product_overview` | `product_id`, `time_range_days: 28` | `ads_distribution`, `channel_distribution`, `content_distribution` + the daily series that dates the inflection |
| 2 | `product_video_list` | `is_ad: false`, `orderby: gmv desc` | How big the organic content layer is |
| 3 | `product_video_list` | `is_ad: true`, `orderby: gmv desc` | How big the paid layer is, and whether it concentrates on a few creators |
| 4 | `product_rank_top_selling` | week `2026-33`, `category_id: 14` | Peer context — is this outperforming the category or riding it |

---

## 4. What came back

**medicube Smooth & Clear Body Care Set** · $30.73 · listed 2025-11-20
[FastMoss product page](https://www.fastmoss.com/e-commerce/detail/1732052189676081387)

Source: FastMoss · US · L28d 2026-07-24 → 2026-08-20 unless noted.

| Metric | This product | Case 01 product (for contrast) |
|---|---|---|
| Week 2026-33 units growth | **+134.93%** (category rank 1) | +50.99% (rank 3) |
| L28d GMV / units | $1,373,217 / 44,691 | $1,220,098 / 62,410 |
| Ad-attributed GMV | **55%** | 79% |
| Non-ad video GMV | **45%** | 21% |
| Channel mix | Affiliate 72% · **Shop account 19%** · Card 9% | Affiliate 86% · Card 11% · Shop 3% |
| Content mix | Video 57% · **Live 34%** · Card 9% | Video 83% · Live 6% · Card 11% |
| Cumulative creators / lives | 8,702 / 15,208 | 4,034 / 9,319 |

The inflection is dateable. Daily GMV sat at $26K–$50K through early August, then:

| Date | Daily GMV | New linked lives |
|---|---|---|
| Aug 11 | $50,158 | 114 |
| Aug 12 | $75,361 | 141 |
| Aug 13 | $103,633 | 156 |
| Aug 14 | **$112,561** | 176 |
| Aug 15 | $77,314 | 167 |

Content layer, L28d:

| Layer | Videos | Top video GMV | Top video plays |
|---|---|---|---|
| Organic (`is_ad: false`) | 431 | $9,052 | 2.3M |
| Paid (`is_ad: true`) | **2,003** | **$105,152** | 9.7M |

One creator, [`justtrendy31`](https://www.fastmoss.com/influencer/detail/7335707227034043435), holds three of the top five paid videos — $165,230 combined.

---

## 5. The decision

**The jump was a coordinated live push on top of an already-warm organic base — not an ad-spend spike. Two of the three levers are copyable; one is not.**

| Lever | What medicube did | Copyable on $50K? |
|---|---|---|
| **Live volume** | 34% of GMV from live, 15,208 lives cumulative, +140–176 new lives per day through the surge window | **Yes.** This is the cheapest lever on the board — it costs creator relationships and scheduling, not media budget. |
| **Own shop account** | 19% of GMV sold through the brand's own account, vs 3% for the Case 01 product | **Yes**, and it is under-used by most sellers. Self-operated live and shop-account content carry no affiliate commission. |
| **Paid content depth** | 2,003 ad videos in 28 days, ~4.6× the organic count, with a whitelisted top creator producing repeat winners | **Partly.** The volume is a budget question; the "one creator produces three of the top five" pattern says concentrate spend behind a proven performer instead of spreading it. |

**Why this gets the opposite verdict from Case 01:** here 45% of GMV arrives without ad support and live is a third of the business, so a new entrant can win share with content and creator work rather than by outbidding the incumbent. In Case 01, 79% of GMV is bought and organic creator influx is flat — the only way in is to buy traffic.

**The one number that separates them:** non-ad GMV share. 45% versus 21%. Everything else follows.

---

## 6. Pitfalls and cost

- **`product_video_list` must be called twice.** `is_ad` is a filter, not a grouping. Calling it once without the flag blends both layers and hides the entire finding.
- **Ad-video count is not ad spend.** For spend and ROAS use `product_investment` (Case 01 step 3). This case deliberately skips it because the question was mechanism, not efficiency.
- **Read the daily deltas, not the cumulative counters.** `daily_new_linked_live_count` is what dates the inflection above; `cumulative_linked_live_count` only ever rises and can never tell you when something changed.
- **Cost:** 4 calls.

**Next:** [Case 05 — Content brief](05-content-brief.md) turns the paid-video winners above into a shooting brief.

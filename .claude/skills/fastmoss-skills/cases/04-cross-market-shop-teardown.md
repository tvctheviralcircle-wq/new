# Case 04 — Tear down a shop in a market you don't know

| | |
|---|---|
| **Role** | Founder / GM evaluating expansion into a new market |
| **Market · Category** | **TH** · Beauty & Personal Care |
| **Decision** | Does the US playbook port to Thailand, and where is the incumbent soft |
| **Tools** | `product_rank_top_selling` → `shop_base_info` → `shop_sale_analysis` → `shop_creator_analysis` |
| **Calls** | 4 |
| **Data as of** | 2026-08-21 (shop snapshot 2026-08-20; L28d channel and creator data) |

---

## 1. The job

Every seller who wins in one market eventually asks whether the same playbook works in the next one. The honest answer is usually no, and the reason is structural rather than cultural — the same category runs on a different sales engine in each market.

This case exists to make that concrete, and to show what a four-call teardown of a category leader looks like when you have never opened that market before.

---

## 2. The prompt

```
I sell beauty on TikTok Shop US and I'm evaluating Thailand.
Take the #1 TH beauty shop and tear it down: how it sells, who sells for it,
how concentrated it is, and where it's weak. Tell me what's different from
the US so I know what won't transfer.
```

Variants:

- `Which TH beauty shops are in the top 5 and how do their channel mixes differ?`
- `Is TH beauty a live market or a video market?`
- `What's this shop's delivery rate and how does it compare to its category?`

---

## 3. The tool chain

| # | Tool | Arguments that matter | Why this step |
|---|---|---|---|
| 1 | `product_rank_top_selling` | `region: TH`, `category_id: 14`, week `2026-33` | Find the leaders and pull `shop_id` |
| 2 | `shop_base_info` | `seller_id` | Scale, ranks, service metrics, and `category_benchmark` for peer comparison |
| 3 | `shop_sale_analysis` | `seller_id`, `time_range_days: 28` | The engine: live vs video, affiliate vs own account |
| 4 | `shop_creator_analysis` | `seller_id`, `time_range_days: 28`, `orderby: sale_amount desc` | Roster size, tier mix, concentration |

---

## 4. What came back

**YerpallThailand** · local shop, opened 2022-08-17 · primary category Beauty & Personal Care
[FastMoss shop page](https://www.fastmoss.com/shop-marketing/detail/7494632121482971855)

Source: FastMoss · TH · snapshot 2026-08-20, channel and creator data L28d. Currency THB.

| Metric | Value |
|---|---|
| Cumulative GMV / units | ฿1.893B / 5,302,523 |
| Category rank / region rank (2026-07) | **#3** / #23, both unchanged MoM |
| Active products / total listed | 74 / 216 |
| Linked creators / lives / videos (cumulative) | 50,070 / 249,630 / 220,826 |
| Shop rating | 4.7 · positive feedback 95% · response rate 98% |
| **Delivery rate** | **77%** |
| Brand account | 1.2M followers, 1,311 videos |

**The engine (L28d):**

| Split | Share of GMV |
|---|---|
| Live | **86.74%** |
| Video | 13.26% |
| Product card | 0% |
| Affiliate | 81.89% |
| Shop's own account | 18.11% |

**Creator roster (L28d): 48,809 linked, 6,318 newly linked, ฿86.24M GMV**

| Follower tier | Creators | Share of roster | GMV | Share of GMV |
|---|---|---|---|---|
| ≤1K | 883 | 14.0% | ฿0.20M | 0.2% |
| 1K–5K | 3,361 | **53.2%** | ฿8.86M | 10.3% |
| 5K–10K | 718 | 11.4% | ฿4.89M | 5.7% |
| 10K–50K | 965 | 15.3% | ฿25.65M | 29.7% |
| 50K–100K | 179 | 2.8% | ฿15.44M | 17.9% |
| >100K | 186 | 2.9% | **฿31.17M** | **36.1%** |

By creator vertical, Beauty creators are 19.2% of the roster and produce ฿66.28M — **77% of GMV**. The 60.5% of the roster tagged "Other" produces 16%.

Concentration: the top 10 creators of 48,809 produce ฿35.57M — **41.2% of L28d GMV**. The single largest is the shop's own account (฿13.22M, 15.3%).

Peer benchmark from `shop_base_info`: category average is 9,929 creators and 16,541 lives. This shop runs **5× the creator count and 15× the lives** of its category average.

---

## 5. The decision

**Do not port the US playbook. TH beauty is a live market with a long-tail creator draft, and the incumbent's weakness is operational, not commercial.**

Three findings, in order of how much they should change your plan:

1. **Live is the business, not a supplement.** 86.7% of GMV. The comparable US products in [Case 01](01-follow-seller-timing.md) and [Case 03](03-growth-attribution.md) run 6% and 34% live. A US team that arrives with a video-seeding motion and an ad budget is bringing the wrong machine.
2. **Roster size is a vanity number; vertical fit is the real one.** 48,809 linked creators sounds unbeatable until you see that 19% of them — the beauty-vertical ones — produce 77% of the GMV, and 186 creators above 100K followers produce 36%. The addressable target for a new entrant is a few hundred people, not fifty thousand.
3. **The soft spot is a 77% delivery rate.** Against a 4.7 rating and 98% response rate, fulfillment is the one metric out of line. In a live-driven market where purchases are impulse-timed, slow delivery is the churn mechanism. A local-fulfillment entrant attacks there, not on price.

**What transfers from the US:** the own-account lever. This shop books 18.1% of GMV through its own account, close to the 19% seen in Case 03. That is the one structural move that works in both markets.

---

## 6. Pitfalls and cost

- **Probe a new market before you scope a deliverable.** Coverage and depth differ by market and period. One cheap search call tells you what you are working with; find that out before you promise a client a report on a market you have never pulled.
- **Currency changes with the market.** THB here, USD in every other case. Never put ฿ and $ figures in one comparison table without converting or labelling; the tool returns `currency_code` on the response for exactly this reason.
- **`shop_id` from the leaderboard is usable as `seller_id`.** No lookup call needed in between.
- **Creator-level `channel_contribution` in `shop_creator_analysis` mixes lifetime-scale figures** into a windowed response. Use `product_contribution` for the window and the summary blocks for shares; do not build a live-vs-video split from the per-creator rows.
- **`creator_category_distribution` can return rows with `creator_count: 0` but non-zero GMV** (creators reclassified inside the window). Sum GMV, not creator counts, when you compute vertical share.
- **Cost:** 4 calls.

**Next:** [Case 07 — Agency partner selection](07-agency-partner-selection.md), which is how you would actually reach a few hundred vertical creators in a market you don't live in.

# Case 05 — Turn winning videos into a shooting brief

| | |
|---|---|
| **Role** | Content lead / affiliate manager writing a creator brief |
| **Market · Category** | US · Bath & Body Care |
| **Decision** | What the brief actually says: hook, format, length, claim, hashtags |
| **Tools** | `product_video_list` (×2) → `video_detail_analysis` |
| **Calls** | 2–3 |
| **Data as of** | 2026-08-21 (L28d) |

---

## 1. The job

Most creator briefs are written from brand guidelines. The better ones are written from the videos that already sold the product — including the ones the brand did not commission.

The trap: **the top-performing videos for a hot product are usually ads, and ads look organic on purpose.** If you brief creators off a blended top-10 list you will copy production values that only work behind media spend. Split the two layers first, then decide which one you are trying to reproduce.

---

## 2. The prompt

```
I'm briefing creators on medicube's Smooth & Clear Body Care Set.
Pull the top-selling videos for it in the last 28 days, split paid from
organic, and give me a shooting brief: hook, structure, length, and what
claim is doing the work. Flag anything that only works with ad spend.
```

Variants:

- `Show me only the organic videos — I have no media budget.`
- `Which creator produced the most repeat winners for this product?`
- `What hashtags do the top videos share?`

---

## 3. The tool chain

| # | Tool | Arguments that matter | Why this step |
|---|---|---|---|
| 1 | `product_video_list` | `product_id`, `time_range_days: 28`, `is_ad: true`, `orderby: gmv desc` | The paid layer — highest absolute GMV, tells you what converts with support |
| 2 | `product_video_list` | same, `is_ad: false` | The organic layer — what converts without support |
| 3 | `video_detail_analysis` | `video_id` | Only for the 1–2 you want to dissect: IPM, engagement rate, linked products |

`product_video_list` already returns `caption_text`, `duration_seconds`, play/like/comment/share counts and `fastmoss_url`, so most briefs never need step 3.

---

## 4. What came back

Product: **medicube Smooth & Clear Body Care Set** · $30.73
Source: FastMoss · US · L28d 2026-07-24 → 2026-08-20 · 2,003 paid videos, 431 organic.

**Paid layer, top 5 by GMV**

| Creator | Length | GMV | Plays | Likes | Caption angle |
|---|---|---|---|---|---|
| [justtrendy31](https://www.fastmoss.com/media-source/video/7672655263672864013) | 15s | **$105,152** | 9.7M | 131.0K | "Replying to @Sarah — watch this and you tell me does it work…" |
| [mcjerbear](https://www.fastmoss.com/media-source/video/7671133659210009869) | 61s | $50,685 | 3.4M | 14.7K | Caption is only `#boils #cysts` |
| [justtrendy31](https://www.fastmoss.com/media-source/video/7670790859826269453) | 84s | $39,835 | 1.7M | 34.7K | "Replying to @hunhoney3 — super quick tutorial on how to use the set" |
| [itskiaraoffline](https://www.fastmoss.com/media-source/video/7670703095696968991) | 49s | $25,482 | 1.2M | 15.8K | "Scars from childhood or even skin — I found something for us" |
| [justtrendy31](https://www.fastmoss.com/media-source/video/7667856401846258957) | 15s | $20,243 | 712K | 7.8K | "Replying to @Zebraa — I started seeing changes after the first couple uses" |

**Organic layer, top 3 by GMV**

| Creator | Length | GMV | Plays | Caption angle |
|---|---|---|---|---|
| [justtrendy21](https://www.fastmoss.com/media-source/video/7669685093262167327) | 33s | $9,052 | 2.3M | "I always thought the girls were lying! This set is 10/10" |
| [skincarepronikki](https://www.fastmoss.com/media-source/video/7669869873341697294) | 18s | $7,409 | 363K | "Replying to @Queen Gina" + `#weeklydeals` |
| [rae.and.bae](https://www.fastmoss.com/media-source/video/7666386521762630943) | 82s | $518 | 17.8K | Ingredient explainer: kojic acid & turmeric for hyperpigmentation |

Efficiency, per 1,000 plays: top paid video $10.83, top organic video $3.94.

---

## 5. The decision

**The brief, straight out of the data:**

| Element | What to specify | Evidence |
|---|---|---|
| **Format** | Comment-reply video (`Replying to @…`). Not a standalone review. | 4 of the top 8 videos across both layers, including the #1 at $105K |
| **Length** | Barbell: 15–18s proof clip **or** 60–84s tutorial. Avoid 30–45s. | Top performers cluster at 15s, 18s, 61s, 84s |
| **Hook** | Skepticism flip or objection answer — "I thought they were lying", "watch this and you tell me does it work", "I started seeing changes after…" | The three highest-GMV captions in both layers |
| **Claim** | Name the condition, not the ingredient. `hyperpigmentation`, `dark spots`, `boils`, `cysts`, `postpartum`, `childhood scars`. | The $50,685 video's entire caption is `#boils #cysts` |
| **Ingredient talk** | Allowed, but as the *explanation* after the proof — never as the opener | The pure ingredient explainer (kojic acid / turmeric) earned $518 |
| **Hashtags** | `#medicube #hyperpigmentation #darkspots #postpartum #skincareroutine`, plus `#tiktokshopcreatorpicks #realreview` on paid | Shared across the top set |
| **Cadence** | Brief one creator for a *series*, not a one-off | `justtrendy31` produced 3 of the top 5 paid videos — $165,230 combined |

**What only works with ad spend:** the 9.7M-play distribution on the #1 video, and the 2,003-video paid volume overall. With no media budget, brief to the organic pattern instead — the 2.3M-play organic winner used the same skepticism-flip hook at 33 seconds, which is the format that travels.

**The transferable insight:** the comment-reply format is doing double duty. It manufactures the objection ("does it work?") and answers it in the same clip, and it gives the creator an infinite series structure. That is why one creator can produce three winners in a month.

---

## 6. Pitfalls and cost

- **Never brief off a blended video list.** Without `is_ad`, the top of the list is entirely paid and you will attribute paid distribution to creative quality.
- **`video_script_info` returns raw UGC captions and spoken text**, profanity included, and may return incomplete transcripts. Review before pasting into a client-facing brief.
- **Plays are not the ranking you want.** Sort by `gmv`. The highest-play video is often not the highest-selling one.
- **Video-level GMV is windowed** (`metric_window_days`), so a video published mid-window is being judged on a partial run. Check `published_at` before calling one a flop.
- **Cost:** 2 calls for the brief, 3 if you dissect a specific video.

**Next:** [Case 02 — Creator shortlist](02-creator-shortlist.md) for who to send this brief to.

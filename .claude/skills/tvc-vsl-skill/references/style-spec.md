# TVC VSL style spec

Every number here was measured from the reference VSL (3840x2160, 29.97 fps, 189.3 s) and converted to a 1920x1080 timeline. Colours are already mapped to The Viral Circle design system. Where a value is an estimate from frames it says "about".

## Contents

1. Format and pacing
2. A-roll
3. Treatment menu (what to put on which kind of line)
4. Type scale
5. Text motion
6. Cutaway scenes
7. Transitions
8. Sound effects
9. Music and mix
10. Colour tokens for video

## 1. Format and pacing

| Measure | Reference | Target |
|---|---|---|
| Canvas | 3840x2160, 29.97 fps | 1920x1080, 30 fps (4K on request) |
| Length | 189 s | whatever the script needs |
| Scene changes | 40 in 189 s, mean shot 4.7 s | new scene every 4 to 6 s on average |
| A-roll with overlays | about 60% | 55 to 65% |
| Full-screen cutaways | about 34% (17 scenes, 1.3 to 7.4 s each) | 30 to 38% |
| Split-screen proof | about 6% (2 sections, 6.2 s and 4.9 s) | 5 to 10% |
| Longest A-roll run without a cutaway | about 11 s | 10 s |
| Pauses over 0.16 s | 19 in 189 s | cut pauses to 0.15 s |
| Seconds of plain face with no text | effectively 0 | 0, apart from a beat under 1 s |

Structure of the reference, which is a sound default for any VSL:

| Time | Section | Dominant treatment |
|---|---|---|
| 0:00–0:08 | Hook: "you've had X, but here's what nobody tells you" | face + graph behind speaker, B-roll, pill, title card |
| 0:08–0:30 | The broken model | bullet list beside the face, night card, UI scene, icon callouts |
| 0:30–0:48 | The excuse loop | kinetic type on cream, icon + pill pairs on face, 3D object scenes |
| 0:48–1:03 | "I could show you X. I won't. Instead…" | big keywords over the chest, cream scene |
| 1:03–1:35 | The real problem, told as a story | alternating medium A-roll and cream object scenes every 2 to 5 s |
| 1:35–1:50 | Who I am | dashed name box, image pop-ins beside the head, one cream scene |
| 1:50–1:57 | The system (proof) | split-screen with the landing page scrolling |
| 1:57–2:31 | What it does, layer by layer | giant numbers behind the head, cream scenes, icon carousel |
| 2:31–2:53 | The guarantee | close A-roll shifted right, text on the left third, icon stack |
| 2:53–2:58 | Proof again | split-screen |
| 2:58–3:09 | Call to action and scarcity | face, keywords, one giant word behind the head, ends on face |

## 2. A-roll

- Locked-off camera, speaker centred at a desk, soft warm practical light behind. No drift, no shake.
- Three framings: WIDE 100% (head about 22% of frame height, hands and desk visible), MEDIUM about 130%, CLOSE about 165% (head about 38% of frame height, cropped at the chest).
- The framing changes only when returning from a cutaway. Progression in the reference: wide for the first 60 s, medium from 1:03, close from 1:48, back to wide at 2:44 for the offer.
- Off-centre variant: from 2:31 to 2:38 the speaker sits on the right third and text stacks on the left third.
- A second background (a shelf with a plant and a lamp) appears from 2:45; it is the same set re-dressed, which reads as a new chapter. If the raw footage has only one set-up, don't fake this.
- Layering: text is normally in front of the speaker over the chest. For four moments ("Journey", "$16,628", "Promises", "Available") a 200 to 220 px word sits behind the head, with the speaker matted on top.
- Overlays behind or around the speaker: a line graph with a counting percentage (0:00), falling banknotes with motion blur (0:06, 1:32), image cards popping in beside the head (1:42).

## 3. Treatment menu

Pick one per clause in the beat sheet.

| The line is… | Treatment | Where |
|---|---|---|
| An ordinary sentence | Caption line only | over the chest, or top-left when a graphic sits right |
| A sentence with one loaded word | Caption line + italic keyword | keyword directly under or over the caption line |
| A verdict or label ("That's your problem") | Caption line, underline draws, becomes a gradient pill | centre, over the chest |
| A list of 3 to 4 steps or complaints | Bullet list, one line per item as it is spoken | right of the head, starting level with the forehead |
| Several named problems or features | Icon callouts popping in around the head, with a pill label over the chest | left and right of the head |
| An excuse, a quote, a thing "they" say | Line icon top-right of the head + caption + pill | |
| A concept, metaphor or consequence | Cream cutaway: one object, small line, keyword | full screen |
| A turn in the argument ("And the moment…", "Instead.") | Cream cutaway opened by the text-zoom transition | full screen |
| A dark truth, the villain's logic | Night card with a line that draws and an icon | full screen |
| A section title ("Here's the dirty game") | Texture title card, two-size headline | full screen, about 1.3 s |
| A software or process description | UI scene: tilted dashboard cards right, caption and pill left | full screen |
| A flow between two states | Cream scene: icon tile, dashed line draws, second tile | full screen |
| Three parallel features | Icon carousel: one tile at a time, then zoom out to all three | full screen |
| The speaker's name and company | Dashed selection box with a cursor arrow at its corner | over the chest |
| Proof, the mechanism, the page | Split-screen: page scrolls on top, face below, one-word caption between | full screen |
| A money figure or result | Giant numerals behind the head, counting up | upper third |
| "Fill out the form / click the button" | UI button mock with a pointer hand that taps it | right of the speaker |
| A term of the guarantee | Icon + label stack on the right, one item per term | right third |
| The scarcity line | One giant word behind the head, then a numeral pill over the chest | |

## 4. Type scale (1920x1080)

| Role | Font | Size | Colour | Notes |
|---|---|---|---|---|
| Caption line | Montserrat 700 | 38 px, line height 1.15 | white over the dark shirt or dark scenes; `ink` on cream and on the light A-roll background | sentence case, no stroke, no box; a soft 0 2 12 rgba(0,0,0,.35) shadow only when white sits on a busy area |
| Keyword | Poppins 700 italic | 100 to 120 px on A-roll, 72 to 96 px in cream scenes | `viral-rose`; `#F0A3C0` on night or over black clothing | Title Case, tight tracking (-0.01em), overlaps the caption line by about 10 px |
| Giant word behind the head | Poppins 700 italic or Montserrat 900 for numerals | 200 to 220 px | `viral-rose` | speaker matted on top; the head hides the middle letters, so choose words that stay readable from their ends |
| Pill text | Montserrat 800 | 62 px in a 137 px high pill; small variant 30 px in a 64 px pill | white on `gradient-brand` | padding 0 44 px, radius 30 px |
| Bullet list | Montserrat 700 | 34 px, row gap 26 px | `ink` | leading glyph: an 8-point asterisk in `viral-rose`, 30 px |
| Title card headline | Montserrat 900 | big word 130 px, lead-in 60 px | white | lead-in sits top-right of the big word, right-aligned to it |
| Night card line | Montserrat 700, second line 800 | 40 px | white, last word `#C2B6CC` until spoken | left-aligned at x = 430 |
| Icon callout label | Montserrat 700 | 22 px, two lines | `ink` | beside a 64 px tile |
| Carousel label | Montserrat 700 | 44 px while featured, 20 px in the overview | `ink` | |
| Split-screen word | Montserrat 900 uppercase | 30 px, tracking 0.02em | white on `sticker-black` | one word at a time |
| Split-screen counter | Montserrat 900 | 110 px | `viral-rose` | "+0" counts to "+40" |
| Name box | Montserrat 700, second line in rose | 56 px | white / `#F0A3C0` | 2 px dashed white border, 10 px dash, padding 14 px |
| Cutaway small line | Montserrat 700 | 30 to 34 px | `ink` | centred above the object |
| Cutaway second line | Montserrat 700 22 px + keyword 64 px | | | centred below the object |

Size contrast is the point: caption 38, keyword 110. Don't close that gap.

## 5. Text motion

All easing `power2.out` unless noted. Frames are at 30 fps.

| Element | In | Hold | Out |
|---|---|---|---|
| Caption word | opacity 0 → 1 and colour grey (`#9A9A9A` on dark, `#8A7F90` on light) → final, 0.12 s (3 to 4 frames), started on the word's own onset; no movement | until the group ends | whole group cuts off (opacity 0 in 2 frames) 0.2 s after its last word, or when the next group starts |
| Keyword | blur 14 px → 0, opacity 0 → 1, scale 1.06 → 1, 0.2 s; starts on the keyword's onset | 0.8 to 1.6 s | with its caption group |
| Underline → pill | 3 px gradient line draws left to right 0.2 s under the caption; 0.25 s later it grows vertically into the pill in 0.1 s (`power3.out`) while the phrase rises 12 px into place inside it | to the end of the sentence | light leak or hard cut |
| Bullet row | asterisk scales 0 → 1 with a quarter turn 0.15 s; words then fade in one at a time as spoken | list stays until the scene changes | all rows together |
| Icon callout | tile scales 0.6 → 1 `back.out(2)` 0.2 s, label words fade in 0.12 s each | until the scene changes | all together |
| Line icon (top-right of head) | fades in 0.15 s; a new icon replaces the previous one with a 4-frame cross-fade | per clause | |
| Graph behind speaker | line draws left to right over 2.2 s, percentage counts with it (0 to about 72%), small axis labels fade in at 0.8 s | 2.6 s | with the light leak |
| Giant numerals | count up over 0.8 s with a ticker sound, settle | 1 s | hard cut |
| Dashed name box | company name types in; box draws clockwise 0.3 s; a small arrow cursor lands on the bottom-right corner | 1.5 s | cut |
| UI button mock | white button fades in 0.2 s; pointer hand slides in from below-right 0.6 s; on the click the button fills with the gradient and the text turns white, scale 0.96 → 1 | 0.8 s | cut |
| Opening frame | the whole picture goes from 12 px blur to sharp in 3 frames | | |

Captions are grouped 2 to 5 words, broken at punctuation and at pauses over 0.25 s. Two-line groups are left-aligned when they sit beside the head and centred when they sit over the chest.

## 6. Cutaway scenes

### Cream scene (the workhorse; 12 of the 17 cutaways)

- Background: `surface` `#F5F0E8` in the centre, radial vignette to `#E4DACB` at the corners.
- Centre grid: a faint 5 x 3 grid of 150 px cells in `border` at 60%, with small plus marks at the intersections, masked to a soft ellipse about 900 px wide. It sits behind the object.
- Corner motif: two arcs of large circles (radius about 900 px, 4 px stroke, `viral-indigo`), one entering the top-left corner and one the bottom-right, each carrying two solid dots (30 px, `sticker-black`). The arcs rotate slowly (about 4° over the scene) so the dots travel along them. The motif never stops moving.
- Content stack, centred: small line (30 to 34 px) at about y = 260, keyword directly under it, object centred at about y = 540 and about 220 px tall, optional second line + keyword at about y = 860.
- Object: one icon or 3D object that stands for the idea (wallet, padlock, cube, phone, chess piece, stopwatch, key, flag, calculator, magnifier, cash). It scales in 0.5 → 1 with a slight rotation over 0.3 s, floats (±6 px, 3 s sine) and may swap for a second object mid-scene with a 0.2 s blur cross-fade.
- Text appears in spoken order: top line, keyword, then the bottom line a second or two later.

### Text-zoom opener

Used to open a cream scene on a turn in the argument. The first two or three words start at about 4.5x scale, black, cropped by the frame, and shrink to 1.3x in 0.27 s (8 frames, `power4.out`), then ease to 1x over the next 0.2 s. The words then continue as an ordinary one-line caption in the centre of the scene.

### Night card

- Background `#120A1F`, a rose radial glow off the left edge and a small indigo glow low on the right, both drifting slowly.
- Left-aligned at x = 430: line 1 regular weight, line 2 bold, each word fading in as spoken; a 1 px white rule draws left to right under them (0.6 s) with a small white icon arriving at its right end; a final line under the rule, with its last word held grey until spoken.

### Texture title card

- 1.3 s long. Night base with slowly flowing rose, plum and indigo blobs and fine horizontal scanlines.
- Lead-in (60 px) fades in word by word, then the big word (130 px) lands with a 0.15 s blur-in, then the last word fades up from 50% grey.

### UI scene

- Background `#F1EEEA`. On the right two-thirds, a grid of dashboard cards tilted in 3D (rotateX 18°, rotateY -22°, rotateZ 6°) drifting slowly up-left. Use the user's real dashboards; blur anything private.
- On the left, vertically centred: caption line, then the underline → pill, then a third small line, with a pointer hand moving toward the pill.

### Flow scene and icon carousel

- Flow: a 64 px tile on the left, a dashed line draws to the right over 0.6 s, a second tile appears at its end. Keyword above, keyword below.
- Carousel: tile 150 px with a 44 px two-line label beneath it, featured for about 1.0 s; the camera then slides left one column (0.3 s, `power2.inOut`) to the next tile. After the last, zoom out (0.4 s) so all three sit in a row at 64 px with 20 px labels, and continue the sentence beneath them.

### Split-screen proof

- Black canvas. Top panel: the page or dashboard recording, 1920 wide, from y = 0 to about y = 500, bottom corners radius 40 px, scrolling at a steady pace. Bottom panel: the speaker, wide framing, from about y = 560 to 1080, top corners radius 40 px.
- The 60 px black gutter carries one white uppercase word at a time, centred, replaced on each spoken word.
- A large rose counter may sit to the right of the speaker while a number is spoken.
- Enter and leave with the light leak.

### B-roll

- One stock clip in the hook (a crowd from above with long shadows), 3 s. Duotone it to the brand hues and add a dark vignette; set the caption left-aligned at x = 190, vertically centred, building over three lines with the keyword last.

## 7. Transitions

| Transition | Use | Timing |
|---|---|---|
| Light leak | into and out of B-roll, title cards, night cards, UI scenes, split-screen; about 12 uses | 8 to 10 frames in total. Frames 1–2: the outgoing shot tints and brightens. Frame 3: peak, about 95% of the frame near-white. The cut happens under the peak. Frames 4–9: the leak slides off to the left as a soft vertical band, hot at its leading edge, with faint film scratches. |
| Hard cut | A-roll ↔ cream scene, most of the time; about 25 uses | 0 frames. Works because cream scenes and the light A-roll background have similar brightness. |
| Text-zoom | opening a cream scene on a pivot line | see section 6 |
| Cross-dissolve | a jump cut inside one sentence at the same framing | 4 frames |
| Blur-in | first frame of the video only | 3 frames |

Use the light leak when brightness or mood changes a lot (face to night, face to split-screen) and the hard cut when it doesn't. Never use slides, wipes, zoom-blur or glitch transitions; the reference has none.

## 8. Sound effects

Measured on the side channel (left minus right), where the centred voice cancels and the stereo effects remain. 321 distinct events in 189 s.

| Family | Count | What it is | Where |
|---|---|---|---|
| Word tick | about 230 | a soft, dry click around 2 kHz, 60 ms long | one per word as text is revealed, in runs of 3 to 6 at the pace of speech (about 0.13 s apart). On keyword and title-card reveals, night-card lines, cream-scene lines. Not on every plain caption group: roughly two caption groups in three. |
| Transition whoosh / sub hit | about 30 | 0.3 to 0.5 s, energy peaking at 26 to 64 Hz with an airy top | on the cut into each cutaway and each return to face that uses the light leak; peaks 0.15 to 0.2 s after the cut |
| Riser | 4 | 1.0 to 1.7 s swell | into each major section: before the first object scene, before the story section, into each split-screen |
| Pop / thump | about 12 | 0.5 s low pop | each bullet row, each icon callout, each carousel tile (three in a row 0.4 s apart) |
| Ticker | 3 bursts | 10 to 17 clicks of 20 ms, about 60 ms apart | under counting numbers and typed text |
| UI click | 1 or 2 | short mouse click | pointer taps the button mock |
| Paper / cash flutter | 2 | soft flutter | with the falling banknotes |

Levels: ticks about 14 dB under the voice, whooshes and pops 6 to 9 dB under, risers peaking about 3 dB under. Effects are stereo and wide; the voice is dead centre. No effect starts within 60 ms before a stressed consonant.

Map to the Earshot / HyperFrames bank used by the other TVC skills: tick → `click/soft` or `click/tink` at gain 0.15–0.20; whoosh → `swipe/glide` layered with `cut_hit/sub`; riser → `riser/snatch`; pop → `pro_pop_in/round`; ticker → `click/soft` repeated; UI click → `fit/snap/switch_flip`.

## 9. Music and mix

- The reference has a continuous, very quiet tonal bed. In the gaps between words it sits at about -45 dBFS against a voice at about -18 dBFS: roughly 27 dB under the voice. Its notes centre on E♭, A♭ and B♭; no audible drums.
- Target: music 24 to 27 dB under the voice, both measured mono.
- Voice: centred, compressed and steady. Reference loudness -14.9 LUFS integrated, loudness range 3.6 LU.
- Deliver at -14 LUFS, true peak at most -1.5 dBTP.

## 10. Colour tokens for video

| Token | Hex | Video use |
|---|---|---|
| `viral-rose` | `#CE4272` | keywords, asterisks, counters, underline start |
| `viral-plum` | `#8E397A` | icon tiles, flat fallback for the gradient |
| `viral-indigo` | `#4C3481` | corner arcs, underline end |
| `gradient-brand` | `linear-gradient(90deg, #CE4272, #4C3481)` | pills, clicked button, gradient discs |
| `surface` | `#F5F0E8` | cream scenes |
| vignette | `#E4DACB` | cream scene corners (derived, 8% darker than `surface`) |
| `surface` night | `#120A1F` | night card, title card base |
| `accent-text` night | `#F0A3C0` | keywords on night and over dark clothing |
| `ink` | `#1A1A1A` | text on cream and on the light A-roll background |
| `ink-muted` night | `#C2B6CC` | not-yet-spoken words on night |
| `border` | `#E8D7E1` | centre grid |
| `sticker-black` / `sticker-white` | `#000000` / `#FFFFFF` | gutter, dots, caption text on dark |

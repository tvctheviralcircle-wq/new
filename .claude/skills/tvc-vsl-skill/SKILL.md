---
name: tvc-vsl-skill
description: "Edit a raw talking-head recording into a finished 16:9 VSL (video sales letter) in the TVC VSL style: tight cuts, word-by-word captions with italic keyword accents, gradient pills, full-screen cream and night motion-graphic cutaways, light-leak transitions, split-screen proof sections, per-word tick SFX, sub whooshes and a very quiet music bed, all in The Viral Circle design system. Use this whenever the user asks for a VSL, sales video, landing-page video, webinar opener, offer video or any horizontal talking-head edit for The Viral Circle / TVC, or says 'edit this like the VSL', 'VSL style', 'TVC VSL', even if they don't name the skill. For vertical 9:16 TikTok/Reels edits use tvc-motion-graphic-style or tvc-green-screen-edits instead."
---

# TVC VSL skill

Turn a raw talking-head recording into a finished 16:9 video sales letter. The edit style was reverse-engineered frame by frame from one reference VSL (3 min 9 s, 4K, 29.97 fps); its colours are replaced by The Viral Circle design system, everything else (layout, motion, timing, cuts, sound) is kept.

Work autonomously end to end and verify your own output. Stop to ask only when an input is missing or a choice can't be undone.

## What makes this style (read this first)

The viewer never looks at a plain talking head for more than a second or two. Six things do that:

1. **The speaker is never alone.** Every A-roll second carries a small word-by-word caption, and most carry a second element: an italic keyword, a pill, a bullet list, an icon callout.
2. **Two-tier captions.** A small quiet sans line carries the sentence; the one word that matters is set huge, italic and coloured. Size contrast is about 1 : 3.
3. **Full-screen cutaways every 5 to 8 seconds.** A clean cream scene with one object, one small line and one keyword; or a night title card. They take about a third of the runtime.
4. **Light-leak transitions hide the big cuts.** A 0.3 s burn to near-white covers the cut into and out of cutaways.
5. **Sound follows text.** A soft tick lands on each revealed word, a low whoosh on each scene change, and the music is so quiet it is felt more than heard.
6. **No dead air.** Pauses are cut to under 0.2 s; the reference has 19 gaps longer than 0.16 s in 189 s.

Measured values for all of this are in `references/style-spec.md`. Read it before building anything. To see the look, open the images in `assets/reference-frames/` (`sheet-01..08.jpg` is the whole reference at 1 frame per second; `motion-*.jpg` are frame-by-frame strips of each animation). `references/reference-breakdown.md` is the shot-by-shot timeline and `references/components.md` has HTML/CSS/GSAP for each on-screen component.

The reference frames show another company's video with its red-orange palette. Copy its structure, motion and timing. Never copy its colours, fonts, wording, logo or footage.

## Inputs to collect

Ask only for what is missing:

- **Raw video** of the speaker, landscape, ideally 4K (4K lets you punch in to 200% on a 1080p timeline without softness).
- **Script**, if one exists. Use it for spelling and to find retakes.
- **Music file** and the start second. Never pick a commercial track yourself. No music supplied: deliver without and say so.
- **Proof assets** for split-screen sections: a screen recording or the URL of the landing page, dashboard screenshots, result numbers. Real proof only; never invent a screenshot or a figure.
- **Icons / 3D objects / stock clips**, if the user has them. Without them, build icons as typographic glyph tiles (see Brand).
- **Output size**: default 1920x1080 at 30 fps. 3840x2160 on request.

## Hard rules

1. Remove every retake, false start and doubled phrase; keep the last complete take.
2. Cuts land in silence, never mid-word. Lips and voice stay in sync to the frame.
3. Nothing ever covers the speaker's eyes or mouth. Large keywords may sit over the chest or behind the head.
4. On a full-screen cutaway the cutaway's own text replaces the captions; never show both.
5. TVC colours and type only (see Brand). No colour sampled from the reference.
6. Every number, screenshot and testimonial on screen is real and supplied by the user. Mark anything illustrative as "Illustrative" on screen and flag it in the delivery note.
7. The voice is the main thing. Music sits 24 to 27 dB under it; SFX never mask a word.
8. No outro, logo sting or end card. The video ends on the speaker about 0.5 s after the last word.

## Workflow

### 1. Setup

Use the same toolchain as the `tvc-motion-graphic-style` skill and follow its Step 0 if that skill is available: FFmpeg, HyperFrames (HTML + GSAP compositions rendered through headless Chromium), faster-whisper with word timestamps, the Earshot SFX engine, OpenCV for face detection, and Montserrat + Poppins from `@fontsource`. If that skill is not installed, any deterministic HTML/GSAP renderer or Remotion works; the spec does not depend on the tool.

Cloud sessions block many hosts. If a download is refused, say which host and ask for it to be allowed rather than working around it.

### 2. Ingest, transcribe, find retakes

- Copy the raw file; never edit the original. Probe it, extract 16 kHz mono audio, make a contact sheet.
- Transcribe with word timestamps. Find retakes (any word longer than 0.8 s is a suspect; compare against the script). Take exact boundaries from a 10 ms RMS energy map, not from Whisper.
- Report the retakes found before cutting.

### 3. Cut list

- Start 0.03 s before the first word; end 0.5 s after the last.
- Trim every pause over 0.25 s down to 0.15 s (0.08 s after the last word, 0.07 s before the next). This is tighter than the 9:16 skills because a VSL has no jump-cut zooms on every cut to hide slack.
- Don't leave a segment shorter than 1.0 s; merge instead. Snap cuts to frames.

### 4. Beat sheet (the creative step; do not skip)

Before any graphics, write a beat sheet: one row per sentence or clause with start, end, the words, and a treatment from the menu in `references/style-spec.md` section 3. Then check it against the pacing rules:

- A-roll with overlays about 60% of runtime, full-screen cutaways about 34%, split-screen proof about 6%.
- A full-screen cutaway roughly every 5 to 8 s of A-roll; no A-roll stretch over 10 s without one.
- Cutaways last 2 to 7 s; at least 1.5 s of face between two cutaways.
- One keyword per clause, at most. If everything is emphasised, nothing is.
- Hook (first 6 to 8 s): open on the face with a caption and a moving graphic behind the speaker inside the first second, then cut to B-roll or a title card by second 3.
- Speaker introduction ("My name is…") gets the dashed name box, plain face, no cutaway.
- Proof and mechanism sections get split-screen with the real page or dashboard.
- Guarantee, offer and the final call to action stay on the face.

Anchor every row by phrase (`P("phrase")` gives the start of that phrase in the cut transcript), never by hard-coded seconds, so a re-cut does not break the graphics.

### 5. Picture: A-roll

- Three framings from the 4K source on a 1080p timeline: WIDE (100%, head about 22% of frame height), MEDIUM (about 130%), CLOSE (about 165%). Change framing only at a cut that follows a cutaway, never mid-sentence. Start wide and tighten as the argument gets more personal; return to wide for the offer.
- When text sits on one side for a whole sentence, shift the crop so the speaker sits on the opposite third.
- No continuous drift and no punch-in on every cut. The reference A-roll is locked off between cuts.
- A same-framing jump cut inside one sentence gets a 4-frame cross-dissolve.
- For text behind the head, cut a person matte for that segment only (rembg, or MediaPipe selfie segmentation) and composite: background, text, speaker.
- Build the lip-synced talking head exactly as `tvc-motion-graphic-style` Step 5 describes (picture joined by frame count, audio cut per segment to the same frame count), then audit every cut for 0 ms offset.

### 6. Captions and on-screen text

Build to `references/style-spec.md` sections 4 and 5 and the snippets in `references/components.md`. In short:

- Caption line: Montserrat 700, 38 px, sentence case, 2 to 5 words per group, words fade in one at a time on their own onset (0.12 s, grey to full colour).
- Keyword: Poppins 700 italic, 100 to 120 px, `viral-rose`, blurs in over 0.2 s.
- Pill: a thin gradient line draws under the caption, grows into a pill, the phrase appears inside in white Montserrat 800.
- Spelling comes from the script.

### 7. Cutaways, transitions, split-screen

Build each from `references/components.md`. Take a still of every scene at its settled moment and check nothing clips, overlaps or collides before rendering.

### 8. Sound

Follow `references/style-spec.md` section 8: tick per revealed word, whoosh per scene change, riser into each major section, pop per bullet or icon, ticker under counting numbers, click on UI mocks. Place each sound by its own peak. Expect 250 to 300 cues for 3 minutes, most of them ticks.

### 9. Music and mix

- Soft tonal bed (pads or piano, no hard drums), highpass 90 Hz, dip 2.8 kHz by 5 dB for the voice.
- Level: 24 to 27 dB under the voice, both measured mono. That is 8 to 10 dB quieter than the 9:16 skills; a VSL is long and persuasion needs the words.
- Final: voice + SFX + music, limiter, two-pass loudnorm to -14 LUFS (reference measures -14.9), true peak at most -1.5 dBTP, loudness range under 5 LU.

### 10. Verify before sending

- Re-transcribe the final file: every script sentence once, no retake left, last words are the speaker's last line.
- Lip-sync 0 frames at every cut; every SFX within half a frame of its cue.
- Contact sheet at 1 fps of the final: face never covered, no caption on a cutaway, no clipped text, brand colours only, cutaway share and spacing within the pacing rules.
- 1920x1080, 30 fps, H.264 + AAC, faststart.

## Brand: The Viral Circle design system

The design system is the "The Viral Circle" Design System artifact in the user's account. Read its `project/README.md` and `project/tokens.json` at the start of each job (list the user's design systems and read the one titled "The Viral Circle"); if it has changed, it wins over this table. If it can't be read, say so and use the values below, which were copied from version 2 of its tokens.

| Reference VSL | TVC replacement |
|---|---|
| Red-orange accent `#D85136` (keywords, underlines, icons) | `viral-rose` `#CE4272` on cream and on light A-roll; `#F0A3C0` on night and over dark clothing |
| Red-orange pill | `gradient-brand`: `linear-gradient(90deg, #CE4272, #4C3481)`, white text, radius 30 px |
| White cutaway background with grey vignette | `surface` cream `#F5F0E8`, vignette to `#E4DACB` at the corners |
| Black corner arcs with dots | `viral-indigo` `#4C3481` arcs, `sticker-black` dots |
| Faint grey grid | `border` `#E8D7E1` at 60% |
| Near-black card with red glow | Night `#120A1F` with one rose and one indigo radial glow |
| Red/purple liquid texture card | Night base with slow rose, plum `#8E397A` and indigo blobs and fine scanlines |
| Yellow-orange film burn | White core, then rose, then plum light leak |
| Amber-tinted stock B-roll | Duotone: shadows indigo, highlights rose-tinted cream, dark vignette |
| Black caption text / white caption text | `ink` `#1A1A1A` / `#FFFFFF` |
| Red rounded icon tiles | `viral-plum` `#8E397A` tile or gradient disc with a white inner ring, white glyph |
| Split-screen black gutter, white caps | `sticker-black` gutter, white Montserrat 900 uppercase |
| Quirky geometric sans | Montserrat (700 captions, 800 pills, 900 title cards and numbers) |
| Bold italic display serif keyword | Poppins 700 italic. The system allows only Montserrat and Poppins. If the user asks for the reference's serif look, use Playfair Display 700 italic for keywords only and note the exception. |

Rules that come with the system and matter in video:

- The gradient is always horizontal, rose on the left. Never diagonal, vertical or reversed, never a third hue.
- Text on the gradient is white, bold, 16 px or larger. Rose as text only at 24 px or larger.
- No blue, green, orange or red. Teal `#69C9D0` only inside a TikTok Shop badge.
- No emoji and no exclamation marks in on-screen text. Numerals with units: 150+, 30–35%, 48H.
- No stored logo file yet: do not draw or fake the logo. Leave it out of the video unless the user supplies the PNG.
- The system has no icon library. In video, icons are white Montserrat 800 glyphs or simple white line shapes on a plum tile or gradient disc. Use 3D objects only when the user supplies them, tinted to the brand hues.

## Delivery

Send the MP4, then report in short bullets: retakes removed (raw timestamps), final length, the beat sheet summary (how many cutaways, split-screens, pills, keywords), number of SFX, music level under the voice, anything illustrative that was shown, and any line where the delivery differs from the script.

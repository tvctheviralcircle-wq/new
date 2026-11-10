# Component library (HTML + CSS + GSAP)

Building blocks for the TVC VSL style on a 1920x1080 stage at 30 fps. Timings and sizes come from `style-spec.md`; that file is the authority if the two ever disagree.

These snippets are starting points written from the frame analysis. They have not been through a render in this skill yet, so take a still of each one at its settled moment and check it before a full render.

Conventions:

- Every animation is a paused GSAP timeline registered with the renderer; use `fromTo`, never `from`, so seeking is deterministic. No `Math.random()` at render time: seed anything that looks random.
- `t` is the element's start in seconds on the scene timeline, taken from the word timestamps.
- Prefix ids per scene.

## Contents

1. Tokens and fonts
2. Caption group (word-by-word)
3. Keyword
4. Underline → pill
5. Bullet list
6. Icon tile and callout
7. Dashed box with cursor
8. Cream scene shell (vignette, grid, corner arcs)
9. Text-zoom opener
10. Night card
11. Texture title card
12. Light-leak transition
13. Split-screen proof
14. Counter (percent, money)
15. Button mock with pointer
16. Text behind the head
17. Icon carousel

## 1. Tokens and fonts

```css
:root{
  --rose:#CE4272; --plum:#8E397A; --indigo:#4C3481;
  --grad:linear-gradient(90deg,#CE4272,#4C3481);
  --cream:#F5F0E8; --cream-edge:#E4DACB; --night:#120A1F;
  --rose-on-dark:#F0A3C0; --ink:#1A1A1A; --ink-muted-night:#C2B6CC;
  --hair:#E8D7E1; --black:#000; --white:#fff;
  --sans:"Coolvetica",sans-serif; --serif:"Playfair Display",serif;
}
@font-face{font-family:"Coolvetica";src:url(assets/fonts/coolvetica.otf)}
@font-face{font-family:"Playfair Display";font-style:italic;font-weight:700;src:url(assets/fonts/playfair-display-latin-700-italic.woff2)}
/* .hv = the reference's heavier Coolvetica. Swap for a real Bold/Heavy file when the user has one. */
.hv{-webkit-text-stroke:0.03em currentColor;paint-order:stroke fill}
.stage{position:relative;width:1920px;height:1080px;overflow:hidden;font-family:var(--sans)}
```

## 2. Caption group

```html
<div class="cap cap--center" style="top:600px">
  <span class="w">What</span> <span class="w">happens</span> <span class="w">after</span> <span class="w">that?</span>
</div>
```

```css
.cap{position:absolute;font:38px/1.15 var(--sans);color:var(--white);letter-spacing:-0.005em}
.cap--center{left:0;right:0;text-align:center}
.cap--left{left:190px;text-align:left}
.cap--on-light{color:var(--ink)}
.cap .w{opacity:0;color:#9A9A9A}
.cap--on-light .w{color:#8A7F90}
```

```js
function caption(tl, el, words /* [{t}] in seconds */, endT, onLight){
  const final = onLight ? "#1A1A1A" : "#FFFFFF";
  el.querySelectorAll(".w").forEach((w,i)=>{
    tl.fromTo(w,{opacity:0,color:onLight?"#8A7F90":"#9A9A9A"},
                {opacity:1,color:final,duration:0.12,ease:"power2.out"}, words[i].t);
  });
  tl.set(el,{opacity:0}, endT);           // hard kill, 0.2 s after the last word
}
```

Rules: 2 to 5 words per group; white over the dark shirt and dark scenes, ink on cream and on the light wall; never across the face.

## 3. Keyword

```html
<div class="kw" style="left:0;right:0;top:628px;text-align:center">Testimonials</div>
```

```css
.kw{position:absolute;font:italic 700 110px/1 var(--serif);letter-spacing:-0.01em;color:var(--rose)}
.kw--on-dark{color:var(--rose-on-dark)}
.kw--scene{font-size:84px}
.kw--giant{font-size:210px}
```

```js
tl.fromTo(kw,{opacity:0,filter:"blur(14px)",scale:1.06},
             {opacity:1,filter:"blur(0px)",scale:1,duration:0.2,ease:"power2.out"}, t);
```

Place it so its cap line overlaps the caption line above by about 10 px; the two read as one lock-up. Use `.kw--on-dark` whenever the word sits over the speaker's dark clothing.

## 4. Underline → pill

```html
<div class="pillwrap" style="left:50%;top:668px">
  <div class="pill"><span class="pill__t hv">That's your problem</span></div>
</div>
```

```css
.pillwrap{position:absolute;transform:translateX(-50%)}
.pill{height:137px;padding:0 44px;border-radius:30px;background:var(--grad);
      display:flex;align-items:center;transform-origin:50% 0;overflow:hidden}
.pill__t{font:62px/1 var(--sans);color:var(--white);white-space:nowrap}
.pill--sm{height:64px;padding:0 22px;border-radius:30px}
.pill--sm .pill__t{font-size:30px}
```

```js
// phase 1: 3px line draws left to right
tl.fromTo(pill,{scaleY:3/137,clipPath:"inset(0 100% 0 0 round 2px)"},
               {clipPath:"inset(0 0% 0 0 round 2px)",duration:0.2,ease:"power2.out"}, t);
tl.set(pillText,{opacity:0,y:12}, t);
// phase 2: grows into the pill, phrase rises into it
tl.to(pill,{scaleY:1,clipPath:"inset(0 0% 0 0 round 30px)",duration:0.1,ease:"power3.out"}, t+0.45);
tl.to(pillText,{opacity:1,y:0,duration:0.12}, t+0.47);
```

Start phase 1 on the last word of the caption above; start phase 2 on the first word of the pill phrase.

## 5. Bullet list

```html
<ul class="bul" style="left:1190px;top:205px">
  <li><i class="ast"></i><span class="w">You</span> <span class="w">pay</span> <span class="w">the</span> <span class="w">ad</span> <span class="w">budget.</span></li>
</ul>
```

```css
.bul{position:absolute;list-style:none;margin:0;padding:0;font:34px/1 var(--sans);color:var(--ink)}
.bul li{display:flex;align-items:center;gap:16px;margin-bottom:26px}
.ast{width:30px;height:30px;background:var(--rose);
     clip-path:polygon(42% 0,58% 0,58% 30%,80% 9%,91% 20%,70% 42%,100% 42%,100% 58%,70% 58%,91% 80%,80% 91%,58% 70%,58% 100%,42% 100%,42% 70%,20% 91%,9% 80%,30% 58%,0 58%,0 42%,30% 42%,9% 20%,20% 9%,42% 30%)}
.bul .w{opacity:0;color:#8A7F90}
```

```js
tl.fromTo(ast,{scale:0,rotate:-90},{scale:1,rotate:0,duration:0.15,ease:"back.out(2)"}, rowT-0.05);
// then caption() over the row's words
```

Rows stay on screen until the scene changes. Maximum four rows.

## 6. Icon tile and callout

```html
<div class="callout" style="left:170px;top:330px">
  <div class="tile"><span class="glyph">✕</span></div>
  <div class="callout__t"><span class="w">leads</span> <span class="w">stop</span><br><span class="w">applying</span></div>
</div>
```

```css
.callout{position:absolute;display:flex;align-items:center;gap:18px}
.tile{width:64px;height:64px;border-radius:16px;background:var(--plum);display:grid;place-items:center}
.tile--disc{border-radius:50%;background:var(--grad);box-shadow:inset 0 0 0 3px rgba(255,255,255,.9)}
.tile--xl{width:150px;height:150px;border-radius:34px}
.glyph{font:30px/1 var(--sans);color:var(--white)}
.callout__t{font:22px/1.2 var(--sans);color:var(--ink)}
```

```js
tl.fromTo(tile,{scale:0.6,opacity:0},{scale:1,opacity:1,duration:0.2,ease:"back.out(2)"}, t);
```

Glyph: a simple white inline SVG shape as in the reference (people, bell, robot face, phone, file), or a Coolvetica character. The reference also uses bare line icons beside the head with no tile: draw those as 2.5 px `ink` outlines with one `viral-rose` accent stroke, about 80 px. Keep at least 120 px between any callout and the face box.

## 7. Dashed box with cursor

```html
<div class="dbox" style="left:50%;top:800px">
  <span class="dbox__t">Company<br><b>Name</b></span>
  <svg class="dbox__cur" viewBox="0 0 24 24"><path d="M2 2l8 20 3-8 8-3z" fill="#CE4272"/></svg>
</div>
```

```css
.dbox{position:absolute;transform:translateX(-50%);padding:14px 20px;
      background:linear-gradient(90deg,#fff 50%,transparent 0) top/20px 2px repeat-x,
                 linear-gradient(90deg,#fff 50%,transparent 0) bottom/20px 2px repeat-x,
                 linear-gradient(0deg,#fff 50%,transparent 0) left/2px 20px repeat-y,
                 linear-gradient(0deg,#fff 50%,transparent 0) right/2px 20px repeat-y}
.dbox__t{font:56px/1.05 var(--sans);color:var(--white)}
.dbox__t b{color:var(--rose-on-dark);font-weight:700}
.dbox__cur{position:absolute;right:-18px;bottom:-22px;width:34px}
.dbox--on-light{filter:invert(1) hue-rotate(180deg)} /* or restate the gradients in ink */
```

```js
tl.fromTo(box,{clipPath:"inset(0 100% 100% 0)"},{clipPath:"inset(0 0% 0% 0)",duration:0.3}, t);
tl.fromTo(cur,{x:40,y:40,opacity:0},{x:0,y:0,opacity:1,duration:0.25,ease:"power2.out"}, t+0.2);
```

Use for the speaker's company name and for a single word being "selected" (the reference does it on "an answer" and "Simple").

## 8. Cream scene shell

```html
<section class="cream">
  <div class="grid"></div>
  <svg class="arc arc--tl" viewBox="0 0 1800 1800"><circle cx="900" cy="900" r="898" fill="none" stroke="#4C3481" stroke-width="4"/>
    <circle cx="1535" cy="1535" r="15" fill="#000"/><circle cx="1678" cy="1349" r="15" fill="#000"/></svg>
  <svg class="arc arc--br" viewBox="0 0 1800 1800"><circle cx="900" cy="900" r="898" fill="none" stroke="#4C3481" stroke-width="4"/>
    <circle cx="265" cy="265" r="15" fill="#000"/><circle cx="122" cy="451" r="15" fill="#000"/></svg>
  <div class="cap cap--center cap--on-light" style="top:250px;font-size:32px">…</div>
  <div class="kw kw--scene" style="left:0;right:0;top:282px;text-align:center">…</div>
  <div class="obj" style="left:50%;top:540px">…</div>
</section>
```

```css
.cream{position:absolute;inset:0;background:radial-gradient(ellipse 70% 75% at 50% 50%,var(--cream) 40%,var(--cream-edge) 100%)}
.grid{position:absolute;left:510px;top:315px;width:900px;height:450px;opacity:.6;
      background:linear-gradient(var(--hair) 1px,transparent 1px) 0 0/150px 150px,
                 linear-gradient(90deg,var(--hair) 1px,transparent 1px) 0 0/150px 150px;
      -webkit-mask:radial-gradient(ellipse at center,#000 30%,transparent 72%);mask:radial-gradient(ellipse at center,#000 30%,transparent 72%)}
.arc{position:absolute;width:1800px;height:1800px}
.arc--tl{left:-1560px;top:-1420px}
.arc--br{left:1320px;top:560px}
.obj{position:absolute;transform:translate(-50%,-50%);height:220px}
```

```js
tl.fromTo(".arc--tl",{rotate:0},{rotate:4,duration:sceneDur,ease:"none"},0);
tl.fromTo(".arc--br",{rotate:0},{rotate:-4,duration:sceneDur,ease:"none"},0);
tl.fromTo(obj,{scale:0.5,rotate:-8,opacity:0},{scale:1,rotate:0,opacity:1,duration:0.3,ease:"back.out(1.6)"}, objT);
tl.to(obj,{y:"+=6",duration:1.5,yoyo:true,repeat:Math.ceil(sceneDur/1.5),ease:"sine.inOut"}, objT+0.3);
```

The arcs must keep moving for the whole scene; a frozen cream scene looks like a slide.

## 9. Text-zoom opener

```js
// words is the centred one-line caption of the cream scene, ink colour
tl.fromTo(words,{scale:4.5,transformOrigin:"50% 50%"},{scale:1.3,duration:0.27,ease:"power4.out"},0);
tl.to(words,{scale:1,duration:0.2,ease:"power2.out"},0.27);
```

Cut to the cream scene on frame 0 with the words already at 4.5x (they will be cropped by the frame). No fade.

## 10. Night card

```css
.night{position:absolute;inset:0;background:
  radial-gradient(600px 700px at -5% 55%,rgba(206,66,114,.55),transparent 70%),
  radial-gradient(420px 420px at 98% 90%,rgba(76,52,129,.6),transparent 70%),var(--night)}
.night .l1{position:absolute;left:430px;top:500px;font:40px/1.15 var(--sans);color:#fff}
.night .l2{font-weight:800}
.night .rule{position:absolute;left:430px;top:612px;width:560px;height:1px;background:#fff;transform-origin:0 50%}
.night .l3{position:absolute;left:430px;top:650px;font:56px/1 var(--sans);color:#fff}
```

```js
tl.fromTo(".rule",{scaleX:0},{scaleX:1,duration:0.6,ease:"power2.out"}, ruleT);
tl.fromTo(icon,{opacity:0,x:-12},{opacity:1,x:0,duration:0.2}, ruleT+0.5);
// last word of .l3 starts at --ink-muted-night and turns white on its onset
```

Drift both glows about 60 px over the scene.

## 11. Texture title card

```css
.tex{position:absolute;inset:0;background:var(--night);overflow:hidden}
.tex i{position:absolute;border-radius:50%;filter:blur(90px)}
.tex .a{width:900px;height:700px;left:-200px;top:-100px;background:var(--rose);opacity:.75}
.tex .b{width:800px;height:800px;left:900px;top:300px;background:var(--plum);opacity:.7}
.tex .c{width:700px;height:600px;left:500px;top:-200px;background:var(--indigo);opacity:.8}
.tex::after{content:"";position:absolute;inset:0;background:repeating-linear-gradient(0deg,rgba(0,0,0,.28) 0 3px,transparent 3px 7px)}
/* add class hv to .lead and .big */
.tex .lead{position:absolute;right:calc(50% - 330px);top:440px;font:60px/1 var(--sans);color:#fff}
.tex .big{position:absolute;left:0;right:0;top:500px;text-align:center;font:130px/1 var(--sans);color:#fff}
```

Move each blob 120 to 200 px in a different direction over the 1.3 s. Lead-in fades word by word; the big word blurs in over 0.15 s; the last word rises from 50% grey to white.

## 12. Light-leak transition

A full-frame overlay above both shots, `mix-blend-mode: screen`, 9 frames long. The cut between the shots sits at frame 3.

```html
<div class="leak"><i class="leak__wash"></i><i class="leak__band"></i></div>
```

```css
.leak{position:absolute;inset:0;pointer-events:none;mix-blend-mode:screen}
.leak__wash{position:absolute;inset:0;background:radial-gradient(ellipse at 45% 50%,#fff 0,#FFE3EC 35%,#CE4272 75%,#8E397A 100%);opacity:0}
.leak__band{position:absolute;top:-10%;bottom:-10%;width:60%;left:100%;filter:blur(40px);
            background:linear-gradient(90deg,transparent,#8E397A 20%,#CE4272 45%,#FFE3EC 70%,#fff 85%,transparent)}
```

```js
const f = 1/30;
tl.fromTo(".leak__wash",{opacity:0},{opacity:0.95,duration:2*f,ease:"power2.in"}, cut-2*f);
tl.to(".leak__wash",{opacity:0,duration:6*f,ease:"power2.out"}, cut+1*f);
tl.fromTo(".leak__band",{left:"70%"},{left:"-70%",duration:7*f,ease:"power1.in"}, cut);
```

If the user supplies a real film-burn clip, desaturate it, tint it rose, and screen it the same way; a real one looks better than CSS. The outgoing shot may also be pushed toward rose for the two frames before the peak (`filter: saturate(1.4) brightness(1.3)`).

## 13. Split-screen proof

```html
<section class="split">
  <div class="split__top"><video class="page" src="assets/page-scroll.mp4" muted></video></div>
  <div class="split__word">OVER</div>
  <div class="split__bot"><!-- talking-head video, wide framing --></div>
  <div class="count" style="right:330px;top:740px">+0</div>
</section>
```

```css
.split{position:absolute;inset:0;background:var(--black)}
.split__top{position:absolute;left:0;top:0;width:1920px;height:500px;overflow:hidden;border-radius:0 0 40px 40px;background:#fff}
.split__bot{position:absolute;left:0;top:560px;width:1920px;height:520px;overflow:hidden;border-radius:40px 40px 0 0}
.split__word{position:absolute;left:0;right:0;top:512px;text-align:center;font:30px/36px var(--sans);letter-spacing:.02em;color:#fff;text-transform:uppercase}
.count{position:absolute;font:110px/1 var(--sans);color:var(--rose)}
```

Record the page with a headless browser at 1920 wide, scrolling at a constant 250 to 350 px per second, or animate `translateY` on a tall screenshot. Replace `.split__word` text on each spoken word (set, no fade). The speaker panel is the same lip-synced video, cropped to its middle band.

## 14. Counter

```js
function counter(tl, el, from, to, t, dur, fmt){   // fmt e.g. v=>"+"+v.toFixed(1)+"%"  or  v=>"$"+Math.round(v).toLocaleString("en-US")
  const o={v:from};
  tl.to(o,{v:to,duration:dur,ease:"power1.out",onUpdate:()=>{el.textContent=fmt(o.v)}}, t);
}
```

Percent beside a graph: Coolvetica heavy, 30 px, ink, 2.2 s. Money behind the head: 210 px Coolvetica heavy (`.hv`) in rose, 0.8 s. Pair with the ticker sound for the same duration.

## 15. Button mock with pointer

```css
.btn{position:absolute;padding:14px 34px;border-radius:30px;background:#fff;color:var(--indigo);
     font:30px/1 var(--sans);box-shadow:0 4px 20px rgba(76,52,129,.12)}
.btn.is-on{background:var(--grad);color:#fff}
.hand{position:absolute;width:44px}
```

```js
tl.fromTo(btn,{opacity:0,y:10},{opacity:1,y:0,duration:0.2}, t);
tl.fromTo(hand,{x:90,y:110,opacity:0},{x:0,y:0,opacity:1,duration:0.6,ease:"power2.out"}, t+0.2);
tl.add(()=>btn.classList.add("is-on"), t+0.9);
tl.fromTo(btn,{scale:0.96},{scale:1,duration:0.15,ease:"back.out(3)"}, t+0.9);
```

Label it with the real call to action, Title Case, ending with →.

## 16. Text behind the head

1. For that segment only, produce a person matte (rembg `u2net_human_seg`, or MediaPipe selfie segmentation), feathered 2 px, as an alpha video.
2. Layer order: A-roll, then the `.kw--giant` word centred at about y = 150, then the A-roll again masked by the matte.
3. Check three frames: hair edges clean, and the first and last two letters of the word visible on both sides of the head. If the word can't be read, move it in front, over the chest.

## 17. Icon carousel

```js
// three .callout--xl items laid out on a 640px pitch inside .track
items.forEach((it,i)=>{
  tl.fromTo(it.tile,{scale:0.6,opacity:0},{scale:1,opacity:1,duration:0.2,ease:"back.out(2)"}, T[i]);
  if(i>0) tl.to(".track",{x:-640*i,duration:0.3,ease:"power2.inOut"}, T[i]-0.15);
});
tl.to(".track",{x:0,scale:0.43,transformOrigin:"960px 540px",duration:0.4,ease:"power2.inOut"}, T[2]+1.0);
tl.to(".track",{y:-110,duration:0.4,ease:"power2.inOut"}, "<");   // makes room for the next line beneath
```

One pop sound per tile; the three pops land about 0.4 s apart only if the speaker lists the items quickly, otherwise follow the words.

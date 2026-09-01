# TVC Creator Community — GHL export

`tvc-landing-page.html` is a pure HTML/CSS/JS port of the Whop app's landing
page (`tvc-creator-community`), built for pasting into GoHighLevel. It has no
React, no Tailwind, no build step — everything is self-contained per the
`ghl-funnel-builder` skill's rules.

## What's in it

One file, in this order: Nav → Hero (with the VSL that docks on scroll) →
Ticker → Problem → Shift → What We Build → Process → Why We Stand Out →
Guarantee → Who For → Founder → Why Now → Final CTA → Footer → the
"See If You Qualify" modal.

Copy and images point at the same URLs the Whop app uses (Whop's CDN), so
nothing needs re-uploading.

## Setup steps in GHL

1. **Add a native GHL Form element to the page first**, placed before this
   custom code block in the page structure. It needs:
   - First Name (standard field)
   - Email (standard field)
   - A custom field for **Brand / TikTok Shop Name** (text)
   - A custom field for **Selling on TikTok Shop already?** (Yes/No)
   - A custom field for **Sending samples already?** (Yes/No)

   In that form's settings, set the **on-submit action** to redirect to your
   booking/calendar page. That's what actually fires once this page's modal
   hands off to it — GHL keeps handling CAPI, Hyros, GA, and automations
   exactly like it would for a normal GHL form.

2. **Hide that GHL form visually** (don't delete it — the bridge script
   needs its real inputs in the DOM) by giving its wrapper the class
   `tvc-ghl-native-form`, which is already defined in this file's `<style>`
   block, or an inline `style="position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0);"`.

3. **Paste this whole file into one Custom Code / Custom HTML element**,
   placed after the GHL form on the page.

4. **Verify the bridge finds GHL's fields.** Open the live page, open Chrome
   DevTools → Console, and run:

   ```js
   document.querySelectorAll('input[name="first_name"], input[name="email"]').length
   document.querySelectorAll('input[type="radio"]').forEach(el => {
     const label = el.closest('label') || el.parentElement
     console.log({ value: el.value, label: label && label.textContent.trim() })
   })
   document.querySelectorAll('button').forEach(b => console.log({ text: b.textContent.trim().slice(0,40), cls: b.className.slice(0,60) }))
   ```

   If GHL's actual field `name` attributes don't match the guesses in the
   script, open the file and edit the `GHL_FIELD_SELECTORS` object near the
   bottom (search for that name) to match what you saw in the console.

5. **Submit a real test lead** before sending traffic, and confirm it lands
   in GHL with the brand/selling/samples answers attached, then check the
   redirect fires to your booking page.

## Why it's built this way

GHL applies inline styles to its own form via React, so styling GHL's native
form directly is a losing battle. Instead this page has its own fully
custom-styled modal (matching the Whop app's design 1:1) that collects the
same 5 answers, then copies them into GHL's hidden native form fields and
clicks GHL's own submit button — so GHL still owns tracking, CRM, and
automations, and you still own the design.

# **COMPREHENSIVE DEVELOPMENT BRIEF**

## **Project: The Legal AI Director's Prompt Library**

## **Interactive Lead Magnet for Legal AI Newsletter**

---

## **PROJECT OVERVIEW**

**Objective:** Build a high-value, interactive web application that serves as a gated lead magnet for mid-sized law firm decision-makers (Managing Partners and Legal Operations Directors). The tool provides 15-20 copy-paste-ready AI prompts for common legal workflows, organized by practice area and task type, using advanced prompt engineering techniques (Chain-of-Thought, Self-Reflection).

**Target Audience:**

* **Primary:** Tom (Managing Partner, 50-65 years old, non-technical, needs quick ROI justification)  
* **Secondary:** Sarah (Legal Ops Director, 40-50 years old, tech-savvy, needs implementable solutions)

**Core Value Proposition:** "Stop guessing how to prompt AI. Get 15+ battle-tested prompts that turn your associates into AI directors—copy, customize, deploy in under 5 minutes."

**Platform:** Replit (HTML/CSS/JavaScript with optional lightweight backend)

**Lead Capture:** GoHighLevel (GHL) inline form integration (snippet provided)

---

## **SEO & URL STRATEGY**

## **Target URL Path:**

text  
`/legal-ai-prompt-library`

**Alternative URLs (301 redirects to primary):**

* `/ai-prompts-for-lawyers`  
* `/legal-prompt-templates`  
* `/ai-director-prompts`

## **Target SEO Keywords (Integrate Throughout):**

**Primary Keywords:**

* Legal AI prompts  
* AI prompts for lawyers  
* Legal prompt templates  
* Chain-of-thought prompting for legal  
* AI contract review prompts  
* Legal document analysis AI

**Secondary Keywords:**

* Law firm AI tools  
* AI for legal research  
* Discovery AI prompts  
* Legal AI automation  
* Prompt engineering for lawyers  
* AI legal assistant prompts

**Long-Tail Keywords:**

* How to prompt AI for contract review  
* Best AI prompts for legal discovery  
* Free legal AI prompt library  
* AI prompts for law firm efficiency

## **Meta Tags Required:**

xml  
`<title>Free Legal AI Prompt Library | 15+ Ready-to-Use Prompts for Lawyers</title>`  
`<meta name="description" content="Get 15+ battle-tested AI prompts for contract review, discovery, legal research & more. Copy-paste templates using Chain-of-Thought techniques. Free access for legal professionals.">`  
`<meta name="keywords" content="legal AI prompts, AI prompts for lawyers, legal prompt templates, contract review AI, legal AI tools">`  
`<meta property="og:title" content="The Legal AI Director's Prompt Library | Free Templates">`  
`<meta property="og:description" content="Turn your legal team into AI directors with 15+ copy-ready prompts for contract review, discovery, research & more.">`  
`<meta property="og:image" content="[URL to branded social share image]">`  
`<meta property="og:url" content="https://[yourdomain].com/legal-ai-prompt-library">`  
`<meta name="twitter:card" content="summary_large_image">`

---

## **PAGE STRUCTURE & CONTENT**

## **Section 1: Hero Section (Always Visible \- Above the Blur)**

**H1 (Primary Headline):**

text  
`"The Legal AI Director's Prompt Library"`

**Style:** Bold, 48-56px font size, dark navy (\#1a1f36) or brand primary color

**Subheading (Preview Text \- 2 lines max):**

text  
`"15+ battle-tested AI prompts that turn your associates into AI directors. Copy, customize, deploy—no technical skills required. Free for legal professionals."`

**Style:** 20-24px, medium weight, secondary color (gray \#4a5568), line-height 1.5

**Supporting Copy (3-4 sentences, visible above blur):**

text  
`Stop wasting time with vague prompts that produce mediocre outputs. This library gives you exact prompts for contract review, discovery summarization, legal research, and more—using Chain-of-Thought and Self-Reflection techniques proven to improve AI accuracy by 40%+.`

`Each prompt includes:`  
`✓ Exact wording (copy-paste ready)`  
`✓ Use case example`  
`✓ Expected output preview`  
`✓ Verification checklist`

`Enter your email below to unlock the full library →`

**Visual Elements (Above Blur):**

* **Icon/Illustration:** Minimalist line art showing a lawyer directing/conducting (like orchestrating) multiple AI tool icons  
* **Badge/Trust Indicator:** "Used by 500+ legal professionals" or "Featured in \[Legal AI Newsletter\]"  
* **Preview Cards:** Show 2-3 prompt cards (titles only, content blurred) to tease value

---

## **Section 2: Lead Capture Form (Overlay, Always Visible)**

**Form Positioning:**

* **Desktop:** Center-screen modal overlay with semi-transparent dark backdrop (rgba(0,0,0,0.7))  
* **Mobile:** Full-screen takeover

**Form Design:**

* Clean, minimal design matching brand aesthetic  
* White background, subtle shadow (box-shadow: 0 10px 40px rgba(0,0,0,0.15))  
* Rounded corners (border-radius: 12px)

**Form Copy:**

**Form Headline (Above Fields):**

text  
`"Unlock 15+ AI Prompts for Law Firms"`

**Style:** Bold, 24-28px, centered

**Form Subheading:**

text  
`"Get instant access to the full library. No credit card required."`

**Style:** 16px, gray, centered

**GHL Form Integration:**  
Embed the provided GHL iframe snippet:

xml  
`<div id="lead-form-container" class="form-overlay active">`  
  `<div class="form-wrapper">`  
    `<h2 class="form-title">Unlock 15+ AI Prompts for Law Firms</h2>`  
    `<p class="form-subtitle">Get instant access to the full library. No credit card required.</p>`  
      
    `<iframe`   
      `src="https://api.leadconnectorhq.com/widget/form/Cj9UhspkV2U5S7OBr13E"`   
      `style="width:100%;height:400px;border:none;border-radius:8px"`   
      `id="inline-form-Cj9UhspkV2U5S7OBr13E"`   
      `data-layout="{'id':'INLINE'}"`   
      `data-trigger-type="alwaysShow"`   
      `data-trigger-value=""`   
      `data-activation-type="alwaysActivated"`   
      `data-activation-value=""`   
      `data-deactivation-type="neverDeactivate"`   
      `data-deactivation-value=""`   
      `data-form-name="Cyberaktive AI Lead Magnet"`   
      `data-height="400"`   
      `data-layout-iframe-id="inline-form-Cj9UhspkV2U5S7OBr13E"`   
      `data-form-id="Cj9UhspkV2U5S7OBr13E"`   
      `title="Cyberaktive AI Lead Magnet">`  
    `</iframe>`  
  `</div>`  
`</div>`

`<script src="https://link.msgsndr.com/js/form_embed.js"></script>`

**Form Behavior:**

1. **On Page Load:** Form overlay visible, content below progressively blurred (blur increases from 0px at top to 10px at bottom using CSS gradient mask)  
2. **On Form Submission:**  
   * Form fades out (300ms transition)  
   * Blur effect removes (300ms transition)  
   * Success message shows briefly: "🎉 Success\! Your prompts are unlocked below."  
   * Store submission status in `localStorage` to persist unlock state  
3. **On Return Visit (if form previously submitted):** Skip form, show content directly

---

## **Section 3: Prompt Library Interface (Initially Blurred, Unlocks After Form)**

**Layout Design:**

* **Filter/Search Bar (Sticky Top):**  
  * Search input: "Search prompts..." (filters by keyword in title/description)  
  * Category filter pills: `All | Contract Review | Discovery | Legal Research | Client Intake | Drafting | Due Diligence`  
  * Sort dropdown: `Most Popular | Practice Area | Alphabetical`

**Prompt Card Design:**

Each prompt displayed as a card in a responsive grid (3 columns desktop, 2 tablet, 1 mobile):

text  
`┌─────────────────────────────────────────┐`  
`│ 📄 Contract Review                       │`  
`│ ─────────────────────────────────────── │`  
`│ Chain-of-Thought Commercial Lease       │`  
`│ Analysis                                 │`  
`│                                          │`  
`│ Use Case: Review 30-40 page commercial  │`  
`│ lease for tenant representation         │`  
`│                                          │`  
`│ Time Savings: ~3 hours per contract     │`  
`│                                          │`  
`│ [View Full Prompt] [Copy to Clipboard]  │`  
`└─────────────────────────────────────────┘`

**Card Elements:**

* **Icon/Emoji:** Practice area indicator (📄 Contracts, 🔍 Discovery, 📚 Research, etc.)  
* **Category Tag:** Small pill badge (e.g., "Contract Review")  
* **Prompt Title:** Bold, 18-20px  
* **Use Case:** 1-2 sentence description  
* **Time Savings:** Bold metric (e.g., "Saves \~3 hours per contract")  
* **Difficulty Badge:** "Beginner" (green), "Intermediate" (yellow), "Advanced" (orange)  
* **Action Buttons:**  
  * **"View Full Prompt"** → Expands card to show full prompt text \+ verification checklist  
  * **"Copy to Clipboard"** → One-click copy with success toast notification

**Expanded Card View (Modal or Accordion):**

When user clicks "View Full Prompt":

text  
`┌──────────────────────────────────────────────────┐`  
`│ ✕ Close                                           │`  
`│ ──────────────────────────────────────────────── │`  
`│ Chain-of-Thought Commercial Lease Analysis       │`  
`│ ──────────────────────────────────────────────── │`  
`│                                                   │`  
`│ Use Case:                                         │`  
`│ Review 30-40 page commercial lease for tenant    │`  
`│ representation with focus on risk mitigation     │`  
`│                                                   │`  
`│ Technique: Chain-of-Thought Prompting            │`  
`│                                                   │`  
`│ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ │`  
`│ THE PROMPT:                                       │`  
`│ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ │`  
`│                                                   │`  
`│ [Prompt text in monospace font, light gray       │`  
`│  background, easily readable - full prompt below] │`  
`│                                                   │`  
`│ [📋 Copy Full Prompt]                            │`  
`│                                                   │`  
`│ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ │`  
`│ VERIFICATION CHECKLIST:                           │`  
`│ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ │`  
`│ ☑ Review Phase 1 termination clause findings     │`  
`│ ☑ Verify indemnification language against firm   │`  
`│   standard positions                              │`  
`│ ☑ Cross-check dates and notice periods           │`  
`│ ☑ Flag any AI assumptions for manual review      │`  
`│                                                   │`  
`│ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ │`  
`│ EXPECTED OUTPUT:                                  │`  
`│ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ │`  
`│ 4-6 page structured memo with step-by-step       │`  
`│ reasoning for each lease section analyzed        │`  
`│                                                   │`  
`└──────────────────────────────────────────────────┘`

---

## **PROMPT LIBRARY CONTENT (15-20 Prompts)**

**You MUST include these prompts organized by category:**

## **Category 1: Contract Review (5 prompts)**

## **Prompt 1: Chain-of-Thought Commercial Lease Analysis**

* **Difficulty:** Intermediate  
* **Time Savings:** \~3 hours per contract  
* **Full Prompt:**

text  
`You are a commercial real estate attorney reviewing a lease on behalf of a tenant. Analyze this document in three phases:`

`Phase 1: Identify all termination, renewal, and assignment clauses. For each clause, explain your reasoning for why it's significant and whether it favors landlord or tenant.`

`Phase 2: Review indemnification, liability caps, and insurance provisions. Flag any tenant-unfavorable language and explain why it creates risk.`

`Phase 3: Compare lease terms to market-standard tenant protections (right to sublease, maintenance obligations, rent escalation caps). Note any deviations and their business impact.`

`For each phase, show your step-by-step reasoning before stating conclusions.`

`[PASTE LEASE TEXT HERE]`

* **Verification Checklist:**  
  * ☑ Review Phase 1 termination clause findings against lease sections  
  * ☑ Verify indemnification language against firm standard positions  
  * ☑ Cross-check dates and notice periods  
  * ☑ Flag any AI assumptions for manual review

## **Prompt 2: Self-Reflection NDA Review**

* **Difficulty:** Beginner  
* **Time Savings:** \~45 minutes per NDA  
* **Full Prompt:**

text  
`You are reviewing a Non-Disclosure Agreement (NDA) for a technology company. Analyze the following:`

`1. Scope of confidential information (is it too broad?)`  
`2. Exclusions from confidentiality (are standard carve-outs included?)`  
`3. Term and termination provisions`  
`4. Remedies and liability limitations`

`After your analysis, review your work and identify:`  
`- Any conclusions based on assumptions vs. explicit contract language`  
`- Any ambiguous terms that require clarification`  
`- Any standard NDA provisions that are missing`

`Flag these issues clearly.`

`[PASTE NDA TEXT HERE]`

* **Verification Checklist:**  
  * ☑ Confirm all flagged ambiguities are genuine  
  * ☑ Check that standard carve-outs are identified  
  * ☑ Verify term dates and trigger events

## **Prompt 3: Vendor Agreement Risk Assessment**

* **Difficulty:** Intermediate  
* **Time Savings:** \~2 hours per agreement

## **Prompt 4: Employment Agreement Compliance Check**

* **Difficulty:** Beginner  
* **Time Savings:** \~90 minutes per agreement

## **Prompt 5: M\&A Purchase Agreement Key Terms Summary**

* **Difficulty:** Advanced  
* **Time Savings:** \~4 hours per agreement

---

## **Category 2: Discovery & Litigation (4 prompts)**

## **Prompt 6: Email Discovery Chronology with Self-Reflection**

* **Difficulty:** Intermediate  
* **Time Savings:** \~10 hours per matter  
* **Full Prompt:**

text  
`Summarize these emails chronologically, focusing on communications between [PARTY A] and [PARTY B] regarding [TOPIC].`

`For each significant exchange:`  
`1. Date and participants`  
`2. Key facts discussed`  
`3. Any admissions, commitments, or contradictions`  
`4. Relevant attachments mentioned`

`After your summary, review your work and identify:`  
`- Any dates or facts you're uncertain about`  
`- Any conclusions based on inference vs. explicit statements`  
`- Any contradictions between emails you may have missed`  
`- Any gaps in the chronology that suggest missing emails`

`Flag these issues before finalizing your summary.`

`[PASTE EMAIL TEXT OR UPLOAD FILES]`

* **Verification Checklist:**  
  * ☑ Cross-check flagged date uncertainties against email headers  
  * ☑ Review flagged inferences to confirm they're labeled as such  
  * ☑ Verify key quotes are accurate

## **Prompt 7: Deposition Prep Document Summary**

* **Difficulty:** Intermediate  
* **Time Savings:** \~6 hours per deposition

## **Prompt 8: Case Law Research for Motion to Dismiss**

* **Difficulty:** Advanced  
* **Time Savings:** \~5 hours per motion

## **Prompt 9: Interrogatory Response Drafting**

* **Difficulty:** Beginner  
* **Time Savings:** \~3 hours per set

---

## **Category 3: Legal Research (3 prompts)**

## **Prompt 10: Chain-of-Thought Statutory Interpretation**

* **Difficulty:** Advanced  
* **Time Savings:** \~4 hours per research memo

## **Prompt 11: Regulatory Compliance Analysis**

* **Difficulty:** Intermediate  
* **Time Savings:** \~3 hours per compliance check

## **Prompt 12: Case Law Synthesis for Client Memo**

* **Difficulty:** Intermediate  
* **Time Savings:** \~4 hours per memo

---

## **Category 4: Client Management (3 prompts)**

## **Prompt 13: Client Intake Summary**

* **Difficulty:** Beginner  
* **Time Savings:** \~45 minutes per intake

## **Prompt 14: Engagement Letter Drafting**

* **Difficulty:** Beginner  
* **Time Savings:** \~30 minutes per letter

## **Prompt 15: Client Update Email (Matter Status)**

* **Difficulty:** Beginner  
* **Time Savings:** \~20 minutes per update

---

## **Category 5: Due Diligence (3 prompts)**

## **Prompt 16: Corporate Records Review Checklist**

* **Difficulty:** Intermediate  
* **Time Savings:** \~3 hours per transaction

## **Prompt 17: Real Estate Due Diligence Document Analysis**

* **Difficulty:** Intermediate  
* **Time Savings:** \~5 hours per property

## **Prompt 18: IP Portfolio Assessment**

* **Difficulty:** Advanced  
* **Time Savings:** \~6 hours per portfolio

---

## **TECHNICAL SPECIFICATIONS**

## **Technology Stack:**

**Frontend:**

* HTML5  
* CSS3 (use CSS Grid/Flexbox for responsive layout)  
* Vanilla JavaScript (no framework dependencies for speed)  
* Optional: Tailwind CSS or Bootstrap for rapid styling

**Key Libraries/Dependencies:**

xml  
*`<!-- Copy-to-Clipboard -->`*  
`<script src="https://cdn.jsdelivr.net/npm/clipboard@2.0.11/dist/clipboard.min.js"></script>`

*`<!-- Search/Filter (optional, can use vanilla JS) -->`*  
`<script src="https://cdn.jsdelivr.net/npm/fuse.js@6.6.2"></script>`

*`<!-- GHL Form Script -->`*  
`<script src="https://link.msgsndr.com/js/form_embed.js"></script>`

**No Backend Required:** All prompt data stored in JSON file loaded on page load.

---

## **Progressive Blur Implementation:**

**CSS for Blur Effect (Before Form Submission):**

css  
*`/* Blur overlay container */`*  
`.content-blur-overlay {`  
  `position: relative;`  
`}`

`.content-blur-overlay.locked::after {`  
  `content: '';`  
  `position: absolute;`  
  `top: 0;`  
  `left: 0;`  
  `right: 0;`  
  `bottom: 0;`  
  `backdrop-filter: blur(0px);`  
  `-webkit-backdrop-filter: blur(0px);`  
  `background: linear-gradient(`  
    `to bottom,`  
    `rgba(255,255,255,0) 0%,`  
    `rgba(255,255,255,0) 20%,`  
    `rgba(255,255,255,0.3) 40%,`  
    `rgba(255,255,255,0.7) 60%,`  
    `rgba(255,255,255,0.95) 80%,`  
    `rgba(255,255,255,1) 100%`  
  `);`  
  `pointer-events: none;`  
  `z-index: 5;`  
`}`

*`/* Blur the actual content */`*  
`.content-blur-overlay.locked .prompt-library-container {`  
  `filter: blur(3px);`  
  `-webkit-filter: blur(3px);`  
  `transition: filter 0.3s ease;`  
`}`

`.content-blur-overlay.unlocked .prompt-library-container {`  
  `filter: none;`  
  `-webkit-filter: none;`  
`}`

*`/* Form overlay positioning */`*  
`.form-overlay {`  
  `position: fixed;`  
  `top: 50%;`  
  `left: 50%;`  
  `transform: translate(-50%, -50%);`  
  `z-index: 1000;`  
  `background: white;`  
  `padding: 40px;`  
  `border-radius: 12px;`  
  `box-shadow: 0 10px 40px rgba(0,0,0,0.15);`  
  `max-width: 500px;`  
  `width: 90%;`  
  `transition: opacity 0.3s ease, transform 0.3s ease;`  
`}`

`.form-overlay.hidden {`  
  `opacity: 0;`  
  `transform: translate(-50%, -50%) scale(0.9);`  
  `pointer-events: none;`  
`}`

*`/* Backdrop */`*  
`.form-backdrop {`  
  `position: fixed;`  
  `top: 0;`  
  `left: 0;`  
  `right: 0;`  
  `bottom: 0;`  
  `background: rgba(0,0,0,0.7);`  
  `z-index: 999;`  
  `transition: opacity 0.3s ease;`  
`}`

`.form-backdrop.hidden {`  
  `opacity: 0;`  
  `pointer-events: none;`  
`}`

**JavaScript for Form Unlock Logic:**

javascript  
*`// Check localStorage for previous submission`*  
`window.addEventListener('DOMContentLoaded', function() {`  
  `const hasSubmitted = localStorage.getItem('promptLibraryUnlocked');`  
    
  `if (hasSubmitted === 'true') {`  
    `unlockContent();`  
  `} else {`  
    `showForm();`  
  `}`  
`});`

*`// Listen for GHL form submission`*  
*`// GHL fires a custom event on successful submission`*  
`window.addEventListener('message', function(event) {`  
  `// Check if message is from GHL form`  
  `if (event.data.type === 'hsFormCallback' && event.data.eventName === 'onFormSubmitted') {`  
    `handleFormSubmission();`  
  `}`  
`});`

*`// Alternative: Poll for form submission (if GHL doesn't fire event)`*  
`const formIframe = document.getElementById('inline-form-Cj9UhspkV2U5S7OBr13E');`  
`if (formIframe) {`  
  `// Check every 500ms if form was submitted`  
  `const checkInterval = setInterval(() => {`  
    `try {`  
      `// This will throw error due to cross-origin, but GHL should fire event`  
      `// If GHL exposes a callback, use that instead`  
    `} catch(e) {}`  
  `}, 500);`  
`}`

`function handleFormSubmission() {`  
  `// Store unlock status`  
  `localStorage.setItem('promptLibraryUnlocked', 'true');`  
    
  `// Show success message`  
  `showSuccessMessage();`  
    
  `// Unlock content after 1.5 seconds`  
  `setTimeout(() => {`  
    `unlockContent();`  
  `}, 1500);`  
`}`

`function showSuccessMessage() {`  
  `const successDiv = document.createElement('div');`  
  `successDiv.className = 'success-message';`  
  `successDiv.innerHTML = '🎉 Success! Your prompts are unlocked below.';`  
  `` successDiv.style.cssText = ` ``  
    `position: fixed;`  
    `top: 20px;`  
    `left: 50%;`  
    `transform: translateX(-50%);`  
    `background: #10b981;`  
    `color: white;`  
    `padding: 16px 32px;`  
    `border-radius: 8px;`  
    `font-weight: 600;`  
    `z-index: 10000;`  
    `box-shadow: 0 4px 12px rgba(0,0,0,0.15);`  
  `` `; ``  
  `document.body.appendChild(successDiv);`  
    
  `setTimeout(() => {`  
    `successDiv.style.opacity = '0';`  
    `successDiv.style.transition = 'opacity 0.3s ease';`  
    `setTimeout(() => successDiv.remove(), 300);`  
  `}, 3000);`  
`}`

`function unlockContent() {`  
  `// Hide form`  
  `document.querySelector('.form-overlay').classList.add('hidden');`  
  `document.querySelector('.form-backdrop').classList.add('hidden');`  
    
  `// Remove blur`  
  `document.querySelector('.content-blur-overlay').classList.remove('locked');`  
  `document.querySelector('.content-blur-overlay').classList.add('unlocked');`  
    
  `// Scroll to prompts`  
  `setTimeout(() => {`  
    `document.querySelector('.prompt-library-container').scrollIntoView({`   
      `behavior: 'smooth'`   
    `});`  
  `}, 300);`  
`}`

`function showForm() {`  
  `document.querySelector('.form-overlay').classList.remove('hidden');`  
  `document.querySelector('.form-backdrop').classList.remove('hidden');`  
  `document.querySelector('.content-blur-overlay').classList.add('locked');`  
`}`

---

## **Copy-to-Clipboard Functionality:**

javascript  
*`// Initialize clipboard for all copy buttons`*  
`const clipboard = new ClipboardJS('.copy-btn');`

`clipboard.on('success', function(e) {`  
  `// Show success toast`  
  `const btn = e.trigger;`  
  `const originalText = btn.textContent;`  
    
  `btn.textContent = '✓ Copied!';`  
  `btn.style.background = '#10b981';`  
    
  `setTimeout(() => {`  
    `btn.textContent = originalText;`  
    `btn.style.background = '';`  
  `}, 2000);`  
    
  `e.clearSelection();`  
`});`

`clipboard.on('error', function(e) {`  
  `console.error('Copy failed:', e);`  
  `alert('Copy failed. Please try selecting and copying manually.');`  
`});`

**HTML Structure for Copy Button:**

xml  
`<button`   
  `class="copy-btn"`   
  `data-clipboard-text="[FULL PROMPT TEXT HERE]"`  
  `aria-label="Copy prompt to clipboard">`  
  `📋 Copy to Clipboard`  
`</button>`

---

## **Search & Filter Functionality:**

javascript  
*`// Prompt data structure`*  
`const prompts = [`  
  `{`  
    `id: 1,`  
    `title: "Chain-of-Thought Commercial Lease Analysis",`  
    `category: "Contract Review",`  
    `difficulty: "Intermediate",`  
    `timeSavings: "~3 hours per contract",`  
    `useCase: "Review 30-40 page commercial lease for tenant representation",`  
    `fullPrompt: "[Full prompt text...]",`  
    `verification: ["Item 1", "Item 2"],`  
    `expectedOutput: "4-6 page structured memo..."`  
  `},`  
  `// ... more prompts`  
`];`

*`// Search functionality`*  
`const searchInput = document.getElementById('prompt-search');`  
`searchInput.addEventListener('input', (e) => {`  
  `const query = e.target.value.toLowerCase();`  
  `filterPrompts(query, currentCategory);`  
`});`

*`// Category filter`*  
`const categoryButtons = document.querySelectorAll('.category-filter-btn');`  
`let currentCategory = 'All';`

`categoryButtons.forEach(btn => {`  
  `btn.addEventListener('click', () => {`  
    `currentCategory = btn.dataset.category;`  
    `filterPrompts(searchInput.value, currentCategory);`  
      
    `// Update active state`  
    `categoryButtons.forEach(b => b.classList.remove('active'));`  
    `btn.classList.add('active');`  
  `});`  
`});`

`function filterPrompts(searchQuery, category) {`  
  `const filtered = prompts.filter(prompt => {`  
    `const matchesSearch = !searchQuery ||`   
      `prompt.title.toLowerCase().includes(searchQuery) ||`  
      `prompt.useCase.toLowerCase().includes(searchQuery);`  
      
    `const matchesCategory = category === 'All' ||`   
      `prompt.category === category;`  
      
    `return matchesSearch && matchesCategory;`  
  `});`  
    
  `renderPrompts(filtered);`  
`}`

`function renderPrompts(promptsToRender) {`  
  `const container = document.getElementById('prompts-grid');`  
    
  `if (promptsToRender.length === 0) {`  
    `container.innerHTML = '<p class="no-results">No prompts found. Try a different search or category.</p>';`  
    `return;`  
  `}`  
    
  `` container.innerHTML = promptsToRender.map(prompt => ` ``  
    `<div class="prompt-card" data-id="${prompt.id}">`  
      `<div class="prompt-header">`  
        `<span class="category-badge">${prompt.category}</span>`  
        `<span class="difficulty-badge difficulty-${prompt.difficulty.toLowerCase()}">${prompt.difficulty}</span>`  
      `</div>`  
      `<h3 class="prompt-title">${prompt.title}</h3>`  
      `<p class="prompt-use-case">${prompt.useCase}</p>`  
      `<p class="prompt-time-savings"><strong>Time Savings:</strong> ${prompt.timeSavings}</p>`  
      `<div class="prompt-actions">`  
        `<button class="btn-primary view-prompt-btn" data-id="${prompt.id}">View Full Prompt</button>`  
        `<button class="btn-secondary copy-btn" data-clipboard-text="${escapeHtml(prompt.fullPrompt)}">`  
          `📋 Copy`  
        `</button>`  
      `</div>`  
    `</div>`  
  `` `).join(''); ``  
    
  `// Re-attach event listeners for view buttons`  
  `document.querySelectorAll('.view-prompt-btn').forEach(btn => {`  
    `btn.addEventListener('click', () => {`  
      `openPromptModal(btn.dataset.id);`  
    `});`  
  `});`  
`}`

---

## **Modal for Expanded Prompt View:**

javascript  
`function openPromptModal(promptId) {`  
  `const prompt = prompts.find(p => p.id == promptId);`  
    
  `const modal = document.getElementById('prompt-modal');`  
  `const modalContent = document.getElementById('modal-content');`  
    
  `` modalContent.innerHTML = ` ``  
    `<div class="modal-header">`  
      `<h2>${prompt.title}</h2>`  
      `<button class="modal-close" onclick="closePromptModal()">✕</button>`  
    `</div>`  
      
    `<div class="modal-body">`  
      `<div class="meta-info">`  
        `<span class="category-badge">${prompt.category}</span>`  
        `<span class="difficulty-badge difficulty-${prompt.difficulty.toLowerCase()}">${prompt.difficulty}</span>`  
      `</div>`  
        
      `<div class="section">`  
        `<h3>Use Case</h3>`  
        `<p>${prompt.useCase}</p>`  
      `</div>`  
        
      `<div class="section">`  
        `<h3>The Prompt</h3>`  
        `<pre class="prompt-text">${escapeHtml(prompt.fullPrompt)}</pre>`  
        `<button class="btn-primary copy-btn" data-clipboard-text="${escapeHtml(prompt.fullPrompt)}">`  
          `📋 Copy Full Prompt`  
        `</button>`  
      `</div>`  
        
      `<div class="section">`  
        `<h3>Verification Checklist</h3>`  
        `<ul>`  
          ``${prompt.verification.map(item => `<li>☑ ${item}</li>`).join('')}``  
        `</ul>`  
      `</div>`  
        
      `<div class="section">`  
        `<h3>Expected Output</h3>`  
        `<p>${prompt.expectedOutput}</p>`  
      `</div>`  
    `</div>`  
  `` `; ``  
    
  `modal.classList.add('active');`  
  `document.body.style.overflow = 'hidden';`  
`}`

`function closePromptModal() {`  
  `document.getElementById('prompt-modal').classList.remove('active');`  
  `document.body.style.overflow = '';`  
`}`

*`// Close modal on backdrop click`*  
`document.getElementById('prompt-modal').addEventListener('click', (e) => {`  
  `if (e.target.id === 'prompt-modal') {`  
    `closePromptModal();`  
  `}`  
`});`

---

## **RESPONSIVE DESIGN REQUIREMENTS**

**Breakpoints:**

* **Desktop:** 1024px+ → 3-column grid  
* **Tablet:** 768px-1023px → 2-column grid  
* **Mobile:** \<768px → 1-column, full-width cards

**Mobile-Specific Adjustments:**

* Form overlay becomes full-screen on mobile  
* Search bar and filters stack vertically  
* Font sizes reduce by 10-15%  
* Copy buttons expand to full width  
* Modal takes full screen with scroll

---

## **PERFORMANCE OPTIMIZATION**

1. **Lazy Load Prompts:** Only render visible prompts (implement virtual scrolling if \>20 prompts)  
2. **Minify Assets:** CSS/JS minification in production  
3. **Image Optimization:** Use WebP format for any images, \<100KB each  
4. **Cache Prompt Data:** Store JSON in `sessionStorage` after first load  
5. **Lighthouse Score Target:** 90+ on Performance, Accessibility, SEO

---

## **ACCESSIBILITY (WCAG 2.1 AA Compliance)**

* All interactive elements must have `aria-label` attributes  
* Form inputs must have associated `<label>` elements  
* Color contrast ratio ≥4.5:1 for body text, ≥3:1 for large text  
* Keyboard navigation: Tab through all interactive elements  
* Focus indicators visible on all buttons/inputs  
* Skip-to-content link for screen readers  
* Alt text for all images/icons

---

## **ANALYTICS & TRACKING**

**Key Events to Track:**

1. Page view  
2. Form submission  
3. Content unlock  
4. Prompt card click  
5. Copy button click (track which prompts are most copied)  
6. Search queries (track what users search for)  
7. Category filter clicks  
8. Time on page  
9. Scroll depth

**Implementation:**

javascript  
*`// Google Analytics 4 (or alternative)`*  
`gtag('event', 'prompt_copied', {`  
  `'prompt_title': promptTitle,`  
  `'prompt_category': promptCategory`  
`});`

`gtag('event', 'form_submitted', {`  
  `'form_name': 'Legal AI Prompt Library'`  
`});`

---

## **ERROR HANDLING**

**Scenarios to Handle:**

1. **GHL Form Load Failure:** Show fallback contact form with `mailto:` link  
2. **JavaScript Disabled:** Show message: "Please enable JavaScript to access the prompt library"  
3. **Copy Failure:** Alert user to manually select and copy text  
4. **localStorage Disabled:** Form remains visible, content still accessible after submission (session-based unlock)

---

## **DEPLOYMENT CHECKLIST**

Before going live, verify:

✅ **H1 and subheading visible above blur**  
✅ **Top third of tool preview visible**  
✅ **Form overlay displays correctly on all devices**  
✅ **Form submission triggers content unlock**  
✅ **localStorage persists unlock state**  
✅ **All copy buttons functional**  
✅ **Search and filter work correctly**  
✅ **Modals open/close properly**  
✅ **Responsive on mobile/tablet/desktop**  
✅ **Page loads in \<3 seconds**  
✅ **No console errors**  
✅ **SSL certificate active (HTTPS)**  
✅ **Meta tags and SEO elements in place**  
✅ **Analytics tracking verified**  
✅ **Accessibility audit passed**

---

## **ADDITIONAL NOTES FOR AI DEVELOPMENT AGENT**

**Tone & Voice for Microcopy:**

* Professional but approachable (not stuffy lawyer-speak)  
* Action-oriented button text ("Copy to Clipboard" not "Copy")  
* Reassuring language ("No credit card required," "Instant access")  
* Avoid jargon—assume reader is smart but not technical

**Brand Colors (Placeholder—adjust to your brand):**

* Primary: \#2563eb (blue)  
* Secondary: \#64748b (gray)  
* Success: \#10b981 (green)  
* Warning: \#f59e0b (amber)  
* Background: \#f8fafc (light gray)  
* Text: \#1e293b (dark gray)

**Font Recommendations:**

* Headings: Inter, Poppins, or Montserrat (bold, 600+ weight)  
* Body: Inter, Open Sans, or System UI  
* Monospace (for prompt text): Fira Code, Source Code Pro, or Courier New

**File Structure for Replit:**

text  
`/legal-ai-prompt-library`  
`├── index.html          (main page)`  
`├── styles.css          (all styles)`  
`├── script.js           (main JS logic)`  
`├── prompts-data.json   (prompt library content)`  
`├── /assets`  
`│   ├── logo.svg`  
`│   ├── hero-illustration.svg`  
`│   └── favicon.ico`  
`└── README.md           (deployment instructions)`

**Final Reminder:**  
This tool's success depends on **immediate perceived value**. The user should see enough in the first 3 seconds (H1, subheading, preview cards) to know this is worth their email. Make the unlock process seamless—no friction, no bugs, no confusion. The prompt content is gold; the UI should get out of the way and let it shine.

**Build with pride—this is a premium tool, not a cheap landing page. 🚀**


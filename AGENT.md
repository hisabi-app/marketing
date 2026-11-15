# 1. Brand Overview

## Project Name
**Hisabi (حسابي)** — "My Account / My Finance"

## Project Type
Open-source personal finance application that reads financial SMS messages, extracts transactions, categorizes spending, and provides insights, dashboards, and reports.

## Core Value Proposition
Hisabi helps everyday people instantly understand their financial habits without spreadsheets, bank integrations, or complex setup.

Users get:
* Automatic expense detection from SMS
* Manual or bulk entry
* Categories & brand tracking
* Clean dashboards to visualize spending
* Detailed analytics & history
* HisabiAI

## Target Audience
* Individuals who want financial clarity
* People who rely on SMS banking
* Users in regions where bank APIs are limited
* Anyone wanting a simple, transparent budgeting tool
* Privacy-conscious users who prefer open-source tools

---

# 2. Brand Identity & Messaging Tone

## Tone Guidelines
The agent must always follow this style:

| Tone | Description |
| :--- | :--- |
| **Friendly, but professional** | Explain things clearly without sounding corporate or stiff. |
| **Empathetic and empowering** | Make users feel supported, not judged for their financial habits. |
| **Simple over technical** | Avoid jargon. Speak like you’re helping a friend understand money. |
| **Clear, concise, and benefit-driven** | Always highlight why a feature matters, not only what it does. |
| **Honest and transparent** | Hisabi is open-source; trust is a core pillar. |
| **Positive and encouraging** | Money can be stressful — the brand should remove anxiety, not add to it. |
| **Modern and clean** | Reflect the product’s design philosophy. |

---

# 3. Messaging Framework

## Primary Message
Hisabi gives you **instant clarity over your money** — automatically and privately — so you can make smarter financial decisions.

## Secondary Messages
* Your financial life, visualized beautifully.
* No spreadsheets. No chaos. Just clarity.
* Open-source, private, and fully in your control.
* Designed for everyday people, not finance experts.

## Emotional Messaging
> “Understand your money without fear.”
> “See where your money goes, effortlessly.”
> “Take control—one transaction at a time.”

---

# 4. Marketing Content Rules
When writing any marketing content, the agent must:

* ✔ **Focus on user benefits**
    * *e.g., “Categories help you understand your habits instantly.”*
* ✔ Keep paragraphs **short and skimmable**
* ✔ Use soft, encouraging **CTA language**
    * *Avoid aggressive sales tone.*
* ✔ Use emojis **only when appropriate**
    * *Landing pages → minimal or none*
    * *Social posts → allowed*
    * *Documentation → none*
* ✔ Favor **clarity over hype**
* ✔ **Maintain accessibility**
    * *Avoid culturally insensitive or region-specific slang.*

---

# 5. Formatting Guidelines

## Headlines
**Short, powerful, human-centered**

* *Examples:*
    * “Your Money, Made Simple.”
    * “See Your Spending Clearly.”

## Sub-headlines
**1–2 lines expanding the value**

* *Examples:*
    * “Hisabi organizes your expenses automatically, so you always know where your money goes.”

## Feature Sections
Follow this structure: *Title*, *Short description*, *Benefit line*

* *Example:*
    * **Smart SMS Detection**
    * Hisabi reads your bank SMS messages instantly.
    * No setup. No manual typing. Just automatic clarity.

## Do Not
* **Do not** invent features that don’t exist.
* **Do not** mention pricing, paid plans or launch offers. Hisabi is free and open source.
* **Do not** make the product sound like a bank, fintech provider, or investment advisory tool.
* **Do not** promise financial outcomes (*e.g., “you will save more money,” “guaranteed to fix budgets”*).

---

# 6. Context the Agent Should Always Know

## What Hisabi is
* A personal finance tracker
* SMS-based expense extractor
* A simple dashboard for financial clarity
* Open-source and self-hosted
* Lightweight and privacy-first

## What Hisabi is not
* A banking app
* A budgeting enforcement tool
* An automated bill-payment system
* A financial advisor

## What Makes Hisabi Special
* Works anywhere that banks use SMS alerts
* Zero-dependency on bank APIs
* Fast, simple onboarding
* Privacy by design
* Community-driven open-source

---

# 7. Example Sentences the Agent Can Use

## Positioning Examples
* “Hisabi helps you see your financial life at a glance.”
* “Track, understand, and improve your spending with zero effort.”
* “You deserve to feel in control of your money — Hisabi makes that easy.”

## CTA Examples
* “Download” (the main CTA)
* “Get product updates” (the secondary CTA)
* “See how Hisabi works”
* “Star on GitHub”

---


## 🎨 Hisabi UI Guidelines

The site uses the same "Wallet" system as the app (see `DESIGN.md` in the app repo, https://github.com/hisabi-app/hisabi). Tokens live in `src/styles/globals.css`.

* **Canvas:** always white or off-white (`--background`, `oklch(0.972 0.002 286)`); never tinted or gradient backgrounds.
* **Cards:** white (`--card`), large radius (22 to 28px), soft shadows, no borders.
* **Ink:** `--foreground` / `--primary` `oklch(0.2 0.004 286)` for text, buttons and the app icon. Buttons are pills.
* **Color:** only from the product itself (category tiles, budget rings in screenshots) and status; no decorative accents.
* **Type:** the device's own font (SF Pro on Apple devices), bold and tight for headings; `font-rounded` for numbers.
* **Logo:** the original Hisabi wordmark with three green bars (`public/logo.svg`, rendered by `src/components/logo.tsx`); the favicons are the bars on their own. The green belongs to the logo only.
* **Product shots:** real screenshots of the app in `public/screens/`, taken from demo data.
* **Motion:** sections rise in once as they scroll into view (`src/components/reveal.tsx`); nothing loops; reduced motion turns it off.
* **Copy:** short sentences, no em dashes, benefits over features, never invent features.

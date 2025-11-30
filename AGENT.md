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
* **Do not** mention pricing unless instructed.
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
* “Join the waitlist”
* “Get early access”
* “Try the demo”
* “See how Hisabi works”

---


## 🎨 Hisabi UI Guidelines
#### Color Palette

The application uses OKLch color space for accessible, consistent colors:

### Core Interface Colors (Light Mode)

| Role | Variable Name | OKLCH Value | Color Interpretation |
| :--- | :--- | :--- | :--- |
| **Brand Accent** | `--brand` | `oklch(0.623 0.214 259.815)` | **Deep Indigo/Purple** (The primary brand color) |
| **Primary Action** | `--primary` | `oklch(72.3% 0.219 149.579)` | **Vibrant Cyan/Green** (Used for main CTAs/active elements) |
| **Background** | `--background` | `oklch(1 0 0)` | **Pure White** |
| **Foreground Text** | `--foreground` | `oklch(0.145 0 0)` | **Near-Black** (Primary text color) |
| **Destructive/Error** | `--destructive` | `oklch(0.577 0.245 27.325)` | **Mid-tone Red/Orange** (Used for errors or warnings) |
| **Border/Input** | `--border` / `--input` | `oklch(0.922 0 0)` | **Light Gray** (For borders and input outlines) |
| **Highlight** | `--highlight` | `oklch(0.852 0.199 91.936)` | **Light Yellow/Green** (Used for subtle highlighting) |
| **Sidebar Primary** | `--sidebar-primary` | `oklch(0.205 0 0)` | **Dark Gray/Black** (Sidebar background/accent) |

---

### Data Visualization Colors (Light Mode Charts)

These variables are specifically used for distinguishing data points in charts (e.g., spending categories):

| Variable Name | OKLCH Value | Color Interpretation |
| :--- | :--- | :--- |
| `--chart-1` | `oklch(0.646 0.222 41.116)` | **Yellow/Orange** |
| `--chart-2` | `oklch(0.6 0.118 184.704)` | **Muted Blue-Green** |
| `--chart-3` | `oklch(0.398 0.07 227.392)` | **Dark Blue** |
| `--chart-4` | `oklch(0.828 0.189 84.429)` | **Lime Green** |
| `--chart-5` | `oklch(0.769 0.188 70.08)` | **Mid-tone Yellow** |


#### Typography

```css
/* Font Stack */
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

/* Scale */
--text-xs: 0.75rem;    /* 12px */
--text-sm: 0.875rem;   /* 14px */
--text-base: 1rem;     /* 16px */
--text-lg: 1.125rem;   /* 18px */
--text-xl: 1.25rem;    /* 20px */
--text-2xl: 1.5rem;    /* 24px */
--text-3xl: 1.875rem;  /* 30px */
```

#### Spacing

```css
/* Spacing Scale (Tailwind) */
--spacing-1: 0.25rem;  /* 4px */
--spacing-2: 0.5rem;   /* 8px */
--spacing-3: 0.75rem;  /* 12px */
--spacing-4: 1rem;     /* 16px */
--spacing-5: 1.25rem;  /* 20px */
--spacing-6: 1.5rem;   /* 24px */
--spacing-8: 2rem;     /* 32px */
```

#### Border Radius

```css
--radius: 0.625rem;    /* 10px - base radius */
--radius-sm: calc(var(--radius) - 4px);
--radius-md: calc(var(--radius) - 2px);
--radius-lg: var(--radius);
--radius-xl: calc(var(--radius) + 4px);
```

### Component Guidelines

#### Cards

```tsx
// Standard card usage
<Card>
    <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Optional description</CardDescription>
    </CardHeader>
    <CardContent>
        {/* Content here */}
    </CardContent>
    <CardFooter>
        {/* Actions here */}
    </CardFooter>
</Card>
```

#### Buttons

| Variant | Use Case |
|---------|----------|
| `default` | Primary actions |
| `secondary` | Secondary actions |
| `outline` | Tertiary actions |
| `ghost` | Inline actions, icons |
| `destructive` | Delete, dangerous actions |
| `link` | Navigation-style buttons |

```tsx
<Button variant="default">Save Changes</Button>
<Button variant="destructive">Delete</Button>
<Button variant="ghost" size="icon">
    <PlusIcon className="h-4 w-4" />
</Button>
```


---

# 8. When in Doubt
The agent should:

1.  Favor simplicity over complexity.
2.  Favor benefits over technical detail.
3.  Preserve trust and user privacy as central themes.
4.  Avoid sounding overly promotional.
5.  Stick to facts about the project.
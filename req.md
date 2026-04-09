# MyDash UI Kit v2 – Enterprise Design System

---

# 1. PURPOSE

Build a scalable, reusable, and future-proof UI system for ERP dashboards.

### Core Goals:

* Clean & minimal UI
* Premium SaaS experience
* High reusability
* Full customization
* Accessibility-first
* Multi-theme (light/dark)

---

# 2. DESIGN TOKENS (EXTENDED)

## Colors

```scss
$primary: #3b82f6;
$primary-hover: #2563eb;
$primary-active: #1d4ed8;

$success: #16a34a;
$danger: #dc2626;
$warning: #f59e0b;

$neutral-100: #f8fafc;
$neutral-900: #0f172a;
```

---

## Typography

* Font: Inter, system-ui
* Sizes: xs → 4xl
* Weights: 400, 500, 600, 700
* Line height: 1.4 – 1.8

---

## Spacing (8px scale)

```scss
$space-1: 4px;
$space-2: 8px;
$space-3: 12px;
$space-4: 16px;
$space-6: 24px;
$space-8: 32px;
```

---

## Radius & Shadows

```scss
$radius-md: 8px;
$radius-lg: 12px;

$shadow-sm: 0 1px 2px rgba(0,0,0,0.05);
$shadow-md: 0 4px 10px rgba(0,0,0,0.08);
```

---

# 3. COMPONENT SYSTEM (ENHANCED)

## Buttons

```html
<button class="btn btn-primary">Save</button>
```

### Variants:

* primary
* secondary
* outline
* ghost
* danger

### States:

* hover
* active
* disabled
* loading

---

## Inputs (Improved UX)

```html
<div class="form-group">
  <label>Email</label>
  <input class="input" />
  <span class="error">Invalid email</span>
</div>
```

### Features:

* error state
* success state
* helper text
* inline validation

---

## Cards

```html
<div class="card">
  <h3>Total Users</h3>
  <p>1,240</p>
</div>
```

---

## Tables (ERP READY)

### Must include:

* sticky header
* row hover
* checkbox select
* bulk actions
* pagination
* empty state

---

## Modals

* confirm modal
* form modal
* alert modal

---

# 4. LAYOUT SYSTEM (IMPROVED)

```
Sidebar + Navbar + Content Grid
```

## Grid Rules:

* 12-column system
* gutter: 24px
* max width: 1280px

---

# 5. THEME SYSTEM (COMPLETE)

## Light Mode

```css
--bg: #ffffff;
--text: #0f172a;
```

## Dark Mode

```css
--bg: #0f172a;
--text: #f8fafc;
```

## Toggle:

```html
<html class="dark">
```

---

# 6. DESIGN RULES (CRITICAL)

## Consistency Rules:

* Max 3 colors per page
* Same spacing everywhere
* No random margins

## Component Rules:

* Use only defined variants
* No inline styles
* Reuse components always

---

# 7. ICON SYSTEM

* Use SVG icons
* Sizes: 16px / 20px / 24px
* Consistent stroke width

---

# 8. ANIMATION SYSTEM

```css
.transition {
  transition: all 0.2s ease;
}
```

### Use for:

* hover
* modal open
* dropdown

---

# 9. SCSS ARCHITECTURE

```
scss/
├── _variables.scss
├── _mixins.scss
├── _base.scss
├── _components.scss
├── _layout.scss
└── main.scss
```

---

# 10. FILE STRUCTURE

```
assets/
├── scss/
│   ├── _variables.scss
│   ├── _mixins.scss
│   ├── _base.scss
│   ├── _components.scss
│   └── main.scss
├── css/
│   └── main.css (compiled)
├── js/
│   ├── main.js
│   └── components/
│       ├── modal.js
│       ├── sidebar.js
│       ├── toast.js
│       └── dropdown.js

views/
├── layout/
├── components/
├── pages/
```

### Tech Stack
* HTML5
* SCSS / CSS3
* Vanilla JavaScript (ES6+)
* Tailwind CSS 4.x
* Alpine.js (reactive components, state management)

---

# 11. RESPONSIVENESS

| Breakpoint | Size   |
| ---------- | ------ |
| sm         | 640px  |
| md         | 768px  |
| lg         | 1024px |
| xl         | 1280px |

---

# 12. ACCESSIBILITY

* WCAG 2.1 AA
* keyboard navigation
* focus states
* ARIA labels

---

# 13. PERFORMANCE RULES

* No duplicate styles
* Lazy load images
* Minimal DOM depth
* Use SCSS variables

---

# 14. USER FLOWS

* Login
* CRUD
* Search & filter
* Notifications
* Theme switch

---

# 15. DASHBOARD STRUCTURE

Top:

* KPI cards

Middle:

* Charts + tables

Bottom:

* Activity / logs

---

# 16. IMPLEMENTATION CHECKLIST

* [ ] Tokens defined
* [ ] Components created
* [ ] Layout working
* [ ] Responsive tested
* [ ] Dark mode working
* [ ] Accessibility checked

---

# FINAL PRINCIPLE

> Build a SYSTEM, not just UI
> Components > Pages
> Consistency > Creativity

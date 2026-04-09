# MyDash UI Kit – Premium ERP Dashboard Design System

---

# 1. DESIGN PHILOSOPHY

## Core Principles

> **"Build systems, not pages. Consistency over creativity. Clarity over decoration."**

### Design Values

| Value | Description |
|-------|-------------|
| **Minimal** | Remove everything that doesn't add value |
| **Readable** | High contrast, clear hierarchy, comfortable spacing |
| **Scalable** | Reusable components, predictable patterns |
| **Accessible** | WCAG 2.1 AA, keyboard-first, screen reader friendly |
| **Fast** | Lightweight, no bloat, instant interactions |

### Inspiration

- **Stripe Dashboard** – Clean data presentation
- **Linear** – Minimal, focused UI
- **Notion** – Content-first, subtle elegance
- **Vercel Dashboard** – Modern SaaS aesthetics

### Color Philosophy

- Use neutral colors as the canvas
- Reserve color for meaning (success = green, danger = red)
- Maximum 3 colors per page
- Use opacity for hierarchy

---

# 2. LAYOUT STRUCTURE

## Page Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                      Top Navbar (h: 64px)                   │
│  ┌──────┐  ┌────────────────────────┐  ┌────────────────┐ │
│  │ Logo │  │      Search Bar        │  │  Notifications  │ │
│  └──────┘  └────────────────────────┘  │  Profile Menu  │ │
│                                         └────────────────┘ │
├────────┬────────────────────────────────────────────────────┤
│        │                                                    │
│        │                                                    │
│  Side  │              Main Content Area                     │
│  bar   │                                                    │
│        │  ┌─────────────────────────────────────────────┐   │
│  (w:   │  │  Page Header (Breadcrumb + Title + Actions) │   │
│  240px │  ├─────────────────────────────────────────────┤   │
│  or    │  │                                             │   │
│  64px  │  │  Content (Cards, Tables, Forms, Charts)      │   │
│  mini) │  │                                             │   │
│        │  │                                             │   │
│        │  └─────────────────────────────────────────────┘   │
│        │                                                    │
└────────┴────────────────────────────────────────────────────┘
```

## Sidebar Structure

```
┌──────────────┐
│  Logo/Brand  │
├──────────────┤
│              │
│  Navigation  │
│  ─────────   │
│  📊 Dashboard│
│  📋 Projects │
│  👥 Users    │
│  📦 Orders  │
│  ⚙️ Settings│
│              │
├──────────────┤
│  User/Switch │
│  Theme Toggle│
└──────────────┘
```

## Responsive Layouts

### Desktop (lg+)
Full sidebar visible (240px)

### Tablet (md)
Collapsed sidebar (64px icons only)

### Mobile (sm)
Hidden sidebar, hamburger menu

---

# 3. SCSS ARCHITECTURE

## File Structure

```
scss/
├── _variables.scss     # Design tokens
├── _mixins.scss        # Reusable patterns
├── _base.scss          # Reset & typography
├── _layout.scss        # Grid & containers
├── _components.scss    # All UI components
├── _utilities.scss     # Helper classes
├── _dark-mode.scss     # Theme overrides
└── main.scss           # Import all partials
```

## _variables.scss

```scss
// ==========================================
// DESIGN TOKENS - MyDash Design System
// ==========================================

// ----------------------------------------
// COLORS - Primary Palette
// ----------------------------------------
$primary:           #3b82f6;
$primary-hover:     #2563eb;
$primary-active:    #1d4ed8;
$primary-light:     #dbeafe;
$primary-dark:      #1e40af;

$secondary:         #6366f1;
$secondary-hover:   #4f46e5;

$success:           #16a34a;
$success-light:     #dcfce7;
$success-dark:      #15803d;

$warning:           #f59e0b;
$warning-light:     #fef3c7;
$warning-dark:      #d97706;

$danger:            #dc2626;
$danger-light:      #fee2e2;
$danger-dark:       #b91c1c;

$info:              #0ea5e9;
$info-light:        #e0f2fe;

// ----------------------------------------
// COLORS - Neutral Scale
// ----------------------------------------
$neutral-50:        #f8fafc;
$neutral-100:       #f1f5f9;
$neutral-200:       #e2e8f0;
$neutral-300:       #cbd5e1;
$neutral-400:       #94a3b8;
$neutral-500:       #64748b;
$neutral-600:       #475569;
$neutral-700:       #334155;
$neutral-800:       #1e293b;
$neutral-900:       #0f172a;
$neutral-950:       #020617;

// ----------------------------------------
// COLORS - Semantic Tokens
// ----------------------------------------
$bg-primary:        #ffffff;
$bg-secondary:      #f8fafc;
$bg-tertiary:       #f1f5f9;

$text-primary:      #0f172a;
$text-secondary:    #475569;
$text-muted:        #94a3b8;
$text-disabled:     #cbd5e1;

$border-default:    #e2e8f0;
$border-hover:      #cbd5e1;
$border-focus:      #3b82f6;

// ----------------------------------------
// TYPOGRAPHY
// ----------------------------------------
$font-sans:         'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
$font-mono:         'JetBrains Mono', 'Fira Code', monospace;

$font-size-xs:      0.75rem;   // 12px
$font-size-sm:      0.875rem;  // 14px
$font-size-base:    1rem;      // 16px
$font-size-lg:      1.125rem;   // 18px
$font-size-xl:      1.25rem;   // 20px
$font-size-2xl:     1.5rem;    // 24px
$font-size-3xl:     1.875rem;  // 30px
$font-size-4xl:     2.25rem;   // 36px

$font-weight-normal:    400;
$font-weight-medium:    500;
$font-weight-semibold:  600;
$font-weight-bold:      700;

$line-height-tight:     1.25;
$line-height-normal:    1.5;
$line-height-relaxed:   1.75;

$letter-spacing-tight:  -0.025em;
$letter-spacing-normal:  0;
$letter-spacing-wide:    0.025em;

// ----------------------------------------
// SPACING (8px Base System)
// ----------------------------------------
$space-0:           0;
$space-px:           1px;
$space-0-5:          0.125rem;  // 2px
$space-1:            0.25rem;   // 4px
$space-1-5:          0.375rem;  // 6px
$space-2:            0.5rem;    // 8px
$space-2-5:          0.625rem;  // 10px
$space-3:            0.75rem;   // 12px
$space-3-5:          0.875rem;  // 14px
$space-4:            1rem;      // 16px
$space-5:            1.25rem;   // 20px
$space-6:            1.5rem;    // 24px
$space-7:            1.75rem;   // 28px
$space-8:            2rem;      // 32px
$space-9:            2.25rem;   // 36px
$space-10:           2.5rem;    // 40px
$space-12:           3rem;      // 48px
$space-14:           3.5rem;    // 56px
$space-16:           4rem;      // 64px

// ----------------------------------------
// BORDER RADIUS
// ----------------------------------------
$radius-none:        0;
$radius-sm:          0.25rem;    // 4px
$radius-md:          0.5rem;     // 8px
$radius-lg:          0.75rem;    // 12px
$radius-xl:          1rem;       // 16px
$radius-2xl:         1.5rem;    // 24px
$radius-full:        9999px;

// ----------------------------------------
// SHADOWS
// ----------------------------------------
$shadow-xs:          0 1px 2px 0 rgba(0, 0, 0, 0.05);
$shadow-sm:          0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);
$shadow-md:          0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
$shadow-lg:          0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
$shadow-xl:          0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
$shadow-inner:       inset 0 2px 4px 0 rgba(0, 0, 0, 0.05);

// ----------------------------------------
// BREAKPOINTS
// ----------------------------------------
$breakpoint-sm:      640px;
$breakpoint-md:      768px;
$breakpoint-lg:      1024px;
$breakpoint-xl:      1280px;
$breakpoint-2xl:     1536px;

// ----------------------------------------
// TRANSITIONS
// ----------------------------------------
$transition-fast:    150ms ease;
$transition-base:    200ms ease;
$transition-slow:    300ms ease;
$transition-slower:  500ms ease;

// ----------------------------------------
// Z-INDEX SCALE
// ----------------------------------------
$z-dropdown:         1000;
$z-sticky:            1020;
$z-fixed:             1030;
$z-modal-backdrop:    1040;
$z-modal:             1050;
$z-popover:           1060;
$z-tooltip:           1070;
$z-toast:             1080;

// ----------------------------------------
// LAYOUT
// ----------------------------------------
$sidebar-width:       240px;
$sidebar-width-mini:  64px;
$navbar-height:       64px;
$container-max:       1280px;
$grid-gutter:         24px;
```

## _mixins.scss

```scss
// ==========================================
// MIXINS - Reusable Patterns
// ==========================================

// ----------------------------------------
// Responsive Mixins
// ----------------------------------------
@mixin sm { @media (min-width: $breakpoint-sm) { @content; } }
@mixin md { @media (min-width: $breakpoint-md) { @content; } }
@mixin lg { @media (min-width: $breakpoint-lg) { @content; } }
@mixin xl { @media (min-width: $breakpoint-xl) { @content; } }

// ----------------------------------------
// Flexbox Helpers
// ----------------------------------------
@mixin flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

@mixin flex-between {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

@mixin flex-start {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

// ----------------------------------------
// Input Base Styles
// ----------------------------------------
@mixin input-base {
  width: 100%;
  padding: $space-2 $space-3;
  font-family: $font-sans;
  font-size: $font-size-sm;
  color: $text-primary;
  background-color: $bg-primary;
  border: 1px solid $border-default;
  border-radius: $radius-md;
  transition: border-color $transition-fast, box-shadow $transition-fast;
  
  &::placeholder {
    color: $text-muted;
  }
  
  &:hover {
    border-color: $border-hover;
  }
  
  &:focus {
    outline: none;
    border-color: $border-focus;
    box-shadow: 0 0 0 3px rgba($primary, 0.1);
  }
  
  &:disabled {
    background-color: $bg-secondary;
    color: $text-disabled;
    cursor: not-allowed;
  }
}

// ----------------------------------------
// Button Base Styles
// ----------------------------------------
@mixin btn-base {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: $space-2;
  padding: $space-2 $space-4;
  font-family: $font-sans;
  font-size: $font-size-sm;
  font-weight: $font-weight-medium;
  line-height: 1;
  text-decoration: none;
  border-radius: $radius-md;
  border: 1px solid transparent;
  cursor: pointer;
  transition: all $transition-fast;
  white-space: nowrap;
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
}

// ----------------------------------------
// Card Styles
// ----------------------------------------
@mixin card-base {
  background-color: $bg-primary;
  border: 1px solid $border-default;
  border-radius: $radius-lg;
  box-shadow: $shadow-sm;
}

// ----------------------------------------
// Focus Ring
// ----------------------------------------
@mixin focus-ring {
  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px $bg-primary, 0 0 0 4px $primary;
  }
}

// ----------------------------------------
// Truncate Text
// ----------------------------------------
@mixin truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

// ----------------------------------------
// Scrollbar Styling
// ----------------------------------------
@mixin custom-scrollbar {
  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: $neutral-300;
    border-radius: $radius-full;
    
    &:hover {
      background-color: $neutral-400;
    }
  }
}
```

## _base.scss

```scss
// ==========================================
// BASE - Reset & Typography
// ==========================================

*,
*::before,
*::after {
  box-sizing: border-box;
}

* {
  margin: 0;
  padding: 0;
}

html {
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  scroll-behavior: smooth;
}

body {
  font-family: $font-sans;
  font-size: $font-size-sm;
  font-weight: $font-weight-normal;
  line-height: $line-height-normal;
  color: $text-primary;
  background-color: $bg-secondary;
}

img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}

input,
button,
textarea,
select {
  font: inherit;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
}

a {
  color: $primary;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
}

// Typography Scale
h1 {
  font-size: $font-size-3xl;
  font-weight: $font-weight-bold;
  line-height: $line-height-tight;
  letter-spacing: $letter-spacing-tight;
}

h2 {
  font-size: $font-size-2xl;
  font-weight: $font-weight-semibold;
  line-height: $line-height-tight;
}

h3 {
  font-size: $font-size-xl;
  font-weight: $font-weight-semibold;
  line-height: $line-height-tight;
}

h4 {
  font-size: $font-size-lg;
  font-weight: $font-weight-medium;
}

h5 {
  font-size: $font-size-base;
  font-weight: $font-weight-medium;
}

h6 {
  font-size: $font-size-sm;
  font-weight: $font-weight-medium;
}

.text-xs    { font-size: $font-size-xs; }
.text-sm    { font-size: $font-size-sm; }
.text-base  { font-size: $font-size-base; }
.text-lg    { font-size: $font-size-lg; }
.text-xl    { font-size: $font-size-xl; }
.text-2xl   { font-size: $font-size-2xl; }
.text-3xl   { font-size: $font-size-3xl; }

.font-normal   { font-weight: $font-weight-normal; }
.font-medium   { font-weight: $font-weight-medium; }
.font-semibold { font-weight: $font-weight-semibold; }
.font-bold     { font-weight: $font-weight-bold; }

.text-primary   { color: $text-primary; }
.text-secondary { color: $text-secondary; }
.text-muted     { color: $text-muted; }
```

## _layout.scss

```scss
// ==========================================
// LAYOUT - Grid & Containers
// ==========================================

// Container
.container {
  width: 100%;
  max-width: $container-max;
  margin-left: auto;
  margin-right: auto;
  padding-left: $space-4;
  padding-right: $space-4;
  
  @include md {
    padding-left: $space-6;
    padding-right: $space-6;
  }
  
  @include lg {
    padding-left: $space-8;
    padding-right: $space-8;
  }
}

// App Layout
.app-layout {
  display: flex;
  min-height: 100vh;
}

.app-sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: $sidebar-width;
  height: 100vh;
  background-color: $bg-primary;
  border-right: 1px solid $border-default;
  z-index: $z-sticky;
  transition: width $transition-base;
  
  &.collapsed {
    width: $sidebar-width-mini;
  }
  
  @include lg {
    &.collapsed {
      width: $sidebar-width;
    }
  }
}

.app-main {
  flex: 1;
  margin-left: $sidebar-width;
  transition: margin-left $transition-base;
  
  .sidebar-collapsed & {
    margin-left: $sidebar-width-mini;
  }
  
  @include lg {
    .sidebar-collapsed & {
      margin-left: $sidebar-width;
    }
  }
}

.app-navbar {
  position: sticky;
  top: 0;
  height: $navbar-height;
  background-color: $bg-primary;
  border-bottom: 1px solid $border-default;
  z-index: $z-sticky;
}

.app-content {
  padding: $space-6;
  
  @include lg {
    padding: $space-8;
  }
}

// Grid System (12 columns)
.grid {
  display: grid;
  gap: $grid-gutter;
}

.cols-1  { grid-template-columns: repeat(1, minmax(0, 1fr)); }
.cols-2  { grid-template-columns: repeat(2, minmax(0, 1fr)); }
.cols-3  { grid-template-columns: repeat(3, minmax(0, 1fr)); }
.cols-4  { grid-template-columns: repeat(4, minmax(0, 1fr)); }
.cols-6  { grid-template-columns: repeat(6, minmax(0, 1fr)); }
.cols-12 { grid-template-columns: repeat(12, minmax(0, 1fr)); }

@include sm { .sm\:cols-1 { grid-template-columns: repeat(1, minmax(0, 1fr)); } }
@include md { .md\:cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
@include lg { .lg\:cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); } }
@include xl { .xl\:cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr)); } }

// Spans
.col-span-2  { grid-column: span 2 / span 2; }
.col-span-3  { grid-column: span 3 / span 3; }
.col-span-4  { grid-column: span 4 / span 4; }
.col-span-6  { grid-column: span 6 / span 6; }
.col-span-full { grid-column: 1 / -1; }
```

## _components.scss

```scss
// ==========================================
// COMPONENTS - All UI Elements
// ==========================================

@import 'buttons';
@import 'inputs';
@import 'cards';
@import 'table';
@import 'modal';
@import 'sidebar';
@import 'navbar';
@import 'badges';
@import 'avatars';
@import 'dropdowns';
```

### _buttons.scss

```scss
// ----------------------------------------
// BUTTONS
// ----------------------------------------

.btn {
  @include btn-base;
  @include focus-ring;
}

// Sizes
.btn-sm {
  padding: $space-1 $space-3;
  font-size: $font-size-xs;
}

.btn-md {
  padding: $space-2 $space-4;
  font-size: $font-size-sm;
}

.btn-lg {
  padding: $space-3 $space-6;
  font-size: $font-size-base;
}

// Variants
.btn-primary {
  background-color: $primary;
  color: white;
  
  &:hover:not(:disabled) {
    background-color: $primary-hover;
  }
  
  &:active:not(:disabled) {
    background-color: $primary-active;
  }
}

.btn-secondary {
  background-color: $secondary;
  color: white;
  
  &:hover:not(:disabled) {
    background-color: $secondary-hover;
  }
}

.btn-outline {
  background-color: transparent;
  border-color: $border-default;
  color: $text-primary;
  
  &:hover:not(:disabled) {
    background-color: $bg-secondary;
    border-color: $border-hover;
  }
}

.btn-ghost {
  background-color: transparent;
  color: $text-secondary;
  
  &:hover:not(:disabled) {
    background-color: $bg-secondary;
    color: $text-primary;
  }
}

.btn-danger {
  background-color: $danger;
  color: white;
  
  &:hover:not(:disabled) {
    background-color: $danger-dark;
  }
}

.btn-success {
  background-color: $success;
  color: white;
  
  &:hover:not(:disabled) {
    background-color: $success-dark;
  }
}

// Icon Button
.btn-icon {
  padding: $space-2;
  border-radius: $radius-md;
  
  svg {
    width: 20px;
    height: 20px;
  }
}

.btn-icon-sm {
  padding: $space-1;
  
  svg {
    width: 16px;
    height: 16px;
  }
}

// Loading State
.btn-loading {
  position: relative;
  color: transparent !important;
  
  &::after {
    content: '';
    position: absolute;
    width: 16px;
    height: 16px;
    border: 2px solid currentColor;
    border-right-color: transparent;
    border-radius: 50%;
    animation: spin 0.6s linear infinite;
  }
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
```

### _inputs.scss

```scss
// ----------------------------------------
// INPUTS
// ----------------------------------------

.form-group {
  display: flex;
  flex-direction: column;
  gap: $space-1;
}

.form-label {
  font-size: $font-size-sm;
  font-weight: $font-weight-medium;
  color: $text-primary;
}

.form-label-required::after {
  content: ' *';
  color: $danger;
}

.form-input {
  @include input-base;
}

.form-input-sm {
  padding: $space-1 $space-2;
  font-size: $font-size-xs;
}

.form-input-lg {
  padding: $space-3 $space-4;
  font-size: $font-size-base;
}

// Textarea
.form-textarea {
  @include input-base;
  min-height: 100px;
  resize: vertical;
}

// Select
.form-select {
  @include input-base;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right $space-3 center;
  padding-right: $space-10;
}

// Checkbox & Radio
.form-checkbox,
.form-radio {
  display: flex;
  align-items: center;
  gap: $space-2;
  cursor: pointer;
  
  input {
    width: 16px;
    height: 16px;
    accent-color: $primary;
    cursor: pointer;
  }
}

// Toggle Switch
.form-toggle {
  position: relative;
  width: 44px;
  height: 24px;
  
  input {
    opacity: 0;
    width: 0;
    height: 0;
    
    &:checked + .toggle-slider {
      background-color: $primary;
      
      &::before {
        transform: translateX(20px);
      }
    }
    
    &:focus + .toggle-slider {
      box-shadow: 0 0 0 3px rgba($primary, 0.2);
    }
  }
}

.toggle-slider {
  position: absolute;
  inset: 0;
  background-color: $neutral-300;
  border-radius: $radius-full;
  transition: $transition-fast;
  cursor: pointer;
  
  &::before {
    content: '';
    position: absolute;
    width: 18px;
    height: 18px;
    left: 3px;
    top: 3px;
    background-color: white;
    border-radius: 50%;
    transition: $transition-fast;
  }
}

// Validation States
.form-input-error {
  border-color: $danger;
  
  &:focus {
    border-color: $danger;
    box-shadow: 0 0 0 3px rgba($danger, 0.1);
  }
}

.form-input-success {
  border-color: $success;
  
  &:focus {
    border-color: $success;
    box-shadow: 0 0 0 3px rgba($success, 0.1);
  }
}

.form-error {
  font-size: $font-size-xs;
  color: $danger;
}

.form-helper {
  font-size: $font-size-xs;
  color: $text-muted;
}
```

### _cards.scss

```scss
// ----------------------------------------
// CARDS
// ----------------------------------------

.card {
  @include card-base;
  padding: $space-4;
}

.card-header {
  @include flex-between;
  margin-bottom: $space-4;
}

.card-title {
  font-size: $font-size-base;
  font-weight: $font-weight-semibold;
  color: $text-primary;
}

.card-description {
  font-size: $font-size-sm;
  color: $text-muted;
  margin-top: $space-1;
}

// KPI Card
.card-kpi {
  @include card-base;
  padding: $space-4;
  
  &__header {
    @include flex-between;
    margin-bottom: $space-2;
  }
  
  &__label {
    font-size: $font-size-sm;
    color: $text-muted;
    font-weight: $font-weight-medium;
  }
  
  &__icon {
    @include flex-center;
    width: 32px;
    height: 32px;
    border-radius: $radius-md;
    background-color: $primary-light;
    color: $primary;
    
    svg {
      width: 16px;
      height: 16px;
    }
  }
  
  &__value {
    font-size: $font-size-2xl;
    font-weight: $font-weight-bold;
    color: $text-primary;
    line-height: 1.2;
  }
  
  &__trend {
    display: inline-flex;
    align-items: center;
    gap: $space-1;
    font-size: $font-size-xs;
    font-weight: $font-weight-medium;
    margin-top: $space-2;
    
    &--up {
      color: $success;
    }
    
    &--down {
      color: $danger;
    }
  }
}

// Stats Card
.card-stats {
  @include card-base;
  padding: $space-4;
  display: flex;
  align-items: center;
  gap: $space-4;
  
  &__icon {
    @include flex-center;
    width: 48px;
    height: 48px;
    border-radius: $radius-lg;
    background-color: $primary-light;
    color: $primary;
    
    svg {
      width: 24px;
      height: 24px;
    }
  }
  
  &__content {
    flex: 1;
  }
  
  &__label {
    font-size: $font-size-xs;
    color: $text-muted;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
  
  &__value {
    font-size: $font-size-xl;
    font-weight: $font-weight-bold;
    color: $text-primary;
  }
}
```

### _table.scss

```scss
// ----------------------------------------
// TABLE
// ----------------------------------------

.table-wrapper {
  @include card-base;
  overflow: hidden;
}

.table-container {
  overflow-x: auto;
  @include custom-scrollbar;
}

.table {
  width: 100%;
  border-collapse: collapse;
  font-size: $font-size-sm;
  
  thead {
    background-color: $bg-secondary;
  }
  
  th {
    padding: $space-3 $space-4;
    text-align: left;
    font-weight: $font-weight-semibold;
    color: $text-secondary;
    text-transform: uppercase;
    font-size: $font-size-xs;
    letter-spacing: 0.05em;
    border-bottom: 1px solid $border-default;
    white-space: nowrap;
    
    &:first-child {
      padding-left: $space-4;
    }
    
    &:last-child {
      padding-right: $space-4;
    }
  }
  
  td {
    padding: $space-3 $space-4;
    border-bottom: 1px solid $border-default;
    color: $text-primary;
    
    &:first-child {
      padding-left: $space-4;
    }
    
    &:last-child {
      padding-right: $space-4;
    }
  }
  
  tbody tr {
    transition: background-color $transition-fast;
    
    &:hover {
      background-color: $bg-secondary;
    }
    
    &:last-child td {
      border-bottom: none;
    }
  }
}

// Table with sticky header
.table-sticky {
  thead th {
    position: sticky;
    top: 0;
    z-index: 1;
  }
}

// Row selection
.table-checkbox {
  width: 16px;
  height: 16px;
  accent-color: $primary;
  cursor: pointer;
}

.table-row-selected {
  background-color: rgba($primary, 0.05) !important;
}

// Empty State
.table-empty {
  @include flex-center;
  flex-direction: column;
  padding: $space-12;
  text-align: center;
  
  &__icon {
    width: 48px;
    height: 48px;
    color: $text-muted;
    margin-bottom: $space-4;
  }
  
  &__title {
    font-size: $font-size-base;
    font-weight: $font-weight-medium;
    color: $text-primary;
    margin-bottom: $space-2;
  }
  
  &__description {
    font-size: $font-size-sm;
    color: $text-muted;
  }
}

// Pagination
.table-pagination {
  @include flex-between;
  padding: $space-3 $space-4;
  border-top: 1px solid $border-default;
  
  &__info {
    font-size: $font-size-sm;
    color: $text-muted;
  }
  
  &__controls {
    display: flex;
    align-items: center;
    gap: $space-2;
  }
  
  &__btn {
    @include btn-base;
    padding: $space-1 $space-2;
    font-size: $font-size-xs;
    background-color: transparent;
    border-color: $border-default;
    
    &:hover:not(:disabled) {
      background-color: $bg-secondary;
    }
    
    &.active {
      background-color: $primary;
      border-color: $primary;
      color: white;
    }
  }
}

// Bulk Actions Bar
.table-bulk-actions {
  @include flex-between;
  padding: $space-3 $space-4;
  background-color: $primary-light;
  border-bottom: 1px solid $border-default;
  
  &__count {
    font-size: $font-size-sm;
    font-weight: $font-weight-medium;
    color: $primary;
  }
  
  &__buttons {
    display: flex;
    gap: $space-2;
  }
}
```

### _modal.scss

```scss
// ----------------------------------------
// MODAL
// ----------------------------------------

.modal-backdrop {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: $z-modal-backdrop;
  opacity: 0;
  visibility: hidden;
  transition: opacity $transition-base, visibility $transition-base;
  
  &.active {
    opacity: 1;
    visibility: visible;
  }
}

.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.95);
  width: 90%;
  max-width: 500px;
  max-height: 90vh;
  background-color: $bg-primary;
  border-radius: $radius-xl;
  box-shadow: $shadow-xl;
  z-index: $z-modal;
  opacity: 0;
  visibility: hidden;
  overflow: hidden;
  transition: all $transition-base;
  
  &.active {
    opacity: 1;
    visibility: visible;
    transform: translate(-50%, -50%) scale(1);
  }
}

.modal-header {
  @include flex-between;
  padding: $space-4 $space-6;
  border-bottom: 1px solid $border-default;
  
  h3 {
    font-size: $font-size-lg;
    font-weight: $font-weight-semibold;
  }
}

.modal-body {
  padding: $space-6;
  overflow-y: auto;
  max-height: calc(90vh - 140px);
}

.modal-footer {
  @include flex-between;
  padding: $space-4 $space-6;
  border-top: 1px solid $border-default;
  gap: $space-3;
  
  &--end {
    justify-content: flex-end;
  }
}

// Modal Sizes
.modal-sm { max-width: 400px; }
.modal-lg { max-width: 700px; }
.modal-xl { max-width: 900px; }

// Confirm Modal
.modal-confirm {
  text-align: center;
  
  .modal-body {
    padding: $space-8;
  }
  
  &__icon {
    @include flex-center;
    width: 64px;
    height: 64px;
    margin: 0 auto $space-4;
    border-radius: $radius-full;
    
    svg {
      width: 32px;
      height: 32px;
    }
    
    &--danger {
      background-color: $danger-light;
      color: $danger;
    }
    
    &--warning {
      background-color: $warning-light;
      color: $warning;
    }
  }
  
  &__title {
    font-size: $font-size-xl;
    font-weight: $font-weight-semibold;
    margin-bottom: $space-2;
  }
  
  &__message {
    font-size: $font-size-sm;
    color: $text-secondary;
    margin-bottom: $space-6;
  }
  
  &__actions {
    display: flex;
    gap: $space-3;
    justify-content: center;
  }
}
```

## _dark-mode.scss

```scss
// ==========================================
// DARK MODE
// ==========================================

.dark {
  // Semantic Colors Override
  --bg-primary:     #0f172a;
  --bg-secondary:   #1e293b;
  --bg-tertiary:    #334155;
  
  --text-primary:   #f8fafc;
  --text-secondary: #cbd5e1;
  --text-muted:     #94a3b8;
  
  --border-default: #334155;
  --border-hover:   #475569;
  
  --primary-light:  #1e3a5f;
  
  color-scheme: dark;
}

html.dark {
  --bg-primary:     #0f172a;
  --bg-secondary:   #1e293b;
  --bg-tertiary:    #334155;
  
  --text-primary:   #f8fafc;
  --text-secondary: #cbd5e1;
  --text-muted:     #94a3b8;
  
  --border-default: #334155;
  --border-hover:   #475569;
  
  --primary-light:  #1e3a5f;
}

.dark {
  body {
    background-color: var(--bg-secondary);
    color: var(--text-primary);
  }
  
  .app-sidebar,
  .app-navbar,
  .card,
  .table-wrapper {
    background-color: var(--bg-primary);
    border-color: var(--border-default);
  }
  
  .table {
    thead {
      background-color: var(--bg-tertiary);
    }
    
    tbody tr:hover {
      background-color: var(--bg-tertiary);
    }
  }
  
  .form-input,
  .form-select,
  .form-textarea {
    background-color: var(--bg-primary);
    border-color: var(--border-default);
    color: var(--text-primary);
    
    &::placeholder {
      color: var(--text-muted);
    }
    
    &:hover {
      border-color: var(--border-hover);
    }
  }
}
```

---

# 4. FULL HTML DASHBOARD LAYOUT

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>MyDash – ERP Dashboard</title>
  
  <!-- Inter Font -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  
  <!-- MyDash Styles -->
  <link rel="stylesheet" href="css/main.css">
</head>
<body>
  
  <div class="app-layout">
    
    <!-- Sidebar -->
    <aside class="app-sidebar" id="sidebar">
      <div class="sidebar-header">
        <a href="/" class="sidebar-logo">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <rect width="32" height="32" rx="8" fill="#3b82f6"/>
            <path d="M8 16L14 22L24 10" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span class="sidebar-logo-text">MyDash</span>
        </a>
      </div>
      
      <nav class="sidebar-nav">
        <a href="#" class="sidebar-nav-item active">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="3" width="7" height="9" rx="1"/>
            <rect x="14" y="3" width="7" height="5" rx="1"/>
            <rect x="14" y="12" width="7" height="9" rx="1"/>
            <rect x="3" y="16" width="7" height="5" rx="1"/>
          </svg>
          <span>Dashboard</span>
        </a>
        
        <a href="#" class="sidebar-nav-item">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
          </svg>
          <span>Projects</span>
        </a>
        
        <a href="#" class="sidebar-nav-item">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
            <circle cx="9" cy="7" r="4"/>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
          </svg>
          <span>Users</span>
        </a>
        
        <a href="#" class="sidebar-nav-item">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="1" y="3" width="15" height="13"/>
            <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
            <circle cx="5.5" cy="18.5" r="2.5"/>
            <circle cx="18.5" cy="18.5" r="2.5"/>
          </svg>
          <span>Orders</span>
        </a>
        
        <a href="#" class="sidebar-nav-item">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="20" x2="18" y2="10"/>
            <line x1="12" y1="20" x2="12" y2="4"/>
            <line x1="6" y1="20" x2="6" y2="14"/>
          </svg>
          <span>Analytics</span>
        </a>
      </nav>
      
      <div class="sidebar-footer">
        <a href="#" class="sidebar-nav-item">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="3"/>
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
          </svg>
          <span>Settings</span>
        </a>
        
        <!-- Theme Toggle -->
        <button class="theme-toggle" id="themeToggle" aria-label="Toggle theme">
          <svg class="icon-sun" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="5"/>
            <line x1="12" y1="1" x2="12" y2="3"/>
            <line x1="12" y1="21" x2="12" y2="23"/>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
            <line x1="1" y1="12" x2="3" y2="12"/>
            <line x1="21" y1="12" x2="23" y2="12"/>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
          </svg>
          <svg class="icon-moon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
          </svg>
        </button>
      </div>
    </aside>
    
    <!-- Main Content -->
    <main class="app-main" id="main">
      
      <!-- Navbar -->
      <header class="app-navbar">
        <div class="navbar-content">
          <!-- Mobile Menu Toggle -->
          <button class="btn-icon btn-icon-sm navbar-toggle" id="sidebarToggle">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="3" y1="12" x2="21" y2="12"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
          </button>
          
          <!-- Search -->
          <div class="navbar-search">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="8"/>
              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            <input type="text" placeholder="Search..." class="navbar-search-input">
            <kbd class="navbar-search-kbd">⌘K</kbd>
          </div>
          
          <div class="navbar-actions">
            <!-- Notifications -->
            <button class="btn-icon btn-icon-sm" aria-label="Notifications">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
              </svg>
            </button>
            
            <!-- User Menu -->
            <div class="navbar-user" id="userMenu">
              <img src="https://i.pravatar.cc/32" alt="User avatar" class="navbar-avatar">
              <span class="navbar-username">Alex Morgan</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="6 9 12 15 18 9"/>
              </svg>
            </div>
          </div>
        </div>
      </header>
      
      <!-- Page Content -->
      <div class="app-content">
        
        <!-- Page Header -->
        <div class="page-header">
          <div class="page-header-left">
            <nav class="breadcrumb" aria-label="Breadcrumb">
              <a href="#">Home</a>
              <span>/</span>
              <span>Dashboard</span>
            </nav>
            <h1>Dashboard</h1>
            <p class="page-header-desc">Welcome back, Alex. Here's what's happening.</p>
          </div>
          <div class="page-header-right">
            <button class="btn btn-outline btn-sm">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Export
            </button>
            <button class="btn btn-primary btn-sm">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="12" y1="5" x2="12" y2="19"/>
                <line x1="5" y1="12" x2="19" y2="12"/>
              </svg>
              New Report
            </button>
          </div>
        </div>
        
        <!-- KPI Cards -->
        <section class="section">
          <div class="grid cols-1 sm:cols-2 lg:cols-4 gap-4">
            
            <div class="card-kpi">
              <div class="card-kpi__header">
                <span class="card-kpi__label">Total Revenue</span>
                <div class="card-kpi__icon" style="background-color: #dcfce7; color: #16a34a;">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="12" y1="1" x2="12" y2="23"/>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                  </svg>
                </div>
              </div>
              <div class="card-kpi__value">$45,231</div>
              <div class="card-kpi__trend card-kpi__trend--up">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
                  <polyline points="17 6 23 6 23 12"/>
                </svg>
                +12.5% from last month
              </div>
            </div>
            
            <div class="card-kpi">
              <div class="card-kpi__header">
                <span class="card-kpi__label">Orders</span>
                <div class="card-kpi__icon" style="background-color: #dbeafe; color: #3b82f6;">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="1" y="3" width="15" height="13"/>
                    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
                    <circle cx="5.5" cy="18.5" r="2.5"/>
                    <circle cx="18.5" cy="18.5" r="2.5"/>
                  </svg>
                </div>
              </div>
              <div class="card-kpi__value">2,847</div>
              <div class="card-kpi__trend card-kpi__trend--up">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
                  <polyline points="17 6 23 6 23 12"/>
                </svg>
                +8.2% from last month
              </div>
            </div>
            
            <div class="card-kpi">
              <div class="card-kpi__header">
                <span class="card-kpi__label">Active Users</span>
                <div class="card-kpi__icon" style="background-color: #fef3c7; color: #f59e0b;">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </div>
              </div>
              <div class="card-kpi__value">1,429</div>
              <div class="card-kpi__trend card-kpi__trend--down">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/>
                  <polyline points="17 18 23 18 23 12"/>
                </svg>
                -3.1% from last month
              </div>
            </div>
            
            <div class="card-kpi">
              <div class="card-kpi__header">
                <span class="card-kpi__label">Conversion Rate</span>
                <div class="card-kpi__icon" style="background-color: #f3e8ff; color: #7c3aed;">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                  </svg>
                </div>
              </div>
              <div class="card-kpi__value">4.2%</div>
              <div class="card-kpi__trend card-kpi__trend--up">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
                  <polyline points="17 6 23 6 23 12"/>
                </svg>
                +1.4% from last month
              </div>
            </div>
            
          </div>
        </section>
        
        <!-- Table Section -->
        <section class="section">
          <div class="table-wrapper">
            <div class="table-header">
              <div class="table-header-left">
                <h3>Recent Orders</h3>
                <span class="badge badge-neutral">243 orders</span>
              </div>
              <div class="table-header-right">
                <button class="btn btn-outline btn-sm">Filter</button>
                <button class="btn btn-primary btn-sm">Add Order</button>
              </div>
            </div>
            
            <div class="table-container">
              <table class="table table-sticky">
                <thead>
                  <tr>
                    <th style="width: 40px;">
                      <input type="checkbox" class="table-checkbox" id="selectAll">
                    </th>
                    <th>Order ID</th>
                    <th>Customer</th>
                    <th>Status</th>
                    <th>Amount</th>
                    <th>Date</th>
                    <th style="width: 100px;">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><input type="checkbox" class="table-checkbox"></td>
                    <td><span class="font-medium">#ORD-2847</span></td>
                    <td>
                      <div class="user-cell">
                        <img src="https://i.pravatar.cc/32?img=1" alt="" class="avatar avatar-sm">
                        <span>Sarah Chen</span>
                      </div>
                    </td>
                    <td><span class="badge badge-success">Completed</span></td>
                    <td class="font-medium">$1,299.00</td>
                    <td class="text-muted">Jan 15, 2024</td>
                    <td>
                      <div class="table-actions">
                        <button class="btn-icon btn-icon-sm" aria-label="View">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                            <circle cx="12" cy="12" r="3"/>
                          </svg>
                        </button>
                        <button class="btn-icon btn-icon-sm" aria-label="Edit">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td><input type="checkbox" class="table-checkbox"></td>
                    <td><span class="font-medium">#ORD-2846</span></td>
                    <td>
                      <div class="user-cell">
                        <img src="https://i.pravatar.cc/32?img=2" alt="" class="avatar avatar-sm">
                        <span>Marcus Johnson</span>
                      </div>
                    </td>
                    <td><span class="badge badge-warning">Pending</span></td>
                    <td class="font-medium">$849.50</td>
                    <td class="text-muted">Jan 15, 2024</td>
                    <td>
                      <div class="table-actions">
                        <button class="btn-icon btn-icon-sm" aria-label="View">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                            <circle cx="12" cy="12" r="3"/>
                          </svg>
                        </button>
                        <button class="btn-icon btn-icon-sm" aria-label="Edit">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td><input type="checkbox" class="table-checkbox"></td>
                    <td><span class="font-medium">#ORD-2845</span></td>
                    <td>
                      <div class="user-cell">
                        <img src="https://i.pravatar.cc/32?img=3" alt="" class="avatar avatar-sm">
                        <span>Emily Watson</span>
                      </div>
                    </td>
                    <td><span class="badge badge-danger">Cancelled</span></td>
                    <td class="font-medium">$2,150.00</td>
                    <td class="text-muted">Jan 14, 2024</td>
                    <td>
                      <div class="table-actions">
                        <button class="btn-icon btn-icon-sm" aria-label="View">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                            <circle cx="12" cy="12" r="3"/>
                          </svg>
                        </button>
                        <button class="btn-icon btn-icon-sm" aria-label="Edit">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td><input type="checkbox" class="table-checkbox"></td>
                    <td><span class="font-medium">#ORD-2844</span></td>
                    <td>
                      <div class="user-cell">
                        <img src="https://i.pravatar.cc/32?img=4" alt="" class="avatar avatar-sm">
                        <span>David Kim</span>
                      </div>
                    </td>
                    <td><span class="badge badge-info">Processing</span></td>
                    <td class="font-medium">$567.00</td>
                    <td class="text-muted">Jan 14, 2024</td>
                    <td>
                      <div class="table-actions">
                        <button class="btn-icon btn-icon-sm" aria-label="View">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                            <circle cx="12" cy="12" r="3"/>
                          </svg>
                        </button>
                        <button class="btn-icon btn-icon-sm" aria-label="Edit">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div class="table-pagination">
              <span class="table-pagination__info">Showing 1-10 of 243 results</span>
              <div class="table-pagination__controls">
                <button class="table-pagination__btn" disabled>Previous</button>
                <button class="table-pagination__btn active">1</button>
                <button class="table-pagination__btn">2</button>
                <button class="table-pagination__btn">3</button>
                <span>...</span>
                <button class="table-pagination__btn">24</button>
                <button class="table-pagination__btn">Next</button>
              </div>
            </div>
          </div>
        </section>
        
        <!-- Form Section -->
        <section class="section">
          <div class="grid cols-1 lg:cols-2 gap-6">
            
            <!-- Create Order Form -->
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">Create New Order</h3>
              </div>
              <form class="form">
                <div class="form-group">
                  <label class="form-label form-label-required">Customer Name</label>
                  <input type="text" class="form-input" placeholder="Enter customer name">
                  <span class="form-helper">Full name as per records</span>
                </div>
                
                <div class="form-group">
                  <label class="form-label form-label-required">Email Address</label>
                  <input type="email" class="form-input form-input-error" placeholder="customer@example.com" value="invalid-email">
                  <span class="form-error">Please enter a valid email address</span>
                </div>
                
                <div class="form-group">
                  <label class="form-label">Order Amount</label>
                  <input type="number" class="form-input form-input-success" placeholder="0.00" value="1,299.00">
                  <span class="form-helper text-success">Validated</span>
                </div>
                
                <div class="form-group">
                  <label class="form-label">Status</label>
                  <select class="form-select">
                    <option value="">Select status</option>
                    <option value="pending">Pending</option>
                    <option value="processing">Processing</option>
                    <option value="completed">Completed</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </div>
                
                <div class="form-group">
                  <label class="form-label">Notes</label>
                  <textarea class="form-textarea" rows="3" placeholder="Additional notes..."></textarea>
                </div>
                
                <div class="form-group">
                  <label class="form-label">Notifications</label>
                  <label class="form-checkbox">
                    <input type="checkbox" checked>
                    <span>Send email confirmation</span>
                  </label>
                  <label class="form-checkbox">
                    <input type="checkbox">
                    <span>Send SMS notification</span>
                  </label>
                </div>
                
                <div class="form-actions">
                  <button type="button" class="btn btn-outline">Cancel</button>
                  <button type="submit" class="btn btn-primary">Create Order</button>
                </div>
              </form>
            </div>
            
            <!-- Button Variants -->
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">Button Variants</h3>
              </div>
              
              <div class="component-demo">
                <h4 class="component-demo-title">Sizes</h4>
                <div class="flex gap-3 flex-wrap">
                  <button class="btn btn-primary btn-sm">Small</button>
                  <button class="btn btn-primary btn-md">Medium</button>
                  <button class="btn btn-primary btn-lg">Large</button>
                </div>
              </div>
              
              <div class="component-demo">
                <h4 class="component-demo-title">Variants</h4>
                <div class="flex gap-3 flex-wrap">
                  <button class="btn btn-primary">Primary</button>
                  <button class="btn btn-secondary">Secondary</button>
                  <button class="btn btn-outline">Outline</button>
                  <button class="btn btn-ghost">Ghost</button>
                  <button class="btn btn-danger">Danger</button>
                  <button class="btn btn-success">Success</button>
                </div>
              </div>
              
              <div class="component-demo">
                <h4 class="component-demo-title">With Icons</h4>
                <div class="flex gap-3 flex-wrap">
                  <button class="btn btn-primary">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <line x1="12" y1="5" x2="12" y2="19"/>
                      <line x1="5" y1="12" x2="19" y2="12"/>
                    </svg>
                    Add New
                  </button>
                  <button class="btn btn-outline">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                      <polyline points="7 10 12 15 17 10"/>
                      <line x1="12" y1="15" x2="12" y2="3"/>
                    </svg>
                    Download
                  </button>
                </div>
              </div>
              
              <div class="component-demo">
                <h4 class="component-demo-title">States</h4>
                <div class="flex gap-3 flex-wrap">
                  <button class="btn btn-primary" disabled>Disabled</button>
                  <button class="btn btn-primary btn-loading">Loading</button>
                </div>
              </div>
            </div>
            
          </div>
        </section>
        
      </div>
    </main>
  </div>
  
  <!-- Modal -->
  <div class="modal-backdrop" id="modalBackdrop"></div>
  <div class="modal" id="confirmModal">
    <div class="modal-header">
      <h3>Confirm Action</h3>
      <button class="btn-icon btn-icon-sm" onclick="closeModal()">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="18" y1="6" x2="6" y2="18"/>
          <line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>
    </div>
    <div class="modal-body">
      <p>Are you sure you want to proceed with this action?</p>
    </div>
    <div class="modal-footer modal-footer--end">
      <button class="btn btn-outline" onclick="closeModal()">Cancel</button>
      <button class="btn btn-primary" onclick="closeModal()">Confirm</button>
    </div>
  </div>
  
  <script src="js/main.js"></script>
</body>
</html>
```

---

# 5. COMPONENT EXAMPLES

## Button Component

```html
<!-- Primary Button -->
<button class="btn btn-primary">Save Changes</button>

<!-- Secondary Button -->
<button class="btn btn-secondary">View Details</button>

<!-- Outline Button -->
<button class="btn btn-outline">Cancel</button>

<!-- Ghost Button -->
<button class="btn btn-ghost">Learn More</button>

<!-- Danger Button -->
<button class="btn btn-danger">Delete</button>

<!-- Button with Icon -->
<button class="btn btn-primary">
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <line x1="12" y1="5" x2="12" y2="19"/>
    <line x1="5" y1="12" x2="19" y2="12"/>
  </svg>
  Add New
</button>

<!-- Button Sizes -->
<button class="btn btn-primary btn-sm">Small</button>
<button class="btn btn-primary btn-md">Medium</button>
<button class="btn btn-primary btn-lg">Large</button>

<!-- Button States -->
<button class="btn btn-primary" disabled>Disabled</button>
<button class="btn btn-primary btn-loading">Loading...</button>
```

## Input Components

```html
<!-- Text Input -->
<div class="form-group">
  <label class="form-label">Email Address</label>
  <input type="email" class="form-input" placeholder="you@example.com">
</div>

<!-- Input with Helper -->
<div class="form-group">
  <label class="form-label">Username</label>
  <input type="text" class="form-input" placeholder="johndoe">
  <span class="form-helper">Must be 3-20 characters</span>
</div>

<!-- Input with Error -->
<div class="form-group">
  <label class="form-label form-label-required">Password</label>
  <input type="password" class="form-input form-input-error" value="123">
  <span class="form-error">Password must be at least 8 characters</span>
</div>

<!-- Input with Success -->
<div class="form-group">
  <label class="form-label">Website</label>
  <input type="url" class="form-input form-input-success" value="https://example.com">
  <span class="form-helper text-success">URL validated</span>
</div>

<!-- Select -->
<div class="form-group">
  <label class="form-label">Country</label>
  <select class="form-select">
    <option value="">Select country</option>
    <option value="us">United States</option>
    <option value="uk">United Kingdom</option>
    <option value="ca">Canada</option>
  </select>
</div>

<!-- Textarea -->
<div class="form-group">
  <label class="form-label">Message</label>
  <textarea class="form-textarea" rows="4" placeholder="Your message..."></textarea>
</div>

<!-- Checkbox -->
<label class="form-checkbox">
  <input type="checkbox">
  <span>I agree to the terms and conditions</span>
</label>

<!-- Radio -->
<label class="form-radio">
  <input type="radio" name="plan" checked>
  <span>Monthly</span>
</label>
<label class="form-radio">
  <input type="radio" name="plan">
  <span>Yearly</span>
</label>

<!-- Toggle -->
<label class="form-toggle">
  <input type="checkbox" checked>
  <span class="toggle-slider"></span>
</label>
```

## Card Components

```html
<!-- Basic Card -->
<div class="card">
  <div class="card-header">
    <h3 class="card-title">Card Title</h3>
  </div>
  <p>Card content goes here.</p>
</div>

<!-- KPI Card -->
<div class="card-kpi">
  <div class="card-kpi__header">
    <span class="card-kpi__label">Total Revenue</span>
    <div class="card-kpi__icon">
      <svg>...</svg>
    </div>
  </div>
  <div class="card-kpi__value">$45,231</div>
  <div class="card-kpi__trend card-kpi__trend--up">
    +12.5% from last month
  </div>
</div>

<!-- Stats Card -->
<div class="card-stats">
  <div class="card-stats__icon">
    <svg>...</svg>
  </div>
  <div class="card-stats__content">
    <div class="card-stats__label">New Customers</div>
    <div class="card-stats__value">1,240</div>
  </div>
</div>
```

## Table Component

```html
<div class="table-wrapper">
  <div class="table-header">
    <h3>Users</h3>
    <button class="btn btn-primary btn-sm">Add User</button>
  </div>
  
  <div class="table-container">
    <table class="table table-sticky">
      <thead>
        <tr>
          <th style="width: 40px;">
            <input type="checkbox">
          </th>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><input type="checkbox"></td>
          <td>Sarah Chen</td>
          <td>sarah@example.com</td>
          <td>Admin</td>
          <td><span class="badge badge-success">Active</span></td>
          <td>
            <div class="table-actions">
              <button class="btn-icon btn-icon-sm">Edit</button>
              <button class="btn-icon btn-icon-sm">Delete</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  
  <div class="table-pagination">
    <span>Showing 1-10 of 100</span>
    <div class="table-pagination__controls">
      <button>Previous</button>
      <button class="active">1</button>
      <button>2</button>
      <button>3</button>
      <button>Next</button>
    </div>
  </div>
</div>

<!-- Empty State -->
<div class="table-empty">
  <svg class="table-empty__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
    <path d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"/>
  </svg>
  <h4 class="table-empty__title">No data found</h4>
  <p class="table-empty__description">Try adjusting your search or filter to find what you're looking for.</p>
  <button class="btn btn-primary btn-sm">Clear Filters</button>
</div>
```

## Badge Component

```html
<span class="badge badge-primary">Primary</span>
<span class="badge badge-secondary">Secondary</span>
<span class="badge badge-success">Success</span>
<span class="badge badge-warning">Warning</span>
<span class="badge badge-danger">Danger</span>
<span class="badge badge-info">Info</span>
<span class="badge badge-neutral">Neutral</span>
```

## Avatar Component

```html
<img src="..." class="avatar" alt="User">
<img src="..." class="avatar avatar-sm" alt="User">
<img src="..." class="avatar avatar-md" alt="User">
<img src="..." class="avatar avatar-lg" alt="User">

<!-- With Status -->
<div class="avatar-wrapper">
  <img src="..." class="avatar" alt="User">
  <span class="avatar-status avatar-status--online"></span>
</div>
```

## Modal Component

```html
<div class="modal-backdrop" id="modalBackdrop"></div>

<!-- Basic Modal -->
<div class="modal" id="myModal">
  <div class="modal-header">
    <h3>Modal Title</h3>
    <button class="btn-icon btn-icon-sm" onclick="closeModal()">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <line x1="18" y1="6" x2="6" y2="18"/>
        <line x1="6" y1="6" x2="18" y2="18"/>
      </svg>
    </button>
  </div>
  <div class="modal-body">
    <p>Modal content goes here.</p>
  </div>
  <div class="modal-footer modal-footer--end">
    <button class="btn btn-outline" onclick="closeModal()">Cancel</button>
    <button class="btn btn-primary">Save Changes</button>
  </div>
</div>

<!-- Confirm Modal -->
<div class="modal modal-sm">
  <div class="modal-body">
    <div class="modal-confirm">
      <div class="modal-confirm__icon modal-confirm__icon--danger">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/>
          <line x1="12" y1="9" x2="12" y2="13"/>
          <line x1="12" y1="17" x2="12.01" y2="17"/>
        </svg>
      </div>
      <h4 class="modal-confirm__title">Delete Item?</h4>
      <p class="modal-confirm__message">This action cannot be undone. Are you sure you want to delete this item?</p>
      <div class="modal-confirm__actions">
        <button class="btn btn-outline">Cancel</button>
        <button class="btn btn-danger">Delete</button>
      </div>
    </div>
  </div>
</div>
```

---

# 6. NAMING CONVENTIONS

## CSS Classes

| Pattern | Example | Usage |
|---------|---------|-------|
| Block | `.card`, `.btn`, `.modal` | Main component |
| Element | `.card-header`, `.btn-primary` | Child element |
| Modifier | `.btn--small`, `.card--featured` | Variant/state |
| Utility | `.flex`, `.text-center`, `.mt-4` | Helper classes |

## BEM Notation

```
Component:     .card
Element:       .card__header, .card__body, .card__footer
Modifier:      .card--compact, .card--elevated
State:         .card__header--active
```

## Component Naming

| Component | Class Name |
|-----------|------------|
| Button Primary | `.btn.btn-primary` |
| Input Error | `.form-input.form-input-error` |
| Card KPI | `.card.card-kpi` |
| Table Striped | `.table.table-striped` |
| Badge Success | `.badge.badge-success` |

## File Naming

```
_variables.scss    # Design tokens
_mixins.scss       # Reusable patterns
_base.scss         # Reset & typography
_layout.scss       # Grid & containers
_components.scss   # All UI components
_utilities.scss    # Helper classes
main.scss          # Entry point

_variables.css     # Compiled CSS variables
main.css           # Compiled main styles
```

## JavaScript Naming

```javascript
// Functions: camelCase
function initSidebar() { }
function toggleModal() { }
function showToast() { }

// Variables: camelCase
const sidebarWidth = 240;
let isDarkMode = false;

// Constants: SCREAMING_SNAKE_CASE
const SIDEBAR_COLLAPSED_WIDTH = 64;
const ANIMATION_DURATION = 200;
```

---

# 7. UI RULES

## DO's

✅ **DO** use design tokens for all values
✅ **DO** keep components reusable
✅ **DO** use semantic HTML
✅ **DO** follow naming conventions
✅ **DO** add focus states for accessibility
✅ **DO** test on all breakpoints
✅ **DO** use consistent spacing
✅ **DO** validate form inputs
✅ **DO** provide empty states
✅ **DO** use loading states

## DON'Ts

❌ **DON'T** use inline styles
❌ **DON'T** hardcode colors
❌ **DON'T** mix naming conventions
❌ **DON'T** create one-off styles
❌ **DON'T** skip focus states
❌ **DON'T** use `!important`
❌ **DON'T** nest selectors too deep (>4 levels)
❌ **DON'T** use px for everything (use rem)
❌ **DON'T** duplicate component styles
❌ **DON'T** forget mobile layouts

## Spacing Rules

```
4px  =  $space-1  =  0.25rem   =  Tiny gaps
8px  =  $space-2  =  0.5rem    =  Icon gaps, small padding
12px =  $space-3  =  0.75rem   =  Input padding
16px =  $space-4  =  1rem      =  Standard padding
24px =  $space-6  =  1.5rem    =  Card padding
32px =  $space-8  =  2rem      =  Section gaps
48px =  $space-12 =  3rem      =  Page sections
```

## Color Usage

| Token | Usage | Example |
|-------|-------|---------|
| Primary | CTAs, links, focus | Save, Submit |
| Success | Positive actions | Completed, Active |
| Warning | Caution | Pending, Review |
| Danger | Destructive | Delete, Cancel |
| Neutral | Text, borders | Body copy, dividers |

---

# 8. IMPLEMENTATION CHECKLIST

## Phase 1: Foundation
- [ ] Set up SCSS architecture
- [ ] Define all design tokens
- [ ] Create _base.scss with reset
- [ ] Set up typography scale
- [ ] Configure dark mode variables

## Phase 2: Core Components
- [ ] Build Button component
- [ ] Build Input component
- [ ] Build Card component
- [ ] Build Badge component
- [ ] Build Avatar component

## Phase 3: Layout
- [ ] Create Sidebar component
- [ ] Create Navbar component
- [ ] Implement grid system
- [ ] Add responsive breakpoints
- [ ] Build container styles

## Phase 4: Advanced Components
- [ ] Build Table with all features
- [ ] Create Modal component
- [ ] Build Form system
- [ ] Add Pagination
- [ ] Create Toast notifications

## Phase 5: Polish
- [ ] Add all hover/focus states
- [ ] Implement transitions
- [ ] Test dark mode
- [ ] Verify accessibility
- [ ] Optimize for production

## Phase 6: Pages
- [ ] Dashboard layout
- [ ] Login page
- [ ] Table page
- [ ] Form page
- [ ] Settings page

---

# FINAL PRINCIPLES

> **"Build a SYSTEM, not just UI."**

1. **Consistency over creativity** – Same patterns everywhere
2. **Components over pages** – Reusable building blocks
3. **Tokens over values** – Centralized design decisions
4. **Progressive enhancement** – Mobile-first approach
5. **Accessibility always** – WCAG 2.1 AA minimum
6. **Performance critical** – Lightweight, fast-loading
7. **Documentation essential** – Clear, searchable, complete

---

*MyDash Design System v2.0*
*Built with HTML + SCSS + Vanilla JS*
*For Enterprise ERP Dashboards*

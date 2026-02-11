# Linear Import Content for REM-21

This file contains formatted content that can be used to create Linear issues. Copy the content below into Linear when creating issues.

---

## Main Issue: REM-21 - Plans Section Specification

**Title**: Create spec and Linear tasks for new section "Plans"

**Description**:
We would like to create new section on the web. Plans.
There will be Free, Pro, Pro+, Enterprise

create actionable tasks that will be then used for development and publishing. These tasks will be assigned to Agent.

---

## Specification Content (for REM-21 description or child issue)

### Overview
This document specifies the requirements for implementing a new "Plans" section on the ComfyUI-Egnyte landing page. The section will showcase four pricing tiers: Free, Pro, Pro+, and Enterprise.

### Section Location
The Plans section should be positioned between the "Security" section and the "Get Access" section, maintaining the visual flow of the landing page.

### Design Requirements

**Visual Design**:
- Layout: Grid-based card layout (4 columns on desktop, 2 columns on tablet, 1 column on mobile)
- Card Style: Consistent with existing design system using rounded-3xl borders, shadow-halo effects
- Color Scheme: 
  - Free: Standard white card with slate borders
  - Pro: Highlighted with subtle accent (consider slate-900 or brand color)
  - Pro+: Premium highlight (consider gradient or stronger accent)
  - Enterprise: Enterprise styling (dark slate-950 background with white text, similar to Security section)
- Typography: Follow existing font hierarchy (Manrope font family)

**Section Structure**:

1. **Section Header**
   - Label: "Plans" (uppercase, tracking-[0.2em], text-slate-500)
   - Title: "Choose the plan that fits your workflow" (text-3xl/4xl, font-semibold)
   - Description: Brief text explaining the tiered approach (optional, max 2xl width)

2. **Plan Cards** - Each plan card should include:
   - Plan Name (Free, Pro, Pro+, Enterprise) - Large, prominent heading
   - Optional badge/tag for "Popular" or "Recommended" (for Pro or Pro+)
   - Price Display (Free: "Free" or "$0", Others: "$X/month" or "Custom pricing")
   - Feature List (5-7 key features per plan, with checkmarks or bullets)
   - Call-to-Action Button (styled consistently with existing CTAs)
   - Additional Information (optional fine print)

**Plan Features (Suggested)**:

- **Free Plan**: Basic Egnyte integration, Limited storage/bandwidth, Community support, Basic nodes (Egnyte Read, Egnyte Write), Personal use only
- **Pro Plan**: Everything in Free + Increased storage/bandwidth, Priority support, All custom nodes, Commercial use license, Version history, Advanced browsing features
- **Pro+ Plan**: Everything in Pro + Unlimited storage/bandwidth, Dedicated support channel, Early access to new features, Custom integrations, Team collaboration tools, Advanced security features
- **Enterprise Plan**: Everything in Pro+ + Custom deployment options, SLA guarantees, Dedicated account manager, Custom training and onboarding, Advanced audit and compliance, Multi-tenant support, Custom contract terms

### Technical Requirements
- Create new section component in `app/page.tsx`
- Follow existing section patterns
- Use TypeScript for type safety
- Responsive design: Desktop (4-col), Tablet (2-col), Mobile (1-col)
- Add "Plans" link to header navigation with anchor `#plans`
- Ensure accessibility (WCAG 2.1 AA minimum)

---

## Child Tasks (Create as separate Linear issues)

### Task 1: Create Plans Data Structure and Types
**Priority**: High | **Effort**: 1-2 hours

Define TypeScript interfaces/types for plan data structure and create the data array with all four plans (Free, Pro, Pro+, Enterprise).

**Acceptance Criteria**:
- Create TypeScript interface/type for Plan object
- Define structure for plan features, pricing, CTAs
- Create plans array with all four tiers
- Include placeholder content for all plans
- Type safety verified (no TypeScript errors)

---

### Task 2: Implement Plans Section Component
**Priority**: High | **Effort**: 2-3 hours | **Depends on**: Task 1

Create the Plans section component following the existing design patterns and specifications.

**Acceptance Criteria**:
- Section component created in `app/page.tsx`
- Section header with label, title, and optional description
- Grid layout for plan cards (responsive: 1/2/4 columns)
- Plan cards render with all required elements
- Styling matches existing design system
- Responsive design works on mobile, tablet, desktop

---

### Task 3: Style Plan Cards with Tier Differentiation
**Priority**: Medium | **Effort**: 2-3 hours | **Depends on**: Task 2

Apply visual differentiation to plan cards to highlight different tiers (Free, Pro, Pro+, Enterprise).

**Acceptance Criteria**:
- Free plan: Standard white card styling
- Pro plan: Highlighted with accent (e.g., border color or background tint)
- Pro+ plan: Premium styling (gradient or stronger accent)
- Enterprise plan: Dark theme (slate-950 background, white text)
- Optional "Popular" or "Recommended" badge on appropriate tier
- Visual hierarchy clearly distinguishes tiers

---

### Task 4: Implement Feature Lists with Icons
**Priority**: Medium | **Effort**: 2 hours | **Depends on**: Task 2

Display plan features in a clean, scannable list format with appropriate visual indicators (checkmarks or bullets).

**Acceptance Criteria**:
- Feature list renders for each plan
- Features displayed in readable format (bullet points or checkmarks)
- Consistent spacing and typography
- Features clearly communicate value proposition
- Progressive disclosure (higher tiers show more features)

---

### Task 5: Add Plan CTA Buttons
**Priority**: High | **Effort**: 1-2 hours | **Depends on**: Task 2

Implement call-to-action buttons for each plan tier with appropriate actions and styling.

**Acceptance Criteria**:
- Free plan: "Get Started" button
- Pro plan: "Start Free Trial" or "Upgrade" button
- Pro+ plan: "Start Free Trial" or "Upgrade" button
- Enterprise plan: "Contact Sales" button
- Buttons styled consistently with existing CTAs
- Buttons link to appropriate destinations (or are ready for integration)

---

### Task 6: Update Navigation Menu
**Priority**: Medium | **Effort**: 1 hour | **Depends on**: Task 2

Add "Plans" link to the main navigation menu in the header.

**Acceptance Criteria**:
- "Plans" link added to header navigation
- Link uses smooth scroll to `#plans` anchor
- Link styling matches existing navigation items
- Responsive behavior maintained (hidden on mobile if needed)
- Navigation works correctly on all screen sizes

---

### Task 7: Add Plans Section to Footer Navigation
**Priority**: Low | **Effort**: 30 minutes | **Depends on**: Task 2

Optionally add "Plans" link to footer navigation for consistency.

**Acceptance Criteria**:
- "Plans" link added to footer navigation (if applicable)
- Link styling matches existing footer links
- Smooth scroll behavior works

---

### Task 8: Implement Responsive Design Testing
**Priority**: High | **Effort**: 1-2 hours | **Depends on**: Tasks 2-7

Test and refine responsive design across all breakpoints to ensure Plans section displays correctly.

**Acceptance Criteria**:
- Mobile view (320px-640px): Single column layout
- Tablet view (640px-1024px): Two column layout
- Desktop view (1024px+): Four column layout
- Cards maintain proper spacing and readability
- Text remains readable at all sizes
- Buttons are appropriately sized for touch targets on mobile

---

### Task 9: Content Review and Refinement
**Priority**: Medium | **Effort**: 1-2 hours | **Depends on**: Tasks 1-8

Review and refine all content (plan names, features, descriptions, CTAs) to ensure clarity and alignment with brand voice.

**Acceptance Criteria**:
- All plan names are clear and consistent
- Feature descriptions are concise and value-focused
- Pricing information is clear and accurate
- CTA text is action-oriented
- Content matches existing page tone and style
- No placeholder text remains

---

### Task 10: Accessibility Audit and Improvements
**Priority**: Medium | **Effort**: 1-2 hours | **Depends on**: Tasks 2-9

Ensure Plans section meets accessibility standards (WCAG 2.1 AA minimum).

**Acceptance Criteria**:
- Semantic HTML structure (proper headings, lists, buttons)
- ARIA labels where needed
- Keyboard navigation works for all interactive elements
- Color contrast meets WCAG standards
- Screen reader friendly (test with screen reader if possible)
- Focus states visible for keyboard users

---

### Task 11: Integration Testing
**Priority**: High | **Effort**: 1 hour | **Depends on**: All previous tasks

Test the complete Plans section integration with the rest of the landing page.

**Acceptance Criteria**:
- Section appears in correct location (between Security and Get Access)
- Navigation links work correctly
- Smooth scrolling to section works
- No layout shifts or visual glitches
- Page performance is maintained
- No console errors or warnings

---

### Task 12: Final Polish and Documentation
**Priority**: Low | **Effort**: 1 hour | **Depends on**: All previous tasks

Final visual polish, code cleanup, and update documentation if needed.

**Acceptance Criteria**:
- Code follows project conventions
- No unused code or comments
- Consistent formatting
- README updated if structure changed significantly
- Visual polish applied (spacing, alignment, shadows)
- Ready for production deployment

---

## Implementation Order

1. **Phase 1 - Foundation** (Tasks 1-2): Set up data structure and basic component
2. **Phase 2 - Styling** (Tasks 3-4): Apply visual design and feature lists
3. **Phase 3 - Interaction** (Tasks 5-7): Add CTAs and navigation
4. **Phase 4 - Refinement** (Tasks 8-10): Responsive design, content, accessibility
5. **Phase 5 - Finalization** (Tasks 11-12): Testing and polish

**Total Estimated Effort**: 15-20 hours

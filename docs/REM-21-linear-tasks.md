# Linear Tasks for REM-21: Plans Section Implementation

This document contains actionable tasks for implementing the Plans section on the ComfyUI-Egnyte landing page. Each task is designed to be assigned to an Agent for development.

## Task Breakdown

### Task 1: Create Plans Data Structure and Types
**Priority**: High  
**Estimated Effort**: 1-2 hours  
**Dependencies**: None

**Description**:  
Define TypeScript interfaces/types for plan data structure and create the data array with all four plans (Free, Pro, Pro+, Enterprise).

**Acceptance Criteria**:
- [ ] Create TypeScript interface/type for Plan object
- [ ] Define structure for plan features, pricing, CTAs
- [ ] Create plans array with all four tiers
- [ ] Include placeholder content for all plans
- [ ] Type safety verified (no TypeScript errors)

**Technical Details**:
- Location: `app/page.tsx` (or separate data file if preferred)
- Follow existing data structure patterns (features, steps arrays)
- Include: name, price, features[], ctaText, ctaLink, badge (optional)

---

### Task 2: Implement Plans Section Component
**Priority**: High  
**Estimated Effort**: 2-3 hours  
**Dependencies**: Task 1

**Description**:  
Create the Plans section component following the existing design patterns and specifications.

**Acceptance Criteria**:
- [ ] Section component created in `app/page.tsx`
- [ ] Section header with label, title, and optional description
- [ ] Grid layout for plan cards (responsive: 1/2/4 columns)
- [ ] Plan cards render with all required elements
- [ ] Styling matches existing design system
- [ ] Responsive design works on mobile, tablet, desktop

**Technical Details**:
- Use Tailwind CSS classes consistent with existing sections
- Grid: `grid-cols-1 md:grid-cols-2 lg:grid-cols-4`
- Card styling: `rounded-3xl border border-slate-200 bg-white p-6 shadow-halo`
- Section ID: `id="plans"` for anchor navigation

---

### Task 3: Style Plan Cards with Tier Differentiation
**Priority**: Medium  
**Estimated Effort**: 2-3 hours  
**Dependencies**: Task 2

**Description**:  
Apply visual differentiation to plan cards to highlight different tiers (Free, Pro, Pro+, Enterprise).

**Acceptance Criteria**:
- [ ] Free plan: Standard white card styling
- [ ] Pro plan: Highlighted with accent (e.g., border color or background tint)
- [ ] Pro+ plan: Premium styling (gradient or stronger accent)
- [ ] Enterprise plan: Dark theme (slate-950 background, white text)
- [ ] Optional "Popular" or "Recommended" badge on appropriate tier
- [ ] Visual hierarchy clearly distinguishes tiers

**Technical Details**:
- Use conditional styling based on plan tier
- Consider: `bg-slate-950 text-white` for Enterprise
- Pro/Pro+ could use: `border-slate-900` or `bg-gradient-to-br`
- Badge component: `rounded-full bg-emerald-100 px-3 py-1 text-xs`

---

### Task 4: Implement Feature Lists with Icons
**Priority**: Medium  
**Estimated Effort**: 2 hours  
**Dependencies**: Task 2

**Description**:  
Display plan features in a clean, scannable list format with appropriate visual indicators (checkmarks or bullets).

**Acceptance Criteria**:
- [ ] Feature list renders for each plan
- [ ] Features displayed in readable format (bullet points or checkmarks)
- [ ] Consistent spacing and typography
- [ ] Features clearly communicate value proposition
- [ ] Progressive disclosure (higher tiers show more features)

**Technical Details**:
- Use `<ul>` and `<li>` for semantic HTML
- Consider SVG checkmark icons or Unicode characters (✓)
- Styling: `space-y-2` or `space-y-3` for list items
- Text: `text-sm text-slate-600` (or `text-slate-200` for Enterprise)

---

### Task 5: Add Plan CTA Buttons
**Priority**: High  
**Estimated Effort**: 1-2 hours  
**Dependencies**: Task 2

**Description**:  
Implement call-to-action buttons for each plan tier with appropriate actions and styling.

**Acceptance Criteria**:
- [ ] Free plan: "Get Started" button
- [ ] Pro plan: "Start Free Trial" or "Upgrade" button
- [ ] Pro+ plan: "Start Free Trial" or "Upgrade" button
- [ ] Enterprise plan: "Contact Sales" button
- [ ] Buttons styled consistently with existing CTAs
- [ ] Buttons link to appropriate destinations (or are ready for integration)

**Technical Details**:
- Button styling: `rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-soft`
- Hover effects: `hover:-translate-y-0.5 hover:bg-slate-800`
- Enterprise button may need different styling (outline or inverse)
- Use `<a>` tags or `<button>` based on action type

---

### Task 6: Update Navigation Menu
**Priority**: Medium  
**Estimated Effort**: 1 hour  
**Dependencies**: Task 2

**Description**:  
Add "Plans" link to the main navigation menu in the header.

**Acceptance Criteria**:
- [ ] "Plans" link added to header navigation
- [ ] Link uses smooth scroll to `#plans` anchor
- [ ] Link styling matches existing navigation items
- [ ] Responsive behavior maintained (hidden on mobile if needed)
- [ ] Navigation works correctly on all screen sizes

**Technical Details**:
- Location: Header nav in `app/page.tsx`
- Link: `<a href="#plans">Plans</a>`
- Styling: `text-sm text-slate-600 transition hover:text-slate-900`
- Position: Between existing nav items (suggested: after "Security")

---

### Task 7: Add Plans Section to Footer Navigation
**Priority**: Low  
**Estimated Effort**: 30 minutes  
**Dependencies**: Task 2

**Description**:  
Optionally add "Plans" link to footer navigation for consistency.

**Acceptance Criteria**:
- [ ] "Plans" link added to footer navigation (if applicable)
- [ ] Link styling matches existing footer links
- [ ] Smooth scroll behavior works

**Technical Details**:
- Location: Footer section in `app/page.tsx`
- Follow existing footer link pattern

---

### Task 8: Implement Responsive Design Testing
**Priority**: High  
**Estimated Effort**: 1-2 hours  
**Dependencies**: Tasks 2-7

**Description**:  
Test and refine responsive design across all breakpoints to ensure Plans section displays correctly.

**Acceptance Criteria**:
- [ ] Mobile view (320px-640px): Single column layout
- [ ] Tablet view (640px-1024px): Two column layout
- [ ] Desktop view (1024px+): Four column layout
- [ ] Cards maintain proper spacing and readability
- [ ] Text remains readable at all sizes
- [ ] Buttons are appropriately sized for touch targets on mobile

**Technical Details**:
- Test in browser dev tools at various breakpoints
- Verify Tailwind responsive classes work correctly
- Ensure no horizontal scrolling issues
- Check card heights and content overflow

---

### Task 9: Content Review and Refinement
**Priority**: Medium  
**Estimated Effort**: 1-2 hours  
**Dependencies**: Tasks 1-8

**Description**:  
Review and refine all content (plan names, features, descriptions, CTAs) to ensure clarity and alignment with brand voice.

**Acceptance Criteria**:
- [ ] All plan names are clear and consistent
- [ ] Feature descriptions are concise and value-focused
- [ ] Pricing information is clear and accurate
- [ ] CTA text is action-oriented
- [ ] Content matches existing page tone and style
- [ ] No placeholder text remains

**Technical Details**:
- Review against existing page content style
- Ensure artist-friendly language
- Verify technical accuracy of feature claims
- Check for typos and grammar

---

### Task 10: Accessibility Audit and Improvements
**Priority**: Medium  
**Estimated Effort**: 1-2 hours  
**Dependencies**: Tasks 2-9

**Description**:  
Ensure Plans section meets accessibility standards (WCAG 2.1 AA minimum).

**Acceptance Criteria**:
- [ ] Semantic HTML structure (proper headings, lists, buttons)
- [ ] ARIA labels where needed
- [ ] Keyboard navigation works for all interactive elements
- [ ] Color contrast meets WCAG standards
- [ ] Screen reader friendly (test with screen reader if possible)
- [ ] Focus states visible for keyboard users

**Technical Details**:
- Use proper heading hierarchy (h2 for section, h3 for plan names)
- Add `aria-label` to buttons if needed
- Ensure focus styles: `focus:outline-none focus:ring-2 focus:ring-slate-900`
- Test with browser accessibility tools

---

### Task 11: Integration Testing
**Priority**: High  
**Estimated Effort**: 1 hour  
**Dependencies**: All previous tasks

**Description**:  
Test the complete Plans section integration with the rest of the landing page.

**Acceptance Criteria**:
- [ ] Section appears in correct location (between Security and Get Access)
- [ ] Navigation links work correctly
- [ ] Smooth scrolling to section works
- [ ] No layout shifts or visual glitches
- [ ] Page performance is maintained
- [ ] No console errors or warnings

**Technical Details**:
- Test full page load and scroll behavior
- Verify section spacing with adjacent sections
- Check for any CSS conflicts
- Run `npm run build` to ensure no build errors
- Test in multiple browsers (Chrome, Firefox, Safari, Edge)

---

### Task 12: Final Polish and Documentation
**Priority**: Low  
**Estimated Effort**: 1 hour  
**Dependencies**: All previous tasks

**Description**:  
Final visual polish, code cleanup, and update documentation if needed.

**Acceptance Criteria**:
- [ ] Code follows project conventions
- [ ] No unused code or comments
- [ ] Consistent formatting
- [ ] README updated if structure changed significantly
- [ ] Visual polish applied (spacing, alignment, shadows)
- [ ] Ready for production deployment

**Technical Details**:
- Run `npm run lint` and fix any issues
- Ensure consistent indentation and formatting
- Remove any console.log or debug code
- Verify all TypeScript types are correct

---

## Implementation Order Recommendation

1. **Phase 1 - Foundation** (Tasks 1-2): Set up data structure and basic component
2. **Phase 2 - Styling** (Tasks 3-4): Apply visual design and feature lists
3. **Phase 3 - Interaction** (Tasks 5-7): Add CTAs and navigation
4. **Phase 4 - Refinement** (Tasks 8-10): Responsive design, content, accessibility
5. **Phase 5 - Finalization** (Tasks 11-12): Testing and polish

## Notes for Agents

- Follow existing code patterns in `app/page.tsx`
- Maintain consistency with existing design system (colors, spacing, typography)
- Use Tailwind CSS utility classes (avoid custom CSS when possible)
- Test responsive design at multiple breakpoints
- Ensure TypeScript types are properly defined
- Keep content artist-focused and workflow-oriented
- All tasks should be committed and pushed as they are completed

## Estimated Total Effort
**15-20 hours** (spread across 12 tasks)

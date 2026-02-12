#!/usr/bin/env node

/**
 * Export Linear issues as JSON format that can be imported or used with Linear API
 */

const tasks = [
  {
    title: 'Create Plans Data Structure and Types',
    description: `Define TypeScript interfaces/types for plan data structure and create the data array with all four plans (Free, Pro, Pro+, Enterprise).

**Acceptance Criteria**:
- Create TypeScript interface/type for Plan object
- Define structure for plan features, pricing, CTAs
- Create plans array with all four tiers
- Include placeholder content for all plans
- Type safety verified (no TypeScript errors)

**Technical Details**:
- Location: \`app/page.tsx\` (or separate data file if preferred)
- Follow existing data structure patterns (features, steps arrays)
- Include: name, price, features[], ctaText, ctaLink, badge (optional)`,
    priority: 'HIGH',
  },
  {
    title: 'Implement Plans Section Component',
    description: `Create the Plans section component following the existing design patterns and specifications.

**Acceptance Criteria**:
- Section component created in \`app/page.tsx\`
- Section header with label, title, and optional description
- Grid layout for plan cards (responsive: 1/2/4 columns)
- Plan cards render with all required elements
- Styling matches existing design system
- Responsive design works on mobile, tablet, desktop

**Technical Details**:
- Use Tailwind CSS classes consistent with existing sections
- Grid: \`grid-cols-1 md:grid-cols-2 lg:grid-cols-4\`
- Card styling: \`rounded-3xl border border-slate-200 bg-white p-6 shadow-halo\`
- Section ID: \`id="plans"\` for anchor navigation`,
    priority: 'HIGH',
  },
  {
    title: 'Style Plan Cards with Tier Differentiation',
    description: `Apply visual differentiation to plan cards to highlight different tiers (Free, Pro, Pro+, Enterprise).

**Acceptance Criteria**:
- Free plan: Standard white card styling
- Pro plan: Highlighted with accent (e.g., border color or background tint)
- Pro+ plan: Premium styling (gradient or stronger accent)
- Enterprise plan: Dark theme (slate-950 background, white text)
- Optional "Popular" or "Recommended" badge on appropriate tier
- Visual hierarchy clearly distinguishes tiers`,
    priority: 'MEDIUM',
  },
  {
    title: 'Implement Feature Lists with Icons',
    description: `Display plan features in a clean, scannable list format with appropriate visual indicators (checkmarks or bullets).

**Acceptance Criteria**:
- Feature list renders for each plan
- Features displayed in readable format (bullet points or checkmarks)
- Consistent spacing and typography
- Features clearly communicate value proposition
- Progressive disclosure (higher tiers show more features)`,
    priority: 'MEDIUM',
  },
  {
    title: 'Add Plan CTA Buttons',
    description: `Implement call-to-action buttons for each plan tier with appropriate actions and styling.

**Acceptance Criteria**:
- Free plan: "Get Started" button
- Pro plan: "Start Free Trial" or "Upgrade" button
- Pro+ plan: "Start Free Trial" or "Upgrade" button
- Enterprise plan: "Contact Sales" button
- Buttons styled consistently with existing CTAs
- Buttons link to appropriate destinations (or are ready for integration)`,
    priority: 'HIGH',
  },
  {
    title: 'Update Navigation Menu',
    description: `Add "Plans" link to the main navigation menu in the header.

**Acceptance Criteria**:
- "Plans" link added to header navigation
- Link uses smooth scroll to \`#plans\` anchor
- Link styling matches existing navigation items
- Responsive behavior maintained (hidden on mobile if needed)
- Navigation works correctly on all screen sizes`,
    priority: 'MEDIUM',
  },
  {
    title: 'Add Plans Section to Footer Navigation',
    description: `Optionally add "Plans" link to footer navigation for consistency.

**Acceptance Criteria**:
- "Plans" link added to footer navigation (if applicable)
- Link styling matches existing footer links
- Smooth scroll behavior works`,
    priority: 'LOW',
  },
  {
    title: 'Implement Responsive Design Testing',
    description: `Test and refine responsive design across all breakpoints to ensure Plans section displays correctly.

**Acceptance Criteria**:
- Mobile view (320px-640px): Single column layout
- Tablet view (640px-1024px): Two column layout
- Desktop view (1024px+): Four column layout
- Cards maintain proper spacing and readability
- Text remains readable at all sizes
- Buttons are appropriately sized for touch targets on mobile`,
    priority: 'HIGH',
  },
  {
    title: 'Content Review and Refinement',
    description: `Review and refine all content (plan names, features, descriptions, CTAs) to ensure clarity and alignment with brand voice.

**Acceptance Criteria**:
- All plan names are clear and consistent
- Feature descriptions are concise and value-focused
- Pricing information is clear and accurate
- CTA text is action-oriented
- Content matches existing page tone and style
- No placeholder text remains`,
    priority: 'MEDIUM',
  },
  {
    title: 'Accessibility Audit and Improvements',
    description: `Ensure Plans section meets accessibility standards (WCAG 2.1 AA minimum).

**Acceptance Criteria**:
- Semantic HTML structure (proper headings, lists, buttons)
- ARIA labels where needed
- Keyboard navigation works for all interactive elements
- Color contrast meets WCAG standards
- Screen reader friendly (test with screen reader if possible)
- Focus states visible for keyboard users`,
    priority: 'MEDIUM',
  },
  {
    title: 'Integration Testing',
    description: `Test the complete Plans section integration with the rest of the landing page.

**Acceptance Criteria**:
- Section appears in correct location (between Security and Get Access)
- Navigation links work correctly
- Smooth scrolling to section works
- No layout shifts or visual glitches
- Page performance is maintained
- No console errors or warnings`,
    priority: 'HIGH',
  },
  {
    title: 'Final Polish and Documentation',
    description: `Final visual polish, code cleanup, and update documentation if needed.

**Acceptance Criteria**:
- Code follows project conventions
- No unused code or comments
- Consistent formatting
- README updated if structure changed significantly
- Visual polish applied (spacing, alignment, shadows)
- Ready for production deployment`,
    priority: 'LOW',
  },
];

// Export as JSON for potential import
const output = {
  project: 'ComfyUI-Egnyte-Web',
  parentIssue: 'REM-21',
  tasks: tasks.map((task, index) => ({
    number: index + 1,
    title: task.title,
    description: task.description,
    priority: task.priority,
    estimatedHours: index < 2 ? 2 : index < 5 ? 2.5 : index < 8 ? 1.5 : 1,
  })),
};

console.log(JSON.stringify(output, null, 2));

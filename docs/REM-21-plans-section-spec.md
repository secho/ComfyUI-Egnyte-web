# Plans Section Specification

## Overview
This document specifies the requirements for implementing a new "Plans" section on the ComfyUI-Egnyte landing page. The section will showcase four pricing tiers: Free, Pro, Pro+, and Enterprise.

## Section Location
The Plans section should be positioned between the "Security" section and the "Get Access" section, maintaining the visual flow of the landing page.

## Design Requirements

### Visual Design
- **Layout**: Grid-based card layout (4 columns on desktop, 2 columns on tablet, 1 column on mobile)
- **Card Style**: Consistent with existing design system using rounded-3xl borders, shadow-halo effects
- **Color Scheme**: 
  - Free: Standard white card with slate borders
  - Pro: Highlighted with subtle accent (consider slate-900 or brand color)
  - Pro+: Premium highlight (consider gradient or stronger accent)
  - Enterprise: Enterprise styling (dark slate-950 background with white text, similar to Security section)
- **Typography**: Follow existing font hierarchy (Manrope font family)

### Section Structure

#### Section Header
- **Label**: "Plans" (uppercase, tracking-[0.2em], text-slate-500)
- **Title**: "Choose the plan that fits your workflow" (text-3xl/4xl, font-semibold)
- **Description**: Brief text explaining the tiered approach (optional, max 2xl width)

#### Plan Cards
Each plan card should include:

1. **Plan Name** (Free, Pro, Pro+, Enterprise)
   - Large, prominent heading
   - Optional badge/tag for "Popular" or "Recommended" (for Pro or Pro+)

2. **Price Display**
   - Free: "Free" or "$0"
   - Pro, Pro+, Enterprise: Price format (e.g., "$X/month" or "Custom pricing")
   - Optional: Annual pricing toggle or mention

3. **Feature List**
   - Bulleted list of key features
   - Use checkmark icons or bullet points
   - Limit to 5-7 key features per plan
   - Progressive feature disclosure (higher tiers include lower tier features)

4. **Call-to-Action Button**
   - "Get Started" for Free
   - "Start Free Trial" or "Upgrade" for Pro/Pro+
   - "Contact Sales" for Enterprise
   - Button styling consistent with existing CTAs (rounded-full, shadow-soft)

5. **Additional Information** (optional)
   - Fine print, limitations, or special notes
   - Small text at bottom of card

### Plan Features (Suggested)

#### Free Plan
- Basic Egnyte integration
- Limited storage/bandwidth
- Community support
- Basic nodes (Egnyte Read, Egnyte Write)
- Personal use only

#### Pro Plan
- Everything in Free
- Increased storage/bandwidth
- Priority support
- All custom nodes
- Commercial use license
- Version history
- Advanced browsing features

#### Pro+ Plan
- Everything in Pro
- Unlimited storage/bandwidth
- Dedicated support channel
- Early access to new features
- Custom integrations
- Team collaboration tools
- Advanced security features

#### Enterprise Plan
- Everything in Pro+
- Custom deployment options
- SLA guarantees
- Dedicated account manager
- Custom training and onboarding
- Advanced audit and compliance
- Multi-tenant support
- Custom contract terms

## Technical Requirements

### Component Structure
- Create a new section component in `app/page.tsx`
- Follow existing section patterns (similar to Features, Workflow sections)
- Use TypeScript for type safety
- Define plan data as a typed array/object

### Responsive Design
- **Desktop (md+)**: 4-column grid
- **Tablet (sm-md)**: 2-column grid
- **Mobile**: 1-column stack
- Use Tailwind responsive utilities (grid-cols-1 md:grid-cols-2 lg:grid-cols-4)

### Accessibility
- Semantic HTML structure
- Proper heading hierarchy
- ARIA labels for interactive elements
- Keyboard navigation support
- Screen reader friendly

### Navigation
- Add "Plans" link to header navigation
- Add anchor link (#plans) for smooth scrolling
- Update footer navigation if needed

## Content Requirements

### Copy Guidelines
- Clear, concise feature descriptions
- Use artist-friendly language (consistent with existing content)
- Highlight value propositions for each tier
- Avoid technical jargon where possible
- Emphasize workflow benefits

### Visual Elements
- Consider icons for key features
- Use consistent spacing and padding
- Maintain visual hierarchy
- Ensure sufficient contrast for readability

## Integration Points

### Navigation Updates
- Add "Plans" to main navigation menu
- Update footer links if applicable
- Ensure smooth scroll behavior

### CTA Integration
- Plan CTAs should link to appropriate actions:
  - Free: Direct download/access link
  - Pro/Pro+: Sign-up or upgrade flow
  - Enterprise: Contact form or sales inquiry

## Future Considerations
- Pricing comparison table (optional enhancement)
- FAQ section related to plans
- Testimonials or case studies per plan tier
- Dynamic pricing display (if prices change frequently)

## Success Criteria
- Section visually matches existing design system
- All four plans clearly displayed and differentiated
- Responsive design works across all breakpoints
- Navigation integration complete
- Content is clear and compelling
- CTAs are functional and lead to appropriate actions

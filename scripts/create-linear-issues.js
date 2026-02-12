#!/usr/bin/env node

/**
 * Script to create Linear issues for REM-21 Plans Section
 * 
 * Usage:
 *   LINEAR_API_KEY=your_key node scripts/create-linear-issues.js
 * 
 * Or set LINEAR_API_KEY in your environment
 */

const LINEAR_API_KEY = process.env.LINEAR_API_KEY;
const LINEAR_API_URL = 'https://api.linear.app/graphql';

// GraphQL mutation to create an issue
const CREATE_ISSUE_MUTATION = `
  mutation CreateIssue($input: IssueCreateInput!) {
    issueCreate(input: $input) {
      success
      issue {
        id
        identifier
        title
        url
      }
    }
  }
`;

// GraphQL query to get team ID (needed for creating issues)
const GET_TEAMS_QUERY = `
  query {
    teams {
      nodes {
        id
        key
        name
      }
    }
  }
`;

// GraphQL query to get project by name
const GET_PROJECTS_QUERY = `
  query {
    projects {
      nodes {
        id
        name
        key
      }
    }
  }
`;

async function makeLinearRequest(query, variables = {}) {
  const response = await fetch(LINEAR_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': LINEAR_API_KEY,
    },
    body: JSON.stringify({ query, variables }),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  
  if (data.errors) {
    throw new Error(`GraphQL errors: ${JSON.stringify(data.errors)}`);
  }

  return data.data;
}

async function getTeamId() {
  const data = await makeLinearRequest(GET_TEAMS_QUERY);
  const teams = data.teams.nodes;
  
  if (teams.length === 0) {
    throw new Error('No teams found in Linear workspace');
  }

  // Try to find a team with key matching the project or use first team
  const team = teams.find(t => t.key === 'COMFYUI') || teams[0];
  console.log(`Using team: ${team.name} (${team.key})`);
  return team.id;
}

async function getProjectId(projectName = 'ComfyUI-Egnyte-Web') {
  try {
    const data = await makeLinearRequest(GET_PROJECTS_QUERY);
    const projects = data.projects.nodes;
    
    const project = projects.find(p => 
      p.name === projectName || 
      p.name.toLowerCase().includes('comfyui') ||
      p.name.toLowerCase().includes('egnyte')
    );
    
    if (project) {
      console.log(`Found project: ${project.name} (${project.key || project.id})`);
      return project.id;
    }
    
    console.log(`⚠️  Project "${projectName}" not found. Issues will be created without project association.`);
    return null;
  } catch (error) {
    console.log(`⚠️  Could not fetch projects: ${error.message}`);
    return null;
  }
}

async function createIssue(teamId, title, description, priority = 'MEDIUM', projectId = null) {
  const input = {
    teamId,
    title,
    description,
    priority,
  };

  if (projectId) {
    input.projectId = projectId;
  }

  const variables = { input };
  const data = await makeLinearRequest(CREATE_ISSUE_MUTATION, variables);
  
  if (data.issueCreate.success) {
    return data.issueCreate.issue;
  } else {
    throw new Error('Failed to create issue');
  }
}

// Task definitions
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

async function main() {
  if (!LINEAR_API_KEY) {
    console.log('⚠️  LINEAR_API_KEY not set. Cannot create issues automatically.');
    console.log('\n📋 Task content has been saved to: docs/linear-import-content.md');
    console.log('\nTo create issues manually:');
    console.log('1. Go to Linear workspace: ComfyUI-Egnyte-Web');
    console.log('2. Create issues using the content from docs/linear-import-content.md');
    console.log('\nOr set LINEAR_API_KEY environment variable and run this script again.');
    process.exit(0);
  }

  try {
    console.log('🔍 Fetching team information...');
    const teamId = await getTeamId();
    
    console.log('🔍 Fetching project information...');
    const projectId = await getProjectId();

    console.log('\n📝 Creating Linear issues...\n');

    const createdIssues = [];
    
    for (const task of tasks) {
      console.log(`Creating: ${task.title}...`);
      const issue = await createIssue(teamId, task.title, task.description, task.priority, projectId);
      createdIssues.push(issue);
      console.log(`✅ Created: ${issue.identifier} - ${issue.title}`);
      console.log(`   URL: ${issue.url}\n`);
      
      // Small delay to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 500));
    }

    console.log(`\n✨ Successfully created ${createdIssues.length} issues!`);
    console.log('\nCreated issues:');
    createdIssues.forEach(issue => {
      console.log(`  - ${issue.identifier}: ${issue.title} (${issue.url})`);
    });

  } catch (error) {
    console.error('❌ Error creating Linear issues:', error.message);
    console.error('\n📋 Task content has been saved to: docs/linear-import-content.md');
    console.error('You can create the issues manually using that file.');
    process.exit(1);
  }
}

main();

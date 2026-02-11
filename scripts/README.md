# Scripts

## create-linear-issues.js

Script to automatically create Linear issues for REM-21 Plans Section implementation.

### Prerequisites

1. **Linear API Key**: You need a Linear API key to use this script.
   - Go to Linear Settings → API → Personal API keys
   - Create a new API key
   - Copy the key

### Usage

#### Option 1: With API Key (Automatic)

```bash
LINEAR_API_KEY=your_api_key_here node scripts/create-linear-issues.js
```

Or set it as an environment variable:

```bash
export LINEAR_API_KEY=your_api_key_here
node scripts/create-linear-issues.js
```

The script will:
- Find your Linear team
- Find the "ComfyUI-Egnyte-Web" project
- Create 12 child issues for the Plans section implementation
- Link all issues to the project

#### Option 2: Manual Creation

If you don't have an API key or prefer manual creation:

1. The script will output instructions if no API key is found
2. Use the content from `docs/linear-import-content.md` to create issues manually in Linear
3. Go to your Linear workspace → ComfyUI-Egnyte-Web project
4. Create issues using the task definitions from the import content file

### What Gets Created

The script creates 12 tasks:

1. Create Plans Data Structure and Types
2. Implement Plans Section Component
3. Style Plan Cards with Tier Differentiation
4. Implement Feature Lists with Icons
5. Add Plan CTA Buttons
6. Update Navigation Menu
7. Add Plans Section to Footer Navigation
8. Implement Responsive Design Testing
9. Content Review and Refinement
10. Accessibility Audit and Improvements
11. Integration Testing
12. Final Polish and Documentation

Each issue includes:
- Title
- Detailed description with acceptance criteria
- Priority level
- Technical implementation details

### Notes

- Issues are created in the first available team (or team matching "COMFYUI" key)
- Issues are linked to the "ComfyUI-Egnyte-Web" project if found
- The script includes a 500ms delay between issue creation to avoid rate limiting
- If the project is not found, issues are still created but not linked to a project

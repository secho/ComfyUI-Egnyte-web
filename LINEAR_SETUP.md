# Creating Linear Issues for REM-21

This guide will help you create the Plans section specification and tasks in Linear.

## Quick Start

### Option 1: Automatic Creation (Recommended)

1. **Get your Linear API Key**:
   - Go to https://linear.app/settings/api
   - Click "Create API key"
   - Copy the key (starts with `lin_api_...`)

2. **Run the script**:
   ```bash
   LINEAR_API_KEY=your_key_here node scripts/create-linear-issues.js
   ```

   The script will automatically:
   - Find your Linear team
   - Find the "ComfyUI-Egnyte-Web" project
   - Create 12 child issues under REM-21
   - Set appropriate priorities and descriptions

### Option 2: Manual Creation

If you prefer to create issues manually in the Linear UI:

1. Open your Linear workspace
2. Navigate to the "ComfyUI-Egnyte-Web" project
3. Open issue REM-21
4. Use the content from `docs/linear-import-content.md` to create child issues
5. Copy each task's title and description into Linear

## What Gets Created

The script creates 12 implementation tasks:

1. **Create Plans Data Structure and Types** (High priority)
2. **Implement Plans Section Component** (High priority)
3. **Style Plan Cards with Tier Differentiation** (Medium priority)
4. **Implement Feature Lists with Icons** (Medium priority)
5. **Add Plan CTA Buttons** (High priority)
6. **Update Navigation Menu** (Medium priority)
7. **Add Plans Section to Footer Navigation** (Low priority)
8. **Implement Responsive Design Testing** (High priority)
9. **Content Review and Refinement** (Medium priority)
10. **Accessibility Audit and Improvements** (Medium priority)
11. **Integration Testing** (High priority)
12. **Final Polish and Documentation** (Low priority)

Each issue includes:
- Clear title
- Detailed description with acceptance criteria
- Technical implementation details
- Priority level

## Troubleshooting

**"LINEAR_API_KEY not set"**: 
- Make sure you've set the environment variable before running the script
- Or use: `LINEAR_API_KEY=your_key node scripts/create-linear-issues.js`

**"No teams found"**: 
- Check that your API key has the correct permissions
- Verify you're using a valid API key

**"Project not found"**: 
- Issues will still be created, but won't be linked to the project
- You can manually link them in Linear UI

## Next Steps

After creating the issues:
1. Review the tasks in Linear
2. Assign them to team members or agents
3. Start with Phase 1 tasks (Tasks 1-2)
4. Follow the implementation order in the task descriptions

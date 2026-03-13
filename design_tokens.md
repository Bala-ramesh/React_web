# Design Token System

Role: Design Systems Engineer

Task: Implement a global CSS token system for colors, spacing, typography, and focus states.

:root {

  --color-bg-primary: #121212;
  --color-bg-secondary: #1C1C1C;
  --color-text-primary: #F5F5F5;
  --color-text-muted: #B3B3B3;

  --color-accent: #3B82F6;

  --focus-ring: 3px solid #3B82F6;
  --focus-offset: 4px;

  --space-xs: 0.5rem;
  --space-sm: 1rem;
  --space-md: 1.5rem;
  --space-lg: 2rem;
  --space-xl: 3rem;

}

Rules:

- Never hardcode colors in components
- Use rem for spacing
- Maintain 7:1 contrast ratio
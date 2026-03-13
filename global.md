# Global Portfolio Build Rules

Role: Principal Frontend Architect & Accessibility Lead

All components must follow these constraints.

## Technology

React
Vanilla JavaScript
CSS only

Do NOT use:

MUI  
Bootstrap  
Chakra  
Tailwind component libraries

## Accessibility Baseline

Target WCAG 2.2 AAA where possible.

Rules:

• All interactive elements must be keyboard accessible  
• Focus states must always be visible  
• Minimum touch target: 48px  
• Maintain 7:1 contrast ratio  
• Respect prefers-reduced-motion  

## Focus Style

3px solid #3B82F6  
outline-offset: 4px

Never use:

outline: none

## Typography

Use the font:

Bodoni Moda

Use clamp() for fluid typography where possible.

## Units

Use rem for:

• spacing  
• font size  
• layout gaps

## Accessibility Landmarks

Every page must include:

<header>  
<nav>  
<main id="main-content">  
<footer>
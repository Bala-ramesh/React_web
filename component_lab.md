# Component Lab

Role: Senior Design Systems Architect

Task: Build a component playground with pluggable architecture.

## Data Structure

Create:

ComponentRegistry array.

Each object must include:

id  
name  
description  
ariaPatterns  
keyboardShortcuts  
render function

## Layout

Sidebar navigation with component list.

Main area contains:

Component stage (live preview)

A11y Inspector

Displays WCAG success criteria.

Example:

2.1.1 Keyboard  
4.1.2 Name, Role, Value

## Live Announcer

Visual box that mirrors an aria-live region.

Updates text to show what screen readers would announce.

Example component metadata:

Component: Accessible Modal

ARIA Patterns:

role="dialog"  
aria-modal="true"  
aria-labelledby

Keyboard:

Esc close  
Tab trap  
Shift+Tab reverse trap

## Scaling

Adding a new component to ComponentRegistry automatically creates a new route.
# Technical FAQ

Role: Accessibility Consultant & Mentor

Task: Build a WAI-ARIA compliant accordion.

## Questions

1

What is the ROI of Accessibility?

Answer:

Discuss risk mitigation and a 10% increase in user retention.

2

Why is PDF Accessibility complex?

Answer:

Explain the difference between visual layout and the Tag Tree reading order.

3

How do you handle 4,000+ defects in Agile?

Answer:

Discuss unit-level testing, automated checks, and backlog prioritization.

## ARIA Pattern

Accordion must follow WAI-ARIA standards.

Header:

<button aria-expanded="false" aria-controls="panel-id">

Panel:

<div role="region" aria-labelledby="button-id" hidden>

## Keyboard Navigation

Arrow Up  
Arrow Down  
Enter  
Space

## Design Style

Minimal border-bottom layout.

Subtle 200ms slide animation.

Disable animation when prefers-reduced-motion is active.
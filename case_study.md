# Case Study Gallery

Role: Senior Accessibility Engineer

Task: Build a case study card grid using React and CSS Grid.

## Layout

Responsive card grid.

Each card represents a career milestone.

## Case Study Data

Study 1

Title:
Enterprise RWD Migration

Key Focus:

4000+ accessibility defects identified

Transition from Waterfall to Agile.


Study 2

Title:
SaaS Accessibility Growth

Key Focus:

2000+ user stories written

10% customer growth

75+ accessible React components.


Study 3

Title:
Global Audit Infrastructure

Key Focus:

Built a 9-person accessibility team.

Generated revenue through PDF accessibility services.

## Card Design

Each card shows:

Key stat in bold.

Example:

+10% Growth

Assistive tech used:

NVDA  
JAWS  
Axe-core

Include:

"View Deep Dive"

link styled as a button.

## Accessibility

Use:

<article>

for each card.

Title must be:

<h3>

Entire card clickable using the Card-Link pattern.

Screen readers should only announce:

title  
View Deep Dive

Use rem spacing.
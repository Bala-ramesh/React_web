# Navigation

Role: Senior Frontend & Accessibility Engineer

Task: Build a fully accessible navigation component.

## Structure

<header>

<nav aria-label="Primary Navigation">

Menu must use:

<ul>
<li>

This allows screen readers to announce list length.

## Skip Link

First element inside header:

Skip to Main Content

Behavior:

Hidden visually by default  
Visible on :focus  

Link target:

#main-content

## Layout

Logo on left  
Navigation links on right

Use Flexbox.

## Style

Sticky navigation.

Glassmorphism effect:

backdrop-filter: blur(10px)

Semi-transparent dark background.

## Mobile Menu

Hamburger toggle button.

Attributes:

aria-expanded  
aria-haspopup="true"

When menu is open:

Tab key cycles only within menu items.

Pressing Escape:

Closes menu  
Returns focus to toggle button.

## Active Page

Automatically apply:

aria-current="page"

to the active link.

## High Contrast Mode

Add a Theme Toggle button.

When activated:

Add .high-contrast class to body.

High contrast theme:

Background: black  
Text: yellow  
Borders: white
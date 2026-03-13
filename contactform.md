# Contact Form

Role: Senior Accessibility Engineer

Task: Build a Level AAA accessible contact form.

## Fields

Name  
Email  
Subject (select)  
Message (textarea)

## Labeling

Each input must have a label using:

htmlFor

## Validation

Error Summary box appears when form fails.

Focus moves to the summary automatically.

Inline errors:

aria-invalid="true"

Error messages connected using:

aria-describedby

Required fields:

required  
aria-required="true"

## Design

Large inputs with 1.5rem touch targets.

Focus state:

3px high contrast ring.

## Success State

Replace form with success message.

Use:

role="status"

or

aria-live="polite"

## Constraints

Use React useState.

No form libraries.
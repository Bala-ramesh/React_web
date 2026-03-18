import AccordionExample from "../components/examples/AccordionExample"
import ButtonExample from "../components/examples/ButtonExample"
import linkExample from "../components/examples/linkExample"
import CheckboxExample from "../components/examples/checkboxExample"
import RadioGroupExample from "../components/examples/RadioGroupExample"
import DialogExample from "../components/examples/DialogExample"
import TabsExample from "../components/examples/TabsExample"
import TooltipExample from "../components/examples/TooltipExample"


// ...import other example components

export const COMPONENT_REGISTRY = [
  {
      id: "accordion",
      name: "Accordion",
      intro: "A vertically stacked set of headings that can be expanded or collapsed to reveal content, helping users view information in manageable sections without excessive scrolling.",
      description:
        "An accordion is a vertically stacked set of interactive headings that each contain a title, content snippet, or thumbnail representing a section of content. The headings act as controls, enabling users to reveal or hide their associated content. Accordions are commonly used to reduce scrolling and organize content into manageable sections on a single page.",
      apg: "https://www.w3.org/WAI/ARIA/apg/patterns/accordion/",
      nativeHtml: `<details>
      <summary>Section 1</summary>
      <p>Content for section 1</p>
    </details>
    <details>
      <summary>Section 2</summary>
      <p>Content for section 2</p>
    </details>
    <details>
      <summary>Section 3</summary>
      <p>Content for section 3</p>
    </details>`,
      ariaPatterns: ["role=button", "aria-expanded", "aria-controls"],
      keyboardShortcuts: [
        "Enter / Space: toggle panel",
        "Tab: move to next focusable element",
        "Shift + Tab: move to previous focusable element",
        "Down Arrow (optional): next header",
        "Up Arrow (optional): previous header",
        "Home (optional): first header",
        "End (optional): last header"
      ],
      wcagCriteria: [
        "2.1.1 Keyboard: All functionality must be operable via keyboard.",
        "2.4.3 Focus Order: Focus order should be logical and intuitive.",
        "4.1.2 Name, Role, Value: All interactive elements must be properly labeled with roles and states."
      ],
      ariaDetails: `
    - Each accordion header contains a button element with role="button".
    - Header button is wrapped in a heading element with appropriate aria-level.
    - Button inside heading is the only interactive element; others may be visually persistent.
    - Expanded state: aria-expanded="true" if visible, "false" if hidden.
    - Association: aria-controls references panel content ID.
    - Disabled state: aria-disabled="true" if panel cannot collapse.
    - Optional panel role: role="region" with aria-labelledby pointing to the button.
      `,
    render: () => <AccordionExample />
    },
    {
      id: "button",
      name: "Button",
      intro: "A button is an interactive control that allows users to trigger an action such as submitting a form, opening a dialog, or performing a task within the interface. ",
      description:
        "A widget that enables users to trigger an action or event, such as submitting a form, opening a dialog, or performing a delete operation. Buttons may also include toggle and menu button types for specific behaviors.",
      apg: "https://www.w3.org/WAI/ARIA/apg/patterns/button/",
      nativeHtml: `<button>Click me</button>
    <!-- Toggle button example -->
    <button aria-pressed="false">Mute</button>
    <!-- Menu button example -->
    <button aria-haspopup="true">Options</button>`,
      ariaPatterns: ["role=button", "aria-pressed (for toggle)", "aria-haspopup (for menu)"],
      keyboardShortcuts: [
        "Space: activates the button",
        "Enter: activates the button",
        "After activation, focus is set depending on the action performed (e.g., inside dialog, back to button, or next context)"
      ],
      wcagCriteria: [
        "2.1.1 Keyboard: All functionality must be operable via keyboard.",
        "4.1.2 Name, Role, Value: All interactive elements must have accessible names and roles."
      ],
      ariaDetails: `
    - Role: button
    - Accessible name: computed from text content or provided via aria-label / aria-labelledby
    - Description (optional): aria-describedby points to a description element
    - Disabled state: aria-disabled="true" if action unavailable
    - Toggle button: uses aria-pressed (true/false)
    - Menu button: uses aria-haspopup="menu" or true
    - Ensure visual style matches function; do not style links as buttons unless they perform a button action
    `
      ,
      render: () => <ButtonExample /> // your React live demo component
    },
    {
      id: "link",
      name: "Link",
      intro: "A link is an interactive element that navigates users to another resource, location, or section within a page or application. ",
      description:
        "A link widget provides an interactive reference to a resource, either external or within the current page or application.",
      apg: "https://www.w3.org/WAI/ARIA/apg/patterns/link/",
      nativeHtml: `<a href="#">Example Link</a>
    <!-- Link constructed from span or img elements -->
    <span role="link" tabindex="0">Custom Link</span>`,
      ariaPatterns: ["role=link"],
      keyboardShortcuts: [
        "Enter: activates the link and moves focus to the link target",
        "Shift + F10 (optional): opens a context menu for the link"
      ],
      wcagCriteria: [
        "2.1.1 Keyboard: All link functionality must be operable via keyboard",
        "4.1.2 Name, Role, Value: Interactive elements must have accessible names and roles"
      ],
      ariaDetails: `
    - Role: link
    - The element containing the link text or graphic has role="link"
    - Authors are encouraged to use a native <a> element with href
    - Applying role="link" to a non-native element does not provide default browser link behavior
    - Navigation, context menu, and other link behaviors must be implemented by the author
    `,
      render: () => <linkExample /> // Your live interactive example
    },
    {
      id: "checkbox",
      name: "Checkbox",
      intro: "A checkbox allows users to select one or more options from a group. Each checkbox operates independently and can be checked or unchecked.",
      description:
        "A checkbox widget allows users to select one or more options. WAI-ARIA supports dual-state (checked/not checked) and tri-state (checked/unchecked/partially checked) checkboxes for grouped options.",
      apg: "https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/",
      nativeHtml: `<input type="checkbox" id="option1" />
    <label for="option1">Option 1</label>
    
    <!-- Tri-state example using aria-checked -->
    <div role="checkbox" aria-checked="mixed" tabindex="0">Overall Option</div>`,
      ariaPatterns: ["role=checkbox", "aria-checked", "aria-labelledby", "aria-describedby", "role=group (for checkbox groups)"],
      keyboardShortcuts: [
        "Space: toggles the checkbox state"
      ],
      wcagCriteria: [
        "2.1.1 Keyboard: Checkbox must be operable via keyboard",
        "4.1.2 Name, Role, Value: Interactive elements must have accessible names and roles"
      ],
      ariaDetails: `
    - Role: checkbox
    - Accessible name can come from:
      * Text content inside the element
      * aria-labelledby referencing a label
      * aria-label
    - States:
      * aria-checked="true" when checked
      * aria-checked="false" when not checked
      * aria-checked="mixed" when partially checked
    - Grouping:
      * Logical groups should use role="group" with aria-labelledby referencing the group label
    - Description:
      * If additional descriptive text exists, use aria-describedby pointing to the description element
    - Tri-state behavior:
      * Checking overall checkbox selects all options
      * Unchecking overall checkbox deselects all options
      * Optional: third activation restores previously partially checked state
    `,
      render: () => <checkboxExample /> // Your live interactive demo component
    },
    {
        id: "radio-group",
        name: "Radio Group",
        intro: "A radio group presents a set of options where only one option can be selected at a time, helping users choose a single value from multiple choices. ",
        description:
          "A set of radio buttons where only one button can be checked at a time. Some implementations support initializing all buttons unchecked to require user selection before proceeding.",
        apg: "https://www.w3.org/WAI/ARIA/apg/patterns/radio/",
        nativeHtml: `<fieldset>
        <legend>Choose an option</legend>
        <input type="radio" id="option1" name="options" />
        <label for="option1">Option 1</label>
        <input type="radio" id="option2" name="options" />
        <label for="option2">Option 2</label>
      </fieldset>`,
        ariaPatterns: ["role=radiogroup", "role=radio", "aria-checked", "aria-labelledby", "aria-describedby"],
        keyboardShortcuts: [
          "Tab / Shift + Tab: move focus into/out of the radio group",
          "Space: selects the focused radio button",
          "Right Arrow / Down Arrow: move focus to next button (checks it, unchecks previous)",
          "Left Arrow / Up Arrow: move focus to previous button (checks it, unchecks previous)",
          "Enter (optional, toolbar): behaves like Space if focus is not on checked button"
        ],
        wcagCriteria: [
          "2.1.1 Keyboard: All functionality must be operable via keyboard",
          "4.1.2 Name, Role, Value: All interactive elements must have accessible names and roles"
        ],
        ariaDetails: `
      - Role: radiogroup for the container element
      - Each radio button has role="radio"
      - Checked state: aria-checked="true" if checked, "false" if not
      - Accessible label: 
        * Text content
        * aria-labelledby
        * aria-label
      - Description: aria-describedby points to additional info if available
      - Keyboard interaction:
        * Non-toolbar: Tab moves in/out, arrows navigate and check
        * Toolbar: Arrows navigate without changing checked button, Space/Enter selects
      - Optional: Down/Up arrows can loop focus to first/last radio button
      `,
        render: () => <RadioGroupExample /> // Your live interactive demo component
    },
    {
        id: "dialog",
        name: "Dialog",
        intro: "A dialog is a modal or non-modal overlay that appears above the main content to display important information or require user interaction.",
        description:
          "A dialog is a window overlaid on top of the main content. Modal dialogs make the underlying content inert and restrict focus to elements inside the dialog until it is closed.",
        apg: "https://www.w3.org/WAI/ARIA/apg/patterns/dialog/",
        nativeHtml: `<div role="dialog" aria-modal="true" aria-labelledby="dialogTitle">
        <h2 id="dialogTitle">Dialog Title</h2>
        <p>Dialog content goes here</p>
        <button>Close</button>
      </div>`,
        ariaPatterns: ["role=dialog", "aria-modal", "aria-labelledby", "aria-label", "aria-describedby"],
        keyboardShortcuts: [
          "Tab: move focus to next tabbable element inside the dialog",
          "Shift + Tab: move focus to previous tabbable element inside the dialog",
          "Escape: closes the dialog"
        ],
        wcagCriteria: [
          "2.1.1 Keyboard: Dialog must be fully operable via keyboard",
          "4.1.2 Name, Role, Value: Dialog container and interactive elements must have accessible names and roles"
        ],
        ariaDetails: `
      - Role: dialog for the container element
      - All interactive elements required to operate the dialog are descendants of the dialog container
      - aria-modal="true" prevents interaction with background content
      - Accessible name:
        * aria-labelledby referencing a visible dialog title
        * or aria-label
      - Optional: aria-describedby references elements describing the dialog content
      - Initial focus:
        * Typically set on first interactive element
        * May use tabindex="-1" on a static element at top for large content or complex semantic structures
        * May set focus on least destructive action for critical workflows
      - Closing behavior:
        * Focus returns to invoking element unless it no longer exists or workflow suggests a different logical focus
      - Dialogs should include a visible element with role=button to close the dialog
      `,
        render: () => <DialogExample /> // Your live interactive demo
    },
    {
      id: "tabs",
      name: "Tabs",
      intro: "Tabs organize content into multiple sections where only one panel is visible at a time, allowing users to switch between related views.",
      description:
        "A tabbed interface allows users to switch between multiple sections of content, displaying one panel at a time. Each tab has an associated panel, and only the active panel is visible.",
      apg: "https://www.w3.org/WAI/ARIA/apg/patterns/tabs/",
      nativeHtml: `<div role="tablist" aria-label="Sample Tabs">
      <button role="tab" aria-selected="true" aria-controls="panel1">Tab 1</button>
      <button role="tab" aria-selected="false" aria-controls="panel2">Tab 2</button>
      <div id="panel1" role="tabpanel" aria-labelledby="tab1">Content for Tab 1</div>
      <div id="panel2" role="tabpanel" aria-labelledby="tab2">Content for Tab 2</div>
    </div>`,
      ariaPatterns: ["role=tablist", "role=tab", "role=tabpanel", "aria-selected", "aria-controls", "aria-labelledby", "aria-haspopup", "aria-orientation"],
      keyboardShortcuts: [
        "Tab / Shift + Tab: move focus into/out of tab list",
        "Left Arrow / Right Arrow: move focus to previous/next tab (wraps around)",
        "Up Arrow / Down Arrow (vertical): moves focus accordingly",
        "Space / Enter: activates the tab if manual activation is used",
        "Home: move focus to first tab",
        "End: move focus to last tab",
        "Shift + F10: opens popup menu if tab has one",
        "Delete: deletes tab if allowed, updates focus and active tab"
      ],
      wcagCriteria: [
        "2.1.1 Keyboard: Tabs must be fully operable via keyboard",
        "4.1.2 Name, Role, Value: Tabs and tab panels must have accessible names and roles"
      ],
      ariaDetails: `
      - Container for tabs: role="tablist" (use aria-label or aria-labelledby for label)
      - Each tab: role="tab", aria-controls pointing to associated tabpanel
      - Active tab: aria-selected="true"; inactive tabs: aria-selected="false"
      - Each panel: role="tabpanel", aria-labelledby pointing to its tab
      - Popup menus: use aria-haspopup="menu" or true
      - Vertical tablist: aria-orientation="vertical"; default horizontal is implicit
      - Tab panels: set tabindex="0" if first focusable element is missing
      - Automatic activation recommended if panels are preloaded; otherwise, use manual activation
      - Arrow key behavior depends on orientation and activation mode
      `,
      render: () => <TabsExample /> // Your live interactive demo component
    },
    {
      id: "tooltip",
      name: "Tooltip",
      intro: "A tooltip provides brief contextual information about an element when users hover over it or focus on it with the keyboard.",
      description:
        "A tooltip is a popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it. It appears after a short delay and disappears when Escape is pressed or on mouse out. Tooltips do not receive focus.",
      apg: "https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/",
      nativeHtml: `<button aria-describedby="tooltip1">Hover me</button>
    <div id="tooltip1" role="tooltip">Tooltip content</div>`,
      ariaPatterns: ["role=tooltip", "aria-describedby"],
      keyboardShortcuts: [
        "Escape: dismisses the tooltip"
      ],
      wcagCriteria: [
        "2.1.1 Keyboard: Tooltip dismissal must be operable via keyboard",
        "4.1.2 Name, Role, Value: Tooltip element and trigger must be properly labeled"
      ],
      ariaDetails: `
      - Tooltip container has role="tooltip"
      - Triggering element references tooltip via aria-describedby
      - Focus remains on the triggering element while tooltip is displayed
      - Tooltip opens on keyboard focus or mouse hover
      - Tooltip closes on Escape key, blur (if focus triggered), or mouse out (if hover triggered)
      - Tooltips should not receive focus themselves; use non-modal dialog for focusable content
      - This pattern is a work in progress (tracked in issue 128)
      `,
      render: () => <TooltipExample /> // Placeholder for live interactive demo
    },


  // add remaining components...
]

export function getComponentById(id) {
  return COMPONENT_REGISTRY.find(c => c.id === id)
}
import { lazy } from "react"

const AccordionExample         = lazy(() => import("../components/examples/AccordionExample"))
const AlertExample             = lazy(() => import("../components/examples/AlertExample"))
const AlertDialogExample       = lazy(() => import("../components/examples/AlertDialogExample"))
const BreadcrumbExample        = lazy(() => import("../components/examples/BreadcrumbExample"))
const ButtonExample            = lazy(() => import("../components/examples/ButtonExample"))
const CarouselExample          = lazy(() => import("../components/examples/CarouselExample"))
const CheckboxExample          = lazy(() => import("../components/examples/checkboxExample"))
const ComboboxExample          = lazy(() => import("../components/examples/ComboboxExample"))
const DialogExample            = lazy(() => import("../components/examples/DialogExample"))
const DisclosureExample        = lazy(() => import("../components/examples/DisclosureExample"))
const FeedExample              = lazy(() => import("../components/examples/FeedExample"))
const GridExample              = lazy(() => import("../components/examples/GridExample"))
const LandmarksExample         = lazy(() => import("../components/examples/LandmarksExample"))
const LinkExample              = lazy(() => import("../components/examples/linkExample"))
const ListboxExample           = lazy(() => import("../components/examples/ListboxExample"))
const MenubarExample           = lazy(() => import("../components/examples/MenubarExample"))
const MenuButtonExample        = lazy(() => import("../components/examples/MenuButtonExample"))
const MeterExample             = lazy(() => import("../components/examples/MeterExample"))
const RadioGroupExample        = lazy(() => import("../components/examples/RadioGroupExample"))
const SliderExample            = lazy(() => import("../components/examples/SliderExample"))
const SliderMultiThumbExample  = lazy(() => import("../components/examples/SliderMultiThumbExample"))
const SpinbuttonExample        = lazy(() => import("../components/examples/SpinbuttonExample"))
const SwitchExample            = lazy(() => import("../components/examples/SwitchExample"))
const TableExample             = lazy(() => import("../components/examples/TableExample"))
const TabsExample              = lazy(() => import("../components/examples/TabsExample"))
const ToolbarExample           = lazy(() => import("../components/examples/ToolbarExample"))
const TooltipExample           = lazy(() => import("../components/examples/TooltipExample"))
const TreeViewExample          = lazy(() => import("../components/examples/TreeViewExample"))
const TreegridExample          = lazy(() => import("../components/examples/TreegridExample"))
const WindowSplitterExample    = lazy(() => import("../components/examples/WindowSplitterExample"))

export const COMPONENT_REGISTRY = [
  // ── 1. Accordion ──────────────────────────────────────────────────────────
  {
    id: "accordion",
    name: "Accordion",
    intro: "A vertically stacked set of headings that can be expanded or collapsed to reveal content, helping users view information in manageable sections without excessive scrolling.",
    description: "An accordion is a vertically stacked set of interactive headings that each contain a title, content snippet, or thumbnail representing a section of content. The headings act as controls, enabling users to reveal or hide their associated content.",
    apg: "https://www.w3.org/WAI/ARIA/apg/patterns/accordion/",
    nativeHtml: `<details>
  <summary>Section 1</summary>
  <p>Content for section 1</p>
</details>
<details>
  <summary>Section 2</summary>
  <p>Content for section 2</p>
</details>`,
    ariaPatterns: ["role=button", "aria-expanded", "aria-controls"],
    keyboardShortcuts: [
      "Enter / Space: toggle panel open or closed",
      "Tab: move focus to next focusable element",
      "Shift + Tab: move focus to previous focusable element",
      "Down Arrow (optional): move focus to next accordion header",
      "Up Arrow (optional): move focus to previous accordion header",
      "Home (optional): move focus to first accordion header",
      "End (optional): move focus to last accordion header",
    ],
    wcagCriteria: [
      "2.1.1 Keyboard: All functionality must be operable via keyboard.",
      "2.4.3 Focus Order: Focus order should be logical and intuitive.",
      "4.1.2 Name, Role, Value: All interactive elements must be properly labeled.",
    ],
    ariaDetails: `- Each accordion header contains a <button> with role="button".
- Button is wrapped in a heading element (h2–h6) with appropriate aria-level.
- aria-expanded="true" when panel is visible; "false" when hidden.
- aria-controls references the ID of the associated panel.
- Optional: role="region" with aria-labelledby on the panel for landmark navigation.
- aria-disabled="true" if a panel cannot be collapsed.`,
    render: () => <AccordionExample />,
  },

  // ── 2. Alert ──────────────────────────────────────────────────────────────
  {
    id: "alert",
    name: "Alert",
    intro: "An alert is a live region that announces important, time-sensitive messages to screen reader users without interrupting keyboard focus.",
    description: "An alert is an element that displays a brief, important message in a way that attracts the user's attention without interrupting the user's task. Alerts are live regions so assistive technologies automatically announce the new content.",
    apg: "https://www.w3.org/WAI/ARIA/apg/patterns/alert/",
    nativeHtml: `<!-- Static alert -->
<div role="alert">
  Your session will expire in 2 minutes.
</div>

<!-- Dynamically injected alert -->
<div id="live-region" role="alert" aria-live="assertive"></div>`,
    ariaPatterns: ["role=alert", "aria-live=assertive", "aria-atomic=true"],
    keyboardShortcuts: [
      "No specific keyboard interaction — alert content is announced automatically.",
      "Escape (optional): dismiss if the alert is visually dismissible.",
    ],
    wcagCriteria: [
      "1.3.1 Info and Relationships: Alert role conveys semantic meaning.",
      "4.1.3 Status Messages: Status messages must be programmatically determinable.",
    ],
    ariaDetails: `- role="alert" implies aria-live="assertive" and aria-atomic="true".
- Use sparingly — assertive alerts interrupt current screen reader announcements.
- For non-urgent messages prefer role="status" (aria-live="polite").
- Do not move focus to the alert element; focus stays on the current control.
- Inject alert text dynamically into an already-rendered container for reliable announcements.`,
    render: () => <AlertExample />,
  },

  // ── 3. Alert Dialog ───────────────────────────────────────────────────────
  {
    id: "alert-dialog",
    name: "Alert Dialog",
    intro: "An alert dialog is a modal that interrupts the user's workflow to deliver a critical message and requires an explicit response before continuing.",
    description: "An alert dialog is a modal dialog that interrupts the user's workflow to communicate an important message and acquire a response. It traps focus until the user responds, preventing interaction with the background.",
    apg: "https://www.w3.org/WAI/ARIA/apg/patterns/alertdialog/",
    nativeHtml: `<div role="alertdialog"
     aria-modal="true"
     aria-labelledby="alertTitle"
     aria-describedby="alertDesc">
  <h2 id="alertTitle">Confirm Delete</h2>
  <p id="alertDesc">This action cannot be undone.</p>
  <button>Cancel</button>
  <button>Delete</button>
</div>`,
    ariaPatterns: ["role=alertdialog", "aria-modal=true", "aria-labelledby", "aria-describedby"],
    keyboardShortcuts: [
      "Tab: cycle focus through interactive elements inside the dialog",
      "Shift + Tab: cycle focus backwards",
      "Escape: closes the dialog (if the action is cancelable)",
    ],
    wcagCriteria: [
      "2.1.1 Keyboard: Dialog must be fully operable via keyboard.",
      "2.1.2 No Keyboard Trap: Focus must be contained within the dialog while it is open.",
      "4.1.2 Name, Role, Value: Dialog and controls must have accessible names and roles.",
    ],
    ariaDetails: `- role="alertdialog" identifies the element as both an alert and a dialog.
- aria-modal="true" prevents interaction with background content.
- aria-labelledby references the dialog's visible title element.
- aria-describedby references the element describing the alert message.
- Focus is moved into the dialog when it opens; typically to the least-destructive action.
- Focus returns to the triggering element when the dialog closes.`,
    render: () => <AlertDialogExample />,
  },

  // ── 4. Breadcrumb ─────────────────────────────────────────────────────────
  {
    id: "breadcrumb",
    name: "Breadcrumb",
    intro: "A breadcrumb trail shows users their location within the site hierarchy and lets them navigate back to parent pages.",
    description: "A breadcrumb is a list of links that represents the navigational path from the site root to the current page. It helps users understand where they are within the site structure and allows them to navigate to any level in the hierarchy.",
    apg: "https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/",
    nativeHtml: `<nav aria-label="Breadcrumb">
  <ol>
    <li><a href="/">Home</a></li>
    <li><a href="/products">Products</a></li>
    <li><a href="/products/shoes" aria-current="page">Shoes</a></li>
  </ol>
</nav>`,
    ariaPatterns: ["aria-label on nav", "aria-current=page", "role=list (implicit in ol)"],
    keyboardShortcuts: [
      "Tab: move focus to the next breadcrumb link",
      "Shift + Tab: move focus to the previous breadcrumb link",
      "Enter: activate the focused link",
    ],
    wcagCriteria: [
      "2.4.8 Location: Breadcrumbs satisfy this criterion by showing the user's location.",
      "4.1.2 Name, Role, Value: The nav landmark and links must have accessible names.",
    ],
    ariaDetails: `- Wrap in <nav aria-label="Breadcrumb"> to create a navigation landmark.
- Use an <ol> because order is meaningful.
- The link to the current page has aria-current="page".
- Visually separate items with CSS (e.g., "›") rather than literal characters in the markup.
- The current page link may omit href since it represents the current location.`,
    render: () => <BreadcrumbExample />,
  },

  // ── 5. Button ─────────────────────────────────────────────────────────────
  {
    id: "button",
    name: "Button",
    intro: "A button is an interactive control that triggers an action such as submitting a form, opening a dialog, or performing a task.",
    description: "A widget that enables users to trigger an action or event, such as submitting a form, opening a dialog, or performing a delete operation. Includes toggle buttons and menu buttons for specific interaction patterns.",
    apg: "https://www.w3.org/WAI/ARIA/apg/patterns/button/",
    nativeHtml: `<!-- Action button -->
<button>Save</button>

<!-- Toggle button -->
<button aria-pressed="false">Mute</button>

<!-- Menu button -->
<button aria-haspopup="menu" aria-expanded="false">Options ▾</button>`,
    ariaPatterns: ["role=button", "aria-pressed (toggle)", "aria-haspopup (menu)", "aria-expanded", "aria-disabled"],
    keyboardShortcuts: [
      "Space: activates the button",
      "Enter: activates the button",
    ],
    wcagCriteria: [
      "2.1.1 Keyboard: All functionality must be operable via keyboard.",
      "4.1.2 Name, Role, Value: Buttons must have accessible names and roles.",
    ],
    ariaDetails: `- Use native <button> whenever possible; it carries role="button" implicitly.
- Accessible name: from text content, aria-label, or aria-labelledby.
- Toggle button: aria-pressed="true" when active, "false" when inactive.
- Menu button: aria-haspopup="menu" and aria-expanded reflects menu visibility.
- aria-disabled="true" for visually disabled buttons that still receive focus.
- Do not style <a> as a button unless it performs a button action.`,
    render: () => <ButtonExample />,
  },

  // ── 6. Carousel ───────────────────────────────────────────────────────────
  {
    id: "carousel",
    name: "Carousel",
    intro: "A carousel cycles through a series of content panels, with controls to pause, advance, or go back — auto-rotation must pause on focus or hover.",
    description: "A carousel presents a set of items, known as slides, by sequentially displaying a subset of one or more slides. Carousels include controls for switching between slides and should stop auto-rotating when users interact with them.",
    apg: "https://www.w3.org/WAI/ARIA/apg/patterns/carousel/",
    nativeHtml: `<section aria-roledescription="carousel" aria-label="Featured content">
  <div aria-live="polite">
    <div role="group" aria-roledescription="slide" aria-label="1 of 3">
      Slide content
    </div>
  </div>
  <button aria-label="Previous slide">‹</button>
  <button aria-label="Next slide">›</button>
  <button aria-label="Pause auto-rotation">⏸</button>
</section>`,
    ariaPatterns: ["aria-roledescription=carousel", "aria-roledescription=slide", "aria-live=polite/off", "aria-label", "role=group"],
    keyboardShortcuts: [
      "Tab: move focus through carousel controls",
      "Enter / Space: activate focused control (prev, next, pause)",
    ],
    wcagCriteria: [
      "2.1.1 Keyboard: All carousel controls must be keyboard accessible.",
      "2.2.2 Pause, Stop, Hide: Auto-rotating content must have pause/stop controls.",
    ],
    ariaDetails: `- Carousel container: aria-roledescription="carousel", aria-label describes the content.
- Each slide: role="group", aria-roledescription="slide", aria-label="N of total".
- When auto-rotating: aria-live="off" on the slides container; use "polite" when paused.
- Auto-rotation pauses on hover, focus, and when the pause button is activated.
- Include previous, next, and pause/play controls with descriptive aria-labels.`,
    render: () => <CarouselExample />,
  },

  // ── 7. Checkbox ───────────────────────────────────────────────────────────
  {
    id: "checkbox",
    name: "Checkbox",
    intro: "A checkbox lets users select one or more independent options; a tri-state variant represents a mixed state when a group is partially selected.",
    description: "A checkbox allows users to select one or more options independently. WAI-ARIA supports dual-state (checked/not checked) and tri-state (checked/unchecked/mixed) checkboxes for grouped options.",
    apg: "https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/",
    nativeHtml: `<input type="checkbox" id="opt1" />
<label for="opt1">Option 1</label>

<!-- Tri-state / mixed state -->
<div role="checkbox" aria-checked="mixed" tabindex="0">
  Select all
</div>`,
    ariaPatterns: ["role=checkbox", "aria-checked", "aria-checked=mixed", "role=group"],
    keyboardShortcuts: [
      "Space: toggle the checkbox state",
    ],
    wcagCriteria: [
      "2.1.1 Keyboard: Checkbox must be operable via keyboard.",
      "4.1.2 Name, Role, Value: Interactive elements must have accessible names and roles.",
    ],
    ariaDetails: `- role="checkbox" on the interactive element.
- aria-checked="true" | "false" | "mixed".
- Accessible name: text content, aria-label, or aria-labelledby.
- Group checkboxes with role="group" and aria-labelledby pointing to the group label.
- Tri-state: checking the "all" checkbox selects all; unchecking deselects all; mixed = partial.`,
    render: () => <CheckboxExample />,
  },

  // ── 8. Combobox ───────────────────────────────────────────────────────────
  {
    id: "combobox",
    name: "Combobox",
    intro: "A combobox combines a text input with a listbox popup, letting users type to filter options or select from a dropdown list.",
    description: "A combobox is a composite widget combining an input with a popup listbox or grid. Users can type in the input to filter options and use the keyboard to navigate and select from the popup.",
    apg: "https://www.w3.org/WAI/ARIA/apg/patterns/combobox/",
    nativeHtml: `<label for="fruit">Favourite fruit</label>
<input id="fruit" type="text"
  role="combobox"
  aria-expanded="false"
  aria-autocomplete="list"
  aria-controls="fruit-listbox" />
<ul id="fruit-listbox" role="listbox">
  <li role="option" aria-selected="false">Apple</li>
  <li role="option" aria-selected="false">Banana</li>
</ul>`,
    ariaPatterns: ["role=combobox", "aria-expanded", "aria-autocomplete", "aria-controls", "aria-activedescendant", "role=listbox", "role=option"],
    keyboardShortcuts: [
      "Down Arrow: open popup; move focus to first option",
      "Up Arrow: move focus to last option",
      "Enter: select focused option; close popup",
      "Escape: close popup without selecting; clear input (second press)",
      "Alt + Down Arrow: open popup without moving focus",
      "Alt + Up Arrow: close popup; focus stays on input",
    ],
    wcagCriteria: [
      "2.1.1 Keyboard: All combobox functionality must be keyboard accessible.",
      "4.1.2 Name, Role, Value: Input and popup elements must have accessible names and roles.",
    ],
    ariaDetails: `- Input element has role="combobox".
- aria-expanded="true" when popup is visible.
- aria-controls references the popup listbox ID.
- aria-activedescendant on the input references the currently focused option.
- Each option: role="option", aria-selected="true" when selected.
- aria-autocomplete="none|inline|list|both" describes filtering behaviour.`,
    render: () => <ComboboxExample />,
  },

  // ── 9. Dialog ─────────────────────────────────────────────────────────────
  {
    id: "dialog",
    name: "Dialog",
    intro: "A dialog is a modal overlay that focuses user attention on a task or message, trapping focus until the user dismisses it.",
    description: "A dialog is a window overlaid on the main content. Modal dialogs make underlying content inert and restrict focus to elements inside the dialog until it is closed.",
    apg: "https://www.w3.org/WAI/ARIA/apg/patterns/dialog/",
    nativeHtml: `<div role="dialog"
     aria-modal="true"
     aria-labelledby="dlgTitle"
     aria-describedby="dlgDesc">
  <h2 id="dlgTitle">Confirm Action</h2>
  <p id="dlgDesc">Are you sure you want to continue?</p>
  <button>Cancel</button>
  <button>Confirm</button>
</div>`,
    ariaPatterns: ["role=dialog", "aria-modal=true", "aria-labelledby", "aria-describedby"],
    keyboardShortcuts: [
      "Tab: move focus to next tabbable element inside the dialog",
      "Shift + Tab: move focus to previous tabbable element",
      "Escape: close the dialog",
    ],
    wcagCriteria: [
      "2.1.1 Keyboard: Dialog must be fully operable via keyboard.",
      "2.1.2 No Keyboard Trap: Focus must be contained while the dialog is open.",
      "4.1.2 Name, Role, Value: Dialog and controls must have accessible names and roles.",
    ],
    ariaDetails: `- role="dialog" on the container element.
- aria-modal="true" prevents interaction with background content.
- aria-labelledby references the visible dialog title (required).
- aria-describedby references the descriptive content (optional).
- On open: focus moves to first interactive element or a specific element via tabindex="-1".
- On close: focus returns to the element that triggered the dialog.`,
    render: () => <DialogExample />,
  },

  // ── 10. Disclosure ────────────────────────────────────────────────────────
  {
    id: "disclosure",
    name: "Disclosure",
    intro: "A disclosure button toggles the visibility of a panel, showing or hiding supplemental content without navigating away from the page.",
    description: "A disclosure is a button that controls visibility of a section of content. When the disclosed content is hidden, the button is often styled as a typical push button with a right-pointing arrow. When shown, the arrow points down.",
    apg: "https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/",
    nativeHtml: `<button type="button"
  aria-expanded="false"
  aria-controls="panel1">
  Show details
</button>
<div id="panel1" hidden>
  Hidden panel content revealed on toggle.
</div>`,
    ariaPatterns: ["aria-expanded", "aria-controls", "hidden attribute"],
    keyboardShortcuts: [
      "Enter / Space: toggle the disclosure panel",
      "Tab: move focus to next focusable element",
    ],
    wcagCriteria: [
      "2.1.1 Keyboard: Toggle must be operable via keyboard.",
      "4.1.2 Name, Role, Value: Button must have an accessible name and communicate its state.",
    ],
    ariaDetails: `- A standard <button> carries role="button" implicitly.
- aria-expanded="true" when the panel is shown; "false" when hidden.
- aria-controls references the ID of the controlled panel.
- The panel can use the HTML hidden attribute or display:none; both remove content from accessibility tree.
- Update button label or icon to reflect the expanded/collapsed state.`,
    render: () => <DisclosureExample />,
  },

  // ── 11. Feed ──────────────────────────────────────────────────────────────
  {
    id: "feed",
    name: "Feed",
    intro: "A feed is a scrollable list of articles that loads more content as the user scrolls, announcing new items to screen reader users.",
    description: "A feed is a section of a page that automatically loads new sections of content, called articles, as the user scrolls. Screen reader users can navigate the feed by article and are informed of the total count and their current position.",
    apg: "https://www.w3.org/WAI/ARIA/apg/patterns/feed/",
    nativeHtml: `<div role="feed" aria-busy="false" aria-label="Latest updates">
  <article aria-posinset="1" aria-setsize="10"
           aria-labelledby="art1-title" tabindex="0">
    <h3 id="art1-title">Article Title</h3>
    <p>Article content…</p>
  </article>
</div>`,
    ariaPatterns: ["role=feed", "role=article", "aria-posinset", "aria-setsize", "aria-busy", "aria-labelledby"],
    keyboardShortcuts: [
      "Page Down: move focus to the next article",
      "Page Up: move focus to the previous article",
      "Control + End: move focus to the first focusable element after the feed",
      "Control + Home: move focus to the first focusable element before the feed",
    ],
    wcagCriteria: [
      "1.3.1 Info and Relationships: Article positions must be programmatically determinable.",
      "2.1.1 Keyboard: Feed must be navigable via keyboard.",
    ],
    ariaDetails: `- role="feed" on the container; role="article" on each item.
- aria-posinset: 1-based position of the article in the feed.
- aria-setsize: total number of loaded articles (-1 if unknown).
- aria-busy="true" while loading new articles; "false" when complete.
- Each article should have tabindex="0" and an accessible label.
- Keyboard navigation uses Page Up / Page Down between articles.`,
    render: () => <FeedExample />,
  },

  // ── 12. Grid ──────────────────────────────────────────────────────────────
  {
    id: "grid",
    name: "Grid",
    intro: "A grid is a composite widget for displaying and optionally editing tabular data, with two-dimensional arrow-key navigation between cells.",
    description: "A grid widget is a composite providing navigation and interaction across two dimensions of cells, similar to a spreadsheet. It can contain interactive widgets within cells.",
    apg: "https://www.w3.org/WAI/ARIA/apg/patterns/grid/",
    nativeHtml: `<div role="grid" aria-label="User data"
     aria-rowcount="5" aria-colcount="3">
  <div role="row" aria-rowindex="1">
    <span role="columnheader">Name</span>
    <span role="columnheader">Role</span>
    <span role="columnheader">Status</span>
  </div>
  <div role="row" aria-rowindex="2">
    <span role="gridcell">Alice</span>
    <span role="gridcell">Engineer</span>
    <span role="gridcell">Active</span>
  </div>
</div>`,
    ariaPatterns: ["role=grid", "role=row", "role=gridcell", "role=columnheader", "aria-selected", "aria-rowindex", "aria-colindex"],
    keyboardShortcuts: [
      "Arrow keys: move focus one cell in any direction",
      "Home: move focus to first cell in current row",
      "End: move focus to last cell in current row",
      "Control + Home: move focus to first cell in grid",
      "Control + End: move focus to last cell in grid",
      "Page Down: move focus down by visible rows",
      "Page Up: move focus up by visible rows",
      "Enter: activate cell widget or enter edit mode",
      "Escape: exit edit mode",
    ],
    wcagCriteria: [
      "2.1.1 Keyboard: Grid must be fully operable via keyboard.",
      "4.1.2 Name, Role, Value: Cells must have accessible roles.",
    ],
    ariaDetails: `- role="grid" on the container; role="row" for rows; role="gridcell" or role="columnheader" for cells.
- Uses roving tabindex: only the focused cell has tabindex="0"; all others tabindex="-1".
- aria-selected on rows or cells for selection state.
- aria-rowcount / aria-colcount for virtualised grids.
- For editable cells, use aria-readonly="false" and manage edit mode on Enter/Escape.`,
    render: () => <GridExample />,
  },

  // ── 13. Landmarks ─────────────────────────────────────────────────────────
  {
    id: "landmarks",
    name: "Landmarks",
    intro: "Landmark roles divide a page into named regions so screen reader users can jump directly to the section they need.",
    description: "Landmark roles identify the major sections of a page, enabling assistive technology users to orient themselves and navigate directly to the primary regions without having to wade through intervening content.",
    apg: "https://www.w3.org/WAI/ARIA/apg/patterns/landmarks/",
    nativeHtml: `<header role="banner">…</header>
<nav aria-label="Main">…</nav>
<main>…</main>
<aside aria-label="Related links">…</aside>
<footer role="contentinfo">…</footer>
<section aria-labelledby="sec1">…</section>
<form aria-labelledby="frm1">…</form>`,
    ariaPatterns: ["role=banner", "role=navigation", "role=main", "role=complementary", "role=contentinfo", "role=region", "role=form", "role=search"],
    keyboardShortcuts: [
      "Screen reader shortcut (e.g. D in NVDA, R in VoiceOver): jump to next landmark",
      "Shift + shortcut: jump to previous landmark",
    ],
    wcagCriteria: [
      "1.3.1 Info and Relationships: Page structure must be programmatically determinable.",
      "2.4.1 Bypass Blocks: Landmarks provide one mechanism to bypass repeated content.",
    ],
    ariaDetails: `- Prefer native HTML5 elements (<header>, <nav>, <main>, <footer>, <aside>) which map to ARIA roles.
- Every <nav> and <section> should have an accessible label to distinguish multiple instances.
- Only one <main> / role="main" per page.
- role="banner" and role="contentinfo" should be direct children of <body>.
- role="search" identifies search functionality (no native HTML equivalent).`,
    render: () => <LandmarksExample />,
  },

  // ── 14. Link ──────────────────────────────────────────────────────────────
  {
    id: "link",
    name: "Link",
    intro: "A link navigates users to another resource or location; always prefer the native <a> element with a valid href.",
    description: "A link widget provides an interactive reference to a resource, either external or within the current page or application.",
    apg: "https://www.w3.org/WAI/ARIA/apg/patterns/link/",
    nativeHtml: `<!-- Native link (preferred) -->
<a href="/about">About us</a>

<!-- Custom element fallback -->
<span role="link" tabindex="0"
  onclick="navigate('/about')"
  onkeydown="handleKey(event)">
  About us
</span>`,
    ariaPatterns: ["role=link"],
    keyboardShortcuts: [
      "Enter: activate the link",
      "Shift + F10 (optional): open a context menu for the link",
    ],
    wcagCriteria: [
      "2.1.1 Keyboard: All link functionality must be keyboard operable.",
      "4.1.2 Name, Role, Value: Links must have accessible names and roles.",
    ],
    ariaDetails: `- Use native <a href="…"> whenever possible.
- role="link" on a non-native element does NOT provide href navigation — the author must implement it.
- Accessible name: text content, aria-label, or aria-labelledby.
- aria-current="page" on a link when it points to the current page.
- Do not use role="link" on elements that perform actions — use role="button" instead.`,
    render: () => <LinkExample />,
  },

  // ── 15. Listbox ───────────────────────────────────────────────────────────
  {
    id: "listbox",
    name: "Listbox",
    intro: "A listbox presents a list of options from which users can select one or multiple items, navigable entirely with the keyboard.",
    description: "A listbox widget presents a list of options and allows users to select one or more of them. It does not include a text input and is distinct from a combobox.",
    apg: "https://www.w3.org/WAI/ARIA/apg/patterns/listbox/",
    nativeHtml: `<label id="lb-label">Choose a language</label>
<ul role="listbox"
    aria-labelledby="lb-label"
    aria-multiselectable="false"
    tabindex="0">
  <li role="option" aria-selected="true">JavaScript</li>
  <li role="option" aria-selected="false">Python</li>
  <li role="option" aria-selected="false">Rust</li>
</ul>`,
    ariaPatterns: ["role=listbox", "role=option", "aria-selected", "aria-multiselectable", "aria-activedescendant"],
    keyboardShortcuts: [
      "Down Arrow: move focus to next option",
      "Up Arrow: move focus to previous option",
      "Home: move focus to first option",
      "End: move focus to last option",
      "Space: select focused option (multi-select)",
      "Enter: select focused option",
      "Shift + Arrow: extend selection (multi-select)",
      "Control + A: select all options (multi-select)",
    ],
    wcagCriteria: [
      "2.1.1 Keyboard: Listbox must be fully keyboard accessible.",
      "4.1.2 Name, Role, Value: Options must communicate their role and state.",
    ],
    ariaDetails: `- role="listbox" on the container; role="option" on each item.
- aria-selected="true" on selected options; "false" on unselected.
- aria-multiselectable="true" for multi-select listboxes.
- Use aria-activedescendant on the listbox pointing to the focused option ID, OR use roving tabindex.
- If focus is managed via aria-activedescendant, the listbox itself has tabindex="0".`,
    render: () => <ListboxExample />,
  },

  // ── 16. Menu and Menubar ──────────────────────────────────────────────────
  {
    id: "menubar",
    name: "Menu and Menubar",
    intro: "A menubar is a horizontal row of menu items, each of which may open a submenu — modelled after desktop application menubars.",
    description: "A menubar is a container of menu items that are typically visible persistently and horizontally, like those in desktop applications. Each item may trigger an action or reveal a submenu.",
    apg: "https://www.w3.org/WAI/ARIA/apg/patterns/menubar/",
    nativeHtml: `<ul role="menubar" aria-label="Application">
  <li role="none">
    <button role="menuitem" aria-haspopup="menu" aria-expanded="false">File</button>
    <ul role="menu" aria-label="File">
      <li role="none">
        <button role="menuitem">New</button>
      </li>
      <li role="none">
        <button role="menuitem">Open</button>
      </li>
    </ul>
  </li>
</ul>`,
    ariaPatterns: ["role=menubar", "role=menu", "role=menuitem", "role=menuitemcheckbox", "role=menuitemradio", "aria-haspopup", "aria-expanded"],
    keyboardShortcuts: [
      "Left / Right Arrow: move focus between menubar items",
      "Down Arrow: open submenu; move focus to first item",
      "Up Arrow: open submenu; move focus to last item",
      "Enter / Space: activate item or open submenu",
      "Escape: close submenu; return focus to parent",
      "Home / End: first / last item in current menu",
      "Tab: close menu; move focus to next element in tab order",
    ],
    wcagCriteria: [
      "2.1.1 Keyboard: Menubar and all menus must be keyboard accessible.",
      "4.1.2 Name, Role, Value: Menu elements must have accessible roles and states.",
    ],
    ariaDetails: `- role="menubar" on the container; role="menu" on submenus.
- role="menuitem", role="menuitemcheckbox", or role="menuitemradio" on items.
- role="none" (or presentation) on <li> wrapper elements to remove list semantics.
- aria-haspopup="menu" on items that open a submenu.
- aria-expanded="true" when submenu is open; "false" when closed.
- Use roving tabindex: only the active item has tabindex="0".`,
    render: () => <MenubarExample />,
  },

  // ── 17. Menu Button ───────────────────────────────────────────────────────
  {
    id: "menu-button",
    name: "Menu Button",
    intro: "A menu button opens a popup menu of actions or navigation links when activated, replacing repeated inline buttons.",
    description: "A menu button is a button that opens a menu. It is often used as a replacement for a set of buttons when there are multiple related actions. The menu closes when a menu item is selected or focus moves outside.",
    apg: "https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/",
    nativeHtml: `<button type="button"
  aria-haspopup="menu"
  aria-expanded="false"
  aria-controls="action-menu">
  Actions ▾
</button>
<ul id="action-menu" role="menu" aria-label="Actions">
  <li role="none"><button role="menuitem">Edit</button></li>
  <li role="none"><button role="menuitem">Duplicate</button></li>
  <li role="none"><button role="menuitem">Delete</button></li>
</ul>`,
    ariaPatterns: ["role=button", "aria-haspopup=menu", "aria-expanded", "aria-controls", "role=menu", "role=menuitem"],
    keyboardShortcuts: [
      "Enter / Space / Down Arrow: open menu; focus first item",
      "Up Arrow: open menu; focus last item",
      "Escape: close menu; return focus to button",
      "Down / Up Arrow (in menu): move between items",
      "Home / End: first / last menu item",
      "Enter / Space: activate focused item; close menu",
    ],
    wcagCriteria: [
      "2.1.1 Keyboard: Menu button and all menu items must be keyboard accessible.",
      "4.1.2 Name, Role, Value: Button and menu must have accessible names and roles.",
    ],
    ariaDetails: `- Trigger button: role="button" (implicit), aria-haspopup="menu", aria-expanded.
- aria-controls references the menu element.
- Menu container: role="menu"; each action: role="menuitem".
- Focus moves into menu on open; returns to button on close/Escape.
- Clicking outside or selecting an item closes the menu.`,
    render: () => <MenuButtonExample />,
  },

  // ── 18. Meter ─────────────────────────────────────────────────────────────
  {
    id: "meter",
    name: "Meter",
    intro: "A meter displays a scalar value within a known range, such as a disk usage percentage, battery level, or completion score.",
    description: "A meter is a graphical display of a numeric value that varies within a defined range, such as the current level of a disk, the relevance of a query result, or the fraction of a voting population that favours a particular candidate.",
    apg: "https://www.w3.org/WAI/ARIA/apg/patterns/meter/",
    nativeHtml: `<!-- Native element (preferred) -->
<label for="disk">Disk usage</label>
<meter id="disk" min="0" max="100"
  low="30" high="80" optimum="20"
  value="62">62%</meter>

<!-- ARIA fallback -->
<div role="meter"
  aria-valuenow="62" aria-valuemin="0" aria-valuemax="100"
  aria-label="Disk usage">
</div>`,
    ariaPatterns: ["role=meter", "aria-valuenow", "aria-valuemin", "aria-valuemax", "aria-valuetext"],
    keyboardShortcuts: [
      "No keyboard interaction — meter is a read-only display widget.",
    ],
    wcagCriteria: [
      "1.3.1 Info and Relationships: Meter value and range must be programmatically exposed.",
      "4.1.2 Name, Role, Value: Meter must have an accessible name and current value.",
    ],
    ariaDetails: `- role="meter" on the container (or use native <meter>).
- aria-valuenow: current value.
- aria-valuemin / aria-valuemax: range boundaries.
- aria-valuetext: human-readable label when numeric value alone is insufficient (e.g. "62% — almost full").
- Meter is read-only; do not place interactive elements inside it.
- Distinct from role="progressbar": a progressbar tracks task completion, a meter tracks a static measurement.`,
    render: () => <MeterExample />,
  },

  // ── 19. Radio Group ───────────────────────────────────────────────────────
  {
    id: "radio-group",
    name: "Radio Group",
    intro: "A radio group presents mutually exclusive options where selecting one automatically deselects the others.",
    description: "A set of radio buttons where only one button can be checked at a time. Arrow keys move focus and selection together within the group; Tab moves in and out of the group.",
    apg: "https://www.w3.org/WAI/ARIA/apg/patterns/radio/",
    nativeHtml: `<fieldset>
  <legend>Delivery speed</legend>
  <input type="radio" id="std" name="delivery" />
  <label for="std">Standard</label>
  <input type="radio" id="exp" name="delivery" />
  <label for="exp">Express</label>
</fieldset>`,
    ariaPatterns: ["role=radiogroup", "role=radio", "aria-checked", "aria-labelledby"],
    keyboardShortcuts: [
      "Tab / Shift + Tab: move focus into and out of the radio group",
      "Space: select the focused radio button (if none is checked)",
      "Right Arrow / Down Arrow: select next radio button",
      "Left Arrow / Up Arrow: select previous radio button",
    ],
    wcagCriteria: [
      "2.1.1 Keyboard: All functionality must be operable via keyboard.",
      "4.1.2 Name, Role, Value: Buttons must communicate their role and state.",
    ],
    ariaDetails: `- role="radiogroup" on the container; role="radio" on each option.
- aria-checked="true" on the selected option; "false" on all others.
- Only the checked option (or first if none) has tabindex="0"; others tabindex="-1".
- Arrow keys move focus AND selection simultaneously.
- Label the group with aria-labelledby pointing to the group heading.`,
    render: () => <RadioGroupExample />,
  },

  // ── 20. Slider ────────────────────────────────────────────────────────────
  {
    id: "slider",
    name: "Slider",
    intro: "A slider lets users select a value from a continuous or stepped range by dragging a thumb or using arrow keys.",
    description: "A slider is an input where the user selects a value from within a given range. The thumb can be moved along a track to increase or decrease the value.",
    apg: "https://www.w3.org/WAI/ARIA/apg/patterns/slider/",
    nativeHtml: `<label for="vol">Volume</label>
<input type="range" id="vol"
  min="0" max="100" value="50"
  aria-label="Volume" />

<!-- ARIA fallback -->
<div role="slider"
  aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"
  aria-label="Volume" tabindex="0">
</div>`,
    ariaPatterns: ["role=slider", "aria-valuenow", "aria-valuemin", "aria-valuemax", "aria-valuetext", "aria-orientation"],
    keyboardShortcuts: [
      "Right / Up Arrow: increase value by one step",
      "Left / Down Arrow: decrease value by one step",
      "Home: set to minimum value",
      "End: set to maximum value",
      "Page Up: increase value by a larger step",
      "Page Down: decrease value by a larger step",
    ],
    wcagCriteria: [
      "2.1.1 Keyboard: Slider must be operable via keyboard.",
      "4.1.2 Name, Role, Value: Slider must expose its value, min, max, and label.",
    ],
    ariaDetails: `- role="slider" on the thumb or container.
- aria-valuenow: current value.
- aria-valuemin / aria-valuemax: range boundaries.
- aria-valuetext: readable description when the number alone is not self-explanatory.
- aria-orientation="horizontal" (default) or "vertical".
- The native <input type="range"> is strongly preferred over a custom ARIA slider.`,
    render: () => <SliderExample />,
  },

  // ── 21. Slider — Multi-Thumb ──────────────────────────────────────────────
  {
    id: "slider-multithumb",
    name: "Slider — Multi-Thumb",
    intro: "A multi-thumb slider provides two independently draggable thumbs to define a range — such as a minimum and maximum price filter.",
    description: "A multi-thumb slider contains two or more thumbs, each of which is a separate slider widget. Thumbs must not overlap and each exposes its own value via ARIA.",
    apg: "https://www.w3.org/WAI/ARIA/apg/patterns/slider-multithumb/",
    nativeHtml: `<!-- Two <input type="range"> elements constrained via JS -->
<label id="price-label">Price range</label>
<div aria-labelledby="price-label">
  <input type="range" id="min-price"
    min="0" max="500" value="50"
    aria-label="Minimum price" />
  <input type="range" id="max-price"
    min="0" max="500" value="400"
    aria-label="Maximum price" />
</div>`,
    ariaPatterns: ["role=slider (×2)", "aria-valuenow", "aria-valuemin", "aria-valuemax", "aria-valuetext", "aria-label per thumb"],
    keyboardShortcuts: [
      "Tab / Shift + Tab: move focus between thumbs",
      "Right / Up Arrow: increase focused thumb's value",
      "Left / Down Arrow: decrease focused thumb's value",
      "Home: set to minimum for that thumb",
      "End: set to maximum for that thumb",
    ],
    wcagCriteria: [
      "2.1.1 Keyboard: Each thumb must be independently operable via keyboard.",
      "4.1.2 Name, Role, Value: Each thumb must have its own label and value.",
    ],
    ariaDetails: `- Each thumb is a separate role="slider" with its own aria-valuenow, min, max.
- Thumbs must have distinct accessible names (e.g. "Minimum price", "Maximum price").
- JavaScript enforces that the low thumb never exceeds the high thumb.
- When a thumb would conflict with the other, update both accordingly.`,
    render: () => <SliderMultiThumbExample />,
  },

  // ── 22. Spinbutton ────────────────────────────────────────────────────────
  {
    id: "spinbutton",
    name: "Spinbutton",
    intro: "A spinbutton lets users select a precise numeric value by typing or incrementing with arrow keys, with optional ± buttons.",
    description: "A spinbutton is a form widget that restricts its value to a range of discrete values. It allows users to type a value or adjust incrementally using controls.",
    apg: "https://www.w3.org/WAI/ARIA/apg/patterns/spinbutton/",
    nativeHtml: `<label for="qty">Quantity</label>
<input type="number" id="qty"
  min="1" max="20" value="1"
  aria-label="Quantity" />

<!-- ARIA fallback -->
<div role="spinbutton"
  aria-valuenow="1" aria-valuemin="1" aria-valuemax="20"
  aria-labelledby="qty-label" tabindex="0">
</div>`,
    ariaPatterns: ["role=spinbutton", "aria-valuenow", "aria-valuemin", "aria-valuemax", "aria-valuetext"],
    keyboardShortcuts: [
      "Up Arrow: increase value by one step",
      "Down Arrow: decrease value by one step",
      "Page Up: increase value by a larger step",
      "Page Down: decrease value by a larger step",
      "Home: set to minimum value",
      "End: set to maximum value",
    ],
    wcagCriteria: [
      "2.1.1 Keyboard: Spinbutton must be fully operable via keyboard.",
      "4.1.2 Name, Role, Value: Spinbutton must expose name, role, and current value.",
    ],
    ariaDetails: `- role="spinbutton" or native <input type="number">.
- aria-valuenow: current value.
- aria-valuemin / aria-valuemax: constrain the allowed range.
- aria-valuetext: when a formatted string (e.g. "$50.00") is more readable than the raw number.
- Optional ±1 buttons should be visually adjacent but not required for keyboard operation.`,
    render: () => <SpinbuttonExample />,
  },

  // ── 23. Switch ────────────────────────────────────────────────────────────
  {
    id: "switch",
    name: "Switch",
    intro: "A switch is a toggle control similar to a checkbox but specifically indicates an on/off binary setting that takes effect immediately.",
    description: "A switch is a form widget that is used to represent a binary on/off choice. It is visually similar to a light switch and takes effect immediately without a submit action.",
    apg: "https://www.w3.org/WAI/ARIA/apg/patterns/switch/",
    nativeHtml: `<button type="button"
  role="switch"
  aria-checked="false"
  aria-label="Dark mode">
  <span aria-hidden="true">Off</span>
</button>

<!-- Or with native checkbox -->
<input type="checkbox" id="dark"
  role="switch" />
<label for="dark">Dark mode</label>`,
    ariaPatterns: ["role=switch", "aria-checked"],
    keyboardShortcuts: [
      "Space: toggle the switch state",
      "Enter (optional): toggle the switch state",
    ],
    wcagCriteria: [
      "2.1.1 Keyboard: Switch must be operable via keyboard.",
      "4.1.2 Name, Role, Value: Switch must expose its name, role, and state.",
    ],
    ariaDetails: `- role="switch" on the element; aria-checked="true" when on, "false" when off.
- Distinct from role="checkbox": a switch implies immediate effect; a checkbox typically requires form submission.
- Accessible name via text content, aria-label, or aria-labelledby.
- The "On"/"Off" visual label should match the aria-checked state.`,
    render: () => <SwitchExample />,
  },

  // ── 24. Table ─────────────────────────────────────────────────────────────
  {
    id: "table",
    name: "Table",
    intro: "An accessible table uses proper markup (<th scope>, <caption>) so screen readers can announce column and row headers for each cell.",
    description: "An accessible HTML table uses semantic elements to provide headers and a caption, enabling screen readers to announce the context of each cell. Use tables for tabular data, not for layout.",
    apg: "https://www.w3.org/WAI/ARIA/apg/patterns/table/",
    nativeHtml: `<table aria-label="Q1 Sales">
  <caption>Q1 Sales by Region</caption>
  <thead>
    <tr>
      <th scope="col">Region</th>
      <th scope="col">Jan</th>
      <th scope="col">Feb</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">North</th>
      <td>$12k</td>
      <td>$15k</td>
    </tr>
  </tbody>
</table>`,
    ariaPatterns: ["role=table", "role=row", "role=columnheader", "role=rowheader", "role=cell", "aria-label / caption", "scope attribute"],
    keyboardShortcuts: [
      "Tab: move focus through focusable elements within the table",
    ],
    wcagCriteria: [
      "1.3.1 Info and Relationships: Table structure must be programmatically determinable.",
      "1.3.2 Meaningful Sequence: Table reading order must be logical.",
    ],
    ariaDetails: `- Use native <table>, <thead>, <tbody>, <tr>, <th>, <td>.
- <th scope="col"> for column headers; <th scope="row"> for row headers.
- <caption> or aria-label provides the table's accessible name.
- For complex tables with merged cells, use id + headers attributes.
- Avoid tables for layout; use CSS Grid or Flexbox instead.`,
    render: () => <TableExample />,
  },

  // ── 25. Tabs ──────────────────────────────────────────────────────────────
  {
    id: "tabs",
    name: "Tabs",
    intro: "Tabs organize content into multiple panels where only one is visible at a time, switchable via a tab list.",
    description: "A tabbed interface allows users to switch between multiple sections of content. The active tab panel is visible while others are hidden. Arrow keys navigate between tabs.",
    apg: "https://www.w3.org/WAI/ARIA/apg/patterns/tabs/",
    nativeHtml: `<div role="tablist" aria-label="Settings">
  <button role="tab" id="t1"
    aria-selected="true" aria-controls="p1">General</button>
  <button role="tab" id="t2"
    aria-selected="false" aria-controls="p2">Privacy</button>
</div>
<div id="p1" role="tabpanel" aria-labelledby="t1">
  General settings content
</div>
<div id="p2" role="tabpanel" aria-labelledby="t2" hidden>
  Privacy settings content
</div>`,
    ariaPatterns: ["role=tablist", "role=tab", "role=tabpanel", "aria-selected", "aria-controls", "aria-labelledby"],
    keyboardShortcuts: [
      "Left / Right Arrow: move focus between tabs",
      "Home: focus first tab",
      "End: focus last tab",
      "Space / Enter (manual activation): activate focused tab",
      "Tab: move focus into the active tab panel",
      "Shift + Tab: return focus to the active tab",
    ],
    wcagCriteria: [
      "2.1.1 Keyboard: Tabs must be fully operable via keyboard.",
      "4.1.2 Name, Role, Value: Tabs and panels must have accessible names and roles.",
    ],
    ariaDetails: `- role="tablist" on the container; role="tab" on each tab button.
- aria-selected="true" on active tab; "false" on inactive tabs.
- aria-controls on tab references its panel ID.
- role="tabpanel"; aria-labelledby references its tab ID.
- Inactive panels: hidden attribute or display:none.
- Roving tabindex: active tab has tabindex="0"; others tabindex="-1".`,
    render: () => <TabsExample />,
  },

  // ── 26. Toolbar ───────────────────────────────────────────────────────────
  {
    id: "toolbar",
    name: "Toolbar",
    intro: "A toolbar is a container of related controls — typically buttons or toggles — navigable with arrow keys as a single tab stop.",
    description: "A toolbar is a container for grouping related controls such as buttons, menus, and checkboxes. Arrow keys move focus within the toolbar; Tab moves focus in and out.",
    apg: "https://www.w3.org/WAI/ARIA/apg/patterns/toolbar/",
    nativeHtml: `<div role="toolbar" aria-label="Text formatting">
  <button aria-pressed="false" aria-label="Bold">B</button>
  <button aria-pressed="false" aria-label="Italic">I</button>
  <div role="separator" aria-orientation="vertical"></div>
  <button aria-pressed="true" aria-label="Align left">≡</button>
</div>`,
    ariaPatterns: ["role=toolbar", "aria-label", "aria-orientation", "role=separator", "aria-pressed"],
    keyboardShortcuts: [
      "Tab: move focus into the toolbar (to first / last active item)",
      "Right Arrow: move focus to next control",
      "Left Arrow: move focus to previous control",
      "Home: move focus to first control",
      "End: move focus to last control",
    ],
    wcagCriteria: [
      "2.1.1 Keyboard: Toolbar must be fully operable via keyboard.",
      "4.1.2 Name, Role, Value: Toolbar and controls must have accessible names and roles.",
    ],
    ariaDetails: `- role="toolbar" on the container; aria-label names the toolbar.
- Controls inside use their natural roles (button, checkbox, radio, etc.).
- Roving tabindex: only the focused control has tabindex="0".
- Separators use role="separator"; decorative separators get aria-hidden="true".
- aria-orientation="vertical" for vertical toolbars.`,
    render: () => <ToolbarExample />,
  },

  // ── 27. Tooltip ───────────────────────────────────────────────────────────
  {
    id: "tooltip",
    name: "Tooltip",
    intro: "A tooltip reveals a brief label or description when users hover or focus an element, providing supplemental context without cluttering the UI.",
    description: "A tooltip is a popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it. It disappears when Escape is pressed or the pointer leaves.",
    apg: "https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/",
    nativeHtml: `<button aria-describedby="copy-tip">
  Copy
</button>
<div id="copy-tip" role="tooltip">
  Copy to clipboard (Ctrl+C)
</div>`,
    ariaPatterns: ["role=tooltip", "aria-describedby"],
    keyboardShortcuts: [
      "Escape: dismiss the tooltip",
    ],
    wcagCriteria: [
      "2.1.1 Keyboard: Tooltip dismissal must be keyboard accessible.",
      "1.4.13 Content on Hover or Focus: Tooltip content must be hoverable and dismissible.",
    ],
    ariaDetails: `- role="tooltip" on the popup container.
- Triggering element references tooltip via aria-describedby.
- Focus stays on the trigger; the tooltip itself never receives focus.
- Show on hover and keyboard focus; hide on Escape, blur, or mouse out.
- Do not put interactive content inside a tooltip — use a non-modal dialog instead.`,
    render: () => <TooltipExample />,
  },

  // ── 28. Tree View ─────────────────────────────────────────────────────────
  {
    id: "tree-view",
    name: "Tree View",
    intro: "A tree view displays hierarchical data as a collapsible tree, letting users expand and collapse branches with the keyboard.",
    description: "A tree view widget presents a hierarchical list. Any item may have child items and can be expanded to reveal them or collapsed to hide them.",
    apg: "https://www.w3.org/WAI/ARIA/apg/patterns/treeview/",
    nativeHtml: `<ul role="tree" aria-label="Project files">
  <li role="treeitem" aria-expanded="true"
      aria-level="1" aria-posinset="1" aria-setsize="1">
    src/
    <ul role="group">
      <li role="treeitem" aria-level="2"
          aria-posinset="1" aria-setsize="2">
        App.jsx
      </li>
    </ul>
  </li>
</ul>`,
    ariaPatterns: ["role=tree", "role=treeitem", "role=group", "aria-expanded", "aria-selected", "aria-level", "aria-posinset", "aria-setsize"],
    keyboardShortcuts: [
      "Down Arrow: move focus to next visible item",
      "Up Arrow: move focus to previous visible item",
      "Right Arrow: expand collapsed item; or move to first child",
      "Left Arrow: collapse expanded item; or move to parent",
      "Home: move focus to first item in tree",
      "End: move focus to last visible item",
      "Enter / Space: select or activate focused item",
      "* (asterisk): expand all siblings at current level",
    ],
    wcagCriteria: [
      "2.1.1 Keyboard: Tree must be fully keyboard accessible.",
      "4.1.2 Name, Role, Value: Tree items must expose role, state, and level.",
    ],
    ariaDetails: `- role="tree" on root; role="treeitem" on each node; role="group" wraps children.
- aria-expanded="true" / "false" on nodes that have children.
- aria-selected on treeitem for selection state.
- aria-level, aria-posinset, aria-setsize for virtual trees (when DOM doesn't reflect hierarchy).
- Roving tabindex: focused item has tabindex="0"; others tabindex="-1".`,
    render: () => <TreeViewExample />,
  },

  // ── 29. Treegrid ──────────────────────────────────────────────────────────
  {
    id: "treegrid",
    name: "Treegrid",
    intro: "A treegrid combines tree and grid patterns — rows can be expanded like a tree, and cells within each row are individually focusable.",
    description: "A treegrid widget presents data in a grid format where rows can be expanded to reveal child rows. It combines the navigational model of a tree with the two-dimensional cell focus model of a grid.",
    apg: "https://www.w3.org/WAI/ARIA/apg/patterns/treegrid/",
    nativeHtml: `<table role="treegrid" aria-label="File system">
  <thead>
    <tr role="row">
      <th role="columnheader" scope="col">Name</th>
      <th role="columnheader" scope="col">Size</th>
    </tr>
  </thead>
  <tbody>
    <tr role="row" aria-expanded="true" aria-level="1">
      <td role="gridcell">Projects/</td>
      <td role="gridcell">—</td>
    </tr>
    <tr role="row" aria-level="2">
      <td role="gridcell">index.html</td>
      <td role="gridcell">4 KB</td>
    </tr>
  </tbody>
</table>`,
    ariaPatterns: ["role=treegrid", "role=row", "role=gridcell", "role=columnheader", "aria-expanded", "aria-level", "aria-selected"],
    keyboardShortcuts: [
      "Arrow keys: navigate between cells (up/down/left/right)",
      "Right Arrow (on collapsed row): expand the row",
      "Left Arrow (on expanded row): collapse the row",
      "Enter: activate focused cell widget",
      "Home / End: first / last cell in current row",
      "Control + Home / End: first / last cell in grid",
      "Page Up / Page Down: move by visible rows",
    ],
    wcagCriteria: [
      "2.1.1 Keyboard: All cells and row expansion must be keyboard accessible.",
      "4.1.2 Name, Role, Value: Rows and cells must expose their roles and states.",
    ],
    ariaDetails: `- role="treegrid" on the table container.
- Each expandable row: aria-expanded="true"/"false"; aria-level indicates depth.
- role="gridcell" on cells; role="columnheader" on header cells.
- Cell focus managed with roving tabindex (focused cell: tabindex="0"; others: tabindex="-1").
- Arrow keys move focus cell by cell; Shift+Space selects a row.`,
    render: () => <TreegridExample />,
  },

  // ── 30. Window Splitter ───────────────────────────────────────────────────
  {
    id: "window-splitter",
    name: "Window Splitter",
    intro: "A window splitter is a draggable divider between two panels that users can reposition with the mouse or keyboard to adjust relative panel sizes.",
    description: "A window splitter is a moveable separator between two adjacent sections (panels) of a page or application. It can be repositioned with a mouse drag or keyboard interaction to resize the panels.",
    apg: "https://www.w3.org/WAI/ARIA/apg/patterns/windowsplitter/",
    nativeHtml: `<div style="display:flex">
  <div id="panel-1">Left panel</div>
  <div role="separator"
    aria-controls="panel-1"
    aria-valuenow="40"
    aria-valuemin="20"
    aria-valuemax="80"
    aria-orientation="vertical"
    aria-label="Resize panels"
    tabindex="0">
  </div>
  <div id="panel-2">Right panel</div>
</div>`,
    ariaPatterns: ["role=separator", "aria-valuenow", "aria-valuemin", "aria-valuemax", "aria-orientation", "aria-controls", "aria-label"],
    keyboardShortcuts: [
      "Left / Right Arrow: decrease / increase left panel width",
      "Up / Down Arrow (vertical orientation): decrease / increase top panel height",
      "Home: move splitter to minimum position",
      "End: move splitter to maximum position",
      "Enter: toggle between current position and collapsed state",
    ],
    wcagCriteria: [
      "2.1.1 Keyboard: Splitter must be repositionable via keyboard.",
      "4.1.2 Name, Role, Value: Splitter must expose its role, current value, and range.",
    ],
    ariaDetails: `- role="separator" on the handle element (when interactive, it acts as a splitter).
- aria-valuenow / aria-valuemin / aria-valuemax express the position as a percentage.
- aria-orientation: "vertical" for a vertical bar dividing left/right panels.
- aria-controls references the primary panel being resized.
- tabindex="0" makes the handle keyboard focusable.
- Provide a visible focus indicator on the handle.`,
    render: () => <WindowSplitterExample />,
  },
]

export function getComponentById(id) {
  return COMPONENT_REGISTRY.find((c) => c.id === id)
}

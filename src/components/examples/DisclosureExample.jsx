import { useState } from "react";
import styles from "./examples.module.css";

export default function DisclosureExample() {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.wrapper}>
      <button
        className={styles.accordionTrigger}
        style={{ border: "1px solid var(--nav-border-color)", borderRadius: open ? "8px 8px 0 0" : "8px" }}
        aria-expanded={open}
        aria-controls="disclosure-panel"
        onClick={() => setOpen((o) => !o)}
      >
        What is WCAG?
        <span className={styles.accordionChevron} aria-hidden="true">▶</span>
      </button>

      {open && (
        <div id="disclosure-panel" className={styles.disclosurePanel}>
          WCAG (Web Content Accessibility Guidelines) is a set of recommendations for making web content more accessible to people with disabilities. It is organized around four principles: Perceivable, Operable, Understandable, and Robust.
        </div>
      )}
    </div>
  );
}

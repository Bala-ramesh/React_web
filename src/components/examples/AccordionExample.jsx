import { useState } from "react";
import styles from "./examples.module.css";

export default function AccordionExample() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const sections = [
    { title: "Section 1", content: "Content for section 1" },
    { title: "Section 2", content: "Content for section 2" },
    { title: "Section 3", content: "Content for section 3" },
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.accordion}>
        {sections.map((section, i) => (
          <div key={section.title} className={styles.accordionItem}>
            <button
              className={styles.accordionTrigger}
              aria-expanded={activeIndex === i}
              aria-controls={`acc-section-${i}`}
              onClick={() => toggle(i)}
            >
              {section.title}
              <span className={styles.accordionChevron} aria-hidden="true">▶</span>
            </button>
            <div
              id={`acc-section-${i}`}
              className={styles.accordionPanel}
              style={{ display: activeIndex === i ? "block" : "none" }}
            >
              {section.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// src/components/AccordionExample.jsx
import React, { useState } from "react";

export default function AccordionExample() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const sections = [
    { title: "Section 1", content: "Content for section 1" },
    { title: "Section 2", content: "Content for section 2" },
    { title: "Section 3", content: "Content for section 3" },
  ];

  return (
    <div>
      {sections.map((section, i) => (
        <div key={i}>
          <button
            aria-expanded={activeIndex === i}
            aria-controls={`section-${i}`}
            onClick={() => toggle(i)}
          >
            {section.title}
          </button>
          <div
            id={`section-${i}`}
            style={{ display: activeIndex === i ? "block" : "none" }}
          >
            {section.content}
          </div>
        </div>
      ))}
    </div>
  );
}
import { useState, useRef } from "react";
import styles from "./examples.module.css";

const OPTIONS = ["Perceivable", "Operable", "Understandable", "Robust"];

export default function ListboxExample() {
  const [selected, setSelected] = useState("Perceivable");
  const [focused, setFocused] = useState(0);
  const listRef = useRef(null);

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") { e.preventDefault(); setFocused((i) => Math.min(i + 1, OPTIONS.length - 1)); }
    if (e.key === "ArrowUp")   { e.preventDefault(); setFocused((i) => Math.max(i - 1, 0)); }
    if (e.key === " " || e.key === "Enter") { e.preventDefault(); setSelected(OPTIONS[focused]); }
    if (e.key === "Home") { e.preventDefault(); setFocused(0); }
    if (e.key === "End")  { e.preventDefault(); setFocused(OPTIONS.length - 1); }
  };

  return (
    <div className={styles.wrapper}>
      <p id="lb-label" className={styles.radioGroupLabel}>WCAG Principles:</p>
      <ul
        ref={listRef}
        role="listbox"
        aria-labelledby="lb-label"
        aria-activedescendant={`lb-opt-${focused}`}
        tabIndex={0}
        className={styles.listboxEl}
        onKeyDown={handleKeyDown}
      >
        {OPTIONS.map((opt, i) => (
          <li
            key={opt}
            id={`lb-opt-${i}`}
            role="option"
            aria-selected={selected === opt}
            className={`${styles.lbOption} ${selected === opt ? styles.lbOptionSelected : ""}`}
            onClick={() => { setSelected(opt); setFocused(i); listRef.current?.focus(); }}
          >
            <span className={styles.lbCheck}>{selected === opt ? "✓" : ""}</span>
            {opt}
          </li>
        ))}
      </ul>
      <p className={styles.counter}>Selected: {selected}</p>
    </div>
  );
}

import { useState, useRef, useId } from "react";
import styles from "./examples.module.css";

const ALL_OPTIONS = ["Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig", "Grape", "Honeydew"];

export default function ComboboxExample() {
  const [value, setValue] = useState("");
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const inputRef = useRef(null);
  const listId = useId();

  const filtered = ALL_OPTIONS.filter((o) => o.toLowerCase().includes(value.toLowerCase()));

  const select = (opt) => {
    setValue(opt);
    setOpen(false);
    setActiveIndex(-1);
    inputRef.current?.focus();
  };

  const handleKeyDown = (e) => {
    if (!open && (e.key === "ArrowDown" || e.key === "ArrowUp")) { setOpen(true); return; }
    if (e.key === "Escape") { setOpen(false); setActiveIndex(-1); return; }
    if (e.key === "ArrowDown") { setActiveIndex((i) => Math.min(i + 1, filtered.length - 1)); e.preventDefault(); }
    if (e.key === "ArrowUp")   { setActiveIndex((i) => Math.max(i - 1, 0)); e.preventDefault(); }
    if (e.key === "Enter" && activeIndex >= 0) { select(filtered[activeIndex]); e.preventDefault(); }
  };

  return (
    <div className={styles.wrapper}>
      <label htmlFor="combo-input" style={{ fontSize: "0.875rem", color: "var(--color-text-muted)" }}>
        Choose a fruit:
      </label>
      <div className={styles.comboWrap}>
        <input
          id="combo-input"
          ref={inputRef}
          type="text"
          role="combobox"
          aria-autocomplete="list"
          aria-controls={listId}
          aria-expanded={open}
          aria-haspopup="listbox"
          aria-activedescendant={activeIndex >= 0 ? `combo-opt-${activeIndex}` : undefined}
          value={value}
          className={styles.comboInput}
          onChange={(e) => { setValue(e.target.value); setOpen(true); setActiveIndex(-1); }}
          onKeyDown={handleKeyDown}
          onFocus={() => setOpen(true)}
          onBlur={() => setTimeout(() => setOpen(false), 150)}
          placeholder="Type or select…"
          autoComplete="off"
        />
        <button className={styles.comboToggle} tabIndex={-1} aria-hidden="true" onClick={() => { setOpen((o) => !o); inputRef.current?.focus(); }}>▾</button>

        {open && filtered.length > 0 && (
          <ul id={listId} role="listbox" aria-label="Fruits" className={styles.comboListbox}>
            {filtered.map((opt, i) => (
              <li
                key={opt}
                id={`combo-opt-${i}`}
                role="option"
                aria-selected={value === opt}
                className={`${styles.comboOption} ${i === activeIndex ? styles.comboOptionActive : ""}`}
                onMouseDown={() => select(opt)}
              >
                {opt}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

import { useState, useRef, useEffect } from "react";
import styles from "./examples.module.css";

const ACTIONS = ["Edit", "Duplicate", null, "Archive", "Delete"];

export default function MenuButtonExample() {
  const [open, setOpen] = useState(false);
  const [last, setLast] = useState(null);
  const btnRef = useRef(null);

  useEffect(() => {
    const close = (e) => { if (!btnRef.current?.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  const pick = (item) => { setLast(item); setOpen(false); };

  return (
    <div className={styles.wrapper}>
      <div style={{ position: "relative", width: "fit-content" }} ref={btnRef}>
        <button
          className={`${styles.btn} ${styles.btnPrimary}`}
          aria-haspopup="menu"
          aria-expanded={open}
          aria-controls="mb-menu"
          onClick={() => setOpen((o) => !o)}
        >
          Actions <span aria-hidden="true">▾</span>
        </button>

        {open && (
          <ul id="mb-menu" role="menu" aria-label="Actions" className={styles.menuDropdown} style={{ top: "calc(100% + 4px)", left: 0 }}>
            {ACTIONS.map((item, i) =>
              item === null ? (
                <li key={i} role="separator" className={styles.menuSeparator} />
              ) : (
                <li key={item} role="menuitem" className={styles.menuDropdownItem} onClick={() => pick(item)}>
                  {item}
                </li>
              )
            )}
          </ul>
        )}
      </div>
      {last && <p className={styles.counter}>Selected: {last}</p>}
    </div>
  );
}

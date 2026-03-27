import { useState, useRef, useEffect } from "react";
import styles from "./examples.module.css";

const MENUS = [
  { label: "File",  items: ["New", "Open", "Save", null, "Exit"] },
  { label: "Edit",  items: ["Undo", "Redo", null, "Cut", "Copy", "Paste"] },
  { label: "View",  items: ["Zoom In", "Zoom Out", null, "Full Screen"] },
];

export default function MenubarExample() {
  const [open, setOpen] = useState(null);

  useEffect(() => {
    const close = () => setOpen(null);
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, []);

  return (
    <div className={styles.wrapper}>
      <ul role="menubar" aria-label="Application menu" className={styles.menubarEl}>
        {MENUS.map((menu, i) => (
          <li key={menu.label} role="none" className={styles.menubarItem}>
            <button
              role="menuitem"
              aria-haspopup="menu"
              aria-expanded={open === i}
              className={`${styles.menubarBtn} ${open === i ? styles.menubarBtnOpen : ""}`}
              onClick={(e) => { e.stopPropagation(); setOpen(open === i ? null : i); }}
            >
              {menu.label}
            </button>
            {open === i && (
              <ul role="menu" aria-label={menu.label} className={styles.menuDropdown}>
                {menu.items.map((item, j) =>
                  item === null ? (
                    <li key={j} role="separator" className={styles.menuSeparator} />
                  ) : (
                    <li
                      key={item}
                      role="menuitem"
                      tabIndex={-1}
                      className={styles.menuDropdownItem}
                      onClick={() => setOpen(null)}
                    >
                      {item}
                    </li>
                  )
                )}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

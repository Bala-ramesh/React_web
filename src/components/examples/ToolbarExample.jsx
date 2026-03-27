import { useState } from "react";
import styles from "./examples.module.css";

export default function ToolbarExample() {
  const [active, setActive] = useState({ bold: false, italic: false, underline: false, left: true, center: false, right: false });

  const toggle = (key) => setActive((s) => ({ ...s, [key]: !s[key] }));
  const align = (key) => setActive((s) => ({ ...s, left: false, center: false, right: false, [key]: true }));

  return (
    <div className={styles.wrapper}>
      <div role="toolbar" aria-label="Text formatting" className={styles.toolbarEl}>
        {/* Text style buttons */}
        <button className={`${styles.toolbarBtn} ${active.bold ? styles.toolbarBtnActive : ""}`}
          aria-pressed={active.bold} onClick={() => toggle("bold")} aria-label="Bold">
          <strong>B</strong>
        </button>
        <button className={`${styles.toolbarBtn} ${active.italic ? styles.toolbarBtnActive : ""}`}
          aria-pressed={active.italic} onClick={() => toggle("italic")} aria-label="Italic">
          <em>I</em>
        </button>
        <button className={`${styles.toolbarBtn} ${active.underline ? styles.toolbarBtnActive : ""}`}
          aria-pressed={active.underline} onClick={() => toggle("underline")} aria-label="Underline">
          <u>U</u>
        </button>

        <div className={styles.toolbarSep} role="separator" aria-orientation="vertical" />

        {/* Alignment buttons */}
        {[["left","≡ Left"],["center","≡ Center"],["right","≡ Right"]].map(([k, label]) => (
          <button key={k}
            className={`${styles.toolbarBtn} ${active[k] ? styles.toolbarBtnActive : ""}`}
            aria-pressed={active[k]} onClick={() => align(k)} aria-label={`Align ${k}`}>
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}

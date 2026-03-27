import { useState } from "react";
import styles from "./examples.module.css";

export default function SpinbuttonExample() {
  const [qty, setQty] = useState(1);
  const MIN = 1, MAX = 20;

  const change = (delta) => setQty((v) => Math.min(Math.max(v + delta, MIN), MAX));

  const handleKeyDown = (e) => {
    if (e.key === "ArrowUp")   { e.preventDefault(); change(1); }
    if (e.key === "ArrowDown") { e.preventDefault(); change(-1); }
    if (e.key === "Home")      { e.preventDefault(); setQty(MIN); }
    if (e.key === "End")       { e.preventDefault(); setQty(MAX); }
    if (e.key === "PageUp")    { e.preventDefault(); change(5); }
    if (e.key === "PageDown")  { e.preventDefault(); change(-5); }
  };

  return (
    <div className={styles.wrapper}>
      <label id="spin-label" className={styles.radioGroupLabel}>Quantity (1–20):</label>
      <div className={styles.spinWrap}>
        <button className={styles.spinBtn} onClick={() => change(-1)} disabled={qty <= MIN} aria-label="Decrease quantity">−</button>
        <input
          type="text"
          inputMode="numeric"
          role="spinbutton"
          aria-valuenow={qty}
          aria-valuemin={MIN}
          aria-valuemax={MAX}
          aria-labelledby="spin-label"
          value={qty}
          readOnly
          className={styles.spinField}
          onKeyDown={handleKeyDown}
        />
        <button className={styles.spinBtn} onClick={() => change(1)} disabled={qty >= MAX} aria-label="Increase quantity">+</button>
      </div>
    </div>
  );
}

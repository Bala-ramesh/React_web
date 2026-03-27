import { useState } from "react";
import styles from "./examples.module.css";

export default function SliderMultiThumbExample() {
  const [min, setMin] = useState(200);
  const [max, setMax] = useState(800);

  const handleMin = (v) => { const val = Math.min(Number(v), max - 50); setMin(val); };
  const handleMax = (v) => { const val = Math.max(Number(v), min + 50); setMax(val); };

  return (
    <div className={styles.wrapper}>
      <p className={styles.radioGroupLabel}>Price range filter</p>
      <div className={styles.sliderWrap}>
        <div className={styles.sliderRow}>
          <label htmlFor="sl-min" className={styles.sliderLabel}>Min price</label>
          <input
            id="sl-min"
            type="range"
            min={0} max={1000} step={10}
            value={min}
            aria-valuenow={min}
            aria-valuemin={0}
            aria-valuemax={1000}
            aria-valuetext={`$${min}`}
            aria-label="Minimum price"
            onChange={(e) => handleMin(e.target.value)}
            className={styles.sliderInput}
          />
          <span className={styles.sliderVal} aria-hidden="true">${min}</span>
        </div>

        <div className={styles.sliderRow}>
          <label htmlFor="sl-max" className={styles.sliderLabel}>Max price</label>
          <input
            id="sl-max"
            type="range"
            min={0} max={1000} step={10}
            value={max}
            aria-valuenow={max}
            aria-valuemin={0}
            aria-valuemax={1000}
            aria-valuetext={`$${max}`}
            aria-label="Maximum price"
            onChange={(e) => handleMax(e.target.value)}
            className={styles.sliderInput}
          />
          <span className={styles.sliderVal} aria-hidden="true">${max}</span>
        </div>
      </div>
      <p className={styles.counter}>Range: ${min} — ${max}</p>
    </div>
  );
}

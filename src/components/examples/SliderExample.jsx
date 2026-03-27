import { useState } from "react";
import styles from "./examples.module.css";

export default function SliderExample() {
  const [volume, setVolume] = useState(60);
  const [brightness, setBrightness] = useState(40);

  return (
    <div className={styles.wrapper}>
      <div className={styles.sliderWrap}>
        <div className={styles.sliderRow}>
          <label htmlFor="sl-volume" className={styles.sliderLabel}>Volume</label>
          <input
            id="sl-volume"
            type="range"
            role="slider"
            min={0} max={100} step={1}
            value={volume}
            aria-valuenow={volume}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuetext={`${volume}%`}
            onChange={(e) => setVolume(Number(e.target.value))}
            className={styles.sliderInput}
          />
          <span className={styles.sliderVal} aria-hidden="true">{volume}%</span>
        </div>

        <div className={styles.sliderRow}>
          <label htmlFor="sl-brightness" className={styles.sliderLabel}>Brightness</label>
          <input
            id="sl-brightness"
            type="range"
            role="slider"
            min={0} max={100} step={1}
            value={brightness}
            aria-valuenow={brightness}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuetext={`${brightness}%`}
            onChange={(e) => setBrightness(Number(e.target.value))}
            className={styles.sliderInput}
          />
          <span className={styles.sliderVal} aria-hidden="true">{brightness}%</span>
        </div>
      </div>
    </div>
  );
}

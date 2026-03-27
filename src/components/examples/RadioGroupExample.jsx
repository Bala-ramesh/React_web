import { useState } from "react";
import styles from "./examples.module.css";

export default function RadioGroupExample() {
  const [selected, setSelected] = useState("option1");
  const options = ["option1", "option2", "option3"];

  return (
    <div className={styles.wrapper}>
      <div role="radiogroup" aria-labelledby="radioLabel">
        <p id="radioLabel" className={styles.radioGroupLabel}>Choose an option:</p>
        <div className={styles.radioList}>
          {options.map((opt) => (
            <label key={opt} className={styles.radioLabel}>
              <input
                type="radio"
                name="options"
                value={opt}
                checked={selected === opt}
                onChange={() => setSelected(opt)}
                className={styles.radioInput}
              />
              {opt}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}

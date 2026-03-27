import { useState } from "react";
import styles from "./examples.module.css";

export default function CheckboxExample() {
  const [checked, setChecked] = useState(false);
  const [mixed, setMixed] = useState("mixed");

  return (
    <div className={styles.wrapper}>
      <div className={styles.checkboxList}>
        <label className={styles.checkboxLabel}>
          <input
            type="checkbox"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
            className={styles.checkboxInput}
          />
          Accept terms
        </label>

        <label className={styles.checkboxLabel}>
          <input
            type="checkbox"
            checked={mixed === true}
            ref={(el) => el && (el.indeterminate = mixed === "mixed")}
            onChange={() =>
              setMixed(mixed === true ? false : mixed === "mixed" ? true : "mixed")
            }
            className={styles.checkboxInput}
          />
          Mixed state example
        </label>
      </div>

      <p className={styles.stateTag}>State: {mixed.toString()}</p>
    </div>
  );
}

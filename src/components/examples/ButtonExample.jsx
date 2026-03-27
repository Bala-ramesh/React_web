import { useState } from "react";
import styles from "./examples.module.css";

export default function ButtonExample() {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.wrapper}>
      <div className={styles.btnGroup}>
        <button
          className={`${styles.btn} ${styles.btnPrimary}`}
          onClick={() => setCount(count + 1)}
        >
          Click me
        </button>
        <button
          className={styles.btn}
          aria-pressed={count % 2 === 0}
          onClick={() => setCount(count + 1)}
        >
          Toggle {count % 2 === 0 ? "Off" : "On"}
        </button>
      </div>
      <p className={styles.counter}>Button clicked {count} times</p>
    </div>
  );
}

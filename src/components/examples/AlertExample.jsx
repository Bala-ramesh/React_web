import { useState } from "react";
import styles from "./examples.module.css";

export default function AlertExample() {
  const [msg, setMsg] = useState("");

  const trigger = (text) => {
    setMsg("");
    requestAnimationFrame(() => setMsg(text));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.btnGroup}>
        <button className={`${styles.btn} ${styles.btnPrimary}`} onClick={() => trigger("Your profile has been saved successfully.")}>
          Success alert
        </button>
        <button className={styles.btn} onClick={() => trigger("Session will expire in 5 minutes.")}>
          Warning alert
        </button>
      </div>

      {msg && (
        <div role="alert" className={styles.alertBox}>
          {msg}
        </div>
      )}
    </div>
  );
}

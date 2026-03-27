import { useState, useRef, useEffect } from "react";
import styles from "./examples.module.css";

export default function DialogExample() {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef();

  useEffect(() => {
    if (open && dialogRef.current) dialogRef.current.focus();
  }, [open]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.btnGroup}>
        <button
          className={`${styles.btn} ${styles.btnPrimary}`}
          onClick={() => setOpen(true)}
          aria-haspopup="dialog"
        >
          Open Dialog
        </button>
      </div>
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="dialogTitle"
          tabIndex="-1"
          ref={dialogRef}
          className={styles.dialog}
        >
          <h2 id="dialogTitle" className={styles.dialogTitle}>Dialog Title</h2>
          <p className={styles.dialogBody}>Dialog content goes here</p>
          <button className={styles.btn} onClick={() => setOpen(false)}>
            Close
          </button>
        </div>
      )}
    </div>
  );
}

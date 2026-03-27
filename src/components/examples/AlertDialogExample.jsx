import { useState, useRef, useEffect } from "react";
import styles from "./examples.module.css";

export default function AlertDialogExample() {
  const [open, setOpen] = useState(false);
  const [result, setResult] = useState(null);
  const cancelRef = useRef(null);

  useEffect(() => {
    if (open) cancelRef.current?.focus();
  }, [open]);

  const close = (confirmed) => {
    setOpen(false);
    setResult(confirmed);
  };

  return (
    <div className={styles.wrapper}>
      <button className={`${styles.btn} ${styles.btnPrimary}`} onClick={() => setOpen(true)} aria-haspopup="dialog">
        Delete item
      </button>
      {result !== null && (
        <p className={styles.counter}>
          Action: {result ? "Confirmed — item deleted" : "Cancelled"}
        </p>
      )}

      {open && (
        <div className={styles.alertDialogBackdrop} onClick={() => close(false)}>
          <div
            role="alertdialog"
            aria-modal="true"
            aria-labelledby="ad-title"
            aria-describedby="ad-msg"
            className={styles.alertDialogBox}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 id="ad-title" className={styles.alertDialogTitle}>Delete item?</h2>
            <p id="ad-msg" className={styles.alertDialogMsg}>
              This action cannot be undone. The item will be permanently removed.
            </p>
            <div className={styles.alertDialogActions}>
              <button ref={cancelRef} className={styles.btn} onClick={() => close(false)}>
                Cancel
              </button>
              <button className={`${styles.btn} ${styles.btnPrimary}`} onClick={() => close(true)}>
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

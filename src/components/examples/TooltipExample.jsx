import { useState } from "react";
import styles from "./examples.module.css";

export default function TooltipExample() {
  const [visible, setVisible] = useState(false);

  return (
    <div className={styles.wrapper}>
      <button
        className={styles.btn}
        aria-describedby="tooltip1"
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        onFocus={() => setVisible(true)}
        onBlur={() => setVisible(false)}
      >
        Hover or focus me
      </button>
      {visible && (
        <div id="tooltip1" role="tooltip" className={styles.tooltipBubble}>
          Tooltip content
        </div>
      )}
    </div>
  );
}

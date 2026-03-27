import { useState, useRef } from "react";
import styles from "./examples.module.css";

const DATA = [
  ["Alice Johnson", "Accessibility Lead", "Remote"],
  ["Bob Chen", "Frontend Dev", "NYC"],
  ["Carol Osei", "UX Designer", "London"],
  ["David Park", "QA Engineer", "Seoul"],
];

export default function GridExample() {
  const [focused, setFocused] = useState([0, 0]);
  const cellRefs = useRef({});

  const focus = (r, c) => {
    const key = `${r}-${c}`;
    setFocused([r, c]);
    cellRefs.current[key]?.focus();
  };

  const handleKeyDown = (e, r, c) => {
    const map = { ArrowRight: [0,1], ArrowLeft: [0,-1], ArrowDown: [1,0], ArrowUp: [-1,0] };
    const delta = map[e.key];
    if (!delta) return;
    e.preventDefault();
    const nr = Math.min(Math.max(r + delta[0], 0), DATA.length - 1);
    const nc = Math.min(Math.max(c + delta[1], 0), 2);
    focus(nr, nc);
  };

  return (
    <div className={styles.wrapper}>
      <p className={styles.radioGroupLabel}>Use arrow keys to navigate cells</p>
      <div role="grid" aria-label="Team directory" className={styles.gridWrap}>
        <div role="row" className={`${styles.gridRow} ${styles.gridHeader}`}>
          {["Name", "Role", "Location"].map((h) => (
            <div key={h} role="columnheader" className={styles.gridCell}>{h}</div>
          ))}
        </div>
        {DATA.map((row, r) => (
          <div key={r} role="row" className={styles.gridRow}>
            {row.map((cell, c) => (
              <div
                key={c}
                ref={(el) => (cellRefs.current[`${r}-${c}`] = el)}
                role="gridcell"
                tabIndex={focused[0] === r && focused[1] === c ? 0 : -1}
                className={styles.gridCell}
                onKeyDown={(e) => handleKeyDown(e, r, c)}
                onFocus={() => setFocused([r, c])}
              >
                {cell}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

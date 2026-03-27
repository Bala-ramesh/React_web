import { useState } from "react";
import styles from "./examples.module.css";

const SWITCHES = [
  { id: "sw-notifications", label: "Notifications" },
  { id: "sw-darkmode",      label: "Dark mode" },
  { id: "sw-autosave",      label: "Auto-save" },
];

export default function SwitchExample() {
  const [states, setStates] = useState({ "sw-notifications": true, "sw-darkmode": false, "sw-autosave": true });

  const toggle = (id) => setStates((s) => ({ ...s, [id]: !s[id] }));

  return (
    <div className={styles.wrapper}>
      {SWITCHES.map(({ id, label }) => {
        const on = states[id];
        return (
          <div
            key={id}
            role="switch"
            aria-checked={on}
            aria-label={label}
            tabIndex={0}
            className={styles.switchRow}
            onClick={() => toggle(id)}
            onKeyDown={(e) => (e.key === " " || e.key === "Enter") && toggle(id)}
          >
            <div className={`${styles.switchTrack} ${on ? styles.switchTrackOn : ""}`}>
              <div className={`${styles.switchThumb} ${on ? styles.switchThumbOn : ""}`} />
            </div>
            <span className={styles.switchLabelText}>{label}</span>
            <span className={`${styles.switchStatus} ${on ? styles.switchStatusOn : ""}`}>
              {on ? "On" : "Off"}
            </span>
          </div>
        );
      })}
    </div>
  );
}

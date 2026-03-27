import styles from "./examples.module.css";

const meters = [
  { label: "Battery",     value: 72,  min: 0, max: 100, unit: "%" },
  { label: "Storage",     value: 45,  min: 0, max: 100, unit: "GB of 100GB" },
  { label: "CPU Usage",   value: 31,  min: 0, max: 100, unit: "%" },
];

export default function MeterExample() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.meterWrap}>
        {meters.map((m) => (
          <div key={m.label} className={styles.meterRow}>
            <div className={styles.meterLabel}>
              <span>{m.label}</span>
              <span className={styles.meterVal}>{m.value}{m.unit}</span>
            </div>
            <div
              role="meter"
              aria-valuenow={m.value}
              aria-valuemin={m.min}
              aria-valuemax={m.max}
              aria-valuetext={`${m.value}${m.unit}`}
              aria-label={m.label}
              className={styles.meterTrack}
            >
              <div className={styles.meterFill} style={{ width: `${m.value}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import { useState, useRef, useCallback } from "react";
import styles from "./examples.module.css";

const MIN = 20;
const MAX = 80;

export default function WindowSplitterExample() {
  const [split, setSplit] = useState(40); // percentage for left panel
  const containerRef = useRef(null);
  const dragging = useRef(false);

  const clamp = (v) => Math.min(Math.max(v, MIN), MAX);

  const handleMouseDown = useCallback((e) => {
    e.preventDefault();
    dragging.current = true;

    const onMove = (me) => {
      if (!dragging.current || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const pct = ((me.clientX - rect.left) / rect.width) * 100;
      setSplit(clamp(Math.round(pct)));
    };

    const onUp = () => {
      dragging.current = false;
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
  }, []);

  const handleKeyDown = (e) => {
    switch (e.key) {
      case "ArrowLeft":  e.preventDefault(); setSplit((v) => clamp(v - 2)); break;
      case "ArrowRight": e.preventDefault(); setSplit((v) => clamp(v + 2)); break;
      case "Home":       e.preventDefault(); setSplit(MIN); break;
      case "End":        e.preventDefault(); setSplit(MAX); break;
      case "Enter":      e.preventDefault(); setSplit(split === MIN ? 40 : MIN); break;
    }
  };

  return (
    <div className={styles.wrapper}>
      <p className={styles.radioGroupLabel}>Drag or use arrow keys on the divider</p>
      <div ref={containerRef} className={styles.splitterContainer}>
        {/* Left panel */}
        <div className={styles.splitterPanel} style={{ width: `${split}%` }}>
          <strong>File Tree</strong>
          <ul style={{ marginTop: "8px", padding: 0, listStyle: "none", fontSize: "0.85rem" }}>
            <li>📁 src/</li>
            <li style={{ paddingLeft: "12px" }}>📄 App.jsx</li>
            <li style={{ paddingLeft: "12px" }}>📄 main.jsx</li>
            <li>📁 public/</li>
          </ul>
        </div>

        {/* Splitter handle */}
        <div
          role="separator"
          aria-orientation="vertical"
          aria-valuenow={split}
          aria-valuemin={MIN}
          aria-valuemax={MAX}
          aria-label="Resize panels"
          tabIndex={0}
          className={styles.splitterHandle}
          onMouseDown={handleMouseDown}
          onKeyDown={handleKeyDown}
        />

        {/* Right panel */}
        <div className={styles.splitterPanel} style={{ flex: 1 }}>
          <strong>Editor</strong>
          <pre style={{ marginTop: "8px", fontSize: "0.75rem", color: "var(--color-accent)", overflow: "auto" }}>
{`import React from "react"

export default function App() {
  return <h1>Hello</h1>
}`}
          </pre>
        </div>
      </div>
    </div>
  );
}

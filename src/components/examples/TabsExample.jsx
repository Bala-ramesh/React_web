import { useState } from "react";
import styles from "./examples.module.css";

export default function TabsExample() {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ["Tab 1", "Tab 2", "Tab 3"];
  const panels = ["Content 1", "Content 2", "Content 3"];

  return (
    <div className={styles.wrapper}>
      <div role="tablist">
        {tabs.map((tab, i) => (
          <button
            key={tab}
            role="tab"
            aria-selected={activeTab === i}
            aria-controls={`tabpanel-${i}`}
            id={`tab-${i}`}
            onClick={() => setActiveTab(i)}
            className={`${styles.tab} ${activeTab === i ? styles.tabActive : ""}`}
          >
            {tab}
          </button>
        ))}
      </div>
      {panels.map((panel, i) => (
        <div
          key={panel}
          role="tabpanel"
          id={`tabpanel-${i}`}
          aria-labelledby={`tab-${i}`}
          className={styles.tabPanel}
          style={{ display: activeTab === i ? "block" : "none" }}
        >
          {panel}
        </div>
      ))}
    </div>
  );
}

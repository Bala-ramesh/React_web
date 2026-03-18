// src/components/TabsExample.jsx
import React, { useState } from "react";

export default function TabsExample() {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ["Tab 1", "Tab 2", "Tab 3"];
  const panels = ["Content 1", "Content 2", "Content 3"];

  return (
    <div>
      <div role="tablist">
        {tabs.map((tab, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={activeTab === i}
            aria-controls={`panel${i}`}
            id={`tab${i}`}
            onClick={() => setActiveTab(i)}
          >
            {tab}
          </button>
        ))}
      </div>
      {panels.map((panel, i) => (
        <div
          key={i}
          role="tabpanel"
          id={`panel${i}`}
          aria-labelledby={`tab${i}`}
          style={{ display: activeTab === i ? "block" : "none" }}
        >
          {panel}
        </div>
      ))}
    </div>
  );
}
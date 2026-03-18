// src/components/TooltipExample.jsx
import React, { useState } from "react";

export default function TooltipExample() {
  const [visible, setVisible] = useState(false);

  return (
    <div style={{ marginTop: 20 }}>
      <button
        aria-describedby="tooltip1"
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        onFocus={() => setVisible(true)}
        onBlur={() => setVisible(false)}
      >
        Hover or focus me
      </button>
      {visible && (
        <div id="tooltip1" role="tooltip" style={{ marginTop: 8, border: "1px solid gray", padding: 4 }}>
          Tooltip content
        </div>
      )}
    </div>
  );
}
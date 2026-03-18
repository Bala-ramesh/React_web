// src/components/ButtonExample.jsx
import React, { useState } from "react";

export default function ButtonExample() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <button
        aria-pressed={count % 2 === 0}
        onClick={() => setCount(count + 1)}
      >
        Toggle {count % 2 === 0 ? "Off" : "On"}
      </button>
      <p>Button clicked {count} times</p>
    </div>
  );
}
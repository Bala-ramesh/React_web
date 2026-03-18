// src/components/RadioGroupExample.jsx
import React, { useState } from "react";

export default function RadioGroupExample() {
  const [selected, setSelected] = useState("option1");
  const options = ["option1", "option2", "option3"];

  return (
    <div role="radiogroup" aria-labelledby="radioLabel">
      <p id="radioLabel">Choose an option:</p>
      {options.map(opt => (
        <label key={opt}>
          <input
            type="radio"
            role="radio"
            name="options"
            value={opt}
            checked={selected === opt}
            onChange={() => setSelected(opt)}
          />
          {opt}
        </label>
      ))}
    </div>
  );
}
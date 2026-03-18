// src/components/CheckboxExample.jsx
import React, { useState } from "react";

export default function CheckboxExample() {
  const [checked, setChecked] = useState(false);
  const [mixed, setMixed] = useState("mixed");

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={e => setChecked(e.target.checked)}
        />
        Accept terms
      </label>

      <label>
        <input
          type="checkbox"
          checked={mixed === true}
          ref={el => (el && (el.indeterminate = mixed === "mixed"))}
          onChange={() =>
            setMixed(mixed === true ? false : mixed === "mixed" ? true : "mixed")
          }
        />
        Mixed state example
      </label>
      <p>State: {mixed.toString()}</p>
    </div>
  );
}
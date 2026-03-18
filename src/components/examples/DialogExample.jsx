// src/components/DialogExample.jsx
import React, { useState, useRef, useEffect } from "react";

export default function DialogExample() {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef();

  useEffect(() => {
    if (open && dialogRef.current) dialogRef.current.focus();
  }, [open]);

  return (
    <div>
      <button onClick={() => setOpen(true)}>Open Dialog</button>
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="dialogTitle"
          tabIndex="-1"
          ref={dialogRef}
          style={{ border: "1px solid black", padding: 16, marginTop: 8 }}
        >
          <h2 id="dialogTitle">Dialog Title</h2>
          <p>Dialog content goes here</p>
          <button onClick={() => setOpen(false)}>Close</button>
        </div>
      )}
    </div>
  );
}
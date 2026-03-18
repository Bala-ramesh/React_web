import React from "react";

export default function LinkExample() {
  function handleKeyDown(e) {
    if (e.key === "Enter") {
      window.location.href = "https://www.w3.org/WAI/ARIA/apg/patterns/";
    }
  }

  return (
    <div>
      <p>
        This is a <a href="https://example.com">native HTML link</a>.
      </p>

      <p>
        Example of a custom element behaving like a link:
      </p>

      <span
        role="link"
        tabIndex="0"
        onClick={() => window.location.href = "https://example.com"}
        onKeyDown={handleKeyDown}
        style={{
          color: "#4da3ff",
          cursor: "pointer",
          textDecoration: "underline"
        }}
      >
        Custom link element
      </span>
    </div>
  );
}
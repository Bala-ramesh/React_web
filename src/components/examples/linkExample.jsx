import styles from "./examples.module.css";

export default function LinkExample() {
  function handleKeyDown(e) {
    if (e.key === "Enter") {
      window.location.href = "https://www.w3.org/WAI/ARIA/apg/patterns/";
    }
  }

  return (
    <div className={styles.wrapper}>
      <p className={styles.linkParagraph}>
        This is a{" "}
        <a
          href="https://example.com"
          className={styles.nativeLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          native HTML link
        </a>
        .
      </p>

      <p className={styles.linkParagraph}>
        Example of a custom element behaving like a link:
      </p>

      <p className={styles.linkParagraph}>
        <span
          role="link"
          tabIndex="0"
          onClick={() => (window.location.href = "https://example.com")}
          onKeyDown={handleKeyDown}
          className={styles.customLink}
        >
          Custom link element
        </span>
      </p>
    </div>
  );
}

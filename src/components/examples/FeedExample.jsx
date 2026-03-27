import styles from "./examples.module.css";

const articles = [
  { id: 1, title: "Keyboard Navigation Best Practices", date: "Mar 2024", body: "Ensuring all interactive elements are reachable by keyboard is foundational to accessibility." },
  { id: 2, title: "ARIA Live Regions Explained", date: "Feb 2024", body: "Live regions announce dynamic content changes to screen reader users without requiring focus movement." },
  { id: 3, title: "Color Contrast in Accessible Design", date: "Jan 2024", body: "WCAG 2.1 requires a minimum contrast ratio of 4.5:1 for normal text at AA level compliance." },
];

export default function FeedExample() {
  return (
    <div className={styles.wrapper}>
      <div role="feed" aria-labelledby="feed-heading" aria-busy="false">
        <p id="feed-heading" className={styles.radioGroupLabel}>Accessibility Articles</p>
        <div className={styles.feedWrap}>
          {articles.map((a, i) => (
            <article
              key={a.id}
              role="article"
              aria-labelledby={`feed-title-${a.id}`}
              aria-describedby={`feed-body-${a.id}`}
              aria-posinset={i + 1}
              aria-setsize={articles.length}
              className={styles.feedArticle}
              tabIndex={0}
            >
              <p id={`feed-title-${a.id}`} className={styles.feedArticleTitle}>{a.title}</p>
              <p className={styles.feedArticleMeta}>{a.date}</p>
              <p id={`feed-body-${a.id}`} className={styles.feedArticleBody}>{a.body}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

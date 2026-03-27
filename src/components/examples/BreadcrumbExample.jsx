import styles from "./examples.module.css";

const crumbs = [
  { label: "Home", href: "#" },
  { label: "Products", href: "#" },
  { label: "Electronics", href: "#" },
  { label: "Laptops", href: null },
];

export default function BreadcrumbExample() {
  return (
    <div className={styles.wrapper}>
      <nav aria-label="Breadcrumb">
        <ol className={styles.bcList}>
          {crumbs.map((crumb, i) => {
            const isLast = i === crumbs.length - 1;
            return (
              <li key={crumb.label} className={styles.bcItem}>
                {i > 0 && <span className={styles.bcSep} aria-hidden="true">›</span>}
                {isLast ? (
                  <span className={styles.bcCurrent} aria-current="page">
                    {crumb.label}
                  </span>
                ) : (
                  <a href={crumb.href} className={styles.bcLink} onClick={(e) => e.preventDefault()}>
                    {crumb.label}
                  </a>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
      <p className={styles.counter}>aria-current="page" marks the active item</p>
    </div>
  );
}

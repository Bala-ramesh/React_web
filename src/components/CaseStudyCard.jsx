import styles from "./CaseStudyCard.module.css"
import { Link } from "react-router-dom"

function CaseStudyCard({ id, title, keyStat, keyFocus, assistiveTech }) {
  const focusItems = Array.isArray(keyFocus) ? keyFocus : [keyFocus]
  const techItems = Array.isArray(assistiveTech) ? assistiveTech : [assistiveTech]

  return (
    <article className={styles.article}>
      <Link to={`/case-studies/${id}`} className={styles.cardLink}>
        <h3 className={styles.title}>{title}</h3>

        <p className={styles.keyStat} aria-hidden="true">{keyStat}</p>

        <ul className={styles.keyFocus} aria-hidden="true">
          {focusItems.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <p className={styles.assistiveTech} aria-hidden="true">
          <span className={styles.techLabel}>Assistive tech used:</span>{" "}
          {techItems.join(" · ")}
        </p>

        <span className={styles.cta}>View Deep Dive →</span>
      </Link>
    </article>
  )
}

export default CaseStudyCard
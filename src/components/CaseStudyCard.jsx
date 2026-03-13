import styles from './CaseStudyCard.module.css'

/**
 * Card-Link pattern: entire card is one link. Screen readers announce only
 * the title and "View Deep Dive" (key focus + assistive tech are aria-hidden).
 */
function CaseStudyCard({ title, keyStat, keyFocus, assistiveTech, href }) {
  return (
    <article className={styles.article}>
      <a href={href} className={styles.cardLink}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.keyStat} aria-hidden="true">
          {keyStat}
        </p>
        <ul className={styles.keyFocus} aria-hidden="true">
          {keyFocus.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        <p className={styles.assistiveTech} aria-hidden="true">
          <span className={styles.techLabel}>Assistive tech used:</span>{' '}
          {assistiveTech.join(' · ')}
        </p>
        <span className={styles.cta}>View Deep Dive</span>
      </a>
    </article>
  )
}

export default CaseStudyCard

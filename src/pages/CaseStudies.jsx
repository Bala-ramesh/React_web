import CaseStudyCard from '../components/CaseStudyCard'
import { CASE_STUDIES } from '../data/caseStudies'
import styles from './CaseStudies.module.css'

function CaseStudies() {
  return (
    <article>
      <section className={styles.section} aria-labelledby="main-heading">
        <h1 id="main-heading" className={styles.heading} tabIndex={-1}>
          Case Studies
        </h1>
        <p className={styles.pageLead}>
          Career milestones: enterprise migrations, SaaS growth, and global audit infrastructure.
        </p>
        <ul className={styles.grid}>
          {CASE_STUDIES.map((study) => (
            <li key={study.id}>
              <CaseStudyCard
                title={study.title}
                keyStat={study.keyStat}
                keyFocus={study.keyFocus}
                assistiveTech={study.assistiveTech}
                href={study.href}
              />
            </li>
          ))}
        </ul>
      </section>
    </article>
  )
}

export default CaseStudies

// pages/CaseStudiesOverview.jsx
import CaseStudyCard from "../components/CaseStudyCard"
import { CASE_STUDIES } from "../data/caseStudies"
import styles from "./CaseStudies.module.css"

function CaseStudiesOverview() {
  return (
    <main>
      <section className={styles.section} aria-labelledby="main-heading">
        <h1 id="main-heading" className={styles.heading} tabIndex={-1}>
          Work in Action
        </h1>
        <p className={styles.pageLead}>
          Real accessibility initiatives where I improved digital experiences...
        </p>

        <ul className={styles.grid}>
          {CASE_STUDIES.map((study) => (
            <li key={study.id} className={styles.gridItem}>
              <CaseStudyCard
                id={study.id}
                title={study.title}
                keyStat={study.keyStat}
                keyFocus={study.content?.find(block => block.type === 'lead')?.text || ""}
                assistiveTech={study.assistiveTech}
              />
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}

export default CaseStudiesOverview
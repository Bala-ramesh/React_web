import styles from "./ExperienceCard.module.css"
import { Link } from "react-router-dom"

function ExperienceCard({ id, company, role, period, stat, responsibilities, stack }) {
  const dutyItems = Array.isArray(responsibilities) ? responsibilities : [responsibilities]
  const techStack = Array.isArray(stack) ? stack : [stack]

  return (
    <article className={styles.card}>
      <Link to={`/experience/${id}`} className={styles.cardLink}>
        <header className={styles.header}>
          <h3 className={styles.title}>{role}</h3>
          <span className={styles.period}>{period}</span>
        </header>

        <p className={styles.companyName}>{company}</p>
        
        <p className={styles.keyStat} aria-hidden="true">{stat}</p>

        <ul className={styles.responsibilities} aria-hidden="true">
          {dutyItems.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <p className={styles.stackLine} aria-hidden="true">
          <span className={styles.stackLabel}>Core Stack:</span>{" "}
          {techStack.join(" · ")}
        </p>

        <span className={styles.cta}>View Experience Details →</span>
      </Link>
    </article>
  )
}

export default ExperienceCard
import { useParams, Link } from "react-router-dom";
import { EXPERIENCES } from "../data/experience";
import styles from "./ExperienceDetail.module.css";

function ExperienceDetail() {
  const { id } = useParams();
  const exp = EXPERIENCES.find((item) => item.id === id);

  if (!exp) return <main className={styles.error}>Experience not found.</main>;

  return (
    <article className={styles.blogWrapper}>
      <header className={styles.blogHeader}>
        <Link to="/experience" className={styles.backLink}>
          ← Back to Career
        </Link>
        <h1 className={styles.title}>{exp.role}</h1>
        <div className={styles.meta}>
          <span className={styles.stat}>{exp.company}</span>
          <span className={styles.period}>{exp.period}</span>
          <span className={styles.stat}>Key Impact: {exp.stat}</span>
        </div>
      </header>

      <section className={styles.content}>
        <p className={styles.leadText}>
          {exp.shortDesc}
        </p>

        <h2 className={styles.subheading}>The Role & Impact</h2>
        <p className={styles.paragraph}>
          {exp.fullRoleDesc}
        </p>

        <h3 className={styles.subheading}>Core Responsibilities</h3>
        <ul className={styles.methodList}>
          {exp.responsibilities.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        {exp.quote && (
          <blockquote className={styles.quote}>
            "{exp.quote}"
          </blockquote>
        )}

        <h3 className={styles.subheading}>Technical Ecosystem</h3>
        <p className={styles.paragraph}>
          To achieve these results, I worked extensively with the following stack:
        </p>
        <div className={styles.code}>
          {exp.stack.join(" // ")}
        </div>
      </section>

      <footer className={styles.blogFooter}>
        <p className={styles.academicNote}>
          Professional Experience Detail • {exp.company} • {exp.period.split('—')[0]}
        </p>
      </footer>
    </article>
  );
}

export default ExperienceDetail;
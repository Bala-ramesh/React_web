import { useParams, NavLink } from "react-router-dom";
import { getCaseStudyById } from "../data/caseStudies";
import styles from "./CaseStudiesDetail.module.css"

function CaseStudyDetail() {
  const { caseStudyId } = useParams();
  const study = getCaseStudyById(caseStudyId);

  if (!study) return <div className={styles.error}>Project not found.</div>;

  return (
    <article className={styles.blogWrapper}>
      <header className={styles.blogHeader}>
        <NavLink to="/case-studies" className={styles.backLink}>← Back to Work in Action</NavLink>
        <h1 className={styles.title}>{study.title}</h1>
        <div className={styles.meta}>
          <span className={styles.stat}>{study.keyStat}</span>
          <span className={styles.divider}>|</span>
          <span className={styles.tech}>{study.assistiveTech}</span>
        </div>
      </header>

      <section className={styles.content}>
        {study.content.map((block, index) => {
          switch (block.type) {
            case "lead":
              return <p key={index} className={styles.leadText}>{block.text}</p>;
            case "heading":
              return <h2 key={index} className={styles.subheading}>{block.text}</h2>;
            case "paragraph":
              return <p key={index} className={styles.paragraph}>{block.text}</p>;
            case "quote":
              return <blockquote key={index} className={styles.quote}>{block.text}</blockquote>;
            case "list":
              return (
                <ul key={index} className={styles.methodList}>
                  {block.items.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              );
            default:
              return null;
          }
        })}

        {study.footerNote && (
          <footer className={styles.blogFooter}>
            <hr />
            <p className={styles.academicNote}>{study.footerNote}</p>
          </footer>
        )}
      </section>
    </article>
  );
}

export default CaseStudyDetail;
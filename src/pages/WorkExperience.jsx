import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { EXPERIENCES } from "../data/experience";
import styles from "./WorkExperience.module.css";

/* ─── Modal ─────────────────────────────────────────────────── */
function ExperienceModal({ exp, onClose }) {
  const dialogRef = useRef(null);
  const closeRef = useRef(null);

  /* Focus trap + Escape */
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    closeRef.current?.focus();

    const focusables = dialog.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusables[0];
    const last = focusables[focusables.length - 1];

    const handleKeyDown = (e) => {
      if (e.key === "Escape") { onClose(); return; }
      if (e.key !== "Tab") return;
      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last?.focus(); }
      } else {
        if (document.activeElement === last) { e.preventDefault(); first?.focus(); }
      }
    };

    dialog.addEventListener("keydown", handleKeyDown);
    return () => dialog.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    /* Backdrop — click outside to close */
    <div className={styles.backdrop} onClick={onClose} aria-hidden="false">
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="exp-modal-title"
        className={styles.modal}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          ref={closeRef}
          type="button"
          className={styles.closeBtn}
          onClick={onClose}
          aria-label="Close dialog"
        >
          ✕
        </button>

        {/* Meta row */}
        <div className={styles.modalMeta}>
          <span className={styles.modalPeriod}>{exp.period}</span>
          <span className={styles.modalCompany}>{exp.company}</span>
        </div>

        {/* Role */}
        <h2 id="exp-modal-title" className={styles.modalTitle}>
          {exp.role}
        </h2>

        {/* Short description */}
        <p className={styles.modalDesc}>{exp.shortDesc}</p>

        {/* First two responsibilities */}
        <ul className={styles.modalList}>
          {exp.responsibilities.slice(0, 2).map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        {/* Navigate to full detail page */}
        <Link
          to={`/experience/${exp.id}`}
          className={styles.viewMore}
        >
          View More →
        </Link>
      </div>
    </div>
  );
}

/* ─── Page ───────────────────────────────────────────────────── */
function WorkExperience() {
  const [activeExp, setActiveExp] = useState(null);
  const triggerRefs = useRef({});

  const openModal = (exp) => setActiveExp(exp);

  const closeModal = () => {
    const id = activeExp?.id;
    setActiveExp(null);
    /* Return focus to the milestone button that opened the modal */
    requestAnimationFrame(() => {
      triggerRefs.current[id]?.focus();
    });
  };

  return (
    <>
      <div className={styles.page}>
        <header className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>Career Timeline</h1>
          <p className={styles.pageLead}>
            A journey through accessibility — click any milestone to explore.
          </p>
        </header>

        {/* Timeline */}
        <div className={styles.timeline} aria-label="Career milestones">
          {EXPERIENCES.map((exp, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div key={exp.id} className={styles.milestoneRow}>
                {/* Card — positioned left or right of the spine */}
                <button
                  ref={(el) => (triggerRefs.current[exp.id] = el)}
                  type="button"
                  className={`${styles.milestoneBtn} ${
                    isLeft ? styles.btnLeft : styles.btnRight
                  }`}
                  onClick={() => openModal(exp)}
                  aria-haspopup="dialog"
                  aria-label={`${exp.company}, ${exp.period}. Open details.`}
                >
                  <span className={styles.cardCompany}>{exp.company}</span>
                  <span className={styles.cardPeriod}>{exp.period}</span>
                </button>

                {/* Node dot — always in the center column */}
                <div className={styles.nodeWrap} aria-hidden="true">
                  <span className={styles.node} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal rendered outside the page div so it can overlay everything */}
      {activeExp && (
        <ExperienceModal exp={activeExp} onClose={closeModal} />
      )}
    </>
  );
}

export default WorkExperience;

import { useMotion } from '../context/MotionContext'
import styles from './Hero.module.css'

const STATS = [
  { value: '4,000+', label: 'Accessibility Defects Resolved' },
  { value: '2,000+', label: 'User Stories Authored' },
  { value: '80+', label: 'Engineers Mentored' },
  { value: '75+', label: 'Reusable Accessible Components' },
]

function Hero() {
  const { motionReduced, setMotionReduced } = useMotion()

  return (
    <section className={styles.hero} aria-labelledby="main-heading">
      <div className={styles.grain} aria-hidden="true" />
      <div className={styles.heroInner}>
        <div className={styles.heroContent}>
          <h1 id="main-heading">
            Hi I am Bala
          </h1>
          <h2 id="sub-heading" className={styles.headline} tabIndex={-1}>
            I build digital products that don&apos;t exclude people.
          </h2>
          <p className={styles.subheading}>
            Accessibility Engineer specializing in WCAG 2.2 A, AA & AAA, semantic refactoring,
            and making complex UI usable for everyone.
          </p>
          <div className={styles.motionToggleWrap}>
            <button
              type="button"
              className={styles.motionToggle}
              onClick={() => setMotionReduced((prev) => !prev)}
              aria-pressed={motionReduced}
              aria-label={motionReduced ? 'Enable motion' : 'Reduce motion'}
            >
              {motionReduced ? 'Motion off' : 'Reduce motion'}
            </button>
          </div>
        </div>
        <div className={styles.statsGrid}>
          {STATS.map((stat, index) => (
            <div key={index} className={styles.statCard}>
              <span className={styles.statValue}>{stat.value}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero

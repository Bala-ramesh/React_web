import Hero from '../components/Hero'
import FAQAccordion from '../components/FAQAccordion'
import styles from './Home.module.css'

function Home() {
  return (
    <article>
      <Hero />
      <section className={styles.faqSection} aria-labelledby="faq-heading">
        <h2 id="faq-heading" className={styles.faqHeading}>
          Frequently asked questions
        </h2>
        <FAQAccordion />
      </section>
    </article>
  )
}

export default Home

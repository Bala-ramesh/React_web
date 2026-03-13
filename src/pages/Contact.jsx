import ContactForm from '../components/ContactForm'
import styles from './Contact.module.css'

function Contact() {
  return (
    <article>
      <section className={styles.section} aria-labelledby="main-heading">
        <h1 id="main-heading" className={styles.heading} tabIndex={-1}>
          Contact
        </h1>
        <p className={styles.pageLead}>
          Get in touch for accessibility audits, training, or consulting.
        </p>
        <ContactForm />
      </section>
    </article>
  )
}

export default Contact

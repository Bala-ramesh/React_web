import { useState, useRef } from 'react'
import styles from './ContactForm.module.css'

const SUBJECT_OPTIONS = [
  { value: '', label: 'Select subject' },
  { value: 'general', label: 'General inquiry' },
  { value: 'audit', label: 'Accessibility audit' },
  { value: 'training', label: 'Training' },
  { value: 'other', label: 'Other' },
]

const ERROR_IDS = {
  summary: 'contact-error-summary',
  name: 'contact-name-error',
  email: 'contact-email-error',
  subject: 'contact-subject-error',
  message: 'contact-message-error',
}

function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false) // Loading state
  
  const summaryRef = useRef(null)

  const validate = () => {
    const next = {}
    if (!name.trim()) next.name = 'Name is required.'
    if (!email.trim()) next.email = 'Email is required.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = 'Enter a valid email address.'
    if (!subject) next.subject = 'Please select a subject.'
    if (!message.trim()) next.message = 'Message is required.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Prevent multiple submissions if already loading
    if (isSubmitting) return;

    if (!validate()) {
      summaryRef.current?.focus();
      return;
    }

    setIsSubmitting(true);
    setErrors({}); // Clear previous errors

    try {
      const response = await fetch("https://serversidereact-production.up.railway.app/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, subject, message }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        const errorData = await response.json().catch(() => ({}));
        
        // Handle 429 specifically or generic server errors
        const errorMessage = response.status === 429 
          ? "Too many requests. Please wait a moment before trying again."
          : (errorData.message || "Failed to send email");
          
        setErrors({ server: errorMessage });
        summaryRef.current?.focus();
      }
    } catch (error) {
      console.error("Connection failed:", error);
      setErrors({ server: "Could not connect to the server. Please check your internet connection." });
      summaryRef.current?.focus();
    } finally {
      setIsSubmitting(false); // Re-enable the form
    }
  };

  if (submitted) {
    return (
      <div className={styles.success} role="status" aria-live="polite">
        <p className={styles.successTitle}>Message sent</p>
        <p className={styles.successText}>
          Thanks for reaching out. I&apos;ll get back to you soon.
        </p>
      </div>
    )
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      {Object.keys(errors).length > 0 && (
        <div
          ref={summaryRef}
          id={ERROR_IDS.summary}
          className={styles.errorSummary}
          role="alert"
          tabIndex={-1}
          aria-labelledby="contact-error-summary-heading"
        >
          <h3 id="contact-error-summary-heading" className={styles.errorSummaryTitle}>
            Please fix the following:
          </h3>
          <ul className={styles.errorSummaryList}>
            {errors.server && <li style={{ fontWeight: 'bold' }}>{errors.server}</li>}
            {errors.name && <li><a href="#contact-name">{errors.name}</a></li>}
            {errors.email && <li><a href="#contact-email">{errors.email}</a></li>}
            {errors.subject && <li><a href="#contact-subject">{errors.subject}</a></li>}
            {errors.message && <li><a href="#contact-message">{errors.message}</a></li>}
          </ul>
        </div>
      )}

      <div className={styles.field}>
        <label htmlFor="contact-name" className={styles.label}>
          Name <span className={styles.required} aria-hidden="true">*</span>
        </label>
        <input
          id="contact-name"
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          disabled={isSubmitting}
          aria-required="true"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? ERROR_IDS.name : undefined}
          className={styles.input}
          autoComplete="name"
        />
        {errors.name && (
          <span id={ERROR_IDS.name} className={styles.inlineError} role="alert">
            {errors.name}
          </span>
        )}
      </div>

      <div className={styles.field}>
        <label htmlFor="contact-email" className={styles.label}>
          Email <span className={styles.required} aria-hidden="true">*</span>
        </label>
        <input
          id="contact-email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={isSubmitting}
          aria-required="true"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? ERROR_IDS.email : undefined}
          className={styles.input}
          autoComplete="email"
        />
        {errors.email && (
          <span id={ERROR_IDS.email} className={styles.inlineError} role="alert">
            {errors.email}
          </span>
        )}
      </div>

      <div className={styles.field}>
        <label htmlFor="contact-subject" className={styles.label}>
          Subject <span className={styles.required} aria-hidden="true">*</span>
        </label>
        <select
          id="contact-subject"
          name="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
          disabled={isSubmitting}
          aria-required="true"
          aria-invalid={!!errors.subject}
          aria-describedby={errors.subject ? ERROR_IDS.subject : undefined}
          className={styles.select}
        >
          {SUBJECT_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {errors.subject && (
          <span id={ERROR_IDS.subject} className={styles.inlineError} role="alert">
            {errors.subject}
          </span>
        )}
      </div>

      <div className={styles.field}>
        <label htmlFor="contact-message" className={styles.label}>
          Message <span className={styles.required} aria-hidden="true">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          disabled={isSubmitting}
          aria-required="true"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? ERROR_IDS.message : undefined}
          className={styles.textarea}
          rows={5}
        />
        {errors.message && (
          <span id={ERROR_IDS.message} className={styles.inlineError} role="alert">
            {errors.message}
          </span>
        )}
      </div>

      <button 
        type="submit" 
        className={styles.submit} 
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : 'Send message'}
      </button>
    </form>
  )
}

export default ContactForm
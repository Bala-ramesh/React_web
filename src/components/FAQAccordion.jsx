import { useState, useRef, useEffect } from 'react'
import { FAQ_ITEMS } from '../data/faqData'
import styles from './FAQAccordion.module.css'

function FAQAccordion() {
  const [openId, setOpenId] = useState(null)
  const buttonRefs = useRef([])

  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id))
  }

  const handleKeyDown = (e, index) => {
    const count = FAQ_ITEMS.length
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault()
        buttonRefs.current[(index + 1) % count]?.focus()
        break
      case 'ArrowUp':
        e.preventDefault()
        buttonRefs.current[(index - 1 + count) % count]?.focus()
        break
      case 'Enter':
      case ' ':
        e.preventDefault()
        toggle(FAQ_ITEMS[index].id)
        break
      default:
        break
    }
  }

  return (
    <div className={styles.accordion} role="region" aria-label="Frequently asked questions">
      {FAQ_ITEMS.map((item, index) => {
        const isOpen = openId === item.id
        const headerId = `${item.id}-header`
        const panelId = `${item.id}-panel`

        return (
          <div key={item.id} className={styles.item}>
            <h3 className={styles.heading}>
              <button
                ref={(el) => { buttonRefs.current[index] = el }}
                id={headerId}
                type="button"
                className={styles.trigger}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(item.id)}
                onKeyDown={(e) => handleKeyDown(e, index)}
              >
                {item.question}
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={headerId}
              aria-hidden={!isOpen}
              className={`${styles.panel} ${isOpen ? styles.panelOpen : ''}`}
            >
              <p className={styles.answer}>{item.answer}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default FAQAccordion

import { useState, useRef, useEffect } from 'react'
import { useAnnounce } from '../../context/AnnouncementContext'
import styles from './AccessibleModal.module.css'

/**
 * Demo: Accessible Modal — role="dialog", aria-modal="true", Esc close, Tab trap.
 */
function AccessibleModal() {
  const [open, setOpen] = useState(false)
  const triggerRef = useRef(null)
  const dialogRef = useRef(null)
  const titleRef = useRef(null)
  const announce = useAnnounce()

  const openModal = () => {
    setOpen(true)
    announce('Dialog opened. Accessible Modal.')
  }

  const closeModal = () => {
    setOpen(false)
    triggerRef.current?.focus()
    announce('Dialog closed.')
  }

  useEffect(() => {
    if (!open || !dialogRef.current) return

    const dialog = dialogRef.current
    const focusables = dialog.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
    const first = focusables[0]
    const last = focusables[focusables.length - 1]

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeModal()
        return
      }
      if (e.key !== 'Tab') return
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault()
          last?.focus()
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault()
          first?.focus()
        }
      }
    }

    dialog.addEventListener('keydown', handleKeyDown)
    first?.focus()
    return () => dialog.removeEventListener('keydown', handleKeyDown)
  }, [open])

  if (!open) {
    return (
      <button
        ref={triggerRef}
        type="button"
        className={styles.trigger}
        onClick={openModal}
        aria-haspopup="dialog"
      >
        Open modal
      </button>
    )
  }

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby="demo-modal-title"
      className={styles.dialog}
    >
      <h2 id="demo-modal-title" ref={titleRef} className={styles.title}>
        Accessible Modal
      </h2>
      <p className={styles.body}>
        Focus is trapped. Press Escape to close.
      </p>
      <button type="button" className={styles.close} onClick={closeModal}>
        Close
      </button>
    </div>
  )
}

export default AccessibleModal

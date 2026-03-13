import { useAnnouncementMessage } from '../context/AnnouncementContext'
import styles from './LiveAnnouncer.module.css'

/**
 * Visual box that mirrors an aria-live region. Shows what screen readers
 * would announce when announce() is called from the lab components.
 */
function LiveAnnouncer() {
  const message = useAnnouncementMessage()

  return (
    <div className={styles.wrapper}>
      <h4 className={styles.heading}>Live announcer</h4>
      <div
        className={styles.region}
        aria-live="polite"
        aria-atomic="true"
        role="status"
      >
        {message || <span className={styles.placeholder}>Nothing announced yet.</span>}
      </div>
    </div>
  )
}

export default LiveAnnouncer

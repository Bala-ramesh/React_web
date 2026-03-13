import { createContext, useContext, useState, useCallback } from 'react'

const AnnouncementContext = createContext(null)

export function AnnouncementProvider({ children }) {
  const [message, setMessage] = useState('')

  const announce = useCallback((text) => {
    setMessage('')
    // Force re-announce for same text (e.g. open modal twice)
    requestAnimationFrame(() => setMessage(text))
  }, [])

  return (
    <AnnouncementContext.Provider value={{ message, announce }}>
      {children}
    </AnnouncementContext.Provider>
  )
}

export function useAnnounce() {
  const ctx = useContext(AnnouncementContext)
  return ctx ? ctx.announce : () => {}
}

export function useAnnouncementMessage() {
  const ctx = useContext(AnnouncementContext)
  return ctx ? ctx.message : ''
}

import { createContext, useContext, useState, useEffect } from 'react'

const MotionContext = createContext(null)

export function MotionProvider({ children }) {
  const [motionReduced, setMotionReduced] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('motion-reduced', motionReduced)
    return () => document.body.classList.remove('motion-reduced')
  }, [motionReduced])

  return (
    <MotionContext.Provider value={{ motionReduced, setMotionReduced }}>
      {children}
    </MotionContext.Provider>
  )
}

export function useMotion() {
  const ctx = useContext(MotionContext)
  if (!ctx) throw new Error('useMotion must be used within MotionProvider')
  return ctx
}

import { useState, useEffect, useRef } from "react";
import styles from "./examples.module.css";

const slides = [
  { label: "Slide 1 of 3", content: "Accessible carousels pause on focus and hover." },
  { label: "Slide 2 of 3", content: "Every slide has an accessible label via aria-label." },
  { label: "Slide 3 of 3", content: "Auto-rotation stops when keyboard focus enters." },
];

export default function CarouselExample() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (paused) { clearInterval(intervalRef.current); return; }
    intervalRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 2500);
    return () => clearInterval(intervalRef.current);
  }, [paused]);

  const go = (i) => setCurrent((i + slides.length) % slides.length);

  return (
    <div className={styles.wrapper}>
      <div
        role="region"
        aria-roledescription="carousel"
        aria-label="Feature highlights"
        className={styles.carouselWrap}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
        <div
          role="group"
          aria-roledescription="slide"
          aria-label={slides[current].label}
          className={styles.slide}
        >
          {slides[current].content}
        </div>

        <div className={styles.carouselControls}>
          <button
            className={styles.btn}
            aria-label={paused ? "Start slide rotation" : "Stop slide rotation"}
            onClick={() => setPaused((p) => !p)}
            style={{ fontSize: "0.8rem", padding: "0.25rem 0.6rem" }}
          >
            {paused ? "▶ Play" : "⏸ Pause"}
          </button>

          <div className={styles.carouselDots}>
            {slides.map((_, i) => (
              <button
                key={i}
                className={`${styles.dot} ${i === current ? styles.dotActive : ""}`}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => go(i)}
              />
            ))}
          </div>

          <div className={styles.btnGroup}>
            <button className={styles.btn} aria-label="Previous slide" onClick={() => go(current - 1)} style={{ padding: "0.25rem 0.6rem" }}>‹</button>
            <button className={styles.btn} aria-label="Next slide" onClick={() => go(current + 1)} style={{ padding: "0.25rem 0.6rem" }}>›</button>
          </div>
        </div>
      </div>
    </div>
  );
}

import { useParams, NavLink } from "react-router-dom"
import { COMPONENT_REGISTRY, getComponentById } from "../data/componentRegistry"
import LiveAnnouncer from "../components/LiveAnnouncer"
import styles from "./ComponentLab.module.css"

export default function ComponentLab() {
  const { componentId } = useParams()
  const component = componentId ? getComponentById(componentId) : null

  if (!componentId) {
    // === Overview (Card Grid) ===
    return (
      <main>
        <h1>Component Lab</h1>
        <p className={styles.pageLead}>
          Explore accessible UI components based on WAI-ARIA Authoring Practices.
        </p>

        <div className={styles.cardGrid}>
          {COMPONENT_REGISTRY.map(c => (
            <NavLink
              key={c.id}
              to={`/component-lab/${c.id}`}
              className={styles.card}
            >
              <h2>{c.name}</h2>
              <p>{c.intro}</p>
            </NavLink>
          ))}
        </div>
      </main>
    )
  }

  // === Detail Page ===
  if (!component) return <p>Component not found</p>

  return (
    <main>
      {/* Header */}
      <header>
      <NavLink to="/component-lab" className={styles.backLink}>← Back to Component lab</NavLink>
        <h1>{component.name}</h1>
        <p>{component.description}</p>
      </header>

      {/* Live Example */}
      <section>
        <h2>Live Example</h2>
        <div className={styles.liveExample}>
          {component.render()}
        </div>
      </section>

      {/* Native HTML Implementation */}
      {component.nativeHtml && (
        <section>
          <h2>Native HTML Implementation</h2>
          <pre className={styles.codeBlock}><code>{component.nativeHtml}</code></pre>
        </section>
      )}

      {/* ARIA Patterns */}
      {component.ariaPatterns?.length > 0 && (
        <section>
          <h2>ARIA Patterns</h2>
          <ul>
            {component.ariaPatterns.map((pattern, i) => (
              <li key={i}><code>{pattern}</code></li>
            ))}
          </ul>
        </section>
      )}

      {/* Keyboard Interaction */}
      {component.keyboardShortcuts?.length > 0 && (
        <section>
          <h2>Keyboard Interaction</h2>
          <ul>
            {component.keyboardShortcuts.map((shortcut, i) => (
              <li key={i}>{shortcut}</li>
            ))}
          </ul>
        </section>
      )}

      {/* WAI-ARIA Roles, States, and Properties */}
      {component.ariaDetails && (
        <section>
          <h2>WAI-ARIA Roles, States, and Properties</h2>
          <pre>{component.ariaDetails}</pre>
        </section>
      )}

      {/* WCAG Success Criteria */}
      {component.wcagCriteria?.length > 0 && (
        <section>
          <h2>WCAG Success Criteria</h2>
          <ul>
            {component.wcagCriteria.map((criterion, i) => (
              <li key={i}>{criterion}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Reference */}
      {component.apg && (
        <section>
          <h2>Reference</h2>
          <a className={styles.referenceLink} href={component.apg} target="_blank" rel="noopener noreferrer">
           WAI-ARIA APG pattern
          </a>
        </section>
      )}

      {/* Live announcer for accessibility */}
      <div className={styles.announcerWrap}>
       <LiveAnnouncer />
      </div>
    </main>
  )
}
import { NavLink, useParams } from 'react-router-dom'
import { AnnouncementProvider } from '../context/AnnouncementContext'
import { COMPONENT_REGISTRY, getComponentById } from '../data/componentRegistry'
import LiveAnnouncer from '../components/LiveAnnouncer'
import styles from './ComponentLab.module.css'

function ComponentLabContent() {
  const { componentId } = useParams()
  const component = componentId ? getComponentById(componentId) : null

  return (
    <article>
      <section className={styles.section} aria-labelledby="main-heading">
        <h1 id="main-heading" className={styles.heading} tabIndex={-1}>
          Component Lab
        </h1>
        <p className={styles.pageLead}>
          Accessible components and patterns. Select a component to preview and inspect ARIA, keyboard, and WCAG criteria.
        </p>

        <div className={styles.layout}>
          <nav className={styles.sidebar} aria-label="Component list">
            <h2 className={styles.sidebarTitle}>Components</h2>
            <ul className={styles.sidebarList}>
              {COMPONENT_REGISTRY.map(({ id, name }) => (
                <li key={id} className={styles.sidebarItem}>
                  <NavLink
                    to={`/component-lab/${id}`}
                    className={styles.sidebarLink}
                    aria-current={componentId === id ? 'page' : undefined}
                  >
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.main}>
            <div className={styles.stage}>
              {component ? (
                component.render()
              ) : (
                <p className={styles.stagePlaceholder}>
                  Select a component from the sidebar to see a live preview.
                </p>
              )}
            </div>

            {component && (
              <div className={styles.inspector}>
                <h3 className={styles.inspectorTitle}>A11y Inspector</h3>
                {component.description && (
                  <p className={styles.inspectorDescription}>{component.description}</p>
                )}
                <div className={styles.inspectorSection}>
                  <p className={styles.inspectorLabel}>WCAG success criteria</p>
                  <ul className={styles.inspectorList}>
                    {component.wcagCriteria.map((criterion, i) => (
                      <li key={i}>{criterion}</li>
                    ))}
                  </ul>
                </div>
                <div className={styles.inspectorSection}>
                  <p className={styles.inspectorLabel}>ARIA patterns</p>
                  <ul className={styles.inspectorList}>
                    {component.ariaPatterns.map((pattern, i) => (
                      <li key={i}><code>{pattern}</code></li>
                    ))}
                  </ul>
                </div>
                <div className={styles.inspectorSection}>
                  <p className={styles.inspectorLabel}>Keyboard</p>
                  <ul className={styles.inspectorList}>
                    {component.keyboardShortcuts.map((shortcut, i) => (
                      <li key={i}>{shortcut}</li>
                    ))}
                  </ul>
                </div>
                <div className={styles.announcerWrap}>
                  <LiveAnnouncer />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </article>
  )
}

function ComponentLab() {
  return (
    <AnnouncementProvider>
      <ComponentLabContent />
    </AnnouncementProvider>
  )
}

export default ComponentLab

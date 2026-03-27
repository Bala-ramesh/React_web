import { Link, useLocation } from "react-router-dom"
import { CASE_STUDIES } from "../data/caseStudies"
import { EXPERIENCES } from "../data/experience"
import { COMPONENT_REGISTRY } from "../data/componentRegistry"
import styles from "./Breadcrumb.module.css"

/* Labels for each top-level route segment — mirrors NAV_ITEMS in Navigation.jsx */
const SEGMENT_LABELS = {
  "case-studies":  "Work In Action",
  "experience":    "My Work",
  "component-lab": "Component Lab",
  "contact":       "Contact",
}

/* Resolve a dynamic ID segment to a human-readable label */
function resolveLabel(segment, parentSegment) {
  if (parentSegment === "case-studies") {
    return CASE_STUDIES.find((s) => s.id === segment)?.title ?? segment
  }
  if (parentSegment === "experience") {
    return EXPERIENCES.find((e) => e.id === segment)?.role ?? segment
  }
  if (parentSegment === "component-lab") {
    return COMPONENT_REGISTRY.find((c) => c.id === segment)?.name ?? segment
  }
  return segment
}

function buildCrumbs(pathname) {
  if (pathname === "/") return []

  const segments = pathname.split("/").filter(Boolean)
  const crumbs = [{ label: "Home", path: "/" }]

  let builtPath = ""
  segments.forEach((seg, i) => {
    builtPath += `/${seg}`
    const label = SEGMENT_LABELS[seg]
      ? SEGMENT_LABELS[seg]
      : resolveLabel(seg, segments[i - 1])
    crumbs.push({ label, path: builtPath })
  })

  return crumbs
}

export default function Breadcrumb() {
  const { pathname } = useLocation()
  const crumbs = buildCrumbs(pathname)

  /* No breadcrumb on the home page */
  if (crumbs.length === 0) return null

  return (
    <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
      <ol className={styles.list}>
        {crumbs.map((crumb, i) => {
          const isLast = i === crumbs.length - 1
          return (
            <li key={crumb.path} className={styles.item}>
              {i > 0 && (
                <span className={styles.separator} aria-hidden="true">›</span>
              )}
              {isLast ? (
                <span className={styles.current} aria-current="page">
                  {crumb.label}
                </span>
              ) : (
                <Link to={crumb.path} className={styles.link}>
                  {crumb.label}
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

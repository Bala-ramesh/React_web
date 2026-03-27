import { useState, useRef } from "react";
import styles from "./examples.module.css";

const ROWS = [
  { id: "1", cells: ["Projects/", "", ""], children: [
    { id: "1-1", cells: ["web-app/", "", ""], children: [
      { id: "1-1-1", cells: ["index.html", "4 KB", "2024-01-10"], children: [] },
      { id: "1-1-2", cells: ["styles.css", "2 KB", "2024-01-09"], children: [] },
    ]},
    { id: "1-2", cells: ["api/", "", ""], children: [
      { id: "1-2-1", cells: ["server.js", "8 KB", "2024-01-12"], children: [] },
    ]},
  ]},
  { id: "2", cells: ["Documents/", "", ""], children: [
    { id: "2-1", cells: ["resume.pdf", "120 KB", "2024-01-01"], children: [] },
    { id: "2-2", cells: ["notes.txt",  "1 KB",   "2024-01-05"], children: [] },
  ]},
];

function flattenVisible(rows, expandedSet, depth = 0) {
  const result = [];
  for (const row of rows) {
    result.push({ ...row, depth });
    if (row.children.length && expandedSet.has(row.id)) {
      result.push(...flattenVisible(row.children, expandedSet, depth + 1));
    }
  }
  return result;
}

export default function TreegridExample() {
  const [expanded, setExpanded] = useState(new Set(["1"]));
  const [focused, setFocused] = useState({ row: 0, col: 0 });
  const cellRefs = useRef({});

  const toggle = (id) =>
    setExpanded((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });

  const visible = flattenVisible(ROWS, expanded);

  const focusCell = (r, c) => {
    const clamped = { row: Math.max(0, Math.min(r, visible.length - 1)), col: Math.max(0, Math.min(c, 2)) };
    setFocused(clamped);
    cellRefs.current[`${clamped.row}-${clamped.col}`]?.focus();
  };

  const handleKey = (e, rowIdx, colIdx, row) => {
    const hasChildren = row.children.length > 0;
    const isExp = expanded.has(row.id);
    switch (e.key) {
      case "ArrowDown":   e.preventDefault(); focusCell(rowIdx + 1, colIdx); break;
      case "ArrowUp":     e.preventDefault(); focusCell(rowIdx - 1, colIdx); break;
      case "ArrowRight":
        e.preventDefault();
        if (colIdx < 2) focusCell(rowIdx, colIdx + 1);
        else if (hasChildren && !isExp) toggle(row.id);
        break;
      case "ArrowLeft":
        e.preventDefault();
        if (colIdx > 0) focusCell(rowIdx, colIdx - 1);
        else if (hasChildren && isExp) toggle(row.id);
        break;
      case "Enter":
      case " ":
        if (hasChildren) { e.preventDefault(); toggle(row.id); }
        break;
      case "Home": e.preventDefault(); focusCell(rowIdx, 0); break;
      case "End":  e.preventDefault(); focusCell(rowIdx, 2); break;
    }
  };

  return (
    <div className={styles.wrapper}>
      <table role="treegrid" aria-label="File system" className={styles.treegridEl}>
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Size</th>
            <th scope="col">Modified</th>
          </tr>
        </thead>
        <tbody>
          {visible.map((row, rowIdx) => {
            const hasChildren = row.children.length > 0;
            const isExp = expanded.has(row.id);
            return (
              <tr
                key={row.id}
                role="row"
                aria-expanded={hasChildren ? isExp : undefined}
                aria-level={row.depth + 1}
              >
                {row.cells.map((cell, colIdx) => (
                  <td
                    key={colIdx}
                    role="gridcell"
                    tabIndex={focused.row === rowIdx && focused.col === colIdx ? 0 : -1}
                    ref={(el) => (cellRefs.current[`${rowIdx}-${colIdx}`] = el)}
                    className={styles.treegridCell}
                    style={colIdx === 0 ? { paddingLeft: `${row.depth * 16 + 8}px` } : undefined}
                    onKeyDown={(e) => handleKey(e, rowIdx, colIdx, row)}
                    onFocus={() => setFocused({ row: rowIdx, col: colIdx })}
                  >
                    {colIdx === 0 && hasChildren && (
                      <span
                        className={`${styles.treeChevron} ${isExp ? styles.treeChevronOpen : ""}`}
                        aria-hidden="true"
                        onClick={() => toggle(row.id)}
                      >▶</span>
                    )}
                    {colIdx === 0 && !hasChildren && (
                      <span style={{ display: "inline-block", width: "14px" }} />
                    )}
                    {cell || <span style={{ color: "var(--color-text-muted)" }}>—</span>}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

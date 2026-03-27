import { useState } from "react";
import styles from "./examples.module.css";

const TREE = [
  { id: "src", label: "src/", children: [
    { id: "components", label: "components/", children: [
      { id: "header", label: "Header.jsx" },
      { id: "footer", label: "Footer.jsx" },
    ]},
    { id: "pages", label: "pages/", children: [
      { id: "home", label: "Home.jsx" },
      { id: "contact", label: "Contact.jsx" },
    ]},
  ]},
  { id: "public", label: "public/", children: [
    { id: "favicon", label: "favicon.svg" },
  ]},
];

function TreeNode({ node, selected, onSelect }) {
  const [open, setOpen] = useState(node.id === "src");
  const hasChildren = node.children?.length > 0;

  const handleKey = (e) => {
    if (e.key === "ArrowRight" && hasChildren) { e.preventDefault(); setOpen(true); }
    if (e.key === "ArrowLeft")  { e.preventDefault(); setOpen(false); }
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); hasChildren ? setOpen((o) => !o) : onSelect(node.id); }
  };

  return (
    <li role="none">
      <div
        role="treeitem"
        aria-expanded={hasChildren ? open : undefined}
        aria-selected={selected === node.id}
        tabIndex={0}
        className={`${styles.treeItem} ${selected === node.id ? styles.treeItemSelected : ""}`}
        onClick={() => hasChildren ? setOpen((o) => !o) : onSelect(node.id)}
        onKeyDown={handleKey}
      >
        {hasChildren && (
          <span className={`${styles.treeChevron} ${open ? styles.treeChevronOpen : ""}`} aria-hidden="true">▶</span>
        )}
        {!hasChildren && <span style={{ width: "10px", display: "inline-block" }} />}
        {node.label}
      </div>
      {hasChildren && open && (
        <ul role="group" className={styles.treeEl}>
          {node.children.map((child) => (
            <TreeNode key={child.id} node={child} selected={selected} onSelect={onSelect} />
          ))}
        </ul>
      )}
    </li>
  );
}

export default function TreeViewExample() {
  const [selected, setSelected] = useState(null);

  return (
    <div className={styles.wrapper}>
      <p className={styles.radioGroupLabel}>File explorer</p>
      <ul role="tree" aria-label="Project files" className={styles.treeEl}>
        {TREE.map((node) => (
          <TreeNode key={node.id} node={node} selected={selected} onSelect={setSelected} />
        ))}
      </ul>
      {selected && <p className={styles.counter}>Selected: {selected}</p>}
    </div>
  );
}

import styles from "./examples.module.css";

const ROWS = [
  { criterion: "1.1.1 Non-text Content", level: "A",  desc: "Provide text alternatives for non-text content." },
  { criterion: "1.4.1 Use of Color",     level: "A",  desc: "Don't use color as the only visual means of conveying information." },
  { criterion: "2.1.1 Keyboard",         level: "A",  desc: "All functionality operable via keyboard." },
  { criterion: "4.1.2 Name, Role, Value",level: "A",  desc: "UI components have accessible names, roles, and values." },
];

export default function TableExample() {
  return (
    <div className={styles.wrapper}>
      <table
        className={styles.tableEl}
        aria-label="Selected WCAG Success Criteria"
        aria-describedby="table-desc"
      >
        <caption id="table-desc" className="sr-only">A table of selected WCAG 2.1 success criteria</caption>
        <thead>
          <tr>
            <th scope="col">Criterion</th>
            <th scope="col">Level</th>
            <th scope="col">Description</th>
          </tr>
        </thead>
        <tbody>
          {ROWS.map((row) => (
            <tr key={row.criterion}>
              <td style={{ fontFamily: "var(--font-fira)", fontSize: "0.8rem", color: "var(--color-accent)" }}>{row.criterion}</td>
              <td>{row.level}</td>
              <td>{row.desc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

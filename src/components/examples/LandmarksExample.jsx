import styles from "./examples.module.css";

export default function LandmarksExample() {
  return (
    <div className={styles.wrapper}>
      <p className={styles.radioGroupLabel}>Page landmark regions</p>
      <div className={styles.landmarksMap}>
        <div className={styles.lmBanner}><span className={styles.lmLabel}>banner</span> — &lt;header&gt; / role="banner"</div>
        <div className={styles.lmNav}><span className={styles.lmLabel}>navigation</span> — &lt;nav&gt; / role="navigation"</div>
        <div className={styles.lmSearch}><span className={styles.lmLabel}>search</span> — &lt;search&gt; / role="search"</div>
        <div className={styles.lmMain}><span className={styles.lmLabel}>main</span> — &lt;main&gt; / role="main"</div>
        <div className={styles.lmAside}><span className={styles.lmLabel}>complementary</span> — &lt;aside&gt; / role="complementary"</div>
        <div className={styles.lmFooter}><span className={styles.lmLabel}>contentinfo</span> — &lt;footer&gt; / role="contentinfo"</div>
      </div>
    </div>
  );
}

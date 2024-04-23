"use client";
import Header from "@/containers/Header";
import styles from "@/styles/page.module.scss";


export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
          <Header />
      </div>
    </main>
  );
}

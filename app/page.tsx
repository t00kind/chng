'use client';

import Logo from "./ui/Logo";
import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {
  const [hot, setH] = useState('');
  const chng = () => {
    setH("my life")
  }
  return (
    <main className={styles.main}>
      <Logo c="change" h={hot} />
    </main>
  );
}

'use client';

import Logo from "./ui/Logo";
import styles from "./page.module.css";
import { useState, useEffect } from "react";
import { animate } from "./ui/anime";
import { Avoid } from "./ui/avoid";
import Now from "./ui/Now";

export default function Home() {
  const arr = []
  for (let i =0; i<100; i++) {
    arr.push(i);
  }
  const [hot, setH] = useState('the');
  const [next, setN] = useState('world')
  useEffect(()=>{
    animate();
  }, []);

  return (
    <main className={styles.main}>
      <Logo c="change" h={hot} n={next} />
      {arr.map(ctn => (
        <Avoid key={ctn} />
      ))}
      <Now />
    </main>
  );
}

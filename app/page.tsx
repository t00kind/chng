'use client';

import Logo from "./ui/Logo";
import styles from "./page.module.css";
import { useState, useRef } from "react";
import { Avoid } from "./ui/avoid";
import What from "./ui/What";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";


export default function Home() {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger)
  ScrollTrigger.config({ ignoreMobileResize: true });
  const logoRef = useRef(null);
  const whatRef = useRef(null);
  const arr = []
  for (let i =0; i<30; i++) {
    arr.push(i);
  }
  const [hot, setH] = useState('');
  const [next, setN] = useState('');
  const [chng, setC] = useState('change');
  const [m, setM] = useState('');
  useGSAP(() => {

    gsap.to("#mr_penis", {
      scrollTrigger: {
        trigger: '#say',
        start: "top center",
        end: "top top",
        pin: true,
        scrub: true,
        onEnter: () => {setM("КТО, ЕСЛИ НЕ ТЫ"),setH("your"), setN("life")},
        onUpdate: ({progress}) => {
          if (progress > 0.5 && progress < 0.8) {
          setM("ЛОМАЙ РАМКИ"); 
          console.log(progress)
          setH("your"), setN("view") } else if (progress > 0.9) {
            setM("МЕНЯЙ МИР");
            setH("the");
            setN("world")
          }
        },
        onLeaveBack: () => {setH(""), setN("")},
        pinSpacing: false,
       // markers: {startColor: "white", endColor: "white", fontSize: "18px", fontWeight: "bold", indent: 20}
      },
      ease: "power1.inOut",
    });
  
  });

  return (
    <main className={styles.main}>
        <Logo c={chng} h={hot} n={next} />
        <What ms={m} />
        {arr.map(ctn => (
          <Avoid key={ctn} />
        ))}

    </main>
  );
}

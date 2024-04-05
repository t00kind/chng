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
  const arr = [];
  for (let i =0; i<30; i++) {
    arr.push(i);
  }
  const [hot, setH] = useState('');
  const [next, setN] = useState('');
  const [chng, setC] = useState('change');
  const [m, setM] = useState('');
  const [f, setF] = useState(false);
  const [wh, setW] = useState("И ЕСЛИ УЖ МЕНЯТЬ");
  useGSAP(() => {
    let am = ScrollTrigger.maxScroll(window)*1/2
    const tl = gsap.timeline();
    tl.to("#mr_penis", {
      scrollTrigger: {
        trigger: '#say',
        start: "top center",
        end: "+=" + am,
        pin: "#say",
        toggleActions:"restart complete reverse reset",
        scrub: true,
        onEnter: () => {setM("КТО, ЕСЛИ НЕ <br /> ТЫ"),setH("your"), setN("life"), setC("change")},
        onEnterBack: () => {setC("change")},
        onLeave: () => {setN(""), setH(""), setC("changing"), setM("")},
        onUpdate: ({progress}) => {
          if (progress > 0.5 && progress < 0.8) {
          setM("ЛОМАЙ РАМКИ"); 
          console.log(progress)
          setH("your"), setN("view") } else if (progress > 0.9) {
            setM("МЕНЯЙ МИР");
            setH("the");
            setN("world")
          } else if (progress < 0.3) {
            setM("КТО, ЕСЛИ НЕ ТЫ"),setH("your"), setN("life")
          }
        },
        onLeaveBack: () => {setH(""), setN(""), setM(""), setC("  change")},
        pinSpacing: false,
      //  markers: {startColor: "white", endColor: "white", fontSize: "18px", fontWeight: "bold", indent: 20},
      },
      ease: "power1.inOut",
    }).to("#part1", {scrollTrigger: {
      trigger: "#part1",
      start: "top center",
      end: "center center",
      pin: true,
      scrub: true,
      onUpdate: ({progress}) => {
        if (progress > .7) {
          setW("ТО ТОЛЬКО СЕЙЧАС")
        } else {
          setW("И ЕСЛИ УЖ МЕНЯТЬ")
        }
      },
      // markers: {startColor: "white", endColor: "white", fontSize: "18px", fontWeight: "bold", indent: 20}

  },
      opacity: 1});
  });
  return (
    <main className={styles.main}>
        <Logo c={chng} h={hot} n={next} />

        <What c="" ms={m} /> {f && <What c={"flip"} ms={m}/> }
        {arr.map(ctn => (
          <Avoid key={ctn} />
        ))}
        {<h1 id="part1">{wh}</h1>}
        <div className="hig"></div>

    </main>
  );
}

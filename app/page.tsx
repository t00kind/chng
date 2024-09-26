'use client';

import Logo from "./ui/Logo";
import styles from "./page.module.css";
import { useState, useEffect } from "react";
import {Ag} from "./ui/avoid";
import What from "./ui/What";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";


export default function Home() {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger)
  ScrollTrigger.config({ ignoreMobileResize: true });

  const [hot, setH] = useState('');
  const [next, setN] = useState('');
  const [chng, setC] = useState('change');
  const [m, setM] = useState('');
  const [f, setF] = useState(false);

  useGSAP(() => {
    let am = ScrollTrigger.maxScroll(window)*(1/2)
    const tl = gsap.timeline();
    tl.to("#logo", {
      scrollTrigger: {
        trigger: "#mr_penis",
        start: "center center",
        end: "bottom top",
        scrub: 0.3

      }, 
      top: "2.3%",
      fontSize: '0.67em'
    })
    .to("#say", {
      scrollTrigger: {
        trigger: '#say',
        start: "center 50%",
        end: () => "+=" + am,
        pin: "#say",
        toggleActions:"restart complete reverse reset",
        scrub: true,
        onEnter: () => {setM("КТО, ЕСЛИ НЕ ТЫ"),setH("your"), setN("life"), setC("change")},
        onEnterBack: () => {setC("change")},
        onLeave: () => {setN(""), setH(""), setC("changing"), setF(true)},
        onUpdate: ({progress}) => {
          if (progress > 0.3 && progress < 0.6) {
          setM("ЛОМАЙ РАМКИ"); 
          setH("your"), setN("view") } else if ((progress > 0.7) && (!f)) {
            setM("МЕНЯЙ МИР");
            setH("the");
            setN("world")
          } else if (progress < 0.3) {
            setM("КТО, ЕСЛИ НЕ ТЫ"),setH("your"), setN("life")
          }
        },
        onLeaveBack: () => {setH(""), setN(""), setM(""), setC("change")},
      //  markers: {startColor: "white", endColor: "white", fontSize: "18px", fontWeight: "bold", indent: 20},
      },
      ease: "power1.inOut",
    })
    .to("#p1", {scrollTrigger: {
      trigger: "#p1",
      start: "top center",
      end: "center center",
      pin: true,
      scrub: true,

  },
      opacity: 1});
  });
  return (
      <main className={styles.main}>
          <Logo c={chng} h={hot} n={next}/>
          <div className="hig"></div>
          <What ms={m}/>
          <div className="hig"></div>
          <Ag/>
          <Ag/>
          <Ag/>
          <div className="hig"></div>
          <h1>МОЙ МИР. МОЯ РЕАЛЬНОСТЬ.</h1>
          <h1>КТО?Я</h1>
          <p>ПРЕДЕЛЬНО УЛЬТИМАТИВНО СФОКУСИРОВАН.</p>
          <p>БЕСПРЕДЕЛЬНО ОСОЗНАН</p>
          <p>ХИРУРГИЧЕСКИ ТОЧНО ВИЖУ КАЖДУЮ ДЕТАЛЬ</p>
          <h1>СВЕРХГИГАНТ.</h1>
          <h1>САМОЕ ВРЕМЯ МЕНЯТЬ.</h1>
          <h1>Я СОЗДАЮ ПЕРЕМЕНЫ</h1>
      </main>
  );
};

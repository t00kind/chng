'use client';

import Logo from "./ui/Logo";
import styles from "./page.module.css";
import { useState, useEffect } from "react";
import { Avoid } from "./ui/avoid";
import What from "./ui/What";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from 'next/image'
import hole from '../public/hole.jpg'


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
  const [mg, setG] = useState("MUGEN TALES OF CHNG");
  useGSAP(() => {
    let am = ScrollTrigger.maxScroll(window)*1/2
    const tl = gsap.timeline();
    tl.to("#logo", {
      scrollTrigger: {
        trigger: "#mr_penis",
        start: "center center",
        end: "bottom top",
        scrub: 0.3

      }, 
      top: "2%",
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
          if (progress > 0.3 && progress < 0.7) {
          setM("ЛОМАЙ РАМКИ"); 
          setH("your"), setN("view") } else if ((progress > 0.8) && (!f)) {
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
        <Logo c={chng} h={hot} n={next} />
        <div className="hig"></div>
        <What c="" ms={m} />
        {arr.map(ctn => (
          <Avoid key={ctn} />
        ))}
        {arr.map(ctn => (
          <Avoid key={ctn} />
        ))} 
        <div className="n">
        <span>ONLY I</span> <br />
        <span>ONLY HERE</span> <br />
        <span>ONLY NOW</span> <br />
        <h1>CAN CHNG OWN REALITY</h1></div>
      <div className="cresendo">
      <Image
      src={hole}
      alt="Deep Dark"
      fill
      priority
    
      style={{
        objectFit: 'cover',
      }}
      quality={100}
    /> 
    </div>
        <div className="hig">
          <h1>NOTHING EVER GOES AS PLANNED IN THIS ACCURSED WRLD</h1>
          <h2>BUT I DO CHANGES</h2></div>

    </main>
  );
};

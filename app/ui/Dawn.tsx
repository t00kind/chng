'use client';

import Logo from "./cmps/Logo";
import { useState } from "react";
import What from "./cmps/What";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function Akatski() {
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
          onEnter: () => {setM("КТО?ТЫ"),setH("your"), setN("life"), setC("change")},
          onEnterBack: () => {setC("change")},
          onLeave: () => {setN(""), setH(""), setC("changing"), setF(true)},
          onUpdate: ({progress}) => {
            if (progress > 0.3 && progress < 0.6) {
            setM("РАЗРУШЬ РАМКИ"); 
            setH("your"), setN("mind") } else if ((progress > 0.7) && (!f)) {
              setM("МЕНЯЙ МИР");
              setH("the");
              setN("world")
            } else if (progress < 0.3) {
              setM("КТО?ТЫ"),setH("your"), setN("life")
            }
          },
          onLeaveBack: () => {setH(""), setN(""), setM(""), setC("change")},
        },
        ease: "power1.inOut",
      })});

      return (
        <>
            <Logo c={chng} h={hot} n={next}/>
            <div className="hig"></div>
            <What ms={m}/>
            <div className="hig"></div>
        </>
      );
}
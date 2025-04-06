'use client';

import What from "./ui/cmps/What";
import Logo from "./ui/cmps/Logo";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from 'next/image'
import zangetsu from '../public/ossan.jpg'
import { useState } from "react";

export default function Home() {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger)
  ScrollTrigger.config({ ignoreMobileResize: true });

  const [r, setR] = useState('И ЕСЛИ УЖ МЕНЯТЬ')
  const [hot, setH] = useState('');
  const [next, setN] = useState('');
  const [chng, setC] = useState('change');
  const [m, setM] = useState('');
  const [f, setF] = useState(false);

  useGSAP(() => {
    let am = ScrollTrigger.maxScroll(window)*(1/2)
    const tl = gsap.timeline();
    
    tl
      .to("#logo", {
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
            setM("РУШЬ РАМКИ"); 
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
      })
      .to("#part1", {scrollTrigger: {
        trigger: "#part1",
        start: "top center",
        end: "center center",
        pin: true,
        scrub: true,
        onLeave: () => {setC("CHNG")}
  
    },
        opacity: 1})
      .to("#part2", {scrollTrigger: {
        trigger: "#part2",
        start: "top center",
        end: "center center",
        pin: true,
        scrub: true,
        onEnter: () => {setR("二")}
  
    }})
  });
  return (
      <main className='main'>
            <Logo c={chng} h={hot} n={next}/>
            <div className="hig"></div>
            <What ms={m}/>
            <div className="hig"></div>
          <h1 id='part1'>ТВОЙ МИР - ТЫ</h1>
          <Image
              src={zangetsu}
              width={400}
              height={500}
              alt='Old Man zangetsu'
            />
          <h1>ОЧНИСЬ И ВЗЛЯНИ НА РЕАЛЬНОСТЬ</h1>
          <h1>ЭТОТ МИР</h1>
          <h1>ВНУТРИ</h1>
          <h1>ПОКОРИТЬ ЭТО НЕБО</h1>
          <h1>РАССЕЧЬ</h1>
          <h1>РАЗРУШИТЬ ЭТУ ЛОЖЬ</h1>
          <h1>ИБО Я СИЛЬНЕЙШИЙ ELDR AAAA </h1>
          <div className="hig"></div>
          <h1 id='part2'>ТЫ - МИР</h1>
          <p>СОВЕРШАЯ БОЛЬШИЕ И МАЛЫЕ ДЕЙСТВИЯ</p>
          <p>НЕПРИМЕННО ВЕРШИШЬ ИЗМЕНЕНИЯ ВОКРУГ</p>
          <h1>ПУТЬ БЕСЧИСЛЕННЫХ ИЗМЕНЕНИЙ, ПРИБЛИЖАЯСЬ К СОВЕРШЕНСТВУ</h1>
          <h1>И СЕРДЦА</h1>
          <p>ТЫСЯЧЕ СОЛНЦ</p>
          <h1>СЛОВНО БУСЫ НИТЬЮ</h1>
          <p>НЕПРИРИРЫВНО</p>
          <h1>СВЯЗАНЫ</h1>
          <h1>И ВМЕСТЕ ЭТО ОБРЕТАЕТ БОЛЬШУЮ СИЛУ</h1>
          <h1>ЧТО ИЗМЕНИТ ЦЕЛЫЙ МИР.</h1>
          <div className="hig"></div>
          <h1 id="rightnow" className="g">{r}</h1>
      </main>
  );
};

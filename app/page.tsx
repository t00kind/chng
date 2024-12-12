'use client';

import Akatski from "./ui/Dawn";
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

  useGSAP(() => {
    let am = ScrollTrigger.maxScroll(window)*(1/2)
    const tl = gsap.timeline();
    tl
    .to("#part1", {scrollTrigger: {
      trigger: "#part1",
      start: "top center",
      end: "center center",
      pin: true,
      scrub: true,

  },
      opacity: 1})
      .to("#part2", {scrollTrigger: {
        trigger: "#part2",
        start: "top center",
        end: "center center",
        pin: true,
        scrub: true,
  
    },
        opacity: 1})
        .to("#part2", {scrollTrigger: {
          trigger: "#part2",
          start: "top center",
          end: "center center",
          pin: true,
          scrub: true,
          onEnter: () => {setR("二")}
    
      }}); 
  });
  return (
      <main className='main'>
          <Akatski />
          <h1 id='part1'>ТВОЙ МИР - ТЫ</h1>
          <Image
              src={zangetsu}
              width={400}
              height={500}
              alt='Old Man zangetsu'
            />
          <h1>ВЕСЬ МИР</h1>
          <h1>ВСЯ ЖИЗНЬ</h1>
          <h1>СХОДЯТСЯ В ОДНУ ТОЧКУ</h1>
          <h1>ОЧНИСЬ И ВЗЛЯНИ НА СВОЮ ДУШУ!</h1>
          <h1>ОЩУТИ</h1>
          <h1>РАССЕКИ, НИЧТОЖНЫЕ ИЛЛЮЗИИ</h1>
          <h1>ПОВЕРЬ В СВОИ СИЛЫ</h1>
          <h1>НЕ ОСТАНАВЛИВАЙСЯ!</h1>
          <h1>ТОЛЬКО ТЫ</h1>
          <h1>ТОЛЬКО В ТВОИХ РУКАХ</h1>
          <h1>МЕЧТЫ, МЫСЛИ, ТЫ</h1>
          <h1>ВНУТРИ</h1>
          <div className="hig"></div>
          <h1 id='part2'>ТЫ - МИР</h1>
          <p>СОВЕРШАЯ БОЛЬШИЕ И МАЛЫЕ ДЕЙСТВИЯ</p>
          <p>НЕПРИМЕННО ВЕРШИШЬ ИЗМЕНЕНИЯ ВОКРУГ</p>
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

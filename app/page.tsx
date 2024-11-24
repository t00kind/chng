'use client';

import Akatski from "./ui/Dawn";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from 'next/image'
import zangetsu from '../public/ossan.jpg'

export default function Home() {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger)
  ScrollTrigger.config({ ignoreMobileResize: true });

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
      opacity: 1});
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
          <h1>УСЛЫШЬ СЕБЯ</h1>
          <h1>ОЩУТИ</h1>
          <h1>ВЗЛЯНИ НА ЭТОТ МИР! ВНУТРИ</h1>
          <h1>ЧТО ВОЛНУЕТ ТВОЮ ДУШУ</h1>
          <h1>ПОВЕРЬ В СВОИ СИЛЫ, РАССЕКИ ИЛЛЮЗИИ</h1>
          <h1>НЕ ОСТАНАВЛИВАЙСЯ!</h1>
          <h1>ИДИ, ПЫЛАЙ, МЕНЯЙ!</h1>
          <h1>СОЗДАВАЙ!</h1>
          <h1>ВЕЛИКИЕ ПЕРЕМЕНЫ</h1>
          <div className="hig"></div>
      </main>
  );
};

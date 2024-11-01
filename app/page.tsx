'use client';

import Akatski from "./ui/Dawn";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";


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
          <div className="hig"></div>
          <h1>CHANGE. RIGHT NOW. RIGHT NOW</h1>
          <h1 className='g'>DO IT NOW</h1>
          <div className="hig"></div>
      </main>
  );
};

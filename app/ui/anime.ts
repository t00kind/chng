import gsap from 'gsap';

export const animate = () => {
    const chng = document.getElementById("logo");

    if (chng) {
        const tl = gsap.timeline()
        tl.set(chng, {yPercent: 50})
    }
}
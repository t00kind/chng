'use client';
import localFont from 'next/font/local';
const b = localFont({src: "./trans.woff2"});
import { JetBrains_Mono } from "next/font/google";
const g = JetBrains_Mono({ weight: ['400'], subsets: ['cyrillic', 'latin']});

const Logo = ({c, h, n}: {c: any, h: any, n: any;}) => {
    let res;
    if (c === "ПЕРЕМЕНЫ ВНУТРИ") {
        res = g.className
    } else {
        res = b.className
    }

    return (
        <div id='logo'>
            <h1 id="mr_penis" className={res}>{c}<span className='bruh'>{h}{n}</span></h1>
        </div>
    )
}

export default Logo;
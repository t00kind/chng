'use client';
import localFont from 'next/font/local';
const b = localFont({src: "../fonts/trans.woff2"});
import { JetBrains_Mono } from "next/font/google";
const g = JetBrains_Mono({ weight: ['400'], subsets: ['cyrillic', 'latin']});
let kk = '3em'
const Logo = ({c, h, n}: {c: any, h: any, n: any;}) => {
    let res;
    if (c === "ПЕРЕМЕНЫ ВНУТРИ" || c === "CHNG") {
        res = g.className
        kk = '3.5em'
    } else {
        res = b.className
        kk = '3em'
    }

    return (
        <div id='logo'>
            <h1 id="mr_penis" style={{fontSize: kk}} className={res}>{c}<span className='bruh'>{h}{n}</span></h1>
        </div>
    )
}

export default Logo;
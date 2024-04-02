import localFont from 'next/font/local';
const b = localFont({src: "./trans.woff2"});

const Logo = ({c, h, n}: {c: any, h: any, n: any;}) => {

    return (
        <div id='logo'>
            <h1 id="mr_penis" className={b.className}>{c}<span className='bruh'>{h}{n}</span></h1>
        </div>
    )
}

export default Logo;
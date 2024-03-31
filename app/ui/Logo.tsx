import localFont from 'next/font/local';
const t = localFont({src: "./trans.woff2"});

const Logo = ({c, h}: {c: any, h: any;}) => {

    return (
        <div>
            <h1 className={t.className}>{c}</h1>
            <h2>{h}</h2>
        </div>
    )
}

export default Logo;
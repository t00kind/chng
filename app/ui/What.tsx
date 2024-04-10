'use client';

const What = ({ms, c}: {ms: any, c: any}) => {
    let res = "baseline"
    if (c) {
    res += ' ' + c}
    return (
        <div className="www">
            <h1 className={res} id="say">{ms}</h1>
        </div>
    );
}
export default What;
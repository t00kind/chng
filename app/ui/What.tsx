const What = ({ms, c}: {ms: any, c: any}) => {
    let res = "baseline"
    if (c) {
    res += ' ' + c}
    return (
        <h1 className={res} id="say">{ms}</h1>
    );
}
export default What;
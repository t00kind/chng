'use client';
import {ReactLenis} from "lenis/react";
// @ts-ignore
function SmoothScrolling({ children }) {
    // @ts-ignore
    return (
        <ReactLenis root options={{ lerp: 0.1, duration: 1 }}>
            {children}
        </ReactLenis>
    );
}

export default SmoothScrolling;
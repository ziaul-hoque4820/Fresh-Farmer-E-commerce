import { useEffect, useState } from "react";

function Counter({ end, suffix = "", duration = 1500 }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const startTime = performance.now();

        const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            const value = Math.floor(progress * end);
            setCount(value);

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [end, duration]);

    return (
        <span>
            {count}
            {suffix}
        </span>
    );
}

export default Counter;

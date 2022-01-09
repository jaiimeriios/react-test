import { useState, useEffect } from 'react';

const Time = () => {
    const initialTime = new Date();

    const [time, setTime] = useState(initialTime);

    useEffect(() => {
        const timer = setTimeout(() => {
            setTime(new Date());
        }, 1000);
        return () => {
            clearTimeout(timer);
        }
    }, [time]);

    return <p>⌚ {time.toLocaleString()}</p>;
};

export default Time;

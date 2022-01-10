import { useState, useEffect } from 'react';

const Time = () => {
    // const [time, setTime] = useState(new Date().toLocaleString());

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setTime(new Date());
    //     }, 1000);
    //     return () => {
    //         clearTimeout(timer);
    //     }
    // }, [time]);

    const [time, setTime] = useState(new Date().toLocaleString());

    useEffect(() => {
        const timer = setInterval(
            () => setTime(new Date().toLocaleString()),
            1000
        );
        return () => {
            clearInterval(timer);
        };
    }, []);

    return <p className='time'>⌚ {time}</p>;
};

export default Time;

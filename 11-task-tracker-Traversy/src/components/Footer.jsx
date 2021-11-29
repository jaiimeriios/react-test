import { useState, useEffect } from 'react';

function Footer() {
    const init = new Date();

    const [hora, setHora] = useState(init);

    useEffect(() => {
        const timer = setTimeout(() => {
            return setHora(new Date());
        }, 1000);

        return () => clearTimeout(timer);
    }, [hora]);

    return <footer>⌚ {hora.toLocaleTimeString()}</footer>;
}

export default Footer;

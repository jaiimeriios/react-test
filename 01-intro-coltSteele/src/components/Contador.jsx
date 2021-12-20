import { useState } from 'react';

function Contador({numero}) {
    const [contando, setContando] = useState(numero);

    const sumar = () => {
        setContando(contando + 1);
    };
    const restar = () => {
        setContando(contando - 1);
    };

    return (
        <div>
            <h3
                className={`${
                    contando === 0
                        ? 'text-primary'
                        : contando < 0
                        ? 'text-danger'
                        : 'text-info'
                }`}
            >
                {contando}
            </h3>

            <button onClick={sumar}>Sumar +</button>
            <button onClick={restar}>Restar -</button>
        </div>
    );
}

export default Contador;

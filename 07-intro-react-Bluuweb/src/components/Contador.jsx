import { useState } from 'react';

function Contador() {
    const [contando, setContando] = useState(0);

    const aumentar = () => {
        console.log(contando);
        setContando(contando + 1);
    };

    const decrementar = () => {
        console.log(contando);
        setContando(contando - 1);
    };

    return (
        <>
            <h3 className="mt-4 mb-3">
                contando
                <span
                    className={`ms-3 ${
                        contando === 0
                            ? 'text-white'
                            : contando < 0
                            ? 'text-danger'
                            : 'text-info'
                    }`}
                >
                    {contando}
                </span>
            </h3>

            <button className="btn btn-dark me-3" onClick={aumentar}>
                Aumentar +
            </button>
            <button className="btn btn-secondary" onClick={decrementar}>
                Decrementar -
            </button>
        </>
    );
}

export default Contador;

function Greeter({ name, age = 0, emocion = 1 }) {

    const handleClick = () => {
        console.log(name);
    };

    return (
        <div>
            <h2>
                hola {name} {'!'.repeat(emocion)}
            </h2>
            <h3>Age: {age}</h3>

            <button
                onClick={handleClick}>
                    HOLA - click
            </button>
            <button
                onDoubleClick={() => {
                    console.log(Number(age));
                }}
            >
                en Linea - dbClick
            </button>
        </div>
    );
}

export default Greeter;

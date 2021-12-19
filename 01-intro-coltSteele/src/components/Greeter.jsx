function Greeter({ name, age = 0, emocion = 1 }) {
    return (
        <div>
            <h2>
                hola {name} {'!'.repeat(emocion)}
            </h2>
            <h3>Age: {age}</h3>
        </div>
    );
}

export default Greeter;

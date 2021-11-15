function Frutas() {
    const frutas = ['🍌', '🍎', '🍇', '🍐'];

    return (
        <ul className="p-0 mt-4">
            {frutas.map((fruta, index) => (
                <li className="d-inline me-4" key={index}>
                    {index + 1}: {fruta}
                </li>
            ))}
        </ul>
    );
}

export default Frutas;

function Carros(props) {

    console.log(props)

    return (
        <ul className="p-0 mt-4">
            {props.carrosArr.map((carro, index) => (
                <li className="d-inline me-4" key={index}>
                    {index + 1}: {carro}
                </li>
            ))}
        </ul>
    );
}

export default Carros;

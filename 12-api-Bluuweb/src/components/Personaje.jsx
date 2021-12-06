const Personaje = ({ character = "" }) => {

    const { name, image, species, status } = character;

    return (
        <div className="card">
            <img
                src={image}
                alt={`imagen-${name}`}
                className="card-img-top"
            />
            <div className="card-body">
                <h5>{name}</h5>
                <p>{species}</p>
                <p>{status}</p>
            </div>
        </div>
    );
};

export default Personaje;
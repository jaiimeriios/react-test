function Personaje({ character = "" }) {

    const { name, image, species, status, origin } = character;

    return (
        <div className="card">
            <img
                src={image}
                alt={`imagen-${name}`}
            />
            <div className="card-body">
                <h5>{name}</h5>
                <p>{species} - {origin.name}</p>
                <p>{status}</p>
            </div>
        </div>
    );
};

export default Personaje;
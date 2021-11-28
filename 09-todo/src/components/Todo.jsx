function Todo(props) {
    console.log(props);

    const { nombre, descripcion, estado, prioridad } = props.todo;

    return (
        <li>
            <div>
                <div className="tags">
                    <span className={estado ? 'fin' : 'pen'}>
                        {estado ? 'Finalizado' : 'Pendiente'}
                    </span>
                    <span className={prioridad ? 'prioridad' : ''}>
                        {prioridad ? 'Prioritario!' : ''}
                    </span>
                </div>

                <h3>{nombre}</h3>
                <p>{descripcion}</p>
            </div>

            <div className="botones">
                <button className="editar">Editar</button>
                <button className="eliminar">Eliminar</button>
            </div>
        </li>
    );
}

export default Todo;

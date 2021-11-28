function Todo(props) {
    console.log(props);

    const { id, nombre, descripcion, estado, prioridad } = props.todoItem;

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
                <button
                    className="editar"
                    onClick={() => props.editarItem(id)}
                >
                    Editar</button>
                <button
                    className="eliminar"
                    onClick={() => props.eliminarItem(id)}
                >
                    Eliminar
                </button>
            </div>
        </li>
    );
}

export default Todo;

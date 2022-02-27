const JSONrowReadOnly = ({ user, handleEditClick, handleDeleteClick }) => {
    return (
        <tr key={user.id}>
            <td>{user.id}</td>
            <td>
                <p>{user.name}</p>
                <p>{user.username}</p>
                <p>{user.email}</p>
            </td>

            <td>{user.website}</td>
            <td>
                <p>{user.company.name}</p>
                <p>{user.company.catchPhrase}</p>
                <p>{user.company.bs}</p>
            </td>
            <td>
                <button
                    type="button"
                    onClick={(e) => handleEditClick(e, user)}
                >
                    Edit
                </button>
                <button
                    type="button"
                    onClick={() => handleDeleteClick(user.id)}
                >
                    Delete
                </button>
            </td>
        </tr>
    );
};

export default JSONrowReadOnly;

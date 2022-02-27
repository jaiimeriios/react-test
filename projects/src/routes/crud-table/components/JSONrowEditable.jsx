const JSONrowEditable = ({
    editUserData,
    handleEditFormChange,
    handleCancelClick,
}) => {
    return (
        <tr>
            <td>{editUserData.id}</td>
            <td>
                <input
                    required
                    type="text"
                    name="name"
                    placeholder="name"
                    value={editUserData.name}
                    onChange={handleEditFormChange}
                />
                <input
                    required
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={editUserData.username}
                    onChange={handleEditFormChange}
                />
            </td>

            <td>
                <input
                    required
                    type="text"
                    name="website"
                    placeholder="Website"
                    value={editUserData.website}
                    onChange={handleEditFormChange}
                />
            </td>
            <td>
                <input
                    required
                    type="text"
                    name="companyName"
                    placeholder="Company Name"
                    value={editUserData.companyName}
                    onChange={handleEditFormChange}
                />
                <br />
                <input
                    required
                    type="text"
                    name="companyCatchPhrase"
                    placeholder="Company Catch Phrase"
                    value={editUserData.companyCatchPhrase}
                    onChange={handleEditFormChange}
                />

                <br />
                <input
                    required
                    type="text"
                    name="companyBS"
                    placeholder="BS"
                    value={editUserData.companyBS}
                    onChange={handleEditFormChange}
                />
            </td>

            <td>
                <button type="submit">Save</button>
                <button type="button" onClick={handleCancelClick}>
                    Cancel
                </button>
            </td>
        </tr>
    );
};

export default JSONrowEditable;

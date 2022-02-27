const RowEditable = ({
    editFormData,
    handleEditFormChange,
    handleCancelClick,
}) => {
    return (
        <tr>
            <td>
                <input
                    type="text"
                    required
                    placeholder="Name"
                    name="fullName"
                    value={editFormData.fullName}
                    onChange={handleEditFormChange}
                />
            </td>
            <td>
                <input
                    type="text"
                    required
                    placeholder="Address"
                    name="address"
                    value={editFormData.address}
                    onChange={handleEditFormChange}
                />
            </td>
            <td>
                <input
                    type="text"
                    required
                    placeholder="Phone Number"
                    name="phoneNumber"
                    value={editFormData.phoneNumber}
                    onChange={handleEditFormChange}
                />
            </td>
            <td>
                <input
                    type="email"
                    required
                    placeholder="e@mail.com"
                    name="email"
                    value={editFormData.email}
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

export default RowEditable;

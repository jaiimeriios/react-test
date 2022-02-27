import { Forma } from '../CRUDstyled';

const AddContactForm = ({ handleAddFormSubmit, handleAddFormChange }) => {
    return (
        <Forma onSubmit={handleAddFormSubmit}>
            <input
                required
                type="text"
                name="fullName"
                placeholder="Name"
                onChange={handleAddFormChange}
            />
            <input
                required
                type="text"
                name="address"
                placeholder="Address"
                onChange={handleAddFormChange}
            />
            <input
                required
                type="text"
                name="phoneNumber"
                placeholder="Phone Number"
                onChange={handleAddFormChange}
            />
            <input
                required
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleAddFormChange}
            />

            <button type="submit">Add</button>
        </Forma>
    );
};

export default AddContactForm;

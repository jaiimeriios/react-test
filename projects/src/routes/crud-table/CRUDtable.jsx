import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Forma, Table } from './CRUDstyled';
import data from './data.json';
import { RiLinkM, RiContactsLine } from 'react-icons/ri';

const CRUDtable = () => {
    const [contacts, setContacts] = useState(data);

    // object keys are the same as form inputs 'name'
    const formData = {
        fullName: '',
        address: '',
        phoneNumber: '',
        email: '',
    };

    const [addFormData, setAddFormData] = useState(formData);

    const handleAddFormChange = (e) => {
        e.preventDefault();

        // get the input value with the 'name' attribure on each input
        const fieldName = e.target.getAttribute('name');
        const fielValue = e.target.value;

        // copy the existing form data
        const newFormData = { ...addFormData };

        // Update the object with the new values
        newFormData[fieldName] = fielValue

        // set into state
        setAddFormData(newFormData)
    };


    const handleAddFormSubmit = (e) => {
        e.preventDefault();
        console.log(e)
    }

    return (
        <div className="container">
            <h2>CRUD Table - static</h2>

            <NavLink className="navigate" to="/crud-table-json">
                <RiLinkM></RiLinkM>
                JSON
            </NavLink>

            <h3>
                Add Contact <RiContactsLine></RiContactsLine>
            </h3>

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
                <input required type="email" name="email" placeholder="Email" />

                <button type="submit">Add</button>
            </Forma>

            <Table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map((contact) => (
                        <tr key={contact.id}>
                            <td>{contact.fullName}</td>
                            <td>{contact.address}</td>
                            <td>{contact.phoneNumber}</td>
                            <td>{contact.email}</td>
                            <td>asdf</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default CRUDtable;

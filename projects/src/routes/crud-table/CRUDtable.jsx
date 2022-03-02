// https://www.youtube.com/watch?v=dYjdzpZv5yc

import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import data from './data.json';
import { Table } from './CRUDstyled';
import { RiLinkM, RiContactsLine } from 'react-icons/ri';

import AddContactForm from './components/AddContactForm';
import RowReadOnly from './components/RowReadOnly';
import RowEditable from './components/RowEditable';

const CRUDtable = () => {
    // base data form contacts from json file
    const [contacts, setContacts] = useState(data);

    // object keys are the same as form inputs 'name'
    const formData = {
        fullName: '',
        address: '',
        phoneNumber: '',
        email: '',
    };

    const [addFormData, setAddFormData] = useState(formData);

    // get input values to state
    const handleAddFormChange = (e) => {
        e.preventDefault();

        // get the input value with the 'name' attribure on each input
        const fieldName = e.target.getAttribute('name');
        const fielValue = e.target.value;

        // copy the existing form data
        const newFormData = { ...addFormData };

        // Update the object with the new values
        newFormData[fieldName] = fielValue;

        // set into state
        setAddFormData(newFormData);
    };

    // update json data and add new item
    const handleAddFormSubmit = (e) => {
        e.preventDefault();

        // creating new object
        const newContact = {
            id: uuidv4(),
            fullName: addFormData.fullName,
            address: addFormData.address,
            phoneNumber: addFormData.phoneNumber,
            email: addFormData.email,
        };

        // new contact array to avoid mutating state
        // copy current contacts (from json) and add new added contec
        const newContacts = [...contacts, newContact];

        // update contact state
        setContacts(newContacts);
    };

    // EDIT ROW
    const [editFormData, setEditFormData] = useState(formData);

    const [editContactId, setEditContactId] = useState(null);

    // toggles table row view to edit
    const handleEditClick = (e, contact) => {
        e.preventDefault();
        setEditContactId(contact.id);

        const formValues = {
            fullName: contact.fullName,
            address: contact.address,
            phoneNumber: contact.phoneNumber,
            email: contact.email,
        };

        setEditFormData(formValues);
    };

    // update new input values to state
    const handleEditFormChange = (e) => {
        e.preventDefault();

        // get the input value with the 'name' attribure on each input
        const fieldName = e.target.getAttribute('name');
        const fielValue = e.target.value;

        // copy the existing form data
        const newFormData = { ...editFormData };

        // Update the object with the new values
        newFormData[fieldName] = fielValue;

        // set into state
        setEditFormData(newFormData);
    };

    // submit edited row
    const handleEditFormSubmit = (e) => {
        e.preventDefault();

        const editedContact = {
            id: editContactId,
            fullName: editFormData.fullName,
            address: editFormData.address,
            phoneNumber: editFormData.phoneNumber,
            email: editFormData.email,
        };

        const newContacts = [...contacts];
        const index = contacts.findIndex(
            (contact) => (contact.id = editContactId)
        );

        newContacts[index] = editedContact;

        setContacts(newContacts);
        setEditContactId(null);
    };

    // cancel editing
    const handleCancelClick = () => {
        setEditContactId(null);
    };

    // delete row
    const handleDeleteClick = (contactId) => {
        // new copy of the current contacts data
        const newContacts = [...contacts];

        // get the index
        const index = contacts.findIndex((contact) => {
            return contact.id === contactId;
        });

        newContacts.splice(index, 1);

        setContacts(newContacts);
    };

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

            <AddContactForm
                handleAddFormSubmit={handleAddFormSubmit}
                handleAddFormChange={handleAddFormChange}
            />

            <form onSubmit={handleEditFormSubmit}>
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
                            <>
                                {editContactId === contact.id ? (
                                    <RowEditable
                                        key={contact.id + 1}
                                        editFormData={editFormData}
                                        handleEditFormChange={
                                            handleEditFormChange
                                        }
                                        handleCancelClick={handleCancelClick}
                                    />
                                ) : (
                                    <RowReadOnly
                                        key={contact.id - 1}
                                        contact={contact}
                                        handleEditClick={handleEditClick}
                                        handleDeleteClick={handleDeleteClick}
                                    />
                                )}
                            </>
                        ))}
                    </tbody>
                </Table>
            </form>
        </div>
    );
};

export default CRUDtable;

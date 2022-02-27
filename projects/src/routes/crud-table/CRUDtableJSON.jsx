import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { Table } from './CRUDstyled';
import { RiLinkM, RiContactsLine } from 'react-icons/ri';
import JSONaddContactForm from './components/JSONaddContactForm';
import JSONrowReadOnly from './components/JSONrowReadOnly';
import JSONrowEditable from './components/JSONrowEditable';

const CRUDtableJSON = () => {
    const [users, setUsers] = useState();

    const getApiData = async () => {
        const response = await fetch(
            'https://jsonplaceholder.typicode.com/users'
        );
        const data = await response.json();
        setUsers(data);

        // lo mistmo que arriba sin await
        // fetch('https://jsonplaceholder.typicode.com/users')
        //     .then((data) => data.json())
        //     .then((data) => {
        //         console.log(data);
        //         setUsers(data);
        //     });
    };

    useEffect(() => {
        getApiData();
    }, []);

    // object keys are the same from 'users' on API
    const formData = {
        id: '',
        name: '',
        username: '',
        website: '',
        company: {
            name: '',
            catchPhrase: '',
            bs: '',
        },
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
        newFormData[fieldName] = fielValue;

        // set into state
        setAddFormData(newFormData);
    };

    const handleAddFormSubmit = (e) => {
        e.preventDefault();

        // creating new object
        // object keys are the same as initial data and values are the same from input attribute 'name'
        // this are taken from 'state' on updated values
        const newUser = {
            id: uuidv4(),
            name: addFormData.name,
            username: addFormData.username,
            website: addFormData.website,
            company: {
                name: addFormData.companyName,
                catchPhrase: addFormData.companyCatchPhrase,
                bs: addFormData.companyBS,
            },
        };

        // new contact array to avoid mutating state
        // copy current contacts (from json) and add new added contec
        const newUsers = [...users, newUser];

        // update contact state
        setUsers(newUsers);
    };

    // EDIT ROW
    const [editUserData, setEditUserData] = useState(formData);
    const [editUserId, setEditUserId] = useState(null);

    // toggles table row view to edit
    const handleEditClick = (e, user) => {
        e.preventDefault();
        setEditUserId(user.id);

        const formValues = {
            name: user.name,
            username: user.username,
            website: user.website,
            companyName: user.companyName,
            companyCatchPhrase: user.companyCatchPhrase,
            companyBS: user.companyBS,
        
        };

        setEditUserData(formValues);
    };

    // update new input values to state
    const handleEditFormChange = (e) => {
        e.preventDefault();

        // get the input value with the 'name' attribure on each input
        const fieldName = e.target.getAttribute('name');
        const fielValue = e.target.value;

        // copy the existing form data
        const newFormData = { ...editUserData };

        // Update the object with the new values
        newFormData[fieldName] = fielValue;

        // set into state
        setEditUserData(newFormData);
    };

    // submit edited row
    const handleEditFormSubmit = (e) => {
        e.preventDefault();

        const editedUsers = {
            name: editUserData.name,
            username: editUserData.username,
            website: editUserData.website,
            companyName: editUserData.companyName,
            companyCatchPhrase: editUserData.companyCatchPhrase,
            companyBS: editUserData.companyBS,
            // company: {
            //     name: editUserData.companyName,
            //     catchPhrase: editUserData.companyCatchPhrase,
            //     bs: editUserData.companyBS,
            // },
        };

        const newUsers = [...users];
        const index = users.findIndex((user) => (user.id = editUserId));

        newUsers[index] = editedUsers;

        setUsers(newUsers);
        setEditUserId(null);
    };

    // cancel editing
    const handleCancelClick = () => {
        setEditUserId(null);
    };

    // delete row
    const handleDeleteClick = (userId) => {
        // new copy of the current contacts data
        const newUsers = [...users];

        // get the index
        const index = users.findIndex((user) => {
            return user.id === userId;
        });

        newUsers.splice(index, 1);

        setUsers(newUsers);
    };

    return (
        <div className="container">
            <h2>CRUD Table - JSON</h2>

            <NavLink className="navigate" to="/crud-table">
                <RiLinkM></RiLinkM>
                STATIC
            </NavLink>

            <h3>
                Add Contact <RiContactsLine></RiContactsLine>
            </h3>

            <JSONaddContactForm
                handleAddFormSubmit={handleAddFormSubmit}
                handleAddFormChange={handleAddFormChange}
            />

            <form onSubmit={handleEditFormSubmit}>
                <Table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Username</th>
                            <th>Website</th>
                            <th>Company</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users &&
                            users.map((user) => (
                                <>
                                    {editUserId === user.id ? (
                                        <JSONrowEditable
                                            key={user.id + 1}
                                            editUserData={editUserData}
                                            handleEditFormChange={
                                                handleEditFormChange
                                            }
                                            handleCancelClick={
                                                handleCancelClick
                                            }
                                        />
                                    ) : (
                                        <JSONrowReadOnly
                                            key={user.id - 1}
                                            user={user}
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

export default CRUDtableJSON;

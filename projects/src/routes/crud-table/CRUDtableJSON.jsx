import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import { Forma, Table } from './CRUDstyled';
import { RiLinkM, RiContactsLine } from 'react-icons/ri';

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
        // object keys are the same as initial data and values are the same from input 'name'
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

            <Forma onSubmit={handleAddFormSubmit}>
                <input
                    required
                    type="text"
                    name="name"
                    placeholder="name"
                    onChange={handleAddFormChange}
                />
                <input
                    required
                    type="text"
                    name="username"
                    placeholder="Username"
                    onChange={handleAddFormChange}
                />
                <input
                    required
                    type="text"
                    name="website"
                    placeholder="Website"
                    onChange={handleAddFormChange}
                />
                <input
                    required
                    type="text"
                    name="companyName"
                    placeholder="Company Name"
                    onChange={handleAddFormChange}
                />
                <input
                    required
                    type="text"
                    name="companyCatchPhrase"
                    placeholder="Company Catch Phrase"
                    onChange={handleAddFormChange}
                />
                <input
                    required
                    type="text"
                    name="companyBS"
                    placeholder="BS"
                    onChange={handleAddFormChange}
                />

                <button type="submit">Add</button>
            </Forma>

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
                            </tr>
                        ))}
                </tbody>
            </Table>
        </div>
    );
};

export default CRUDtableJSON;

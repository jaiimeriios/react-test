import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Table } from './CRUDstyled';
import { RiLinkM } from 'react-icons/ri';

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

    return (
        <div className="container">
            <h2>CRUD Table - JSON</h2>

            <NavLink className="navigate" to="/crud-table">
                <RiLinkM></RiLinkM>
                STATIC
            </NavLink>

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
                                    {user.username}
                                    <br />
                                    {user.email}
                                </td>

                                <td>{user.website}</td>
                                <td>
                                    {user.company.name}
                                    {user.company.catchPhrase}
                                    {user.company.bs}
                                </td>
                            </tr>
                        ))}
                </tbody>
            </Table>
        </div>
    );
};

export default CRUDtableJSON;

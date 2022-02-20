import { AiFillDelete } from 'react-icons/ai';

import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ExpenseItem = ({ id, name, description, cost }) => {
    const { dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: id,
        });
    };

    return (
        <tr>
            <td className="name">
                <h5>{name}</h5>
                <p>{description}</p>
            </td>
            <td className="cost">
                <span>${cost}</span>
            </td>
            <td className="delete">
                <AiFillDelete
                    size="1rem"
                    onClick={handleDeleteExpense}
                ></AiFillDelete>
            </td>
        </tr>
    );
};

export default ExpenseItem;

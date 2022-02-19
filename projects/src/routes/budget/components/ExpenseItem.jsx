import { TiDelete } from 'react-icons/ti';

import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ExpenseItem = ({ id, name, cost }) => {
    const { dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: id,
        });
    };

    return (
        <li>
            {name}
            <span>${cost}</span>
            <TiDelete size="1.5rem" onClick={handleDeleteExpense}></TiDelete>
        </li>
    );
};

export default ExpenseItem;

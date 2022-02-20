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
        <tr>
            <td className='name'>{name}</td>
            <td className='cost'>
                <span>${cost}</span>
            </td>
            <td className='delete'>
                <TiDelete
                    size="1.5rem"
                    onClick={handleDeleteExpense}
                ></TiDelete>
            </td>
        </tr>
    );
};

export default ExpenseItem;

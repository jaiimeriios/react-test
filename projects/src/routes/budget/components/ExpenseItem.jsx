import { TiDelete } from 'react-icons/ti';

const ExpenseItem = ({ id, name, cost }) => {
    return (
        <li>
            {name}
            <span>${cost}</span>
            <TiDelete size="1.5rem"></TiDelete>
        </li>
    );
};

export default ExpenseItem;

import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import ExpenseItem from './ExpenseItem';

const ExpenseList = () => {
    const { expenses } = useContext(AppContext);

    return (
        <ul>
            {expenses.map((expense) => (
                <ExpenseItem
                    key={expense.id}
                    id={expense.id}
                    name={expense.name}
                    cost={expense.cost}
                />
            ))}
        </ul>
    );
};

export default ExpenseList;

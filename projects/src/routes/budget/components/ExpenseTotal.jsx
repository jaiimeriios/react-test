import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ExpenseTotal = () => {
    const { expenses, budget } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const alertType =
        totalExpenses > budget
            ? 'danger'
            : totalExpenses < budget
            ? 'success'
            : '';

    return (
        <div
            className={`d-flex ${alertType}`}
        >
            <h3>
                ExpenseTotal <span>${totalExpenses}</span>
            </h3>
        </div>
    );
};

export default ExpenseTotal;

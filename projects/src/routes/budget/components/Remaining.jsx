import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Remaining = () => {
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
        <div className={`d-flex ${alertType}`}>
            <h3>
                Remaining <span>${budget - totalExpenses}</span>
            </h3>
        </div>
    );
};

export default Remaining;

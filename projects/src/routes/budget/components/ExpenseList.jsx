import { useContext } from 'react';
import { Table } from '../BudgetStyled';
import { AppContext } from '../context/AppContext';
import ExpenseItem from './ExpenseItem';

const ExpenseList = () => {
    const { expenses } = useContext(AppContext);

    console.log(expenses);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);

    return (
        <Table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Cost</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {expenses.map((expense) => (
                    <ExpenseItem
                        key={expense.id}
                        id={expense.id}
                        name={expense.name}
                        cost={expense.cost}
                    />
                ))}
            </tbody>
            <tfoot>
                <tr>
                    <th></th>
                    <th className='cost'>${totalExpenses}</th>
                    <th></th>
                </tr>
            </tfoot>
        </Table>
    );
};

export default ExpenseList;

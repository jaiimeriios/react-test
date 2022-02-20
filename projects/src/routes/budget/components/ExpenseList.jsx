import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Table } from '../BudgetStyled';
import ExpenseItem from './ExpenseItem';

const ExpenseList = () => {

    const { expenses } = useContext(AppContext);
    
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

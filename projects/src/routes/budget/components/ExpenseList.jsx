import ExpenseItem from './ExpenseItem';

const ExpenseList = () => {
    const expenses = [
        {
            id: 1,
            name: 'Shopping',
            cost: 50,
        },
        {
            id: 2,
            name: 'Holiday',
            cost: 300,
        },
        {
            id: 3,
            name: 'Trasportation',
            cost: 100,
        },
        {
            id: 4,
            name: 'Fuel',
            cost: 50,
        },
        {
            id: 5,
            name: 'Extras',
            cost: 200,
        },
    ];

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

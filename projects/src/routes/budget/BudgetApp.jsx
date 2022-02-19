import { AppProvider } from './context/AppContext';

import Budget from './components/Budget';
import { BudgetsRow } from './BudgetStyled';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AddExpenseForm from './components/AddExpenseForm';

const BudgetApp = () => {
    return (
        <AppProvider>
            <div className="container">
                <h2>Budget Planner</h2>

                <BudgetsRow>
                    <div className="budgets-section">
                        <Budget />
                    </div>
                    <div className="budgets-section">
                        <Remaining />
                    </div>
                    <div className="budgets-section">
                        <ExpenseTotal />
                    </div>
                </BudgetsRow>

                <h2>Expenses</h2>
                <ExpenseList />

                <h2>Add Expense</h2>
                <AddExpenseForm />
            </div>
        </AppProvider>
    );
};

export default BudgetApp;

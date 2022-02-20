import { AppProvider } from './context/AppContext';

import Budget from './components/Budget';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AddExpenseForm from './components/AddExpenseForm';
import { BudgetsRow, Heading4 } from './BudgetStyled';

const BudgetApp = () => {
    return (
        <AppProvider>
            <div className="container">
                <Heading4>Budget Planner</Heading4>

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

                <Heading4>Add Expense</Heading4>
                <AddExpenseForm />

                <Heading4>Expenses</Heading4>
                <ExpenseList />
            </div>
        </AppProvider>
    );
};

export default BudgetApp;

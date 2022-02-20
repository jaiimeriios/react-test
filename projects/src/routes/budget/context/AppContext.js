import { createContext, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const AppContext = createContext();

export const AppProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (
        <AppContext.Provider
            value={{
                budget: state.budget,                              // set state value from initialState
                expenses: state.expenses,                          // set state value from initialState
                dispatch,                                          // function to handle state updates
            }}
        >
            {props.children}                                       {/* Main Content (BudgetApp.jsx) */}
        </AppContext.Provider>
    );
};


const AppReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return {
                ...state,                                          // copy of current state
                expenses: [...state.expenses, action.payload],     // overwrite current with copy
            };                                                     // of current and what's added

        case 'DELETE_EXPENSE':
            return {
                ...state,                                          // copy of current state
                expenses: state.expenses.filter(                   // return new array without the
                    (expense) => expense.id !== action.payload     // selected item
                ),
            };

        case 'UPDATE_BUDGET':
            return {
                ...state,                                          // copy of current state
                budget: (state.budget = action.payload),           // update budget value with 
            };                                                     // new value on input save

        default:
            return state;
    }
};

const initialState = {
    budget: 3000,
    expenses: [
        {
            id: uuidv4(),
            name: 'Renta',
            description: 'Pagar Renta',
            cost: 1700,
        },
        {
            id: uuidv4(),
            name: 'Utilidades',
            description: 'Agua, Luz, Internet, Telefono',
            cost: 300,
        },
        {
            id: uuidv4(),
            name: 'Mandado',
            description: 'Comida',
            cost: 400,
        },
    ],
};
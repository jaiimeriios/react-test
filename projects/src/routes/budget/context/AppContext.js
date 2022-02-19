import { createContext, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

const AppReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return {
                ...state,                                       // copy of current state
                expenses: [...state.expenses, action.payload],  // overwrite current with copy
            };                                                  // of current and what's added

        case 'DELETE_EXPENSE':
            return {
                ...state,                                       // copy of current state
                expenses: state.expenses.filter(                // return new array without the 
                    (expense) => expense.id !== action.payload   // selected item
                ),
            };

        case 'SET_BUDGET':
            return {
                ...state,
                budget: state.budget = action.payload
            };

        default:
            return state;
    }
};

const initialState = {
    budget: 3000,
    expenses: [
        {
            id: uuidv4(),
            name: 'Shopping',
            cost: 50,
        },
        {
            id: uuidv4(),
            name: 'Holiday',
            cost: 300,
        },
        {
            id: uuidv4(),
            name: 'Car',
            cost: 500,
        },
    ],
};

export const AppContext = createContext();

export const AppProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (
        <AppContext.Provider
            value={{
                budget: state.budget,
                expenses: state.expenses,
                dispatch,
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
};

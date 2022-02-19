import { createContext, useReducer } from 'react';

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
                    (expense) => expense.id != action.payload   // selected item
                ),
            };
        default:
            return state;
    }
};

const initialState = {
    budget: 3000,
    expenses: [
        {
            id: 10,
            name: 'Shopping',
            cost: 50,
        },
        {
            id: 20,
            name: 'Holiday',
            cost: 300,
        },
        {
            id: 30,
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

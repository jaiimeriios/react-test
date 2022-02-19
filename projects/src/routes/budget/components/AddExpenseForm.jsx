import { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { v4 as uuidv4 } from 'uuid';

const AddExpenseForm = () => {
    const { dispatch } = useContext(AppContext);

    const [name, setName] = useState('');
    const [cost, setCost] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        const expense = {
            id: uuidv4(),
            name: name,
            cost: parseInt(cost),
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense,
        });
    };

    return (
        <form onSubmit={onSubmit}>
            <div>
                <label htmlFor="name">Name</label>
                <input
                    required
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                ></input>
            </div>
            <div>
                <label htmlFor="cost">Cost</label>
                <input
                    required
                    id="cost"
                    type="text"
                    value={cost}
                    onChange={(e) => setCost(e.target.value)}
                ></input>
            </div>
            <div>
                <button type="submit">Add</button>
            </div>
        </form>
    );
};

export default AddExpenseForm;

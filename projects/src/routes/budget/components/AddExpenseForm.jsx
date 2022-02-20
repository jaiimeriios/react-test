import { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { v4 as uuidv4 } from 'uuid';
import { Forma } from '../BudgetStyled';

const AddExpenseForm = () => {
    const { dispatch } = useContext(AppContext);

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [cost, setCost] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        const expense = {
            id: uuidv4(),
            name: name,
            description: description,
            cost: parseInt(cost),
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense,
        });

        setName('');
        setDescription('');
        setCost('');
    };

    return (
        <Forma onSubmit={onSubmit}>
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
                <label htmlFor="description">Description</label>
                <input
                    id="description"
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                ></input>
            </div>
            <div>
                <label htmlFor="cost">Cost</label>
                <input
                    required
                    id="cost"
                    type="number"
                    value={cost}
                    onChange={(e) => setCost(e.target.value)}
                ></input>
            </div>
            <div>
                <button type="submit">Add</button>
            </div>
        </Forma>
    );
};

export default AddExpenseForm;

import { useState } from 'react';
import { FiSave } from 'react-icons/fi';

const BudgetEdit = ({ budget, handleSaveClick }) => {
    const [value, setValue] = useState(budget);
    return (
        <>
            <h3>Update Budget:</h3>
            <input
                required
                type="number"
                id="name"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <button type="button" onClick={() => handleSaveClick(value)}>
                <FiSave size="1rem"></FiSave>
                Save
            </button>
        </>
    );
};

export default BudgetEdit;

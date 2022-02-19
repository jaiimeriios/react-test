import { useState } from 'react';

const BudgetEdit = ({ budget, handleSaveClick }) => {
    const [value, setValue] = useState(budget);
    return (
        <>
            <input
                required
                type="number"
                id="name"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <button type="button" onClick={() => handleSaveClick(value)}>
                Save
            </button>
        </>
    );
};

export default BudgetEdit;

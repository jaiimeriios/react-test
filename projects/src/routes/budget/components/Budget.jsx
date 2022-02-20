import { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import BudgetEdit from './BudgetEdit';
import BudgetView from './BudgetView';

const Budget = () => {
    const { budget, dispatch } = useContext(AppContext);
    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = (value) => {
        dispatch({
            type: 'UPDATE_BUDGET',
            payload: value,
        });
        setIsEditing(false);
    };

    return (
        <div className="d-flex">
            {isEditing ? (
                <BudgetEdit handleSaveClick={handleSaveClick} budget={budget} />
            ) : (
                <BudgetView handleEditClick={handleEditClick} budget={budget} />
            )}
        </div>
    );
};

export default Budget;

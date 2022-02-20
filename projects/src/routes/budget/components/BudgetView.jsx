import { FiEdit } from 'react-icons/fi';

const BudgetView = ({ budget, handleEditClick }) => {
    return (
        <>
            <h3>Budget: ${budget}</h3>
            <button type="button" onClick={handleEditClick}>
                <FiEdit size="1rem"></FiEdit>
                Edit
            </button>
        </>
    );
};

export default BudgetView;

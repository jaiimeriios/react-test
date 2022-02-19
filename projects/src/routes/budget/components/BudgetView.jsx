const BudgetView = ({ budget, handleEditClick }) => {
    return (
        <>
            <span>Budget: ${budget}</span>
            <button type="button" onClick={handleEditClick}>
                Edit
            </button>
        </>
    );
};

export default BudgetView;

const AddExpenseForm = () => {
    return (
        <form>
            <div>
                <label for="name">Name</label>
                <input
                    required
                    id="name"
                    type="text">
                </input>
            </div>
            <div>
                <label for="cost">Cost</label>
                <input
                    required
                    id="cost"
                    type="number">
                </input>
            </div>
            <div>
                <button type="submit">Add</button>
            </div>
        </form>
    );
};

export default AddExpenseForm;

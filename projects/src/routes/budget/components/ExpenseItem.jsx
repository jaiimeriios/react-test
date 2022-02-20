import { AiFillDelete } from 'react-icons/ai';
import { FiSave } from 'react-icons/fi';

import { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const ExpenseItem = ({ id }) => {
    const { expenses, dispatch } = useContext(AppContext); // Get app contex
    const current = expenses.filter((expense) => expense.id == id); // array of filtered items

    const [nameValue, setNameValue] = useState(current[0].name); // get values loaded from state
    const [descriptionValue, setDescriptionValue] = useState(
        current[0].description
    );
    const [costValue, setCostValue] = useState(current[0].cost);

    const [editName, setEditName] = useState(false); // Toggle states to edit values
    const [editDescription, setEditDescription] = useState(false);
    const [editCost, setEditCost] = useState(false);

    const handleEditName = () => {
        setEditName(true);
    };
    const handleEditDescription = () => {
        setEditDescription(true);
    };
    const handleEditCost = () => {
        setEditCost(true);
    };

    const handleSaveName = (value) => {
        dispatch({
            type: 'UPDATE_NAME',
            payload: value,
        });
        setEditName(false);
    };
    const handleSaveDescription = (value) => {
        dispatch({
            type: 'UPDATE_DESCRIPTION',
            payload: value,
        });
        setEditDescription(false);
    };
    const handleSaveCost = (value) => {
        dispatch({
            type: 'UPDATE_COST',
            payload: parseInt(value),
        });
        setEditCost(false);
    };

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: id,
        });
    };

    return (
        <tr>
            <td className="name">
                {editName ? (
                    <>
                        <input
                            required
                            type="text"
                            id="edit-name"
                            value={nameValue}
                            onChange={(e) => setNameValue(e.target.value)}
                        />
                        <button
                            type="button"
                            onClick={() => handleSaveName(nameValue)}
                        >
                            <FiSave size="1rem"></FiSave>
                            Save
                        </button>
                    </>
                ) : (
                    <h5 onClick={handleEditName}>{nameValue}</h5>
                )}

                {editDescription ? (
                    <>
                        <input
                            required
                            type="text"
                            id="edit-description"
                            value={descriptionValue}
                            onChange={(e) =>
                                setDescriptionValue(e.target.value)
                            }
                        />
                        <button
                            type="button"
                            onClick={() =>
                                handleSaveDescription(descriptionValue)
                            }
                        >
                            <FiSave size="1rem"></FiSave>
                            Save
                        </button>
                    </>
                ) : (
                    <p onClick={handleEditDescription}>{descriptionValue}</p>
                )}
            </td>
            <td className="cost">
                {editCost ? (
                    <>
                        <input
                            required
                            type="number"
                            id="edit-cost"
                            value={costValue}
                            onChange={(e) => setCostValue(e.target.value)}
                        />
                        <button
                            type="button"
                            onClick={() => handleSaveCost(costValue)}
                        >
                            <FiSave size="1rem"></FiSave>
                            Save
                        </button>
                    </>
                ) : (
                    <p onClick={handleEditCost}>{costValue}</p>
                )}
            </td>
            <td className="delete">
                <AiFillDelete
                    size="1rem"
                    onClick={handleDeleteExpense}
                ></AiFillDelete>
            </td>
        </tr>
    );
};

export default ExpenseItem;

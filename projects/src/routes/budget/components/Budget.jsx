import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget } = useContext(AppContext);

    return (
        <div className="d-flex">
            <h3>
                Budget <span>${budget}</span>
            </h3>
            <button>Edit</button>
        </div>
    );
};

export default Budget;

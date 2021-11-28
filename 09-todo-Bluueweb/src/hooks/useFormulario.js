import { useState } from 'react';

export const useFormulario = (initial = {}) => {

    const [inputs, setInputs] = useState(initial);

    const handleChange = (e) => {
        const { name, value, checked, type } = e.target;
        setInputs((old) => ({
            ...old,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const reset = () => {
        setInputs(initial);
    };

    return [inputs, handleChange, reset];
};

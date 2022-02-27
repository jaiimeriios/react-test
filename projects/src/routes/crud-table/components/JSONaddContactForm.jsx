import { Forma } from '../CRUDstyled';

const JSONaddContactForm = ({ handleAddFormSubmit, handleAddFormChange }) => {
    return (
        <Forma onSubmit={handleAddFormSubmit}>
            <input
                required
                type="text"
                name="name"
                placeholder="name"
                onChange={handleAddFormChange}
            />
            <input
                required
                type="text"
                name="username"
                placeholder="Username"
                onChange={handleAddFormChange}
            />
            <input
                required
                type="text"
                name="website"
                placeholder="Website"
                onChange={handleAddFormChange}
            />
            <input
                required
                type="text"
                name="companyName"
                placeholder="Company Name"
                onChange={handleAddFormChange}
            />
            <input
                required
                type="text"
                name="companyCatchPhrase"
                placeholder="Company Catch Phrase"
                onChange={handleAddFormChange}
            />
            <input
                required
                type="text"
                name="companyBS"
                placeholder="BS"
                onChange={handleAddFormChange}
            />

            <button type="submit">Add</button>
        </Forma>
    );
};

export default JSONaddContactForm;

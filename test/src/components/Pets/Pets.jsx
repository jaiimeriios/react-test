import Button from '../Button';
import petsData from './petsData.json';

const Pets = () => {
    console.log(petsData);

    return (
        <>
            <AddPetForm />
            {petsData.map((pet) => (
                <Pet key={pet.id} pet={pet} />
            ))}
        </>
    );
};

const Pet = ({ pet: { name, species, age } }) => {
    return (
        <p>
            {name} is a {species} and is {age} years old
        </p>
    );
};




const AddPetForm = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handle = () => {
        console.log('click')
    }

    return (
        <form className='pet-form' onSubmit={handleSubmit}>
            <fieldset>
                <legend>Add New Pet</legend>
                <input placeholder="Name" />
                <input placeholder="Species" />
                <input placeholder="Age" />

                <Button btnText="Add Pet" onClick={handle} />
            </fieldset>
        </form>
    );
}

export default Pets;

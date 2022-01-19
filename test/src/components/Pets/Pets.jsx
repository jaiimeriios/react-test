import { useState } from 'react/cjs/react.development';
import Button from '../Button';
import petsData from './petsData.json';

const Pets = () => {

    const [pets, setPets] = useState(petsData);

    const addPet = (newPet) => {
        setPets((old) => {
            return [...old, newPet]
        });
    };

    return (
        <>
            <AddPetForm pets={pets} addPet={addPet} />

            <div className="pets-section">
                {pets.map((pet) => (
                    <Pet setPets={setPets} id={pet.id} key={pet.id} pet={pet} />
                ))}
            </div>
        </>
    );
};




const Pet = ({ pet: { name, species, age }, setPets, id }) => {
    const handleDelete = () => {
        setPets((prev) => prev.filter((pet) => pet.id !== id));
    };
    return (
        <p>
            {name} is a {species} and is {age} year{age > 1 && 's'} old.
            <button onClick={handleDelete}>delete</button>
        </p>
    );
};




const AddPetForm = ({ pets, addPet }) => {
  
    const [name, setName] = useState('');
    const [species, setSpecies] = useState('');
    const [age, setAge] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (name === '' || species === '' || age === '') {
            return;
        } else {

            addPet({
                id: pets.length + 1,
                name: name,
                species: species,
                age: age
            });

            setName('');
            setSpecies('');
            setAge('');
        }
    };

    return (
        <form className="pet-form" onSubmit={handleSubmit}>
            <fieldset>
                <legend>Add New Pet</legend>
                <input
                    type="text"
                    value={name}
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                />
                <input
                    type="text"
                    value={species}
                    name="species"
                    onChange={(e) => setSpecies(e.target.value)}
                    placeholder="species"
                />
                <input
                    type="number"
                    value={age}
                    name="age"
                    onChange={(e) => setAge(e.target.value)}
                    placeholder="age in years"
                />

                <Button btnText="Add Pet" clickEvent={null} />
            </fieldset>
        </form>
    );
};

export default Pets;

import React from 'react';
import petsData from './petsData.json';

const Pets = () => {
    console.log(petsData);

    return (
        <>
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

export default Pets;

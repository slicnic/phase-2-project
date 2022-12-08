import React from 'react'
import AnimalCard from './AnimalCard';

function AvailableAnimals({ animals, onAddAnimalToAdoption, onDelete }) {

    const animal = animals.map(item => {
        return <AnimalCard key={item.id}
            item={item}
            onCardClicked={onAddAnimalToAdoption}
            onDelete={onDelete} />
    });

    return (
        <div id="current-animals">
            <h2>Current Animals</h2>
            <div>
                {animal}
            </div>
        </div>
    );
}

export default AvailableAnimals;
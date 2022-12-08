import React from 'react'
import AnimalCard from './AnimalCard';

function AdoptedAnimals({ animals, onRemoveAnimalFromAdopted, onDelete }) {
    const adoptedAnimals = animals.map(item => {
        return <AnimalCard key={item.id}
            item={item}
            onCardClicked={onRemoveAnimalFromAdopted}
            onDelete={onDelete} />
    });

    return (
        <div id="adopted-container">
            <h2>Adopted!</h2>
            <div>
                {adoptedAnimals}
            </div>
        </div>
    );
}

export default AdoptedAnimals;
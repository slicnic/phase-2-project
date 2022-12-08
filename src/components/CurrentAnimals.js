import React, { useEffect, useState } from "react";
import AvailableAnimals from "./AvailableAnimals";
import AdoptedAnimals from "./AdoptedAnimals"

function CurrentAnimals() {

    const [animals, setAnimals] = useState([]);
    const [adoptedAnimals, setAdoptedAnimals] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/animals")
            .then(response => response.json())
            .then(animalJson => {
                console.log(animalJson);
                setAnimals(animalJson);
            });
    }, []);

    function addNewAnimal(animal) {
        // Make fetch to POST to backend
        fetch("http://localhost:8000/animals", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(animal)
        });

        // Fetch all animals again
        fetch("http://localhost:8000/animals")
            .then(response => response.json())
            .then(animalJson => {
                // addNewAnimal(animalJson);
            });
    }


    function handleAddAnimalToAdopted(item) {
        const adoptedAnimalIndex = adoptedAnimals.findIndex(inventoryItem => inventoryItem.id === item.id);
        if (adoptedAnimalIndex < 0) {
            setAdoptedAnimals([...adoptedAnimals, item]);
        } else {
            console.log(item.name + " already in adoption list!");
        }
    }

    function handleRemoveAnimalFromAdopted(item) {
        removeAnimalfromStateArray(item, adoptedAnimals, setAdoptedAnimals);
    }

    function removeAnimalfromStateArray(animalToRemove, stateArray, setStateFunction) {
        const reorderAnimalIndex = stateArray.findIndex(item => item.id === animalToRemove.id);
        if (reorderAnimalIndex >= 0) {
            const arrayCopy = [...stateArray];
            arrayCopy.splice(reorderAnimalIndex, 1);

            setStateFunction(arrayCopy);
        } else {
            console.log('Could not remove animal.')
        }
    }

    function handleDelete(item) {
        fetch("http://localhost:8000/animals" + item.id, {
            method: "DELETE"
        });

        removeAnimalfromStateArray(item, adoptedAnimals, setAdoptedAnimals);
        removeAnimalfromStateArray(item, animals, setAnimals);
    }

    return (
        <div className="container">
            <AvailableAnimals animals={animals}
                onAddAnimalToAdoption={handleAddAnimalToAdopted}
                onDelete={handleDelete} />

            <AdoptedAnimals animals={adoptedAnimals}
                onRemoveAnimalFromAdopted={handleRemoveAnimalFromAdopted}
                onDelete={handleDelete} />
        </div>
    );
}

export default CurrentAnimals;
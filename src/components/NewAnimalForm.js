import React from "react"

function NewAnimalForm({ addNewAnimal }) {

    function handleSubmit(event) {
        event.preventDefault();

        const formElement = event.target;

        const animalData = {
            "name": formElement["name"].value,
            "image": formElement["image"].value,
            "bio": formElement["bio"].value,
            
        }

        addNewAnimal(animalData);

        formElement.reset();
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" id="name" placeholder="Animal Name" />
            <input type="text" id="image" placeholder="Image URL" />
            <input type="text" id="bio" placeholder="Bio"/>
            <button type="submit">Add Animal</button>
        </form>
    )
}

export default NewAnimalForm;
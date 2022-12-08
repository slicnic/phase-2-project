import React from 'react'

function AnimalCard({ item, onCardClicked, onDelete }) {
    return (
        <div className="card" onClick={() => onCardClicked(item)}>
            <img src={item.image}></img>
            <h3>{item.name}</h3>
            <h4>{item.bio}</h4>
            <button onClick={() => onDelete(item)}>Adopt</button>
        </div>
    );
}

export default AnimalCard;
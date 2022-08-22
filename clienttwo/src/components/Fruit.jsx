
import React from 'react';

    export default function Fruit(props) {
    const { fruit, onAdd } = props;
    return (
        <div>
        <img className="small" src={fruit.image} alt={fruit.name} />
        <h3>{fruit.name}</h3>
        <div>${fruit.classification}</div>
        <div>${fruit.origin}</div>
        <div>
            <button onClick={() => onAdd(fruit)}>Add To Cart</button>
        </div>
        </div>
    );
    }
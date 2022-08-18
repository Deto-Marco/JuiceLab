import React from 'react'
import '../App.css';


const Fruits = (props) => {

  const {fruits, onAdd, onRemove} = props;
  
  return (
    <div className='fruits'>
      <h2>Choose the Fruits of your desire.</h2>
      {fruits.map((fruit, idx) => (
        <div className='fruit' key={idx}>
          <img src={fruit.image} alt={fruit.name}/>
          <ul>{fruit.name}</ul>
          <ul>{fruit.origin}</ul>
          <button onClick={() => onAdd(fruit)}>+</button>
          <button onClick={()=> onRemove(fruit)}>-</button>
        <br />
        </div>

          ))}
    </div>
  )
}

export default Fruits
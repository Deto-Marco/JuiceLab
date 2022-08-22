
import React from 'react';

export default function Basket(props) {
  const {mixFruits, onAdd, onRemove } = props;

  return (
    <aside className="block col-1">
      <h2>Mixer</h2>
      <div>
        {mixFruits.length === 0 && <div>Cart is empty</div>}
        {mixFruits.map((fruit) => (
          <div key={fruit.id} className="row">
            <div className="col-2">{fruit.name}</div>
            <div className="col-2">
              <button onClick={() => onRemove(fruit)} className="remove">
                -
              </button>{' '}
              <button onClick={() => onAdd(fruit)} className="add">
                +
              </button>
            </div>
          </div>
        ))}

        {mixFruits.length !== 0 && (
          <>
            <hr></hr>
            <hr />
            <div className="row">
              <button onClick={() => alert('Implement Checkout!')}>
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}
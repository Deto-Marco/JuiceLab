
import React from 'react';

export default function Cart(props) {
  const {cartItem} = props;

  return (
    <aside className="block col-1">
      <h2>Cart</h2>
      <div>
        {cartItem.length === 0 && <div>Cart is empty</div>}
        {cartItem.map((cartItem) => ( 
          <div key={cartItem._id} className="row">
            <div className="col-1">{cartItem.name}</div>
            <div className="col-1">
            </div>
            <div className="col-2 text-right">
            </div>
          </div>
        ))}

        {cartItem.length !== 0 && (
          <>
            <hr/>
            <div className="row">
              <button onClick={() => alert('Implement Cart!')}>
                Proceed to checkout
              </button>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}
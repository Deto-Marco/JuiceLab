import React from 'react';

export default function Mixer(props) {
  const {mixFruits, onAdd, onRemove, MultiRangeSlider, countMixFruits } = props;
  //Slicing the Mixer after 3 entreys
    if (countMixFruits == 4) {
      mixFruits.pop()
      alert("You've reached the limit of fruits in the mixer")
    }

  return (
    <aside className="block col-1">
      <h2>Mixer</h2>
      <div>
        {mixFruits.length === 0 && <div>Mixer is empty</div>}
        {mixFruits.map((fruit) => ( 
          <div key={fruit._id} className="row">
            <div className="col-1">{fruit.name}</div>
            <div className="col-1">
              <button onClick={() => onRemove(fruit)} className="remove">
                -
              </button>{' '}
            </div>
            <div className="col-2 text-right">
{/*               {fruit.qty}
 */}            </div>
          </div>
        ))}

<MultiRangeSlider
      countMixFruits={countMixFruits}
      min={0}
      max={1000}
      onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
    />

        {mixFruits.length !== 0 && (
          <>
            <hr/>
            <div className="row">
              <button onClick={() => alert('Implement Cart!')}>
                add to Cart
              </button>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}
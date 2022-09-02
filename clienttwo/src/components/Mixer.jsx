import React from 'react';

export default function Mixer(props) {
  const {setMixFruits, mixFruits, onRemove, MultiRangeSlider, countMixFruits, onAddToCart, onChange} = props;


  //TRYING TO CALCULATE FRUITS PERCENTAGE
/*   function percentageOfFruits(fruit_id) {
    return mixFruits.length===1 ? console.log("firstFruit=", MultiRangeSlider.onChange.max)
          : mixFruits.length===2 ? console.log("secondFruit=", 100-MultiRangeSlider.onChange.min)
          : mixFruits.length===3 ? console.log("Thirdfruit=", 100-MultiRangeSlider.onChange.max)
          :console.log("no fruits added yet");}; */


/*           if (countMixFruits === 1) {
            return console.log(`firstFruit = ${onChange.max}`);
          } else if (countMixFruits === 2) {
            return console.log(`firstFruit = ${min}`,`secondFruit = ${100-min}`);
          } else if (countMixFruits === 3) {
            return console.log(`firstFruit = ${min}`, `secondFruit = ${100-min}`, `thirdFruit = ${100-max}`);
          } else if (countMixFruits === 4) {
            return mixFruits.pop(),alert("You've reached the limit of fruits in the mixer ");
          } else {
            return console.log(`firstFruit`);
          }
        } */
        
          
  //Slicing the Mixer after 3 entreys
    if (countMixFruits === 4) {
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
            <div className="col-1">{fruit.name} ratio:{fruit.ratio}</div>

            <div className="col-1">
              <button onClick={() => onRemove(fruit)} className="remove">
                -
              </button>{' '}
            </div>
            <div className="col-2 text-right">
            
            </div>
          </div>
        ))}

<MultiRangeSlider
      mixFruits={mixFruits}
      setMixFruits={setMixFruits}
      countMixFruits={countMixFruits}
      min={0}
      max={100}
      onChange={(min, max) => console.log(`min = ${min}, max = ${max},firstFruit = ${min}, secondFruit = ${max-min} `, `thirdFruit = ${100-max} `)}
    />



        {mixFruits.length !== 0 && (
          <>
            <hr/>
            <div className="row">
              <button onClick={onAddToCart}>
                add to Cart
              </button>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}
import React from 'react'

const Mixer = (props) => {
  const {countMixFruits} = props;

  return (
    <div>
      Mixer
       You have {countMixFruits} in the Mix
    <button onClick={() => console.log("Mixed Juice Get Added to the Cart")}>Add to Cart</button>
    </div>
  )
}

export default Mixer
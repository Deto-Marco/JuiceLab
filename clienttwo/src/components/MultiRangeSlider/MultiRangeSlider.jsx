import React, { useCallback, useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import "../MultiRangeSlider/multiRangeSlider.css";

const MultiRangeSlider = ({ min, max, onChange, countMixFruits, mixFruits, setMixFruits}) => {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const minValRef = useRef(min);
  const maxValRef = useRef(max);
  const range = useRef(null);

  // Convert to percentage
  const getPercent = useCallback(
    (value) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  // Set width of the range to decrease from the left side
  useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxValRef.current);

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal, getPercent]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    const minPercent = getPercent(minValRef.current);
    const maxPercent = getPercent(maxVal);

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [maxVal, getPercent]);

  // Get min and max values when their state changes
  useEffect(() => {
    onChange({ min: minVal, max: maxVal });
  }, [minVal, maxVal, onChange]);

  return (
    <div className="container">
      {/* {mixFruits.map((fruit,index)=>{
        
        return index === 0? null:
        (<input
          type="range"
          min={min}
          max={100-(mixFruits.filter(item=>item._id!==fruit._id)).reduce((acc,el)=>acc+el.ratio)}
          value={fruit.ratio}
          onChange={(event) => {
            let updatedRatios = mixFruits.map(item=>{
              if (item._id===fruit._id){
                item.ratio=event.target.value
                return item
              }
              else {
                item.ratio=100-event.target.value
                return item
              }
            })
            setMixFruits(updatedRatios)
            const value = Math.min(Number(event.target.value), maxVal - 1);
            setMinVal(value);
            minValRef.current = value;
          }}
          className="thumb thumb--left"
          style={{ zIndex: minVal > max - 100 && "5" }}
        />)
      })} */}
      
{countMixFruits>=2 &&    <input
        type="range"
        min={min}
        max={max}
        value={mixFruits[1].ratio}
        onChange={(event) => {
          event.stopPropagation()
          let updatedRatios = mixFruits.map(item=>{
          if (item._id===mixFruits[1]._id){
            item.ratio=event.target.value
            return item
          }
          else {
            item.ratio=100-event.target.value
            return item
          }
        })
        setMixFruits(updatedRatios)
        }}
        className="thumb thumb--left"
        style={{ zIndex: minVal > max - 100 && "5" }}
      />}
{countMixFruits>=3 && <input
        type="range"
        min={mixFruits[0].ratio}
        max={max}
        value={mixFruits[2].ratio+mixFruits[1].ratio}
        onChange={(event) => {
          console.log(event.target.value);
          event.stopPropagation()
          let updatedRatios = mixFruits.map((item,index)=>{
          if(index==1){
            item.ratio= +item.ratio-(+event.target.value)
            return item
          }
          else if (index==2){
            item.ratio= event.target.value
            return item
          }
          return item
        })
        console.log(updatedRatios);
        setMixFruits(updatedRatios)
        }}
        className="thumb thumb--right"
      />}

      <div className="slider">
        <div className="slider__track" />
        <div ref={range} className="slider__range" />
        <div className="slider__left-value">{minVal}</div>
        <div className="slider__right-value">{maxVal}</div>
      </div>
    </div>
  );
};

MultiRangeSlider.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
};

export default MultiRangeSlider;

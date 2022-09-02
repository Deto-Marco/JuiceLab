export default function Fruit(props) {
    const { fruit, onAdd,/* MultiRangeSlider, onRemove, mixFruit */ } = props;
    return (
        <div className="card">
        <img className="small" src={fruit.image} alt={fruit.name} />
        <h3>{fruit.name}</h3>
        <div>{fruit.classification}</div>
        <div>{fruit.origin}</div>
        <button onClick={() => onAdd(fruit)}>Add To Mixer</button>
        </div>
        );
        }
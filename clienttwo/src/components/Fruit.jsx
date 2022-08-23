export default function Fruit(props) {
    const { fruit, onAdd, onRemove, mixFruit } = props;
    return (
        <div className="card">
        <img className="small" src={fruit.image} alt={fruit.name} />
        <h3>{fruit.name}</h3>
        <div>${fruit.classification}</div>
        <div>${fruit.origin}</div>
        <div>
            {mixFruit ? 
                <div>
                    <button onClick={() => onRemove(mixFruit)} className="remove"> 
                        -
                    </button>
                    <span className="p-1">{mixFruit.qty}</span>
                    <button onClick={() => onAdd(mixFruit)} className="add">
                        +
                    </button>
                </div>:
        <button onClick={() => onAdd(fruit)}>Add To Cart</button>

            }
            </div>
        </div>
        );
        }
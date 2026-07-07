import "./QuantityPicker.css"
import { useState } from "react"

function QuantityPicker(props){

    const [quantity, setQuantity] = useState(1);

    function decreaseCount() {
        if (quantity > 0) {
            let nextVal = quantity - 1;
            setQuantity(nextVal);
            props.onChange(nextVal);
        }
    }

    function increaseCount() {
        let nextVal = quantity + 1;
        setQuantity(nextVal);
        props.onChange(nextVal);
    }

    return (
        <div>
            <button onClick={decreaseCount}>-</button>
            <label> {quantity} </label>
            <button onClick={increaseCount}>+</button>
        </div>
    )
}

export default QuantityPicker;
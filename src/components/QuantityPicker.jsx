import "./QuantityPicker.css"
import { useState } from "react"

function QuantityPicker(){

    const [quantity, setQuantity] = useState(1);

    function decreaseCount() {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    function increaseCount() {
        setQuantity(quantity + 1);
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
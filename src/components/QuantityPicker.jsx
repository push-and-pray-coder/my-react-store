import './QuantityPicker.css';
import {useState} from 'react';

function QuantityPicker(){
    
    const [quantity, setQty] = useState(1);
    //const quantity

    function handleDecrease(){
        if (quantity > 1){
            setQty(quantity - 1);
        }
    }
    
    function handleIncrease(){
        setQty(quantity + 1);
    }

    return(       
        <div className="quantity-picker">
            <button className="btn-minus" onClick={handleDecrease}>-</button>
            <label className="label-qty"> {quantity} </label>
            <button className="btn-plus" onClick={handleIncrease}>+</button>
        </div>
    );
}

export default QuantityPicker;
import './QuantityPicker.css';
import {useState} from 'react';

function QuantityPicker(props){
    
    const [quantity, setQty] = useState(1);
    //const quantity

    function handleDecrease(){
        if (quantity > 1){
            let nextVal = quantity - 1;
            setQty(nextVal);
            props.onChange(nextVal);
        }

    }
    
    function handleIncrease(){
        let nextVal = quantity + 1;
        setQty(nextVal);
        props.onChange(nextVal);
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
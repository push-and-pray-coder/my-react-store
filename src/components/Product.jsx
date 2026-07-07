import './Product.css'
import QuantityPicker from './QuantityPicker';
import { useState } from "react"

function Product(props){

    const [quantity, setQuantity] = useState(1);

    function handleQuantityChange(qty) {
        setQuantity(qty);
    }

    function getTotal() {
        let total = props.data.price.toFixed(2) * quantity;
        return total.toFixed(2);
    }

    return (
        <div class="product-container">
            <img src={"/images/" + props.data.image}  alt="Product Container"></img>
            <span>{props.data.name}</span>
            <span>${props.data.price.toFixed(2)}</span>
            <span>Total: ${getTotal()}</span>
            <QuantityPicker onChange={handleQuantityChange}/>
        </div>
    );
}

export default Product;
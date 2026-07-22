import { useState } from "react"
import useStore from '../state/cart';
import QuantityPicker from './QuantityPicker';
import './Product.css'


function Product(props){

    const { addProductToCart } = useStore();

    const [quantity, setQuantity] = useState(1);

    function handleQuantityChange(qty) {
        setQuantity(qty);
    }

    function getTotal() {
        let total = props.data.price.toFixed(2) * quantity;
        return total.toFixed(2);
    }

    function onAdd(){
        //addProductToCart(props.data.name);
        let fixedProduct = {...props.data};
        fixedProduct.quantity = quantity;
        addProductToCart(fixedProduct);

        console.log (fixedProduct.quantity);

    }

    return (
        <div className="product-container">
            <img src={"/images/" + props.data.image}  alt="Product Container"></img>
            <span>{props.data.name}</span>
            <span>${props.data.price.toFixed(2)}</span>
            <span>Total: ${getTotal()}</span>
            <QuantityPicker onChange={handleQuantityChange}/>
            <button className="btn white btn-outline-dark mt-2" onClick={onAdd}>Add to cart</button>
        </div>
    );
}

export default Product;
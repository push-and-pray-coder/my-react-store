import './Product.css'
import QuantityPicker from './QuantityPicker';
function Product(props){
    return (
        <div class="product-container">
            <img src={"/images/" + props.data.image}  alt="Product Container"></img>
            <span>{props.data.name}</span>
            <span>{props.data.price.toFixed(2)}</span>
            <QuantityPicker/>
        </div>
    );
}

export default Product;
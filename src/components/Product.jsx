import './Product.css'
import QuantityPicker from './QuantityPicker';
function Product(){
    return (
        <div class="product-container">
            <img src="https://picsum.photos/200/300" alt="Product Container"></img>
            <label>$10.00</label>
            <QuantityPicker/>
        </div>
    );
}

export default Product;
import './Product.css'
import QuantityPicker from './QuantityPicker';
function Product(prod){
    return (
        <div class="product-container">
            <img src="https://picsum.photos/200/300" alt="Product Container"></img>
            <p>
                {prod.name}
            </p>
            {prod.price}
            <QuantityPicker/>
        </div>
    );
}

export default Product;
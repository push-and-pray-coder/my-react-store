import "./Catalog.css"
import Product from "../components/Product.jsx"

function Catalog(){
    return (
        <div className="product-catalog">
            <h1>Product Catalog</h1>
            <Product/>
        </div>
    );
}

export default Catalog;
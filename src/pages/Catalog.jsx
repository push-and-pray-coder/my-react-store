import "./Catalog.css"
import Product from "../components/Product"
function Catalog(){

    return (
        <div className="catalog">
            <h1>Check out our products</h1>
            <Product/>
            <Product />
            <Product />
        </div>
    );

}

export default Catalog;
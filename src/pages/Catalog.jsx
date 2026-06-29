import "./Catalog.css"
import Product from "../components/Product.jsx"
import DataService from "../services/dataService.js";
import { useState } from "react";

function Catalog(){

    const [product, setProduct] = useState ([]);

    

    return (
        <div className="product-catalog">
            <h1>Product Catalog</h1>
        </div>
    );
}

export default Catalog;
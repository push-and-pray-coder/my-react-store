import "./Catalog.css"
import Product from "../components/Product.jsx"
import DataService from "../services/dataService.js";
import { useState, useEffect } from "react";

function Catalog(){

    const [products, setProducts] = useState ([]);

    useEffect(
        ()=>{
            let service = new DataService();
            let data = service.getProducts();

            setProducts(data);
        },[]
    );

    return (
        <div className="product-catalog">
            <h1 className="product-title">Product Catalog</h1>
            <div className="filter">
                <span>Clothes</span>
                <span>Shoes</span>
                <span>Hats</span>
            </div>
            <div className="product-grid">
                {products.map(prod=><Product key={prod._id} data={prod}/>)}
            </div>
        </div>
    );
}

export default Catalog;
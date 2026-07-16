import "./Catalog.css"
import Product from "../components/Product.jsx"
import DataService from "../services/dataService.js";
import { useState, useEffect, useRef } from "react";

function Catalog(){

    const [products, setProducts] = useState ([]);
    const [categories, setCategories] = useState([]); //To hold the categories
    const [productsToDisplay, setProductsToDisplay] = useState([]);


    useEffect(
        ()=>{
            let service = new DataService();
            let data = service.getProducts();

            setProducts(data);
            setProductsToDisplay(data);
            loadCatalog();

        },[]
    );

    function loadCatalog() {
        let categoriesFilter = ["Clothing", "Shoes", "Headwear"];
        setCategories(categoriesFilter);
    }

    function filter(category) {
        let list = [];

        products.forEach(item => {
            if (item.category === category) {
                list.push(item);
            }

        });

        setProductsToDisplay(list);
    }


    function clearFilter() {
        setProductsToDisplay(products);
    }

    function handleFilterProducts(){
        
    }

    return (
        <div className="product-catalog">
            <h1 className="product-title">Product Catalog</h1>
            <div className="filters">
                <button onClick={clearFilter}>All</button>
                {categories.map(cat => <button key={cat} onClick={() => filter(cat)}>{cat}</button>)}
            </div>
            <div className="product-grid">
                {productsToDisplay.map(prod => <Product key={prod._id} data={prod} />)} 
            </div>
        </div>
    );
}

export default Catalog;
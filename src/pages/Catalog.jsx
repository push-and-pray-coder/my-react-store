import "./Catalog.css"
import Product from "../components/Product"
import {useEffect, useState} from "react"
import DataService from "../services/dataServices"




function Catalog(){
    const [products, setProducts] = useState([]); //useState could be null but a list is expected
    const [categories, setCategories] = useState([]); //To hold the categories
    const [productsToDisplay, setProductsToDisplay] = useState([]);
    //let products = [];

    useEffect(() => { //use effect prevents the connection from being reset on every render 
        //load the data here
        let service = new DataService(); //create an instance of the dataServices class
        let data = service.getProducts(); //assigns the product array using dataServices getProduct() function
        setProducts(data); //render when the data is recieved, importnant later when the data not local
        setProductsToDisplay(data); //product filter
        loadCatalog();
    }, [] //[] means only run it once
    );
    
    function loadCatalog(){
        let categoriesFilter = ["fruit", "grocery", "merch"];
        setCategories (categoriesFilter);
    }

    function filter(category){
        let list=[];
        //find the products that match the category
        //this is a for loop and at the end you have
        //products to display

        products.forEach(item => {
            if (item.category === category){
                list.push(item);
            }

        });

        setProductsToDisplay(list);
    }


    function clearFilter(){
        setProductsToDisplay(products);
    }

    return (
        //traverse the data array, and pass each object to the product component
        //data= is the function input into the product component
        //key= is used by react to keep track of the product component
        <div className="catalog">
            <h1>Check out our products</h1>
            <div>
                <button onClick={clearFilter}>All</button>
            </div>
            {categories.map(cat=> <button key={cat} onClick={()=>filter(cat)}>{cat}</button>)}
            {productsToDisplay.map(prod => <Product key={prod._id} data={prod}/>)} 
        </div>
    );

}

export default Catalog;
import "./Catalog.css"
import Product from "../components/Product"
import {useEffect, useState} from "react"
import DataService from "../services/dataServices"

function Catalog(){
    const [products, setProducts] = useState([]); //useState could be null but a list is expected
    //let products = [];

    
    useEffect(() => { //use effect prevents the connection from being reset on every render 
        //load the data here
        let service = new DataService(); //create an instance of the dataServices class
        let data = service.getProducts(); //assigns the product array using dataServices getProduct() function
        setProducts(data); //render when the data is recieved, importnant later when the data not local
    },[] //[] means only run it once
    );

    return (
        //traverse the data array, and pass each object to the product component
        //data= is the function input into the product component
        //key= is used by react to keep track of the product component
        <div className="catalog">
            <h1>Check out our products</h1>
            {products.map(prod => <Product key={prod._id} data={prod}/>)} 
        </div>
    );

}

export default Catalog;
const products = [
    {
        name: "Sweater",
        category: "Clothing",
        price: 30.00,
        image: "sweater.png",
        _id: 1
    },
    {
        name: "Sneakers",
        category: "Shoes",
        price: 100.00,
        image: "sneaker.png",
        _id: 2
    },
    {
        name: "Blue Ball Cap",
        category: "Headwear",
        price: 20.00,
        image: "hat-blue.png",
        _id: 3
    },
    {
        name: "White Ball Cap",
        category: "Headwear",
        price: 20.00,
        image: "hat-white.png",
        _id: 3
    }
];

class DataService{
    getProducts(){
        return products;
    }
}

export default DataService;
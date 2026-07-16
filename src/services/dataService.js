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
        name: "Ball Cap",
        category: "Headwear",
        price: 20.00,
        image: "hat-blue.png",
        _id: 3
    },
    {
        name: "Bowler Hat",
        category: "Headwear",
        price: 40.00,
        image: "bowler-hat.png",
        _id: 4
    }
];

class DataService{
    getProducts(){
        return products;
    }
}

export default DataService;
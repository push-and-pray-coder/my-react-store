const catalog = [
    {
        "title": "Oranges",
        "category" : "Fruit",
        "price":  15,
        "image" : "orange.png",
        "_id": "1" //Must be unique
    },
    {
        "title": "Chocolate",
        "category" : "Grocery",
        "price":  15,
        "image" : "chocolate.png",
        "_id": "2" //Must be unique
    },
    {
        "title": "Hoodie",
        "category" : "Merch",
        "price":  15,
        "image" : "hoodie.png",
        "_id": "3" //Must be unique
    }
];

class DataService{
    getProducts()
    {
        return catalog;
    }
}

export default DataService;
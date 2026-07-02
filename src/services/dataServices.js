const catalog = [
    {
        "title": "Oranges",
        "category" : "fruit",
        "price":  15,
        "image" : "orange.png",
        "_id": "1" //Must be unique
    },
    {
        "title": "Chocolate",
        "category" : "grocery",
        "price":  15,
        "image" : "chocolate.png",
        "_id": "2" //Must be unique
    },
    {
        "title": "Hoodie",
        "category" : "merch",
        "price":  15,
        "image" : "hoodie.png",
        "_id": "3" //Must be unique
    },
    {
        "title": "Chocolate",
        "category": "grocery",
        "price": 15,
        "image": "chocolate.png",
        "_id": "5" //Must be unique
    }
];

class DataService{
    getProducts()
    {
        return catalog;
    }
}

export default DataService;
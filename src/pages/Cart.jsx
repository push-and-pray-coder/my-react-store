import useStore from "../state/cart";
import './Cart.css'

function Cart () {

    const { cart } = useStore();

    function getTotalPrice() {
        let total = 0;

        for (let i=0; i < cart.length; i++){
            total += cart[i].price * cart[i].quantity;
        }

        return total;
    }

    return(
        <div>
            <h1>Cart Page</h1>

            <div className="d-flex flex-row gap-5 p-3 ">
                {
                    cart.map(product=>(
                        <div className="d-flex flex-column border border-dark rounded mb-4">
                            <img className="cart-image" src={"/images/" + product.image} alt="product-image"/>
                            <h6>{product.name}</h6>
                            <p>Quantity: {product.quantity}</p>
                            <p>Price: ${product.price}</p>
                            <p>Item Total: ${product.quantity * product.price}</p>
                        </div>
                    ))
                }
            </div>
            <h4>Cart Total ${getTotalPrice()}</h4>
        </div>
    )
}

export default Cart;
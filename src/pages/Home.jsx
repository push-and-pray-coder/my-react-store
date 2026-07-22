import './Home.css'
import useStore from '../state/cart'

function Home(){
    const { user } = useStore();

    return (
        <div>
            <div className="hero-container">
                <div className="hero-text">
                    <h1>{user.name}'s Modern Style</h1>
                    <h1>Everyday Comfort</h1>
                    <a href="catalog"><button className="shop-button">SHOP NOW</button></a>
                </div>
                <div className="hero-image">
                    <img src="./images/hero-image.png" alt="hero image"></img>
                </div>
            </div>
        </div>
    )
}

export default Home;
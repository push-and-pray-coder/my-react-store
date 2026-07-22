import { useState } from 'react'
import AdminProduct from './AdminProduct';

function Admin(){

    const [couponCode, setCouponCode] = useState("");
    const [couponDiscount, setCouponDiscount] = useState("");
    const [coupons,setCoupons] = useState([]);
    
    const [productTitle, setProductTitle] = useState("");
    const [productCategory, setProductCategory] = useState("");
    const [productImage, setProductImage] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [products, setProducts] = useState([]);


    function saveCoupon(){
        console.log(couponCode);
        console.log(couponDiscount);

        const newCoupon = {
            code: couponCode,
            discount: couponDiscount,
        }

        //.. spread operator
        setCoupons([...coupons, newCoupon])

    }

    function saveProduct(){
        const newProduct ={
            title: productTitle,
            category: productCategory,
            image: productImage,
            price: productPrice,
        }

        setProducts([...products, newProduct]);
    }

    return(
        <div>
            <h1>Store Administration</h1>
            <div className="d-flex gap-4">
                <section className="w-50">
                    <h2>Add Product</h2>
                    <div>
                        <div className="card">
                            <div className="card-body">
                                <div className="mb-2">
                                    <label className="form-label">Title</label>
                                    <input type="text" className="form-control" value={productTitle} onChange={(event)=>setProductTitle(event.target.value)}/>
                                </div>
                                <div className="mb-2">
                                    <label className="form-label">Category</label>
                                    <input type="text" className="form-control" value={productCategory} onChange={(event)=>setProductCategory(event.target.value)}/>
                                </div>
                                <div className="mb-2">
                                    <label className="form-label">Image [URL]</label>
                                    <input type="text" className="form-control" value={productImage} placeholder="www.images.com" onChange={(event)=>setProductImage(event.target.value)}/>
                                </div>
                                <div className="mb-4">
                                    <label className="form-label">Price</label>
                                    <input type="number" className="form-control" value={productPrice} onChange={(event)=>setProductPrice(event.target.value)}/>
                                </div>
                                <div>
                                    <button className="btn white btn-outline-dark" onClick={saveProduct}>Save Product</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h3>Product List</h3>
                    <div className="d-flex flex-wrap w-50">
                        {products.map((prod,index) => <AdminProduct key={index} product={prod}/>)}
                    </div>
                </section>
                    
                <section className="w-50">
                    <h2>Add Coupons</h2>
                    <div>
                        <div className="card">
                            <div className="card-body">
                                <div className="mb-2">
                                    <label className="form-label">Code</label>
                                    <input type="text" className="form-control" value={couponCode} onChange={(event)=>setCouponCode(event.target.value)}/>
                                </div>

                                <div className="mb-4">
                                    <label className="form-label">Discount</label>
                                    <input type="number" className="form-control" value={couponDiscount} onChange={(event)=>setCouponDiscount(event.target.value)} />
                                </div>
                                <div>
                                    <button className="btn white btn-outline-dark" onClick={saveCoupon}>Save Coupon</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3> Coupons List</h3>
                        <ul className="list-group">
                            {coupons.map(coupon=>(
                                //bonus: add different bs badge colors based on coupon discount
                                <li className="list-group-item" key={coupon.code}>{coupon.code} - {coupon.discount}</li>
                            ))}
                        </ul>
                    </div>

                </section>
            </div>
        </div>
    )
}

export default Admin;
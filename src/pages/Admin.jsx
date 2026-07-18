import { useState } from 'react'
function Admin(){

    const [couponCode, setCouponCode] = useState("");
    const [couponDiscount, setCouponDiscount] = useState("");
    const [coupons,setCoupons] = useState([])
    
    // assignment
    //productTitle
    //productCategory
    //productImage
    //productPrice
    //Products

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
                                    <input type="text" className="form-control"/>
                                </div>
                                <div className="mb-2">
                                    <label className="form-label">Category</label>
                                    <input type="text" className="form-control"/>
                                </div>
                                <div className="mb-2">
                                    <label className="form-label">Image [URL]</label>
                                    <input type="text" className="form-control"/>
                                </div>
                                <div className="mb-4">
                                    <label className="form-label">Price</label>
                                    <input type="number" className="form-control"/>
                                </div>
                                <div>
                                    <button className="btn btn-dark">Save Product</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3>Product List</h3>
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
                                    <input type="number" className="form-control" value={couponDiscount} onChange={(event) => setCouponDiscount(event.target.value)} />
                                </div>
                                <div>
                                    <button className="btn btn-dark" onClick={saveCoupon}>Save Coupon</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3> Coupons List</h3>
                        {coupons.map(coupon=>(
                            <li key={coupon.code}>{coupon.code} - {coupon.discount}</li>
                        ))}

                    </div>

                </section>
            </div>
        </div>
    )
}

export default Admin;
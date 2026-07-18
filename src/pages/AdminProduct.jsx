function AdminProduct({product}){
    return(
        <div className="d-flex overflow-hidden card mb-4 w-auto">
                <img src={product.image} alt=""/>
                <span className="badge bg-white text-dark border position-absolute top-0 end-0 m-0">
                    {product.category}
                </span>
                <div className="d-flex flex-row justify-content-evenly">
                    <h4>{product.title}</h4>
                    <h4 className="text-secondary">${product.price}</h4>
                </div>
            </div>
    )
}

export default AdminProduct;
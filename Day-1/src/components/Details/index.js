const Details = () => {
    const product = {
        id: 1,
        imageUrl: "https://m.media-amazon.com/images/I/617FFRO3vcL._SL1500_.jpg",
        name: "iPhone",
        version: "14 pro",
        features: {
            camera: '8M',
            memory: "128GB",
            processor: "appleProcessor"
        }
    }
    return (
        <div className="row">
            <div className="col-4">
                <div className="card" >                  
                        <img src={product.imageUrl}
                            height="200px"
                            width="200px"
                            class="rounded mx-auto d-block" />
                    
                    <div className="card-body">
                        <h5 className="card-title">{product.name}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{product.version}</h6>
                        <p className="card-text">Features</p>
                        <a href="#" className="card-link">{product.features.camera}</a>
                        <a href="#" className="card-link">{product.features.memory}</a>
                        <a href="#" className="card-link">{product.features.processor}</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Details
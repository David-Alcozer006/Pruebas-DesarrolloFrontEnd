function Product() {
    return (
        <section className="w-full h-150 py-20 px-80 bg-blue-100">

            <div className="card lg:card-side bg-base-100 shadow-sm relative">
                <figure className="w-[-60%]">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
                        alt="Album" />
                </figure>
                <div className="w-[-40%] card-body">
                    <h2 className="card-title">New album is released!</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Listen</button>
                    </div>
                </div>
            </div>

        </section>
    )
}
export default Product
function Portfolio({ title, paragraph }) {
    return (
        <>
            <section className="bg-success min-vh-100  d-flex flex-column justify-content-center align-items-center">
                <h1 className="display-1 text-white">{title}</h1>
                <p className="text-white lead">{paragraph}</p>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 mb-3">
                            <div className="card p-3">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque natus dolorum, et quam impedit cumque, quisquam, ab sequi doloremque earum facere. Blanditiis nihil quisquam provident sed fugiat explicabo magni aperiam!
                                </p>
                                <button className="btn btn-danger">Show</button>
                            </div>
                        </div>
                        <div className="col-md-4 mb-3">
                            <div className="card p-3">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque natus dolorum, et quam impedit cumque, quisquam, ab sequi doloremque earum facere. Blanditiis nihil quisquam provident sed fugiat explicabo magni aperiam!
                                </p>
                                <button className="btn btn-danger">Show</button>
                            </div>
                        </div>
                        <div className="col-md-4 mb-3">
                            <div className="card p-3">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque natus dolorum, et quam impedit cumque, quisquam, ab sequi doloremque earum facere. Blanditiis nihil quisquam provident sed fugiat explicabo magni aperiam!
                                </p>
                                <button className="btn btn-danger">Show</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Portfolio
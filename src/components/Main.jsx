import Illustration from '../assets/illustrations/Illustration.png'

function Main({ title, paragraph }) {

    // console.log(paragraph)

    return (
        <>
            <main className="vh-100 bg-primary d-flex flex-column justify-content-center">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-7 mb-md-0 mb-3">
                            <h1 className="text-white">{title}</h1>
                            <p className="text-white lead">{paragraph}</p>
                            <button className='btn btn-lg btn-warning'>Hello!</button>
                        </div>
                        <div className="col-md-5">
                            <img src={Illustration} alt="" className='img-fluid' />
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Main
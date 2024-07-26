// import components
import Header from './components/Header'
import Main from './components/Main'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'

// import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'

// import external css styles
import './App.css'
function App() {

    const paragraph = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, ducimus!"

    return (
        <>
            <Header title="React Dev!" description="This is tagline." />
            <Main title="Hero Section" paragraph={paragraph} />
            <Portfolio title="My Portfolio" paragraph={paragraph} />
            <Footer />
        </>
    )
}

export default App
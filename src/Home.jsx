import Navbar from "./components/Navbar"
import Header from "./components/Header"
import Loader from "./Loader"

function Home() {
    return (
        <>
            <Loader/>
            <Navbar />
            <Header />
        </>
    )
}

export default Home
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import Loader from "./Loader"
import Categories from "./components/Categories"

function Home() {
    return (
        <>
            <Loader/>
            <Navbar />
            <Header />
            <Categories />
        </>
    )
}

export default Home
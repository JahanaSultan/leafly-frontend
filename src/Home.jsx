import Navbar from "./components/Navbar"
import Header from "./components/Header"
import Loader from "./Loader"
import Categories from "./components/Categories"
import GoodTea from "./components/GoodTea"

function Home() {
    return (
        <>
            <Loader/>
            <Navbar />
            <Header />
            <Categories />
            <GoodTea/>
        </>
    )
}

export default Home
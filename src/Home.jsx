import Navbar from "./components/Navbar"
import Header from "./components/Header"
import Loader from "./Loader"
import Categories from "./components/Categories"
import GoodTea from "./components/GoodTea"
import Featured from "./components/Featured"

function Home() {
    return (
        <>
            <Loader/>
            <Navbar />
            <Header />
            <Categories />
            <GoodTea/>
            <Featured/>
        </>
    )
}

export default Home
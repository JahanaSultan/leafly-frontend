import Navbar from "./components/Navbar";
import Loader from "./Loader";
import TeaCategories from "./components/TeaCategories";
import GoodTea from "./components/GoodTea";
import Featured from "./components/Featured";
import Categories from "./components/Categories1/Categories";

function Home() {
  return (
    <>
      <Loader />
      <Navbar />
      <Categories />
      <TeaCategories />
      <GoodTea />
      <Featured />
    </>
  );
}

export default Home;

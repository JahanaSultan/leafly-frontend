import Navbar from "./components/Navbar";
import Loader from "./Loader";
import TeaCategories from "./components/TeaCategories";
import GoodTea from "./components/GoodTea";
import Featured from "./components/Featured";
import Categories from "./components/Categories1/Categories";
import Sale from "./components/Sale/Sale";
import GiftBox from "./components/GiftBox/GiftBox";
import Instagram from "./components/Instagram/Instagram";

function Home() {
  return (
    <>
      <Loader />
      <Navbar />
      <Categories />
      <TeaCategories />
      <GoodTea />
      <Featured />
      <GiftBox />
      <Sale />
      <Instagram />
    </>
  );
}

export default Home;

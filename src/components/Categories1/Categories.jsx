import "./Categories.css";
import CategoryCard from "./CategoryCard";
import teacup from "../../assets/img/teacup.jpg";
import honey from "../../assets/img/honey1.jpg";
import coffee from "../../assets/img/coffee2.jpg";
import teaware from "../../assets/img/teaware.jpg";


const Categories = () => {
  return (
      <section className="categories d-flex">
        <CategoryCard text="Çaylar" img={teacup} />
        <CategoryCard text="Qəhvələr" img={coffee} />
        <CategoryCard text="Ballar" img={honey} />
        <CategoryCard text="Ləvazimatlar" img={teaware} />
      </section>

  );
};

export default Categories;
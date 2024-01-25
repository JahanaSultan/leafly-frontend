import "./Categories.css";
import CategoryCard from "./CategoryCard";
import teacup from "../../assets/img/tea1.jpg";
import honey from "../../assets/img/choney.jpg";
import coffee from "../../assets/img/coffee1.jpg";
import teaware from "../../assets/img/teaware.jpg";
import tea from "../../assets/img/teabg.png"


const Categories = () => {
  return (
      // <section className="categories d-flex">
      //   <CategoryCard text="Çaylar" img={teacup} />
      //   <CategoryCard text="Qəhvələr" img={coffee} />
      //   <CategoryCard text="Ballar" img={honey} />
      //   <CategoryCard text="Ləvazimatlar" img={teaware} />
      // </section>

      <header>
        <div className="path">
          <img src={tea} alt="" />
        </div>
      </header>

  );
};

export default Categories;

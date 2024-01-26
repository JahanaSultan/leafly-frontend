import "./Categories.css";
import { Link } from "react-router-dom";


const CategoryCard = ({text, img}) => {
  return (
    <Link to="#" className="category-card ">
      <div className="overlay flex-center">
        <h1 className="card-text flex-center">
          {text}
          </h1>
      </div>
      <div className="card-image">
        <img
          src={img}
          alt=""
        />
      </div>
    </Link>
  );
};

export default CategoryCard;

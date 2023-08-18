import tea from "../../assets/img/tea/black.jpeg";
import { Link } from "react-router-dom";
import basket from "../../assets/icons/shopping-basket-line.svg";
import heart from "../../assets/icons/heart-line.svg";
import eye from "../../assets/icons/eye-line.svg";
import SaleRibbon from "../SaleRibbon/SaleRibbon";
import "./Card.css";
import ReactStars from "react-rating-stars-component";

const Card = () => {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <div className="card d-flex flex-column">
      <SaleRibbon />
      <div className="card-image">
        <img src={tea} alt="product" />
      </div>
      <Link to="#" className="card-bottom d-flex flex-column">
        <div className="stars flex-center">
          <ReactStars
            count={5}
            onChange={ratingChanged}
            size={24}
            activeColor="#ffd700"
          />
        </div>
        <div className="content d-flex p1">
          <div className="left ">
            <h4>Masala tea</h4>
            <small className="category">Çaylar</small>
          </div>
          <div className="right flex-center">12 ₼</div>
        </div>
        <button className="add-to-cart">Səbətə Əlavə Et</button>
      </Link>
    </div>
  );
};

export default Card;

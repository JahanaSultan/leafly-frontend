import tea from "../../assets/img/tea/black.jpeg";
import { Link } from "react-router-dom";
import basket from "../../assets/icons/shopping-basket-line.svg";
import heart from "../../assets/icons/heart-line.svg";
import eye from "../../assets/icons/eye-line.svg";
import SaleRibbon from "../SaleRibbon/SaleRibbon";
import "./Card.css"

const Card = () => {
  return (
    <div className="card d-flex flex-column">
      <SaleRibbon/>
      <div className="card-image">
        <ul className="card-side-nav flex-center">
          <li className="flex-center">
            <img src={basket} alt="basket icon" />
          </li>
          <li className="flex-center">
            <img src={heart} alt="basket icon" />
          </li>
          <li className="flex-center">
            <img src={eye} alt="basket icon" />
          </li>
        </ul>
        <img src={tea} alt="product" />
      </div>
      <Link to="#" className="card-bottom d-flex p1">
        <div className="left">
          <h4>Masala tea</h4>
          <p className="category">Çaylar</p>
        </div>
        <div className="right flex-center">12 ₼</div>
      </Link>
    </div>
  );
};

export default Card;

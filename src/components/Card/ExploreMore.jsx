import "./Card.css";
import { Link } from "react-router-dom";
import arrow from "../../assets/icons/arrow-right-line.svg"

const ExploreMore = () => {
  return (
    <Link to="#" className="card explore">
      <div className="overlay flex-center flex-column">
       <h4>Daha Çoxuna Bax</h4>
       <div className="icon flex-center">
        <img src={arrow} alt="icon" />
       </div>
      </div>
    </Link>
  );
};

export default ExploreMore;

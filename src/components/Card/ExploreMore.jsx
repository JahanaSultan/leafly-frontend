import "./Card.css";
import { Link } from "react-router-dom";
import arrow from "../../assets/icons/arrow-right-line.svg";

const ExploreMore = ({ width }) => {
  return (
    <Link to="#" className="card explore" style={{ width: width ?? "19%" }}>
      <div className="overlay flex-center flex-column">
        <div className="div">
          <div className="container">
            <h4>Daha Çoxuna Bax</h4>
            <div className="icon flex-center">
              <img src={arrow} alt="icon" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ExploreMore;

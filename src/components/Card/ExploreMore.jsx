import "./Card.css";
import { Link } from "react-router-dom";

const ExploreMore = () => {
  return (
    <Link to="#" className="card  explore">
      <div className="overlay flex-center">
       <h4>Daha Çoxuna Bax </h4>
      </div>
    </Link>
  );
};

export default ExploreMore;

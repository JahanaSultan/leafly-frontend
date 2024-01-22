import "./Blog.css";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
    <Link to="#" className="blog-card">
      <div className="card-image">
        <img
          src="https://www.myjapanesegreentea.com/wp-content/uploads/2023/05/brewing-coffee-in-a-kyusu-360x238.webp"
          alt=""
        />
      </div>
      <div className="card-content d-flex flex-column justify-content-between">
        <h3 className="d-flex align-items-center">Yaxşı çayı necə dəmləyək?</h3>
        <p className="d-flex align-items-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis,
          veritatis facere.
        </p>
        <div className="d-flex align-items-center read-continue">
          <small>Oxumağa davam et</small>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="16px"
            height="16px"
          >
            <path fill="#46670f" d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
          </svg>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;

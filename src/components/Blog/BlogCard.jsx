import "./Blog.css";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
    <Link to="#" className="blog-card">
      <div className="card-image" style={{background:"url('https://images.unsplash.com/photo-1510858519355-33a2c90cc73a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"}}>
        <div className="overlay"></div>
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

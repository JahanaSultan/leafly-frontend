import "./Footer.css";
import logo from "../../assets/img/logo1.png";
import { Link } from "react-router-dom";
import ArrowRight from "../SVG/ArrowRight";

const Footer = () => {
  return (
    <footer className="padding-x">
      <div className="d-flex justify-content-between">
        <Link to="/" className="logo d-flex align-items-center">
          <img src={logo} alt="" /> <h1>Purrengi</h1>
        </Link>
        <div className="left">
          <h3>Çaylar:</h3>
          <ul>
            <li>
              <Link to="#">
                <ArrowRight />
                Yeşil Çay
              </Link>
            </li>
            <li>
              <Link to="#">
                <ArrowRight />
                Qara Çay
              </Link>
            </li>
            <li>
              <Link to="#">
                <ArrowRight />
                Oolong Çay
              </Link>
            </li>
            <li>
              <Link to="#">
                <ArrowRight />
                Beyaz Çay
              </Link>
            </li>
            <li>
              <Link to="#">
                <ArrowRight />
                Pu-erh Çay
              </Link>
            </li>
          </ul>
        </div>
        <div className="right">
          <h3>Qəhvələr:</h3>
          <ul>
            <li>
              <Link to="#">Türk Qəhvəsi</Link>
            </li>
            <li>
              <Link to="#">Üyüdülmüş Qəhvə</Link>
            </li>
            <li>
              <Link to="#">Dənəvər Qəhvə</Link>
            </li>
          </ul>
        </div>
        <div className="honey">
          <h3>Ballar:</h3>
          <ul>
            <li>
              <Link to="#">Çiçək Balı</Link>
            </li>
            <li>
              <Link to="#">Cökə Balı</Link>
            </li>
            <li>
              <Link to="#">İtburnu Balı</Link>
            </li>
            <li>
              <Link to="#">Şabalıd Balı</Link>
            </li>
          </ul>
        </div>
        <div className="contact">
          <h3>Əlaqə</h3>
          <ul>
            <li>
              <Link to="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="20px"
                  height="20px"
                >
                  <path
                    fill="#eeaf00"
                    d="M9.36556 10.6821C10.302 12.3288 11.6712 13.698 13.3179 14.6344L14.2024 13.3961C14.4965 12.9845 15.0516 12.8573 15.4956 13.0998C16.9024 13.8683 18.4571 14.3353 20.0789 14.4637C20.599 14.5049 21 14.9389 21 15.4606V19.9234C21 20.4361 20.6122 20.8657 20.1022 20.9181C19.5723 20.9726 19.0377 21 18.5 21C9.93959 21 3 14.0604 3 5.5C3 4.96227 3.02742 4.42771 3.08189 3.89776C3.1343 3.38775 3.56394 3 4.07665 3H8.53942C9.0611 3 9.49513 3.40104 9.5363 3.92109C9.66467 5.54288 10.1317 7.09764 10.9002 8.50444C11.1427 8.9484 11.0155 9.50354 10.6039 9.79757L9.36556 10.6821ZM6.84425 10.0252L8.7442 8.66809C8.20547 7.50514 7.83628 6.27183 7.64727 5H5.00907C5.00303 5.16632 5 5.333 5 5.5C5 12.9558 11.0442 19 18.5 19C18.667 19 18.8337 18.997 19 18.9909V16.3527C17.7282 16.1637 16.4949 15.7945 15.3319 15.2558L13.9748 17.1558C13.4258 16.9425 12.8956 16.6915 12.3874 16.4061L12.3293 16.373C10.3697 15.2587 8.74134 13.6303 7.627 11.6707L7.59394 11.6126C7.30849 11.1044 7.05754 10.5742 6.84425 10.0252Z"
                  ></path>
                </svg>{" "}
                Telefon:
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyright text-center">
        <p>
          &copy; {new Date().getFullYear()} | <span>Leafly</span> | All Rights
          Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;

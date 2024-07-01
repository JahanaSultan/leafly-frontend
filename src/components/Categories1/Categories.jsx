import "./Categories.css";
import CategoryCard from "./CategoryCard";
import teacup from "../../assets/img/tea1.jpg";
import honey from "../../assets/img/choney.jpg";
// import coffee from "../../assets/img/coffee1.jpg";
import teaware from "../../assets/img/teaware.jpg";
import tea from "../../assets/img/teabg.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import greentea from "../../assets/img/greentea.png"
import coffee from "../../assets/img/coffeebg.png"
import coffee1 from "../../assets/img/cofspoon.png"
import { useRef } from "react";

const Categories = () => {

  useEffect(() => {
    AOS.init({
      duration: 2000
    });
  }
    , []);

  return (
    // <section className="categories d-flex">
    //   <CategoryCard text="Çaylar" img={teacup} />
    //   <CategoryCard text="Qəhvələr" img={coffee} />
    //   <CategoryCard text="Ballar" img={honey} />
    //   <CategoryCard text="Ləvazimatlar" img={teaware} />
    // </section>

    <header>


      <Splide options={{

        rewind: true,
      }} aria-label="My Favorite Images">
        <SplideSlide className="tea"> <h1 data-aos="zoom-in">Əsrarəngiz təbii çayın <br /> dadını çıxarmaq vaxtıdır</h1>
          <div className="clip-path " data-aos="fade-down">

          </div>
          <img src={tea} data-aos="fade-up" className="tea" alt="" />
          <img src={greentea} className="greentea-1" data-aos="fade-right" alt="" />
          <img src={greentea} className="greentea-2" data-aos="fade-left" alt="" />
        </SplideSlide>
        <SplideSlide className="coffee"> <h1 data-aos="zoom-in">Möhtəşəm aromanı <br /> hiss etməyin vaxtıdır</h1>
          <div className="clip-path " data-aos="fade-down">

          </div>
          <img src={coffee} data-aos="fade-up" className="coffee" alt="" />
          <img src={coffee1} className="greentea-1" data-aos="fade-right" alt="" />
          <img src={coffee1} className="greentea-2" data-aos="fade-right" alt="" />
        </SplideSlide>
      </Splide>
    </header>

  );
};

export default Categories;



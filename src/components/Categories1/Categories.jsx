import "./Categories.css";
import CategoryCard from "./CategoryCard";
import teacup from "../../assets/img/tea1.jpg";
import honey from "../../assets/img/choney.jpg";
import coffee from "../../assets/img/coffee1.jpg";
import teaware from "../../assets/img/teaware.jpg";
import tea from "../../assets/img/teabg.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';



const Categories = () => {
  useEffect(() => {
    AOS.init({
      offset: 500,
      delay: 10,
      duration: 1000,
      easing: 'ease',
      once: false,
      mirror: true,
    });
  }, [])
  return (
    // <section className="categories d-flex">
    //   <CategoryCard text="Çaylar" img={teacup} />
    //   <CategoryCard text="Qəhvələr" img={coffee} />
    //   <CategoryCard text="Ballar" img={honey} />
    //   <CategoryCard text="Ləvazimatlar" img={teaware} />
    // </section>

    <header>


      <Splide options={{
        type  : 'fade',
        rewind: true,
      }} aria-label="My Favorite Images">
        <SplideSlide>
          <img src={tea} alt="" />
        </SplideSlide>
      </Splide>
    </header>

  );
};

export default Categories;

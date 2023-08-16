import { Splide, SplideSlide } from '@splidejs/react-splide';
// Default theme
import '@splidejs/react-splide/css';


// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';


// or only core styles
import '@splidejs/react-splide/css/core';

function Header() {
  return (
      <Splide aria-label="My Favorite Images" options={{
        rewind: true,
        type:"fade",
        pagination: false,
        autoplay: true,
        speed: 500,
      }}>
        <SplideSlide>
            <div className="heading  padding-x">
              <h1 className='section-header'>Müalicəvi</h1>
              <h1 className='section-header'>Bitki Çayları!</h1>
              <button className="btn btn-primary">Çayları Kəşf Et</button>
            </div>
            <div className="walpapper tea"></div>
        </SplideSlide>
        <SplideSlide>
            <div className="heading padding-x">
              <h1 className='section-header'>Aromalı</h1>
              <h1 className='section-header'>Qəhvələr!</h1>
              <button className="btn btn-primary">Qəhvələri Kəşf Et</button>
            </div>
            <div className="walpapper coffee"></div>
        </SplideSlide>
        <SplideSlide>
            <div className="heading padding-x">
              <h1 className='section-header'>Organic</h1>
              <h1 className='section-header'>Ballar!</h1>
              <button className="btn btn-primary">Balları Kəşf Et</button>
            </div>
            <div className="walpapper honey"></div>
        </SplideSlide>
        <SplideSlide>
            <div className="heading padding-x">
              <h1 className='section-header'>Çay</h1>
              <h1 className='section-header'>Ləvazimatları!</h1>
              <button className="btn btn-primary">Qabları Kəşf Et</button>
            </div>
            <div className="walpapper teaware"></div>
        </SplideSlide>
 
      </Splide>
  )
}

export default Header
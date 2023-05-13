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
    <>
      {/* <header className="padding-x">
        
      </header> */}
      <Splide aria-label="My Favorite Images" options={{
        rewind: true,
        type:"fade",
        pagination: false,
        autoplay: true,
        speed: 500,
      }}>
        <SplideSlide>
          <header className='teaheader'>
            <div className="overlay padding-x">
              <h1 className='section-header'>Organic</h1>
              <h1 className='section-header'>Bitki Çayları!</h1>
              {/* <p>Çaylarımızın ən yaxşı tərkiblərini sizə təqdim edirik. </p>
              <p> Faydalı çay içərək özünüzü mükafatlandırmağın tam vaxtıdır.  </p> */}
              <button className="btn btn-primary">Çayları Kəşf Et</button>
            </div>
          </header>
        </SplideSlide>
        <SplideSlide>
          <header className='honeyheader'>
            <div className="overlay padding-x">
              <h1 className='section-header'>Organic</h1>
              <h1 className='section-header'>Bal Məhsulları!</h1>
              {/* <p>Bal məhsullarımızın ən yaxşı tərkiblərini sizə təqdim edirik. </p>
              <p> Faydalı bal məhsulları ilə özünüzü mükafatlandırmağın tam vaxtıdır.  </p> */}
              <button className="btn btn-primary">Balları Kəşf Et</button>
            </div>
          </header>
        </SplideSlide>
      </Splide>

    </>
  )
}

export default Header
import "./Instagram.css";
import SectionHeading from "../SectionHeading/SectionHeading";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

const Instagram = () => {
  return (
    <>
      <SectionHeading text="Biz Instagramda" />
      <div className="carousel">
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={125}
          totalSlides={12}
          visibleSlides={6}
        >
          <Slider>
            <Slide index={0}>
              <img
                src="https://hips.hearstapps.com/hmg-prod/images/close-up-of-stack-gifts-on-table-against-blue-royalty-free-image-1676327737.jpg"
                alt=""
              />
              <div className="overlay flex-center">
                <button>Posta Keçid Et</button>
              </div>
            </Slide>
            <Slide index={1}>
              <img
                src="https://www.bestgiftcertificates.com.au/content/images/thumbs/0016200_gourmet-hampers.png"
                alt=""
              />
            </Slide>
            <Slide index={2}>
              <img
                src="https://www.bestgiftcertificates.com.au/content/images/thumbs/0016200_gourmet-hampers.png"
                alt=""
              />
            </Slide>
            <Slide index={3}>
              <img
                src="https://www.bestgiftcertificates.com.au/content/images/thumbs/0016200_gourmet-hampers.png"
                alt=""
              />
            </Slide>
            <Slide index={4}>
              <img
                src="https://www.bestgiftcertificates.com.au/content/images/thumbs/0016200_gourmet-hampers.png"
                alt=""
              />
            </Slide>
            <Slide index={5}>
              <img
                src="https://www.bestgiftcertificates.com.au/content/images/thumbs/0016200_gourmet-hampers.png"
                alt=""
              />
            </Slide>
            <Slide index={6}>
              <img
                src="https://www.bestgiftcertificates.com.au/content/images/thumbs/0016200_gourmet-hampers.png"
                alt=""
              />
            </Slide>
            <Slide index={7}>
              <img
                src="https://www.bestgiftcertificates.com.au/content/images/thumbs/0016200_gourmet-hampers.png"
                alt=""
              />
            </Slide>
            <Slide index={8}>
              <img
                src="https://www.bestgiftcertificates.com.au/content/images/thumbs/0016200_gourmet-hampers.png"
                alt=""
              />
            </Slide>
            <Slide index={9}>
              <img
                src="https://www.bestgiftcertificates.com.au/content/images/thumbs/0016200_gourmet-hampers.png"
                alt=""
              />
            </Slide>
            <Slide index={10}>
              <img
                src="https://www.bestgiftcertificates.com.au/content/images/thumbs/0016200_gourmet-hampers.png"
                alt=""
              />
            </Slide>
          </Slider>
        </CarouselProvider>
      </div>
    </>
  );
};

export default Instagram;

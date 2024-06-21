/** @format */

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Image } from "react-bootstrap";
import Slider from "react-slick";
import itemCar1 from "../../images/item-car-1.jpg";
import itemCar2 from "../../images/item-car-2.jpg";
import itemCar3 from "../../images/item-car-3.jpg";
import itemCar4 from "../../images/item-car-4.jpg";
import itemCar5 from "../../images/item-car-5.jpg";
import itemCar6 from "../../images/item-car-6.jpg";

const SliderHome = () => {
  const images = [
    { src: itemCar1, alt: "por Olav Tvedt" },
    { src: itemCar2, alt: "por Aaron Huber" },
    { src: itemCar3, alt: "por Stefan Rodriguez" },
    { src: itemCar4, alt: "por Tyler Clemmensen" },
    { src: itemCar5, alt: "por Blake Meyer" },
    { src: itemCar6, alt: "por Campbell" },
  ];
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <Container className="mx-auto">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <Image src={image.src} alt={image.alt} fluid/>
          </div>
        ))}
      </Slider>
    </Container>
  );
};

export default SliderHome;

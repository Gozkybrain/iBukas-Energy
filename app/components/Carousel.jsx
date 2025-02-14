"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const Carousel = () => {
  const settings = {
    dots: false, 
    infinite: true, 
    speed: 500, 
    slidesToShow: 6, 
    slidesToScroll: 1, 
    autoplay: true, 
    autoplaySpeed: 3000, 
    responsive: [
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div>
          <Image src="/images/arnergy-logo.png" alt="Slide 2" width={800} height={400} className="carousel-image" />
        </div>
        <div>
          <Image src="/images/elecnova.png" alt="Slide 3" width={800} height={400} className="carousel-image" />
        </div>
        <div>
          <Image src="/images/Powercell_Logo_Alt.png" alt="Slide 1" width={800} height={400} className="carousel-image" />
        </div>
        <div>
          <Image src="/images/rubitec.png" alt="Slide 3" width={800} height={400} className="carousel-image" />
        </div>
        <div>
          <Image src="/images/sky-power.png" alt="Slide 1" width={800} height={400} className="carousel-image" />
        </div>
        <div>
          <Image src="/images/SolarForce-logo-1.png" alt="Slide 3" width={800} height={400} className="carousel-image" />
        </div>
        <div>
          <Image src="/images/logo-solynta-white.png" alt="Slide 1" width={800} height={400} className="carousel-image" />
        </div>
        <div>
          <Image src="/images/supro-battery.png" alt="Slide 3" width={800} height={400} className="carousel-image" />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;

"use client";

import { useRouter } from "next/navigation";
import Carousel from "./components/Carousel";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faLeaf } from "@fortawesome/free-solid-svg-icons";
import useInView from "./hooks/useInView";

export default function Home() {
  const router = useRouter();

  // Animations
  const [heroRef, heroInView] = useInView();
  const [heroTextRef, heroTextInView] = useInView();
  const [btnRef, btnInView] = useInView();
  const [headingRef, headingInView] = useInView();
  const [subHeadingRef, subHeadingInView] = useInView();
  const [mainTextRef, mainTextInView] = useInView();
  const [contactBtnRef, contactBtnInView] = useInView();
  const [icon1Ref, icon1InView] = useInView();
  const [icon2Ref, icon2InView] = useInView();
  const [imageRef, imageInView] = useInView();

  return (
    <>
      {/* Hero Section */}
      <div className="hero-section">
        <div className="overlay">
          <div className="content">
            <h2 ref={heroRef} className={`hero-head animate__animated ${heroInView ? "animate__fadeInUp" : ""}`}>
              Ready to take the Solar Step?
            </h2>
            <div ref={heroTextRef} className={`hero-text animate__animated ${heroTextInView ? "animate__fadeInUp animate__delay-1s" : ""}`}>
              Our Solar Calculator gives you real-time estimates on how much solar can cut your electricity bills.
              No sales pitch, just clear numbers.
              Find out how much power your roof can generate today.
            </div>

            <button
              ref={btnRef}
              className={`hero-btn animate__animated ${btnInView ? "animate__fadeInUp animate__delay-2s" : ""}`}
              onClick={() => router.push("/calculator")}
            >
              Start Calculation
            </button>
          </div>
        </div>
      </div>

      {/* Carousel Section */}
      <Carousel />

      {/* Two-Column Section */}
      <div className="info-section">
        {/* Left Column (Icons + Text) */}
        <div className="info-left">
          <h4 ref={headingRef} className={`heading animate__animated ${headingInView ? "animate__fadeInUp" : ""}`}>
            Why Choose Solar Energy?
          </h4>
          <h2 ref={subHeadingRef} className={`animate__animated ${subHeadingInView ? "animate__fadeInUp" : ""}`}>
            Leading Nigeria to a Clean Energy Future.
          </h2>
          <div ref={mainTextRef} className={`main-text animate__animated ${mainTextInView ? "animate__fadeInUp" : ""}`}>
            Switching to solar is a smart investment that saves money and helps the environment.
            With our new solar calculator, you can get real-time insights into how much you could save by switching to solar.
            It helps you estimate energy efficiency, potential cost reductions, and environmental impact based on your location and energy usage.
          </div>
          <button
            ref={contactBtnRef}
            className={`contact-btn animate__animated ${contactBtnInView ? "animate__fadeInUp" : ""}`}
            onClick={() => router.push("/contact")}
          >
            Contact Us
          </button>

          {/* Icons and text in a row */}
          <div className="info-row">
            {/* First Item */}
            <div ref={icon1Ref} className={`info-item animate__animated ${icon1InView ? "animate__fadeInUp animate__delay-1s" : ""}`}>
              <FontAwesomeIcon icon={faBolt} className="info-icon" style={{ fontSize: "40px" }} />
              <div>
                <h3>Energy Efficiency</h3>
                <>Systems designed to last.</>
              </div>
            </div>
            {/* Second Item */}
            <div ref={icon2Ref} className={`info-item animate__animated ${icon2InView ? "animate__fadeInUp animate__delay-1s" : ""}`}>
              <FontAwesomeIcon icon={faLeaf} className="info-icon" style={{ fontSize: "40px" }} />
              <div>
                <h3>Eco-Friendly</h3>
                <>Protect the environment.</>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column (Image) */}
        <div className="info-right">
          <Image
            ref={imageRef}
            src="/images/storefront.webp"
            alt="Solar Energy"
            width={500}
            height={400}
            className={`animate__animated ${imageInView ? "animate__zoomIn" : ""}`}
          />
        </div>
      </div>

      another page content
    </>
  );
}

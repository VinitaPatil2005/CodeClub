import React, { useState, useEffect, useRef } from "react";
import Navbar from "./Navbar"; // Import Navbar component
import About from "./About"; 
import Events from "./Event";
import Registration from "./Registration"; 
import Team from "./Team"; 
import Achievement from "./Achivement"; 

import "../styles/Home.css";
import logo from "../assets/logo.png";
import photo from "../assets/photo1.jpg";
import photoo from "../assets/photo2.jpg";
import photooo from "../assets/photo3.jpg";

const Home = () => {
  const headingText = "Welcome to the CodeClub";
  const paragraphText =
    "Empowering students through technology and collaboration.";

  const [headingIndex, setHeadingIndex] = useState(0);
  const [paragraphIndex, setParagraphIndex] = useState(0);
  const [displayedHeading, setDisplayedHeading] = useState("");
  const [displayedParagraph, setDisplayedParagraph] = useState("");
  const [isBannerVisible, setIsBannerVisible] = useState(false);

  const bannerRef = useRef();
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    if (headingIndex < headingText.length) {
      const headingTimeout = setTimeout(() => {
        setDisplayedHeading((prev) => prev + headingText[headingIndex]);
        setHeadingIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(headingTimeout);
    }
  }, [headingIndex, headingText]);

  useEffect(() => {
    if (
      headingIndex === headingText.length &&
      paragraphIndex < paragraphText.length
    ) {
      const paragraphTimeout = setTimeout(() => {
        setDisplayedParagraph((prev) => prev + paragraphText[paragraphIndex]);
        setParagraphIndex((prev) => prev + 1);
      }, 50);
      return () => clearTimeout(paragraphTimeout);
    }
  }, [paragraphIndex, paragraphText, headingIndex]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsBannerVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (bannerRef.current) {
      observer.observe(bannerRef.current);
    }

    return () => {
      if (bannerRef.current) {
        observer.unobserve(bannerRef.current);
      }
    };
  }, []);

  const handlePhotoClick = (photo) => {
    setModalImage(photo);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Home Section */}
      <section id="home" className="home">
        <div className="home-overlay"></div>
        <div className="home-content">
          <h1>{displayedHeading}</h1>
          <p>{displayedParagraph}</p>
        </div>
      </section>

      

      {/* Banner Section */}
      <section
        id="banner"
        className={`banner ${isBannerVisible ? "visible" : ""}`}
        ref={bannerRef}
      >
        <div className="banner-left">
          <img src={logo} alt="Club Logo" className="club-logo" />
          <p className="club-mission">
            Our mission is to foster creativity, collaboration, and innovation
            among students through technology.
          </p>
        </div>

        <div className="banner-right">
          <img
            src={photo}
            alt="Photo 1"
            className="banner-photo"
            onClick={() => handlePhotoClick(photo)}
          />
          <img
            src={photoo}
            alt="Photo 2"
            className="banner-photo"
            onClick={() => handlePhotoClick(photoo)}
          />
          <img
            src={photooo}
            alt="Photo 3"
            className="banner-photo"
            onClick={() => handlePhotoClick(photooo)}
          />
        </div>

        {/* Animated Square in the Right Section */}
        <div className="shape square"></div>
      </section>
      {/* About Section */}
      <section id="about" className="about-section">
        <About />
      </section>

      {/* Events Section */}
      <section id="events" className="events-section">
        <Events />
      </section>

      {/* Registration Section */}
      <section id="registration" className="registration-section">
        <Registration />
      </section>

      {/* Team Section */}
      <section id="team" className="team-section">
        <Team />
      </section>

      {/* Achievement Section */}
      <section id="achievement" className="achievement-section">
        <Achievement />
      </section>

      {/* Modal */}
      {modalImage && (
        <div className="photo-modal open" onClick={closeModal}>
          <img src={modalImage} alt="Modal View" />
          <span className="close-button" onClick={closeModal}>
            &times;
          </span>
        </div>
      )}
    </div>
  );
};

export default Home;

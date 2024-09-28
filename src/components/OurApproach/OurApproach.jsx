import React, { useRef, useEffect } from 'react';
import './OurApproach.css';
import sampleImage from '../../assets/crousalImage.png'; 
import image2 from '../../assets/image2.png'; 
const OurApproach = () => {
  const carouselRef = useRef(null);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (carouselRef.current) {
  //       const carousel = carouselRef.current;
  //       const bsCarousel = new window.bootstrap.Carousel(carousel);
  //       bsCarousel.next();
  //     }
  //   }, 10000);

  //   return () => clearInterval(interval);
  // }, []);

  const handlePrev = () => {
    if (carouselRef.current) {
      const carousel = carouselRef.current;
      const bsCarousel = new window.bootstrap.Carousel(carousel);
      bsCarousel.prev();
    }
  };

  const handleNext = () => {
    if (carouselRef.current) {
      const carousel = carouselRef.current;
      const bsCarousel = new window.bootstrap.Carousel(carousel);
      bsCarousel.next();
    }
  };

  return (
    <div className="container-fluid approach-section">
      <h2 className="text-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="140" height="4" viewBox="0 0 140 4" fill="none">
          <path d="M0 2H140" stroke="#222831" stroke-width="3"/>
        </svg>
        OUR APPROACH
        <svg xmlns="http://www.w3.org/2000/svg" width="140" height="4" viewBox="0 0 140 4" fill="none">
          <path d="M0 2H140" stroke="#222831" stroke-width="3"/>
        </svg>
      </h2>
      <p className="text-center">
        We've formatted SOLARGAGA into the GAGA Exchange and GAGA Portal in order to organise workload into simple tasks
      </p>
      <div id="carouselExample" className="carousel slide approach-content" data-bs-ride="carousel" ref={carouselRef}>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={sampleImage} className="d-block w-100" alt="..." />
            <div className="overlay">
            <div className="vertical-line2"></div>
              <div className="text">
                <h3>GAGA Portal</h3>
                <p>Ensuring project quality and longevity, our portal empowers owners to manage systems and provides buyers with crucial insights for sustainability goals.</p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img src={image2} className="d-block w-100" alt="..." />
            <div className="overlay">
            <div className="vertical-line2"></div>
              <div className="text">
                <h3>GAGA Exchange</h3>
                <p>Efficient trading, streamlined processes, maximized returns through our marketplace and working with our expert analysts.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="carousel-controls text-center">
        <button className="btn btn-light" onClick={handlePrev}><i className="bi bi-chevron-left"></i></button>
        <button className="btn btn-light" onClick={handleNext}><i className="bi bi-chevron-right"></i></button>
      </div>
    </div>
  );
}

export default OurApproach;

import React, { useEffect, useState } from "react";
import "./css/BannerS.css"

const BannerSection = () => {
  const [slides, setSlides] = useState([]);
  const [selectedSlide, setSelectedSlide] = useState(0);
  const slideIntervalDuration = 4000; // 4 seconds for automatic slide change
  useEffect(() => {
    // Fetch the slides data
    fetch(`${process.env.REACT_APP_CMS_URL1}slider?fields=*.*.*`)
      .then(response => response.json())
      .then(data => { 
        // Assuming the slides array is in the data property
        const apiSlides = data.data || [];
        setSlides(apiSlides);
      })
      .catch(error => console.error('Error:', error));

    // Function to start the interval
    const startSlideInterval = () => {
      return setInterval(() => {
        setSelectedSlide(prevSlide => (prevSlide + 1) % slides.length); // Infinite loop
      }, slideIntervalDuration);
    };

    // Start the interval when the component mounts
    const slideInterval = startSlideInterval();

    // Cleanup on unmount
    return () => clearInterval(slideInterval);
  }, [slides.length]); // Ensure the effect runs when slides are fetched or updated

  // Function to handle manual slide change (optional, if you still want controls)
  const handleManualChange = (direction) => {
    setSelectedSlide(prevSlide => {
      let newSlide = direction === "next" ? prevSlide + 1 : prevSlide - 1;
      if (newSlide < 0) newSlide = slides.length - 1; // Go to last slide if moving prev on first slide
      if (newSlide >= slides.length) newSlide = 0; // Go to first slide if moving next on last slide
      return newSlide;
    });
  };

  return (
    <>
      <div className="container-fluid p-0">
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            {slides.map((_, index) => (
              <li
                key={index}
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={index}
                className={index === selectedSlide ? 'active' : ''}
              ></li>
            ))}
          </ol>
          <div className="carousel-inner" role="listbox">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`carousel-item ${index === selectedSlide ? 'active' : ''}`}
                data-bs-interval="false"
              >
                <img
                  src={slide.image.data.full_url?.replace('http://', 'https://')}
                  className="d-block w-100"
                  alt={`Slide ${index}`}
                />
              </div>
            ))}
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button" data-slide="prev"
            onClick={() => handleManualChange("prev")}
          >
            <span className="carousel-control-prev-icon jj" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
            onClick={() => handleManualChange("next")}
          >
            <span className="carousel-control-next-icon jj" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default BannerSection;

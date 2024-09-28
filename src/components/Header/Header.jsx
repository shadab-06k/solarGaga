import React, { useContext, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import houseImage from "../../assets/house.png";
import contactImage from "../../assets/contactUsNew.png";
import companyImage from "../../assets/companyImage.png";
import guideImage from "../../assets/guideImage.png";
import insightImage from "../../assets/insightImage.png";
import gagaportalImage from "../../assets/gagaportal.png";
import exchangeVideo from "../../assets/Video.mp4";
import portalVideo from "../../assets/Video_1.mp4";
import arrowImage from "../../assets/Arrow 4.svg";
import img1Image from "../../assets/img1.png";
import img2Image from "../../assets/img2.png";
import img3Image from "../../assets/img3.png";
import pdfFile from "../../assets/solar.pdf";
import "./Header.css";
import { motion } from "framer-motion";
import PopUp from "../PopUp";
import { SolarGagaContext } from "../../SolarGagaContext";

const Header = () => {
  // const { jwtToken } = useContext(SolarGagaContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [showPopup, setShowPopup] = useState(false);
  const images = [
    { src: img1Image, alt: "apple", className: "item-react" },
    { src: img2Image, alt: "Google", className: "item-react" },
    { src: img3Image, alt: "Amazon", className: "item-react-3" },
  ];

  const handleClick = () => {
    const data = sessionStorage.getItem("authToken");
    if (!data) {
      console.log("No token found for Header jsx");
      return navigate("/signin"); // Use return to stop further execution
    }
    navigate("/our-showroom");
  };

  const wrapLetters = (text) => {
    return Array.from(text).map((char, index) => (
      <span
        key={index}
        className="animated-letter"
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        {char}
      </span>
    ));
  };
  const wrapLines = (text) => {
    return text.split("\n").map((line, lineIndex) => (
      <React.Fragment key={lineIndex}>
        <span className="line-wrapper">
          <span className="line" data-text={line}>
            {line.split(" ").map((word, wordIndex) => (
              <span key={wordIndex} className="word">
                {word + " "}
              </span>
            ))}
          </span>
        </span>
        {lineIndex < text.split("\n").length - 1 && (
          <span className="line-break" key={`lb-${lineIndex}`}></span>
        )}
      </React.Fragment>
    ));
  };
  // const handleButtonClick = () => {
  //   window.open(pdfFile, '_blank');
  // };
  const renderContent = () => {
    let content = null;
    switch (location.pathname) {
      case "/":
        content = (
          <div>
            <h1 className="text21 page__text">
              {wrapLines("All In One Green\nEnergy Techtool.")}
            </h1>
            <p>
              Simplifying RECs, Carbon Trading Efficiency, and Smart Digital
              Renewable Management while Ensuring Data Privacy and Transparency
              for All Users.
            </p>
          </div>
        );
        break;
      case "/contactUs":
        content = (
          <div>
            <h1>{wrapLetters("Reach Out To Us")}</h1>
            <p>Get our Help for a Direct Journey to Reach your Destination</p>
          </div>
        );
        break;
      case "/contactUs/":
        content = (
          <div>
            <h1>{wrapLetters("Reach Out To Us")}</h1>
            <p>Get our Help for a Direct Journey to Reach your Destination</p>
          </div>
        );
        break;
      case "/contactUs/":
        content = (
          <div>
            <h1>{wrapLetters("Reach Out To Us")}</h1>
            <p>Get our Help for a Direct Journey to Reach your Destination</p>
          </div>
        );
        break;
      case "/company":
        content = (
          <div>
            <h1>{wrapLetters("Next Generation Environmental Advocates")}</h1>
            <p>
              Innovation is at our core, prioritizing user comfort through
              personalized, data-driven solutions continuous development.
            </p>
          </div>
        );
        break;
      case "/company/":
        content = (
          <div>
            <h1>{wrapLetters("Next Generation Environmental Advocates")}</h1>
            <p>
              Innovation is at our core, prioritizing user comfort through
              personalized, data-driven solutions continuous development.
            </p>
          </div>
        );
        break;
      case "/guide":
        content = (
          <div>
            <h1>{wrapLetters("Access Our Comprehensive Guide Library")}</h1>
            <p>Providing Helpful Resources to Ease Your Journey with Us</p>
          </div>
        );
        break;
      case "/guide/":
        content = (
          <div>
            <h1>{wrapLetters("Access Our Comprehensive Guide Library")}</h1>
            <p>Providing Helpful Resources to Ease Your Journey with Us</p>
          </div>
        );
        break;
      case "/insight":
        content = (
          <div>
            <h1>{wrapLetters("Keep Up with the Latest Events")}</h1>
            <p>Updating you on Significant, Relevant News and Events</p>
          </div>
        );
        break;
      case "/insight/":
        content = (
          <div>
            <h1>{wrapLetters("Keep Up with the Latest Events")}</h1>
            <p>Updating you on Significant, Relevant News and Events</p>
          </div>
        );
        break;
      default:
        content = (
          <div>
            <h1>{wrapLetters("GAGA Portal")}</h1>
            <p>
              Streamline management and scheduling maintenance with our
              transparent public database
            </p>
          </div>
        );
        break;
    }
    return <div key={location.pathname}>{content}</div>;
  };

  const renderImage = () => {
    switch (location.pathname) {
      case "/":
        return houseImage;
      case "/contactUs":
        return contactImage;
      case "/contactUs/":
        return contactImage;
      case "/company":
        return companyImage;
      case "/company/":
        return companyImage;
      case "/guide":
        return guideImage;
      case "/guide/":
        return guideImage;
      case "/insight":
        return insightImage;
      case "/insight/":
        return insightImage;
      case "/gagaportal":
        return gagaportalImage;
      case "/gagaportal/":
        return gagaportalImage;
      default:
        return houseImage;
    }
  };

  const getBackgroundClass = () => {
    switch (location.pathname) {
      case "/gagaportal":
        return "gagaportalheader";
      case "/gagaportal/":
        return "gagaportalheader";
      case "/contactUs":
        return "contactUsheader";
      case "/contactUs/":
        return "contactUsheader";
      case "/company":
        return "companyheader";
      case "/company/":
        return "companyheader";
      case "/guide":
        return "guideheader";
      case "/guide/":
        return "guideheader";
      case "/insight":
        return "insightheader";
      case "/insight/":
        return "insightheader";
      default:
        return "homeheader";
    }
  };

  return (
    <div className={`container-fluid header1 ${getBackgroundClass()}`}>
      {showPopup && <PopUp onClose={() => setShowPopup(false)} />}{" "}
      {/* Render the popup if showPopup is true */}
      <div className="header">
        <div className="left-div">
          <div className="container header-mainCard">{renderContent()}</div>
          {(location.pathname === "/company" ||
            location.pathname === "/company/") && (
            <div className="button-container">
              <a href={pdfFile} download>
                <button>
                  LINK TO INTRODUCTRY
                  <svg
                    className="button-svg"
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="14"
                    viewBox="0 0 19 16"
                    fill="none"
                  >
                    <path
                      d="M18.7071 8.70711C19.0976 8.31658 19.0976 7.68342 18.7071 7.29289L12.3431 0.928932C11.9526 0.538408 11.3195 0.538408 10.9289 0.928932C10.5384 1.31946 10.5384 1.95262 10.9289 2.34315L16.5858 8L10.9289 13.6569C10.5384 14.0474 10.5384 14.6805 10.9289 15.0711C11.3195 15.4616 11.9526 15.4616 12.3431 15.0711L18.7071 8.70711ZM0 9H18V7H0V9Z"
                      fill="#393E46"
                    />
                  </svg>
                </button>
              </a>
            </div>
          )}
          {(location.pathname === "/gagaportal" ||
            location.pathname === "/gagaportal/") && (
            <div className="button-container">
              <button onClick={() => handleLinkClick("/contactUs")}>
                CONTACT US{" "}
              </button>
            </div>
          )}
          {location.pathname === "/" && (
            <div className="container portal-exchange">
              <div className="col-md-5 card portal-card">
                <video className="card-img-top" autoPlay loop muted>
                  <source src={portalVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="card-body">
                  <h5 className="card-title">GAGA Portal</h5>
                  <span>
                    Streamline management and scheduling maintenance with our
                    transparent public database
                  </span>
                  <p
                    className="card-text"
                    onClick={() => handleClick("/")}
                    style={{ cursor: "pointer" }}
                  >
                    Analyze <img src={arrowImage} alt="Arrow" />
                  </p>
                </div>
              </div>
              <div className="col-md-5 card exchange-card">
                <video className="card-img-top" autoPlay loop muted>
                  <source src={exchangeVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="card-body">
                  <h5 className="card-title">GAGA Exchange</h5>
                  <span>
                    Optimised Carbon marketplace, simplified processes—trade and
                    register with us for best results.
                  </span>
                  <p
                    className="card-text"
                    onClick={() => handleClick()}
                    style={{ cursor: "pointer" }}
                  >
                    Navigate <img src={arrowImage} alt="Arrow" />
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="right-div">
          <img src={renderImage()} alt="Route specific" className="img-fluid" />
        </div>
      </div>
      {location.pathname === "/" && (
        <footer className="container text-center footer-header">
          <p>Trusted By pioneers of Singapore's solar energy growth</p>
          {/* <div className="carousel-wrapper-react">
            <div className="carousel-react">
            {Array.from({ length: 100 }).map((_, index) =>
          images.map((image, imgIndex) => (
            <div key={`${index}-${imgIndex}`} className={image.className}>
              <img src={image.src} alt={image.alt} />
            </div>
          ))
        )}
            </div>
          
          </div> */}
          <div className="d-flex container overflow-hidden">
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="d-flex flex-nowrap"
            >
              {images.concat(images).map((image, index) => (
                <img
                  src={image.src}
                  key={index}
                  className="flex-shrink-0  marquee-img"
                />
              ))}
            </motion.div>
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="d-flex flex-nowrap"
            >
              {images.concat(images).map((image, index) => (
                <img
                  src={image.src}
                  key={index}
                  className="flex-shrink-0 marquee-img"
                />
              ))}
            </motion.div>
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="d-flex flex-nowrap"
            >
              {images.concat(images).map((image, index) => (
                <img
                  src={image.src}
                  key={index}
                  className="flex-shrink-0 marquee-img"
                />
              ))}
            </motion.div>
          </div>
        </footer>
      )}
    </div>
  );
};

export default Header;

import React, { useEffect, useState, useRef } from 'react';
import $ from 'jquery';
import { useNavigate } from 'react-router-dom';
import './AboutUs.css';
import rect2Image from '../../assets/about-house.png';
import visionImage from '../../assets/Vision.gif';
import cardImage from '../../assets/card.png';
import cardImage2 from '../../assets/image 64.png';
import contactgif from '../../assets/contactgif.gif';
import OurTeam from '../OurTeam/OurTeam';
import FAQ from '../FAQ2/FAQ2';

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState('vision');
  const [counted, setCounted] = useState(false);
  const h2Ref = useRef(null);
  const pRef = useRef(null);
  const aboutUsImageWrapperRef = useRef(null);
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/contactUs');
  };
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target === h2Ref.current) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
          } else if (entry.target === pRef.current) {
            setTimeout(() => {
              entry.target.classList.add('show');
            }, 200); // Delay to ensure h2 animation completes first
            observer.unobserve(entry.target);
          } else if (entry.target === aboutUsImageWrapperRef.current) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    if (h2Ref.current) {
      observer.observe(h2Ref.current);
    }
    if (pRef.current) {
      observer.observe(pRef.current);
    }
    if (aboutUsImageWrapperRef.current) {
      observer.observe(aboutUsImageWrapperRef.current);
    }

    return () => {
      if (h2Ref.current) {
        observer.unobserve(h2Ref.current);
      }
      if (pRef.current) {
        observer.unobserve(pRef.current);
      }
      if (aboutUsImageWrapperRef.current) {
        observer.unobserve(aboutUsImageWrapperRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const oTop = $('#counter').offset().top - window.innerHeight;
      if (!counted && $(window).scrollTop() > oTop) {
        $('.count').each(function () {
          const $this = $(this);
          const countTo = $this.attr('data-count');
          $({ countNum: $this.text() }).animate(
            {
              countNum: countTo,
            },
            {
              duration: 2000,
              easing: 'swing',
              step: function () {
                $this.text(Math.floor(this.countNum));
              },
              complete: function () {
                $this.text(this.countNum);
              },
            }
          );
        });
        setCounted(true);
      }
    };

    $(window).on('scroll', handleScroll);
    return () => {
      $(window).off('scroll', handleScroll);
    };
  }, [counted]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="about-us-section">
      <h1 className='about-us-h1'>
        <svg xmlns="http://www.w3.org/2000/svg" width="140" height="4" viewBox="0 0 140 4" fill="none">
          <path d="M0 2H140" stroke="#222831" strokeWidth="3" />
        </svg>
        WHO ARE WE?
        <svg xmlns="http://www.w3.org/2000/svg" width="140" height="4" viewBox="0 0 140 4" fill="none">
          <path d="M0 2H140" stroke="#222831" strokeWidth="3" />
        </svg>
      </h1>
      <div className="about-us-content">
        <div id="counter" className="about-us-image-wrapper" ref={aboutUsImageWrapperRef}>
          <img src={rect2Image} alt="SolarGap House" className="about-us-image" />
          <div className="stats-overlay">
            <div className="stat-item">
              <p>Working with</p>
              <h3 className="count" data-count="5000">0</h3>
              <p>Renewable Systems</p>
            </div>
            <div className="stat-item">
              <p>Maintained by</p>
              <h3 className="count" data-count="55">0</h3>
              <p>Professionals</p>
            </div>
          </div>
        </div>
        <div className="about-us-text">
          <div className="vertical-line"></div>
          <div>
            <h2 ref={h2Ref}>What is SolarGaga?</h2>
            <p ref={pRef}>
              Our mission is to craft an innovative platform that serves as a transparent and advanced trading exchange, negotiating high-quality, verified portfolios. Complemented by our integrated portal system, system owners can effectively manage maintenance, warranties, and system tracking, ensuring both longevity and quality. We prioritize transparent data presentation for business while safeguarding the privacy of system owners.
            </p>
          </div>
        </div>
      </div>

      {/* Vision & Values Section */}
      <div className="vision-values-section">
        <h1>
          <svg xmlns="http://www.w3.org/2000/svg" width="140" height="4" viewBox="0 0 140 4" fill="none">
            <path d="M0 2H140" stroke="#222831" strokeWidth="3" />
          </svg>
          OUR VISION
          <svg xmlns="http://www.w3.org/2000/svg" width="140" height="4" viewBox="0 0 140 4" fill="none">
            <path d="M0 2H140" stroke="#222831" strokeWidth="3" />
          </svg>
        </h1>
        {/* <div className="vision-values-tabs">
          <button className={activeTab === 'vision' ? 'active-tab' : ''} onClick={() => handleTabClick('vision')}>Our Vision</button>
          <button className={activeTab === 'values' ? 'active-tab' : ''} onClick={() => handleTabClick('values')}>Our Values</button>
        </div> */}
        {activeTab === 'vision' ? (
          <div className="vision-values-content">
            <div>
              <div className="vision-value-card"><h4>Growth </h4> <p>Collaborating to create lasting, high-quality renewable energy projects.</p></div>
              <div className="vision-value-card"><h4>Innovation </h4> <p>Innovating a platform engineered for advanced sustainability solutions.</p></div>
            </div>
            <div>
              <div className="vision-value-card"><h4>Network </h4> <p>Creating a collaborative network connecting project developers, owners, and buyers.</p></div>
              <div className="vision-value-card"><h4>Involve </h4> <p>Engaging in the greater good by promoting sustainable and green solutions.</p></div>
            </div>
            <div className="vision-icon"><img src={visionImage} alt="Vision" /></div>
          </div>
        ) : (
          <div className="vision-values-content">
            <div>
              <div className="vision-value-card"><h4>Integrity </h4> <p>Upholding the highest standards in our operations and relationships.</p></div>
              <div className="vision-value-card"><h4>Integrity </h4> <p>Upholding the highest standards in our operations and relationships.</p></div>
            </div>
            <div>
              <div className="vision-value-card"><h4>Integrity </h4> <p>Upholding the highest standards in our operations and relationships.</p></div>
              <div className="vision-value-card"><h4>Integrity </h4> <p>Upholding the highest standards in our operations and relationships.</p></div>
            </div>
            <div className="vision-icon"><img src={visionImage} alt="Vision" /></div>
          </div>
        )}
      </div>

      {/* Get Help Navigating Section */}
      <div className="get-help-section">
        <h1>
          <svg xmlns="http://www.w3.org/2000/svg" width="140" height="4" viewBox="0 0 140 4" fill="none">
            <path d="M0 2H140" stroke="#222831" strokeWidth="3" />
          </svg>
          GET HELP NAVIGATING
          <svg xmlns="http://www.w3.org/2000/svg" width="140" height="4" viewBox="0 0 140 4" fill="none">
            <path d="M0 2H140" stroke="#222831" strokeWidth="3" />
          </svg>
        </h1>
        <div className="help-cards">
          <div className="help-card">
            <img src={cardImage} alt="Sustainability Goals" className="help-image" />
            <div className="help-text">
              <h2>Need to Meet Your Sustainability Goals?</h2>
              <p>Let us direct your journey based on your requirements you need to fulfill, we will come up with a solution.</p>
            </div>
          </div>
          <div className="help-card">
            <img src={cardImage2} alt="Register for RECs" className="help-image" />
            <div className="help-text">
              <h2>Need Your System To Be Registered for RECs?</h2>
              <p>All we require is some documents and verification from your part and you will be entitled to regular payouts accordingly.</p>
            </div>
          </div>
        </div>
        <div className="contact-us-div">
          <div>
            <img src={contactgif} alt="Contact us" />
          </div>
          <div>
            <h4>Contact us for the best possible results.</h4>
          </div>
          <div>
            <p>By contacting us, you ensure that you receive top-notch service tailored to your needs, driven by our dedication and expertise.</p>
            <button onClick={handleRedirect}>Contact Us</button>
          </div>
        </div>
      </div>
      <OurTeam />
      <FAQ />
    </div>
  );
};

export default AboutUs;

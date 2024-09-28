import React, { useRef, useState, useEffect } from 'react';
import rectImage from '../../assets/Rectangle20.png';
import './ChooseUs.css';
import useIntersectionObserver from '../../hooks/useIntersectionObserver'; // Adjust the path as necessary

const ChooseUs = () => {
  const [ref, isInView] = useIntersectionObserver({ threshold: 0.5 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView) {
      if (!hasAnimated) {
        setHasAnimated(true);
      }
    }
  }, [isInView, hasAnimated]);

  return (
    <div ref={ref} className={`text-center Container chooseUs ${hasAnimated ? 'animate' : ''}`}>
      <h1><svg xmlns="http://www.w3.org/2000/svg" width="140" height="4" viewBox="0 0 140 4" fill="none">
<path d="M0 2H140" stroke="#222831" stroke-width="3"/>
</svg>
WHY CHOOSE US
<svg xmlns="http://www.w3.org/2000/svg" width="140" height="4" viewBox="0 0 140 4" fill="none">
<path d="M0 2H140" stroke="#222831" stroke-width="3"/>
</svg>
</h1>
      <p>Whether you’re selling or buying RECs, or managing your system’s maintenance, our platform has you covered. Our goal is to simplify your journey and make the process as seamless as possible.</p>
      <div className='chooseUs-card'>
        <div className='chooseUs-content'>
          <h3>Manage Carbon Trading and Your Renewable Library</h3>

          <div>
            <h3>01 <span>Simplify</span></h3>
            <p>Simplify Your Processes, Trading and System Management</p>
          </div>
          <div>
            <h3>02 <span>Direct</span></h3>
            <p>Directly Connect with Us For An Efficient Journey.</p>
          </div>
          <div>
            <h3>03 <span>Transparency</span></h3>
            <p>Accurate Data from Credible Projects.</p>
          </div>
          <div>
            <h3>04 <span>Manage</span></h3>
            <p>Manage and Track Your Renewable Projects.</p>
          </div>
          <div>
            <h3>05 <span>Share</span></h3>
            <p>Share your Net-Zero Progress with Data to Support it</p>
          </div>
        </div>
        <div className='chooseUs-img'>
          <img src={rectImage} alt="Rectangle"/>
        </div>
      </div>
    </div>
  );
}

export default ChooseUs;

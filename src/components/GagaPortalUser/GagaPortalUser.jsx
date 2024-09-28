import React, { useEffect, useRef } from 'react';
import './GagaPortalUser.css';
import img41Image from '../../assets/Rectangle41.png';
import img42Image from '../../assets/Rectangle42.png';

const GagaPortalUser = () => {
  const img1Ref = useRef(null);
  const img2Ref = useRef(null);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    if (img1Ref.current) observer.observe(img1Ref.current);
    if (img2Ref.current) observer.observe(img2Ref.current);
    if (text1Ref.current) observer.observe(text1Ref.current);
    if (text2Ref.current) observer.observe(text2Ref.current);

    return () => {
      if (img1Ref.current) observer.unobserve(img1Ref.current);
      if (img2Ref.current) observer.unobserve(img2Ref.current);
      if (text1Ref.current) observer.unobserve(text1Ref.current);
      if (text2Ref.current) observer.unobserve(text2Ref.current);
    };
  }, []);

  return (
    <div className="gaga-container">
      <h1 className="gaga-title">
        <svg xmlns="http://www.w3.org/2000/svg" width="140" height="4" viewBox="0 0 140 4" fill="none">
          <path d="M0 2H140" stroke="#222831" stroke-width="3" />
        </svg>
        GAGA PORTAL USER
        <svg xmlns="http://www.w3.org/2000/svg" width="140" height="4" viewBox="0 0 140 4" fill="none">
          <path d="M0 2H140" stroke="#222831" stroke-width="3" />
        </svg>
      </h1>
      <p className="gaga-subtitle">GAGA Portal has three main users:</p>
      <div className="gaga-users">
        <p>1. UiGAsia Administration/Management</p>
        <p><i class="bi bi-chevron-right"/></p>
        <p>2. UiGAsia Administration/Management</p>
        <p><i class="bi bi-chevron-right"/></p>
        <p>3. Owners of Renewable Energy Systems</p>
      </div>
      <div className="gaga-content">
        <div className="gaga-section ">
          <img
            src={img41Image}
            alt="Renewable Energy Systems"
            className="gaga-image gaga-image-left"
            ref={img1Ref}
          />
          <div className="gaga-text gaga-text-right" ref={text1Ref}>
          <div className="vertical-line"></div>
          <div>
          <h2>UiGAsia Administration / Management Access</h2>
            <p>
              The GAGA Portal is a decision scanner within a sole ownership
              model that allows UiGAsia Administration and Management teams to
              securely control the configuration of GAGA-approved assets and
              how RECs are created. Admins will also have a historical overview
              of all previous and existing RECs. Additionally, the dashboard
              will allow full reporting, as well as being able to track
              condition of the system.
            </p>
          </div>

          </div>
        </div>
        <div className="gaga-section gaga-card2">
          <div className="gaga-text gaga-text-left" ref={text2Ref}>
          <div className="vertical-line"></div>
          <div>
          <h2>Renewable Energy Asset Owners Access</h2>
            <p>
              Asset Renewable Energy Asset Owners, and Users will be able to
              access the GAGA Portal to see asset conditions in real-time. The
              site and dashboard will show the condition of their assets and
              record and create RECs within the specified parameters. Owners
              will have full reporting and system maintenance capabilities.
            </p>
            <h3>RECs Buyers</h3>
            <p>
              RECs buyers, users, and approved RECs/UiGAsia renewable energy
              asset owners have access to the GAGA Portal, enabling them to
              securely monitor and manage their RECs, as well as keep track of
              the credit as such to where maintenance is then set.
            </p>
          </div>

          </div>
          <img
            src={img42Image}
            alt="Renewable Energy Systems"
            className="gaga-image gaga-image-right"
            ref={img2Ref}
          />
        </div>
      </div>
    </div>
  );
};

export default GagaPortalUser;

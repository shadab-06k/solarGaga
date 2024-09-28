import React from 'react'
import ContactForm from './ContactForm'
import './ContactUs.css'
// import mapImage from '../../assets/map.png';
import MapComponent from '../MapComponent';
export const ContactUs = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:helpdesk@solargaga.com';
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+6562911033';
  };

  const handleLocationClick = () => {
    window.open('https://www.google.com/maps/search/?api=1&query=91+Kitchener+Rd%2C+%2301-02%2C+Singapore+208509', '_blank');
  };
  return (
    <div className='contactUs'>
      <h1><svg xmlns="http://www.w3.org/2000/svg" width="140" height="4" viewBox="0 0 140 4" fill="none">
<path d="M0 2H140" stroke="#222831" stroke-width="3"/>
</svg>CONTACT US<svg xmlns="http://www.w3.org/2000/svg" width="140" height="4" viewBox="0 0 140 4" fill="none">
<path d="M0 2H140" stroke="#222831" stroke-width="3"/>
</svg></h1>
      <div className='contact-main'>
      <div className="contact-card">
      <h2>CONTACT SOLARGAGA</h2>
      <p>Inquiry replies will be
sent through email.
Thank you for
reaching out.</p>
      <div className="contact-info">
        <div className="contact-item" onClick={handleEmailClick}>
          <div className="icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 36 36" fill="none">
  <path d="M30 6H6C4.35 6 3.015 7.35 3.015 9L3 27C3 28.65 4.35 30 6 30H30C31.65 30 33 28.65 33 27V9C33 7.35 31.65 6 30 6ZM30 12L18 19.5L6 12V9L18 16.5L30 9V12Z" fill="white"/>
</svg>          </div>
          <div className="text1">
            <h3>Email</h3>
            <p>helpdesk@solargaga.com</p>
          </div>
        </div>
        <div className="contact-item" onClick={handlePhoneClick}>
          <div className="icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 36 36" fill="none">
<path d="M24.8343 19.359L24.1518 20.0385C24.1518 20.0385 22.5273 21.6525 18.0948 17.2455C13.6623 12.8385 15.2868 11.2245 15.2868 11.2245L15.7158 10.7955C16.7763 9.7425 16.8768 8.0505 15.9513 6.8145L14.0613 4.29C12.9153 2.76 10.7028 2.5575 9.39031 3.8625L7.03531 6.2025C6.38581 6.8505 5.95081 7.6875 6.00331 8.6175C6.13831 10.998 7.21531 16.1175 13.2213 22.0905C19.5918 28.4235 25.5693 28.6755 28.0128 28.4475C28.7868 28.3755 29.4588 27.9825 30.0003 27.4425L32.1303 25.3245C33.5703 23.895 33.1653 21.4425 31.3233 20.442L28.4583 18.8835C27.2493 18.228 25.7793 18.42 24.8343 19.359Z" fill="white"/>
</svg>
          </div>
          <div className="text1">
            <h3>Call Us</h3>
            <p>(+65) 6291 1033</p>
          </div>
        </div>
        <div className="contact-item" onClick={handleLocationClick}>
          <div className="icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 36 36" fill="none">
<path d="M18 17.25C17.0054 17.25 16.0516 16.8549 15.3483 16.1517C14.6451 15.4484 14.25 14.4946 14.25 13.5C14.25 12.5054 14.6451 11.5516 15.3483 10.8483C16.0516 10.1451 17.0054 9.75 18 9.75C18.9946 9.75 19.9484 10.1451 20.6517 10.8483C21.3549 11.5516 21.75 12.5054 21.75 13.5C21.75 13.9925 21.653 14.4801 21.4645 14.9351C21.2761 15.39 20.9999 15.8034 20.6517 16.1517C20.3034 16.4999 19.89 16.7761 19.4351 16.9645C18.9801 17.153 18.4925 17.25 18 17.25ZM18 3C15.2152 3 12.5445 4.10625 10.5754 6.07538C8.60625 8.04451 7.5 10.7152 7.5 13.5C7.5 21.375 18 33 18 33C18 33 28.5 21.375 28.5 13.5C28.5 10.7152 27.3938 8.04451 25.4246 6.07538C23.4555 4.10625 20.7848 3 18 3Z" fill="white"/>
</svg>          </div>
          <div className="text1">
            <h3>91 Kitchener Rd, <br/>#01-02,Singapore 208509</h3>
          </div>
        </div>
      </div>
      <h3>Locate Us</h3>
      <div className="map">
        {/* <img src={mapImage} alt="Map" /> */}
        <MapComponent/>
      </div>
    </div>
        <div>
        <ContactForm/>
        </div>
      </div>

        
    </div>
  )
}

import React, { useState } from 'react';
// import emailjs from 'emailjs-com';
import './ContactForm.css';
import CustomButton from '../CustomButton/CustomButton';

const ContactForm = () => {
  const [selectedService, setSelectedService] = useState('BLOCKCHAIN');
  const [fileName, setFileName] = useState(null);
  const [formDetails, setFormDetails] = useState({
    from_name: '',
    to_email: '', // Set your default "To Email" here
    fullname: '',
    email: '',
    phone: '',
    howDidYouHear: '',
    project: ''
  });

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormDetails(prevDetails => ({
      ...prevDetails,
      [name]: value
    }));
  };

  const sendEmail = (event) => {
    event.preventDefault();

    // const emailParams = {
    //   ...formDetails,
    //   selectedService,
    //   fileName
    // };

    // emailjs.send('service_id', 'template_id', emailParams, 'publicKey')
    //   .then((response) => {
    //     console.log('SUCCESS!', response.status, response.text);
    //     setFormDetails({
    //       from_name: '',
    //       to_email: 'contact@web5solution.com',
    //       fullname: '',
    //       email: '',
    //       phone: '',
    //       howDidYouHear: '',
    //       project: ''
    //     });
    //     setFileName(null);
    //     setSelectedService('BLOCKCHAIN');
    //   }, (error) => {
    //     console.log('FAILED...', error);
    //   });
  };

  return (
    <div className="contact-form">
      <h4>Get in touch with us</h4>
      <p>We provide the best services that you need, if you have anything in mind do let us know. We are here to help you out.</p>

      <form onSubmit={sendEmail}>
        <div className="form-group">
          <input
            type="text"
            placeholder="First Name *"
            name="from_name"
            required
            value={formDetails.from_name}
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="Last Name *"
            name="fullname"
            required
            value={formDetails.fullname}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Organization *"
            name="from_name"
            required
            value={formDetails.from_name}
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="Job Title *"
            name="fullname"
            required
            value={formDetails.fullname}
            onChange={handleInputChange}
          />
        </div>

        
        <div className="form-group">
        <input
            type="email"
            placeholder="Email *"
            name="email"
            required
            value={formDetails.email}
            onChange={handleInputChange}
          />
                    <input
            type="tel"
            placeholder="+91"
            name="phone"
            required
            value={formDetails.phone}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">

          <select
            name="howDidYouHear"
            required
            value={formDetails.howDidYouHear}
            onChange={handleInputChange}
          >
            <option value="" disabled>Topic of Enquiry</option>
            <option value="google">Basic Inquiry</option>
            <option value="friend">Registering RECs</option>
            <option value="advertisement">Navigation Help</option>
          </select>
        </div>
        <div className="form-group" style={{ width: '100%' }}>
          <div style={{ position: 'relative', width: '100%' }}>
            <textarea
              name="project"
              placeholder="Details(if any) *"
              required
              style={{
                width: '100%',
                padding: '10px',
                boxSizing: 'border-box',
                paddingRight: '40px'
              }}
              value={formDetails.project}
              onChange={handleInputChange}
            ></textarea>
            <label
              className="attachment-label"
              style={{
                position: 'absolute',
                top: '50%',
                transform: 'translateY(-50%)',
                right: '10px',
                cursor: 'pointer',
              }}
            >
              <input
                type="file"
                name="projectFile"
                style={{ position: 'absolute', top: 0, right: 0, opacity: 0, zIndex: -1 }}
                onChange={handleFileChange}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
                onClick={() => document.getElementsByName("projectFile")[0].click()}
              >
                <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0z" />
              </svg>
              <span className="attachment-icon">{fileName ? <i className="fa fa-paperclip"></i> : null}</span>
            </label>
          </div>
          {fileName && <p>Selected File: {fileName}</p>}
        </div>
        <div className="privacy-policy">
          <p><input type="checkbox" name="rememberme" id="rememberMe" />By sending this form I confirm that I have read and accept the Privacy Policy</p>
          
        </div>
        <CustomButton/>
      </form>
    </div>
  );
};

export default ContactForm;

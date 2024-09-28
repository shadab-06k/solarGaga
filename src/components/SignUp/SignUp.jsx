import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './SignUp.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [formData, setFormData] = useState({
    yourName: '',
    yourEmail: '',
    yourPassword: '',
  });
  const [formErrors, setFormErrors] = useState({
    yourName: '',
    yourEmail: '',
    yourPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateInput(name, value);
  };

  const validateInput = (name, value) => {
    let errors = { ...formErrors };

    switch (name) {
      case 'yourName':
        errors.yourName = value.length < 6 ? 'should be more than 6 characters' : '';
        break;
      case 'yourEmail':
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        errors.yourEmail = !emailRegex.test(value) ? 'incorrect email format' : '';
        break;
      case 'yourPassword':
        const passwordLower = /[a-z]+/;
        const passwordCapital = /[A-Z]+/;
        const passwordNumber = /[0-9]+/;
        const passwordSpecial = /[$@#&!]+/;
        if (value.length < 10) {
          errors.yourPassword = 'should be more than 10 characters';
        } else if (!passwordLower.test(value)) {
          errors.yourPassword = 'password should have small letter';
        } else if (!passwordCapital.test(value)) {
          errors.yourPassword = 'password should have capital letter';
        } else if (!passwordNumber.test(value)) {
          errors.yourPassword = 'password should have number';
        } else if (!passwordSpecial.test(value)) {
          errors.yourPassword = 'password should have special character';
        } else {
          errors.yourPassword = '';
        }
        break;
      default:
        break;
    }

    setFormErrors(errors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { yourName, yourEmail, yourPassword } = formData;
    if (!formErrors.yourName && !formErrors.yourEmail && !formErrors.yourPassword && yourName && yourEmail && yourPassword) {
      setModalVisible(true);
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="mainContainer py-4">
      <div className="container container1">
        <div className="logiform-container ">
          <div className="flex-container d-flex flex-wrap justify-content-center bg-light p-0">
            <div className="column d-block getstarted-col">
              <div className="d-flex gap-4 content p-3 px-md-4 py-md-5 px-lg-5 child-w-100 flex-wrap position-relative h-100 justify-content-between align-item-space-between">
              <img src={logo} />
                <div className="text-content position-relative ">
                  <span >Hi Welcome!</span>
                  <h2 className="text-white">Let's Get Started</h2>
                  <p >
                    Create free account and get free access of full features for 7 days.
                    We invite you to join us and get better experience.
                  </p>
                  <div className="back-arrow position-relative">
                  <button className="btn btn-semitransparent rounded-pill py-0 px-4 py-lg-2 px-lg-5">
                    <i className="fa-solid fa-arrow-right-long text-white"></i>
                  </button>
                </div>
                </div>
                {/* <div className="content-icon position-relative">
                  <img src={signUpGif} alt="" className="w-100" />
                </div> */}
              </div>
            </div>
            <div className="column d-block p-3 d-flex align-items-center justify-content-center h-100 main-sign-up">
              <div className="content">
                <div className="form-wrapper py-4">
                  <h2 className="mb-4">Sign Up</h2>
                  <form onSubmit={handleSubmit}>
                    <div className={`form-input mb-3 p-0 ${formErrors.yourName ? 'error-notif' : ''}`}>
                      <label htmlFor="yourName" className="text-secondary">Your Name</label>
                      <div className="input-relative position-relative mt-1 mt-lg-2">
                        <input
                          type="text"
                          className="default-input rounded-pill py-1 ps-3 py-lg-2 input-required"
                          name="yourName"
                          id="yourName"
                          maxLength="20"
                          value={formData.yourName}
                          onChange={handleChange}
                        />
                        <div className="nameinput-icon-feedback icon-feedback">
                          <i className="fa-solid fa-circle-exclamation text-danger icon"></i>
                          <i className="fa-solid fa-circle-check text-success icon"></i>
                        </div>
                      </div>
                      <small className="name-error-feedback error-feedback text-danger text-small">{formErrors.yourName}</small>
                    </div>
                    <div className={`form-input mb-3 p-0 ${formErrors.yourEmail ? 'error-notif' : ''}`}>
                      <label htmlFor="yourEmail" className="text-secondary">Your Email</label>
                      <div className="input-relative position-relative mt-1 mt-lg-2">
                        <input
                          type="text"
                          className="default-input rounded-pill py-1 ps-3 py-lg-2 input-required"
                          name="yourEmail"
                          id="yourEmail"
                          maxLength="40"
                          value={formData.yourEmail}
                          onChange={handleChange}
                        />
                        <div className="nameinput-icon-feedback icon-feedback">
                          <i className="fa-solid fa-circle-exclamation text-danger icon"></i>
                          <i className="fa-solid fa-circle-check text-success icon"></i>
                        </div>
                      </div>
                      <small className="email-error-feedback error-feedback text-danger text-small">{formErrors.yourEmail}</small>
                    </div>
                    <div className={`form-input mb-3 p-0 ${formErrors.yourPassword ? 'error-notif' : ''}`}>
                      <label htmlFor="yourPassword" className="text-secondary">Your Password</label>
                      <div className="input-relative position-relative mt-1 mt-lg-2">
                        <input
                          type={showPassword ? 'text' : 'password'}
                          className="default-input rounded-pill py-1 ps-3 py-lg-2 input-required"
                          name="yourPassword"
                          id="yourPassword"
                          maxLength="40"
                          value={formData.yourPassword}
                          onChange={handleChange}
                        />
                        <div className="nameinput-icon-feedback icon-feedback">
                          <i className="fa-solid fa-circle-exclamation text-danger icon"></i>
                          <i className="fa-solid fa-circle-check text-success icon"></i>
                        </div>
                        <div id="showPassword" className={`show-password ${showPassword ? 'show' : ''}`} onClick={toggleShowPassword}>
                          <i className="fa-solid fa-eye icon"></i>
                          <i className="fa-solid fa-eye-slash icon"></i>
                        </div>
                      </div>
                      <small className="pw-error-feedback error-feedback text-danger text-small">{formErrors.yourPassword}</small>
                    </div>
                    <div className="form-check mb-3 p-0">
                      <input type="checkbox" name="rememberme" id="rememberMe" />
                      <label htmlFor="rememberMe">Remember me</label>
                    </div>
                    <div className="form-submit">
                      <button id="btnCreateAccount" type="submit" className=" w-100 rounded-pill py-lg-2 mt-1 mt-lg-2 create-btn">
                        Create Account
                      </button>
                    </div>
                  </form>
                  <div className="other-options-signup text-center py-3">
                    <span className="text-dark">Or</span>
                    <div className="signup-options-list d-flex flex-wrap gap-2 mt-2">
                      <button className="btn border rounded-pill py-lg-2">
                        <i className="fa-brands fa-facebook me-1 icon-fb"></i>
                        Signup with Facebook
                      </button>
                      <button className="btn border rounded-pill py-lg-2">
                        <i className="fa-brands fa-google-plus me-1 icon-google"></i>
                        Signup with Google
                      </button>
                    </div>
                  </div>
                  <div className="have-account-option text-center mt-2">
                    <p>Already have an account? <Link to="/signin"> Login Here </Link></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {modalVisible && (
        <div className="modal fade show" id="myModal" data-bs-backdrop="static" tabIndex="-1" style={{ display: 'block' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Welcome to my Simple Signup Form</h5>
                <button type="button" className="btn-close" onClick={() => setModalVisible(false)}></button>
              </div>
              <div className="modal-body">
                <h4>Hello, <span id="accountName">{formData.yourName}</span></h4>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setModalVisible(false)}>Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SignUp;

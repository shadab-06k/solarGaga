import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../SignUp/SignUp";
import logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    yourEmail: "",
    yourPassword: "",
  });
  const [formErrors, setFormErrors] = useState({
    yourEmail: "",
    yourPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [apiError, setApiError] = useState(null); // For API error handling

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateInput(name, value);
  };

  const validateInput = (name, value) => {
    let errors = { ...formErrors };

    switch (name) {
      case "yourEmail":
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        errors.yourEmail = !emailRegex.test(value)
          ? "Incorrect email format"
          : "";
        break;
      case "yourPassword":
        if (value.length < 5) {
          errors.yourPassword = "Password should be more than 5 characters";
        } else {
          errors.yourPassword = "";
        }
        break;
      default:
        break;
    }

    setFormErrors(errors);
  };

  const decodeToken = (token) => {
    try {
      const base64Url = token.split(".")[1]; // Extract the payload
      const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split("")
          .map(function (c) {
            return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
          })
          .join("")
      );

      return JSON.parse(jsonPayload); // Return decoded payload
    } catch (error) {
      console.error("Error decoding token", error);
      return null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { yourEmail, yourPassword } = formData;

    // Only submit if there are no validation errors
    if (
      !formErrors.yourEmail &&
      !formErrors.yourPassword &&
      yourEmail &&
      yourPassword
    ) {
      try {
        // API call to the signin endpoint
        const response = await fetch("http://localhost:8000/api/signin", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: yourEmail,
            password: yourPassword,
          }),
        });

        const result = await response.json();
        // console.log("result for Signin page ===>> ", result);

        if (result.success) {
          // Decode the JWT to get user information
          // const decodedToken = decodeToken(result.authToken);
          sessionStorage.setItem("authToken", result.authToken);
          navigate('/our-showroom')

          // // Check the role of the user
          // if (decodedToken.user.role === "buyer") {
          //   // Save the token in session storage
          //   sessionStorage.setItem("authToken", result.authToken);
          //   // Redirect the user to the main page
          //   navigate("/mainData");
          // } else if (decodedToken.user.role === "admin") {
          //   // Redirect the admin to the admin panel
          //   sessionStorage.setItem("authToken", result.authToken);
          //   navigate("/main");
          // } else {
          //   alert("No access granted. Only buyers can log in.");
          //   setApiError("No access granted. Only buyers can log in.");
          // }
        } else {
          setApiError(result.error || "An error occurred during sign-in");
        }
      } catch (error) {
        console.error("Sign-in error:", error);
        setApiError("An error occurred during sign-in");
      }
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
                  <span>Hi Welcome!</span>
                  <h2 className="text-white">Sign In</h2>
                  <p>
                    Welcome back! Please sign in to your account to continue.
                  </p>
                  <div className="back-arrow position-relative">
                    <button className="btn btn-semitransparent rounded-pill py-0 px-4 py-lg-2 px-lg-5">
                      <i className="fa-solid fa-arrow-right-long text-white"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="column d-block p-3 d-flex align-items-center justify-content-center h-100 main-sign-up">
              <div className="content">
                <div className="form-wrapper py-4">
                  <h2 className="mb-4">Sign In</h2>
                  <form onSubmit={handleSubmit}>
                    <div
                      className={`form-input mb-3 p-0 ${
                        formErrors.yourEmail ? "error-notif" : ""
                      }`}
                    >
                      <label htmlFor="yourEmail" className="text-secondary">
                        Your Email
                      </label>
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
                      <small className="email-error-feedback error-feedback text-danger text-small">
                        {formErrors.yourEmail}
                      </small>
                    </div>
                    <div
                      className={`form-input mb-3 p-0 ${
                        formErrors.yourPassword ? "error-notif" : ""
                      }`}
                    >
                      <label htmlFor="yourPassword" className="text-secondary">
                        Your Password
                      </label>
                      <div className="input-relative position-relative mt-1 mt-lg-2">
                        <input
                          type={showPassword ? "text" : "password"}
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
                        <div
                          id="showPassword"
                          className={`show-password ${
                            showPassword ? "show" : ""
                          }`}
                          onClick={toggleShowPassword}
                        >
                          <i className="fa-solid fa-eye icon"></i>
                          <i className="fa-solid fa-eye-slash icon"></i>
                        </div>
                      </div>
                      <small className="pw-error-feedback error-feedback text-danger text-small">
                        {formErrors.yourPassword}
                      </small>
                    </div>
                    <div className="form-check mb-3 p-0">
                      <input
                        type="checkbox"
                        name="rememberme"
                        id="rememberMe"
                      />
                      <label htmlFor="rememberMe">Remember me</label>
                    </div>
                    <div className="form-submit">
                      <button
                        id="btnSignIn"
                        type="submit"
                        className="w-100 rounded-pill py-lg-2 mt-1 mt-lg-2 create-btn"
                      >
                        Sign In
                      </button>
                    </div>
                  </form>
                  <div className="other-options-signup text-center py-3">
                    <span className="text-dark">Or</span>
                    <div className="signup-options-list d-flex flex-wrap gap-2 mt-2">
                      <button className="btn border rounded-pill py-lg-2">
                        <i className="fa-brands fa-facebook me-1 icon-fb"></i>
                        Sign in with Facebook
                      </button>
                      <button className="btn border rounded-pill py-lg-2">
                        <i className="fa-brands fa-google-plus me-1 icon-google"></i>
                        Sign in with Google
                      </button>
                    </div>
                  </div>
                  <div className="have-account-option text-center mt-2">
                    <p>
                      Don't have an account? <Link to="/signup"> Sign Up Here </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

// import React, { useState } from "react";
// import "@fortawesome/fontawesome-free/css/all.min.css";
// import "../SignUp/SignUp";
// import logo from "../../assets/logo.png";
// import { useNavigate } from "react-router-dom";

// const SignIn = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     yourEmail: "",
//     yourPassword: "",
//   });
//   const [formErrors, setFormErrors] = useState({
//     yourEmail: "",
//     yourPassword: "",
//   });
//   const [showPassword, setShowPassword] = useState(false);
//   const [apiError, setApiError] = useState(null); // For API error handling

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//     validateInput(name, value);
//   };

//   // const validateInput = (name, value) => {
//   //   let errors = { ...formErrors };

//   //   switch (name) {
//   //     case "yourEmail":
//   //       const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//   //       errors.yourEmail = !emailRegex.test(value)
//   //         ? "Incorrect email format"
//   //         : "";
//   //       break;
//   //     case "yourPassword":
//   //       const passwordLower = /[a-z]+/;
//   //       const passwordCapital = /[A-Z]+/;
//   //       const passwordNumber = /[0-9]+/;
//   //       const passwordSpecial = /[$@#&!]+/;
//   //       if (value.length < 10) {
//   //         errors.yourPassword = "Should be more than 10 characters";
//   //       } else if (!passwordLower.test(value)) {
//   //         errors.yourPassword = "Password should have a small letter";
//   //       } else if (!passwordCapital.test(value)) {
//   //         errors.yourPassword = "Password should have a capital letter";
//   //       } else if (!passwordNumber.test(value)) {
//   //         errors.yourPassword = "Password should have a number";
//   //       } else if (!passwordSpecial.test(value)) {
//   //         errors.yourPassword = "Password should have a special character";
//   //       } else {
//   //         errors.yourPassword = "";
//   //       }
//   //       break;
//   //     default:
//   //       break;
//   //   }

//   //   setFormErrors(errors);
//   // };
//   const validateInput = (name, value) => {
//     let errors = { ...formErrors };

//     switch (name) {
//       case "yourEmail":
//         const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//         errors.yourEmail = !emailRegex.test(value)
//           ? "Incorrect email format"
//           : "";
//         break;
//       case "yourPassword":
//         if (value.length < 5) {
//           errors.yourPassword = "Password should be more than 5 characters";
//         } else {
//           errors.yourPassword = "";
//         }
//         break;
//       default:
//         break;
//     }

//     setFormErrors(errors);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const { yourEmail, yourPassword } = formData;

//     // Only submit if there are no validation errors
//     if (
//       !formErrors.yourEmail &&
//       !formErrors.yourPassword &&
//       yourEmail &&
//       yourPassword
//     ) {
//       try {
//         // API call to the signup endpoint
//         const response = await fetch("http://localhost:8000/api/signin", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             email: yourEmail,
//             password: yourPassword,
//           }),
//         });

//         const result = await response.json();
//         console.log("result for Signin page ===>> ", result);

//         if (result.success) {
//           const data = sessionStorage.setItem("authToken", result.authToken);
//           console.log("data for Signin === ", data);
//           navigate("/main");
//         } else {
//           setApiError(result.error || "An error occurred during signup"); // Handle backend errors
//         }
//       } catch (error) {
//         console.error("Signup error:", error);
//         setApiError("An error occurred during signup");
//       }
//     }
//   };
//   const toggleShowPassword = () => {
//     setShowPassword(!showPassword);
//   };

//   return (
//     <div className="mainContainer py-4">
//       <div className="container container1">
//         <div className="logiform-container ">
//           <div className="flex-container d-flex flex-wrap justify-content-center bg-light p-0">
//             <div className="column d-block getstarted-col">
//               <div className="d-flex gap-4 content p-3 px-md-4 py-md-5 px-lg-5 child-w-100 flex-wrap position-relative h-100 justify-content-between align-item-space-between">
//                 <img src={logo} />
//                 <div className="text-content position-relative ">
//                   <span>Hi Welcome!</span>
//                   <h2 className="text-white">Sign In</h2>
//                   <p>
//                     Welcome back! Please sign in to your account to continue.
//                   </p>
//                   <div className="back-arrow position-relative">
//                     <button className="btn btn-semitransparent rounded-pill py-0 px-4 py-lg-2 px-lg-5">
//                       <i className="fa-solid fa-arrow-right-long text-white"></i>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="column d-block p-3 d-flex align-items-center justify-content-center h-100 main-sign-up">
//               <div className="content">
//                 <div className="form-wrapper py-4">
//                   <h2 className="mb-4">Sign In</h2>
//                   <form onSubmit={handleSubmit}>
//                     <div
//                       className={`form-input mb-3 p-0 ${
//                         formErrors.yourEmail ? "error-notif" : ""
//                       }`}
//                     >
//                       <label htmlFor="yourEmail" className="text-secondary">
//                         Your Email
//                       </label>
//                       <div className="input-relative position-relative mt-1 mt-lg-2">
//                         <input
//                           type="text"
//                           className="default-input rounded-pill py-1 ps-3 py-lg-2 input-required"
//                           name="yourEmail"
//                           id="yourEmail"
//                           maxLength="40"
//                           value={formData.yourEmail}
//                           onChange={handleChange}
//                         />
//                         <div className="nameinput-icon-feedback icon-feedback">
//                           <i className="fa-solid fa-circle-exclamation text-danger icon"></i>
//                           <i className="fa-solid fa-circle-check text-success icon"></i>
//                         </div>
//                       </div>
//                       <small className="email-error-feedback error-feedback text-danger text-small">
//                         {formErrors.yourEmail}
//                       </small>
//                     </div>
//                     <div
//                       className={`form-input mb-3 p-0 ${
//                         formErrors.yourPassword ? "error-notif" : ""
//                       }`}
//                     >
//                       <label htmlFor="yourPassword" className="text-secondary">
//                         Your Password
//                       </label>
//                       <div className="input-relative position-relative mt-1 mt-lg-2">
//                         <input
//                           type={showPassword ? "text" : "password"}
//                           className="default-input rounded-pill py-1 ps-3 py-lg-2 input-required"
//                           name="yourPassword"
//                           id="yourPassword"
//                           maxLength="40"
//                           value={formData.yourPassword}
//                           onChange={handleChange}
//                         />
//                         <div className="nameinput-icon-feedback icon-feedback">
//                           <i className="fa-solid fa-circle-exclamation text-danger icon"></i>
//                           <i className="fa-solid fa-circle-check text-success icon"></i>
//                         </div>
//                         <div
//                           id="showPassword"
//                           className={`show-password ${
//                             showPassword ? "show" : ""
//                           }`}
//                           onClick={toggleShowPassword}
//                         >
//                           <i className="fa-solid fa-eye icon"></i>
//                           <i className="fa-solid fa-eye-slash icon"></i>
//                         </div>
//                       </div>
//                       <small className="pw-error-feedback error-feedback text-danger text-small">
//                         {formErrors.yourPassword}
//                       </small>
//                     </div>
//                     <div className="form-check mb-3 p-0">
//                       <input
//                         type="checkbox"
//                         name="rememberme"
//                         id="rememberMe"
//                       />
//                       <label htmlFor="rememberMe">Remember me</label>
//                     </div>
//                     <div className="form-submit">
//                       <button
//                         id="btnSignIn"
//                         type="submit"
//                         className="w-100 rounded-pill py-lg-2 mt-1 mt-lg-2 create-btn"
//                       >
//                         Sign In
//                       </button>
//                     </div>
//                   </form>
//                   <div className="other-options-signup text-center py-3">
//                     <span className="text-dark">Or</span>
//                     <div className="signup-options-list d-flex flex-wrap gap-2 mt-2">
//                       <button className="btn border rounded-pill py-lg-2">
//                         <i className="fa-brands fa-facebook me-1 icon-fb"></i>
//                         Sign in with Facebook
//                       </button>
//                       <button className="btn border rounded-pill py-lg-2">
//                         <i className="fa-brands fa-google-plus me-1 icon-google"></i>
//                         Sign in with Google
//                       </button>
//                     </div>
//                   </div>
//                   <div className="have-account-option text-center mt-2">
//                     <p>
//                       Don't have an account? <a href="#"> Sign Up Here </a>
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignIn;

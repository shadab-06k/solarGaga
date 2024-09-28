import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import profile from "../../assets/userimage.png";
import "./NavBar.css";
import PopUp from "../PopUp";
import { SolarGagaContext } from "../../SolarGagaContext";

const NavBar = () => {
  const { jwtToken, setJwtToken } = useContext(SolarGagaContext);
  const navigate = useNavigate();
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  // console.log("jwt token in sesion storage navbar ", jwtToken);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };
  useEffect(() => {
    // Sync jwtToken with sessionStorage when the app mounts
    const token = sessionStorage.getItem("authToken");

    if (token && !jwtToken) {
      setJwtToken(token); // Update context with token from sessionStorage
      console.log("Token loaded from sessionStorage into context");
    }
  }, [jwtToken, setJwtToken]);

  console.log("JWT token in session storage navbar:", jwtToken);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const closeNavbar = () => {
    setIsNavbarOpen(false);
    setIsDropdownOpen(false);
    setIsProfileDropdownOpen(false);
  };

  const onSignIn = () => {
    navigate("/signin");
  };

  const onSignUp = () => {
    navigate("/signup");
  };

  const onLogout = () => {
    try {
      sessionStorage.removeItem("authToken");
      setJwtToken(null); // Clear the token in context
      console.log("Token Removed Successfully");
      navigate("/"); // Redirect to sign-in page after logout
    } catch (error) {
      console.log("Error occurred while logging out", error);
    }
  };

  useEffect(() => {
    const token = sessionStorage.getItem("authToken");

    if (!token) {
      navigate("/");
    }
  }, [jwtToken, navigate]); 

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <nav
      className={
        jwtToken
          ? "navbar-color1 navbar navbar-expand-lg"
          : "navbar-color navbar navbar-expand-lg"
      }
    >
      <div className="container-fluid">
        <Link to="/" onClick={closeNavbar}>
          <img src={logo} alt="Logo" className="navbar-logo" />
        </Link>

        {jwtToken ? <h2 className="text-white">Exchange</h2> : null}

        <div className="background">
          <button
            className={`custom-menu-icon ${isNavbarOpen ? "open" : ""}`}
            onClick={toggleNavbar}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        <div
          className={`collapse navbar-collapse ${isNavbarOpen ? "show" : ""}`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {!jwtToken ? (
              <>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/"
                    onClick={closeNavbar}
                  >
                    Discovery
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/company"
                    onClick={closeNavbar}
                  >
                    Company
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className={`nav-link dropdown-toggle ${
                      isDropdownOpen ? "show" : ""
                    }`}
                    to="#"
                    role="button"
                    onClick={toggleDropdown}
                    aria-expanded={isDropdownOpen}
                  >
                    Resources{" "}
                    {isDropdownOpen ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="6"
                        viewBox="0 0 12 6"
                        fill="none"
                      >
                        <path
                          d="M6 0L11.1962 5.25L0.803848 5.25L6 0Z"
                          fill="white"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="6"
                        viewBox="0 0 12 6"
                        fill="none"
                      >
                        <path
                          d="M6 6L0.803848 0.75L11.1962 0.75L6 6Z"
                          fill="white"
                        />
                      </svg>
                    )}
                  </Link>
                  <ul
                    className={`dropdown-menu dropdown-fullwidth ${
                      isDropdownOpen ? "show" : ""
                    }`}
                  >
                    <div>
                      <h5>Resources</h5>
                      <p>
                        Simplifying RECs, Carbon Trading Efficiency, and Smart
                        Digital Renewable Management while Ensuring Data Privacy
                        and Transparency for All Users
                      </p>
                    </div>
                    <div style={{ display: "flex", width: "100vw" }}>
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/guide"
                          onClick={closeNavbar}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="25"
                            viewBox="0 0 25 25"
                            fill="none"
                          >
                            <path
                              d="M7.3065 8.19335C5.41001 10.6309 5.44322 14.9609 7.86704 17.1074C10.619 19.543 14.492 19.5176 16.9276 17.2773C19.8475 14.5898 19.6795 10.1172 17.0975 7.58398C14.5018 5.0371 9.86314 4.90429 7.3065 8.19335Z"
                              fill="#FCC11A"
                            />
                            <path
                              d="M10.3514 7.35744C9.60141 7.0254 8.78109 7.9297 8.42367 8.54689C8.06625 9.16603 7.73422 10.3789 8.49594 10.6895C9.25766 10.9981 9.80453 10.4746 10.3534 9.57033C10.8983 8.66603 11.2088 7.73829 10.3514 7.35744Z"
                              fill="#FEE269"
                            />
                          </svg>{" "}
                          Guide
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/insight"
                          onClick={closeNavbar}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="25"
                            viewBox="0 0 25 25"
                            fill="none"
                          >
                            <path
                              d="M7.3065 8.19335C5.41001 10.6309 5.44322 14.9609 7.86704 17.1074C10.619 19.543 14.492 19.5176 16.9276 17.2773C19.8475 14.5898 19.6795 10.1172 17.0975 7.58398C14.5018 5.0371 9.86314 4.90429 7.3065 8.19335Z"
                              fill="#FCC11A"
                            />
                            <path
                              d="M10.3514 7.35744C9.60141 7.0254 8.78109 7.9297 8.42367 8.54689C8.06625 9.16603 7.73422 10.3789 8.49594 10.6895C9.25766 10.9981 9.80453 10.4746 10.3534 9.57033C10.8983 8.66603 11.2088 7.73829 10.3514 7.35744Z"
                              fill="#FEE269"
                            />
                          </svg>{" "}
                          Insight
                        </Link>
                      </li>
                    </div>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/contactUs"
                    onClick={closeNavbar}
                  >
                    Contact Us
                  </Link>
                </li>
              </>
            ) : (
              <div className="nav-icon-main">
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M15 19.5001C15 20.2957 14.6839 21.0588 14.1213 21.6214C13.5587 22.184 12.7956 22.5001 12 22.5001C11.2044 22.5001 10.4413 22.184 9.87868 21.6214C9.31607 21.0588 9 20.2957 9 19.5001H15ZM19.5 18.0001H3.15C2.91131 18.0001 2.68239 17.9052 2.5136 17.7365C2.34482 17.5677 2.25 17.3388 2.25 17.1001C2.25 16.8614 2.34482 16.6324 2.5136 16.4637C2.68239 16.2949 2.91131 16.2001 3.15 16.2001H4.5V10.5001C4.5 6.87006 7.08 3.84006 10.5075 3.15006C10.4866 2.94149 10.5096 2.73085 10.5751 2.53172C10.6405 2.33259 10.747 2.14939 10.8876 1.99394C11.0283 1.8385 11.1999 1.71425 11.3915 1.62921C11.5831 1.54418 11.7904 1.50024 12 1.50024C12.2096 1.50024 12.4169 1.54418 12.6085 1.62921C12.8001 1.71425 12.9717 1.8385 13.1124 1.99394C13.253 2.14939 13.3595 2.33259 13.4249 2.53172C13.4904 2.73085 13.5134 2.94149 13.4925 3.15006C15.1877 3.49486 16.7116 4.41484 17.8064 5.75424C18.9011 7.09364 19.4994 8.77018 19.5 10.5001V16.2001H20.85C21.0887 16.2001 21.3176 16.2949 21.4864 16.4637C21.6552 16.6324 21.75 16.8614 21.75 17.1001C21.75 17.3388 21.6552 17.5677 21.4864 17.7365C21.3176 17.9052 21.0887 18.0001 20.85 18.0001H19.5Z"
                      fill="white"
                    />
                  </svg>
                </li>
              </div>
            )}
          </ul>
          <div className="dropdown drop2">
            <span
              className="dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-expanded={isProfileDropdownOpen}
              onClick={toggleProfileDropdown}
            >
              <img src={profile} alt="profile" className="navbar-logo-circle" />
              {isProfileDropdownOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="6"
                  viewBox="0 0 12 6"
                  fill="none"
                >
                  <path d="M6 0L11.1962 5.25L0.803848 5.25L6 0Z" fill="white" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="6"
                  viewBox="0 0 12 6"
                  fill="none"
                >
                  <path d="M6 6L0.803848 0.75L11.1962 0.75L6 6Z" fill="white" />
                </svg>
              )}
            </span>

            <ul
              className={`dropdown-menu dropdown-menu-end ${
                isProfileDropdownOpen ? "show" : ""
              }`}
              aria-labelledby="dropdownMenuButton"
            >
              {!jwtToken ? (
                <>
                  <li>
                    <span className="dropdown-item" onClick={onSignIn}>
                      Sign In
                    </span>
                  </li>
                  <li>
                    <span className="dropdown-item" onClick={onSignUp}>
                      Sign Up
                    </span>
                  </li>
                </>
              ) : (
                <li>
                  <span className="dropdown-item" onClick={onLogout}>
                    Logout
                  </span>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>

      {/* Show popup if visible */}
      {showPopup && <PopUp onClose={closePopup} />}
    </nav>
  );
};

export default NavBar;

// import React, { useContext, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import logo from "../../assets/logo.png";
// import profile from "../../assets/userimage.png";
// import "./NavBar.css";
// import PopUp from "../PopUp"; // Import the PopUp component
// import { SolarGagaContext } from "../../SolarGagaContext";

// const NavBar = () => {
//   const { jwtToken } = useContext(SolarGagaContext);
//   const navigate = useNavigate();
//   const [isNavbarOpen, setIsNavbarOpen] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
//   const [showPopup, setShowPopup] = useState(false); // State for popup visibility

//   const toggleNavbar = () => {
//     setIsNavbarOpen(!isNavbarOpen);
//   };

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   const toggleProfileDropdown = () => {
//     setIsProfileDropdownOpen(!isProfileDropdownOpen);
//   };

//   const closeNavbar = () => {
//     setIsNavbarOpen(false);
//     setIsDropdownOpen(false);
//     setIsProfileDropdownOpen(false);
//   };

//   const onSignIn = () => {
//     navigate("/signin");
//   };

//   const onSignUp = () => {
//     navigate("/signup");
//   };

//   const closePopup = () => {
//     setShowPopup(false);
//   };

//   const onLogout=()=>{
//     try {

//       const jwt = sessionStorage.removeItem('authToken')
//       console.log('Token Removed Successfully')

//     } catch (error) {
//       console.log("error Occured while loging out",error)
//     }

//   }

//   return (
//     <nav className="navbar-color navbar navbar-expand-lg">
//       <div className="container-fluid">
//         <Link to="/" onClick={closeNavbar}>
//           <img src={logo} alt="Logo" className="navbar-logo" />
//         </Link>

//         {jwtToken ? <h1 className="text-white">Exchange</h1> : null}

//         <div className="background">
//           <button
//             className={`custom-menu-icon ${isNavbarOpen ? "open" : ""}`}
//             onClick={toggleNavbar}
//           >
//             <span></span>
//             <span></span>
//             <span></span>
//           </button>
//         </div>

//         {!jwtToken ? (
//           <div
//             className={`collapse navbar-collapse ${isNavbarOpen ? "show" : ""}`}
//             id="navbarSupportedContent"
//           >
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <Link
//                   className="nav-link active"
//                   aria-current="page"
//                   to="/"
//                   onClick={closeNavbar}
//                 >
//                   Discovery
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/company" onClick={closeNavbar}>
//                   Company
//                 </Link>
//               </li>
//               <li className="nav-item dropdown">
//                 <Link
//                   className={`nav-link dropdown-toggle ${
//                     isDropdownOpen ? "show" : ""
//                   }`}
//                   to="#"
//                   role="button"
//                   onClick={toggleDropdown}
//                   aria-expanded={isDropdownOpen}
//                 >
//                   Resources{" "}
//                   {isDropdownOpen ? (
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="20"
//                       height="6"
//                       viewBox="0 0 12 6"
//                       fill="none"
//                     >
//                       <path
//                         d="M6 0L11.1962 5.25L0.803848 5.25L6 0Z"
//                         fill="white"
//                       />
//                     </svg>
//                   ) : (
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="20"
//                       height="6"
//                       viewBox="0 0 12 6"
//                       fill="none"
//                     >
//                       <path
//                         d="M6 6L0.803848 0.75L11.1962 0.75L6 6Z"
//                         fill="white"
//                       />
//                     </svg>
//                   )}
//                 </Link>
//                 <ul
//                   className={`dropdown-menu dropdown-fullwidth ${
//                     isDropdownOpen ? "show" : ""
//                   }`}
//                 >
//                   <div>
//                     <h5>Resources</h5>
//                     <p>
//                       Simplifying RECs, Carbon Trading Efficiency, and Smart
//                       Digital Renewable Management while Ensuring Data Privacy
//                       and Transparency for All Users
//                     </p>
//                   </div>
//                   <div style={{ display: "flex", width: "100vw" }}>
//                     <li>
//                       <Link
//                         className="dropdown-item"
//                         to="/guide"
//                         onClick={closeNavbar}
//                       >
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           width="25"
//                           height="25"
//                           viewBox="0 0 25 25"
//                           fill="none"
//                         >
//                           <path
//                             d="M7.3065 8.19335C5.41001 10.6309 5.44322 14.9609 7.86704 17.1074C10.619 19.543 14.492 19.5176 16.9276 17.2773C19.8475 14.5898 19.6795 10.1172 17.0975 7.58398C14.5018 5.0371 9.86314 4.90429 7.3065 8.19335Z"
//                             fill="#FCC11A"
//                           />
//                           <path
//                             d="M10.3514 7.35744C9.60141 7.0254 8.78109 7.9297 8.42367 8.54689C8.06625 9.16603 7.73422 10.3789 8.49594 10.6895C9.25766 10.9981 9.80453 10.4746 10.3534 9.57033C10.8983 8.66603 11.2088 7.73829 10.3514 7.35744Z"
//                             fill="#FEE269"
//                           />
//                         </svg>{" "}
//                         Guide
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         className="dropdown-item"
//                         to="/insight"
//                         onClick={closeNavbar}
//                       >
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           width="25"
//                           height="25"
//                           viewBox="0 0 25 25"
//                           fill="none"
//                         >
//                           <path
//                             d="M7.3065 8.19335C5.41001 10.6309 5.44322 14.9609 7.86704 17.1074C10.619 19.543 14.492 19.5176 16.9276 17.2773C19.8475 14.5898 19.6795 10.1172 17.0975 7.58398C14.5018 5.0371 9.86314 4.90429 7.3065 8.19335Z"
//                             fill="#FCC11A"
//                           />
//                           <path
//                             d="M10.3514 7.35744C9.60141 7.0254 8.78109 7.9297 8.42367 8.54689C8.06625 9.16603 7.73422 10.3789 8.49594 10.6895C9.25766 10.9981 9.80453 10.4746 10.3534 9.57033C10.8983 8.66603 11.2088 7.73829 10.3514 7.35744Z"
//                             fill="#FEE269"
//                           />
//                         </svg>{" "}
//                         Insight
//                       </Link>
//                     </li>
//                   </div>
//                 </ul>
//               </li>
//               <li className="nav-item">
//                 <Link
//                   className="nav-link"
//                   to="/contactUs"
//                   onClick={closeNavbar}
//                 >
//                   Contact Us
//                 </Link>
//               </li>
//             </ul>
//             <div className="dropdown drop2">
//               <span
//                 className="dropdown-toggle"
//                 type="button"
//                 id="dropdownMenuButton"
//                 data-bs-toggle="dropdown"
//                 aria-expanded={isProfileDropdownOpen}
//                 onClick={toggleProfileDropdown}
//               >
//                 <img src={profile} alt="profile" className="navbar-logo-circle" />
//                 {isProfileDropdownOpen ? (
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="25"
//                     height="6"
//                     viewBox="0 0 12 6"
//                     fill="none"
//                   >
//                     <path d="M6 0L11.1962 5.25L0.803848 5.25L6 0Z" fill="white" />
//                   </svg>
//                 ) : (
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="25"
//                     height="6"
//                     viewBox="0 0 12 6"
//                     fill="none"
//                   >
//                     <path d="M6 6L0.803848 0.75L11.1962 0.75L6 6Z" fill="white" />
//                   </svg>
//                 )}
//               </span>

//               <ul
//                 className={`dropdown-menu dropdown-menu-end ${
//                   isProfileDropdownOpen ? "show" : ""
//                 }`}
//                 aria-labelledby="dropdownMenuButton"
//               >
//              {!jwtToken ?

//               <>
//              <li>
//                   <span className="dropdown-item" onClick={onSignIn}>
//                     Sign In
//                   </span>
//                 </li>
//                 <li>
//                   <span className="dropdown-item" onClick={onSignUp}>
//                     Sign Up
//                   </span>
//                 </li>:
//                 <li>
//                   <span className="dropdown-item" onClick={onLogout}>
//                     Logout
//                   </span>
//                 </li>
//                 </>
//                 }
//               </ul>
//             </div>
//           </div>
//         ) : (
//           <div className="navbar-items">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill="none"
//             >
//               <path
//                 d="M15 19.5001C15 20.2957 14.6839 21.0588 14.1213 21.6214C13.5587 22.184 12.7956 22.5001 12 22.5001C11.2044 22.5001 10.4413 22.184 9.87868 21.6214C9.31607 21.0588 9 20.2957 9 19.5001H15ZM19.5 18.0001H3.15C2.91131 18.0001 2.68239 17.9052 2.5136 17.7365C2.34482 17.5677 2.25 17.3388 2.25 17.1001C2.25 16.8614 2.34482 16.6324 2.5136 16.4637C2.68239 16.2949 2.91131 16.2001 3.15 16.2001H4.5V10.5001C4.5 6.87006 7.08 3.84006 10.5075 3.15006C10.4866 2.94149 10.5096 2.73085 10.5751 2.53172C10.6405 2.33259 10.747 2.14939 10.8876 1.99394C11.0283 1.8385 11.1999 1.71425 11.3915 1.62921C11.5831 1.54418 11.7904 1.50024 12 1.50024C12.2096 1.50024 12.4169 1.54418 12.6085 1.62921C12.8001 1.71425 12.9717 1.8385 13.1124 1.99394C13.253 2.14939 13.3595 2.33259 13.4249 2.53172C13.4904 2.73085 13.5134 2.94149 13.4925 3.15006C15.1877 3.49486 16.7116 4.41484 17.8064 5.75424C18.9011 7.09364 19.4994 8.77018 19.5 10.5001V16.2001H20.85C21.0887 16.2001 21.3176 16.2949 21.4864 16.4637C21.6552 16.6324 21.75 16.8614 21.75 17.1001C21.75 17.3388 21.6552 17.5677 21.4864 17.7365C21.3176 17.9052 21.0887 18.0001 20.85 18.0001H19.5Z"
//                 fill="white"
//               />
//             </svg>

//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill="none"
//             >
//               <path
//                 d="M7.5 6.5C7.5 8.981 9.519 11 12 11C14.481 11 16.5 8.981 16.5 6.5C16.5 4.019 14.481 2 12 2C9.519 2 7.5 4.019 7.5 6.5ZM20 21H21V20C21 16.141 17.859 13 14 13H10C6.14 13 3 16.141 3 20V21H20Z"
//                 fill="white"
//               />
//             </svg>
//           </div>
//         )}

//         {/* Show popup if visible */}
//         {showPopup && <PopUp onClose={closePopup} />}
//       </div>
//     </nav>
//   );
// };

// export default NavBar;

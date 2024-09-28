import React, { useState } from "react";
import "./Sidebar.css";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const [isRegistryOpen, setIsRegistryOpen] = useState(false);
  const [isRedirectOpen, setIsRedirectOpen] = useState(true);

  const toggleRegistryDropdown = () => {
    setIsRegistryOpen(!isRegistryOpen);
  };

  const toggleRedirectDropdown = () => {
    setIsRedirectOpen(!isRedirectOpen);
  };

  const onRegister = () => {
    navigate("/registry");
  };
  const onShowroom = () => {
    navigate("/our-showroom");
  };
  const onListing = () => {
    navigate("/listing");
  };
  const onMonitor = () => {
    navigate("/monitor");
  };

  const onRecTable = () => {
    navigate("/rec-table");
  };
  const onCheckList = () => {
    navigate("/check-list");
  };

  return (
    <div className="sidebar-container">
      <div className="sidebar">
        <div className="sidebar-content">
          {/* <button className="our-showroom-button" type="button"> */}
            <div className="d-flex justify-content-space-evenly align-items-center our-showroom-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M23.9992 2.66663C24.2299 2.6664 24.4537 2.74602 24.6325 2.89196L24.7325 2.98529L29.0965 7.69196L29.1365 7.74263C29.2725 7.92396 29.3338 8.12929 29.3338 8.32929L29.3312 10.8893C29.3312 12.2146 28.8272 13.4226 27.9978 14.3293V28.3333C27.9978 28.5749 27.9103 28.8084 27.7515 28.9905C27.5926 29.1727 27.3732 29.2911 27.1338 29.324L26.9978 29.3333H5.00182C4.75994 29.3336 4.52614 29.2462 4.34375 29.0874C4.16135 28.9285 4.04271 28.7089 4.00982 28.4693L4.00182 28.3333L3.99915 14.3306C3.21095 13.4677 2.74347 12.36 2.67515 11.1933L2.66582 10.8893V8.38663C2.65439 8.19668 2.69889 8.00755 2.79382 7.84263L2.88049 7.71596L2.93382 7.65463L7.26582 2.98663C7.42235 2.81768 7.6324 2.70795 7.86049 2.67596L7.99915 2.66663H23.9992ZM20.1085 13.9226L20.0925 13.9466C19.6171 14.5839 18.9995 15.1014 18.2889 15.4579C17.5782 15.8143 16.7942 16 15.9992 16C15.1991 16.0004 14.4102 15.8129 13.696 15.4525C12.9817 15.0922 12.3621 14.569 11.8872 13.9253C11.4124 14.5687 10.7933 15.0916 10.0795 15.4519C9.36577 15.8123 8.57738 16 7.77782 16C7.15249 16 6.55382 15.888 5.99915 15.6826L6.00049 27.3333H7.99915V18.336C7.99921 18.0941 8.08691 17.8605 8.24601 17.6783C8.40511 17.4962 8.62484 17.3779 8.86449 17.3453L8.99915 17.3333H14.9938C15.2355 17.3333 15.4689 17.4208 15.6511 17.5796C15.8332 17.7385 15.9516 17.9579 15.9845 18.1973L15.9938 18.3333V27.3306H25.9965V15.6813C24.957 16.0668 23.8203 16.1036 22.7581 15.7861C21.6959 15.4686 20.7659 14.814 20.1085 13.9213M13.9925 19.3333H9.99915V27.3306H13.9925V19.3333ZM23.0058 17.3333C23.2475 17.3333 23.4809 17.4208 23.6631 17.5796C23.8452 17.7385 23.9636 17.9579 23.9965 18.1973L24.0058 18.3333V23.0026C24.0058 23.2443 23.9183 23.4777 23.7595 23.6599C23.6006 23.842 23.3812 23.9604 23.1418 23.9933L23.0058 24.0026H18.3378C18.0962 24.0026 17.8627 23.9151 17.6806 23.7563C17.4985 23.5974 17.38 23.378 17.3472 23.1386L17.3378 23.0026V18.3333C17.3378 18.0916 17.4253 17.8582 17.5842 17.6761C17.743 17.4939 17.9624 17.3755 18.2018 17.3426L18.3378 17.3333H23.0058ZM22.0058 19.3333H19.3365V22.0026H22.0045L22.0058 19.3333ZM10.8858 9.33596H4.66715V10.8893L4.67649 11.116L4.71382 11.4253L4.75782 11.6333L4.82449 11.8626L4.89649 12.06L4.94982 12.1853C4.9916 12.276 5.03737 12.364 5.08715 12.4493L5.22449 12.6653L5.29649 12.764L5.46849 12.972L5.65782 13.164L5.78582 13.2773L5.84182 13.3226C6.26182 13.656 6.76849 13.8853 7.32449 13.9666L7.56449 13.992L7.77782 13.9986C8.56605 13.9994 9.32511 13.7005 9.90121 13.1626C10.4773 12.6246 10.8274 11.8877 10.8805 11.1013L10.8885 10.888L10.8858 9.33596ZM19.1058 9.33596H12.8872V10.8893C12.8872 12.4626 14.0578 13.7653 15.5765 13.9706L15.7845 13.992L15.9978 13.9986C16.786 13.9994 17.5451 13.7005 18.1212 13.1626C18.6973 12.6246 19.0474 11.8877 19.1005 11.1013L19.1085 10.888L19.1058 9.33596ZM27.3285 9.33596H21.1085L21.1098 10.8893C21.1098 12.4626 22.2805 13.7653 23.7978 13.9706L24.0072 13.992L24.2205 13.9986C24.9725 13.9986 25.6618 13.732 26.2005 13.2866L26.3205 13.1826L26.4752 13.032L26.6698 12.8053C26.7418 12.7137 26.8085 12.6177 26.8698 12.5173L27.0085 12.2693L27.0925 12.0853L27.1698 11.8786L27.2098 11.7506L27.2605 11.548L27.2978 11.3386L27.3218 11.116L27.3298 10.8893L27.3285 9.33596ZM12.0818 4.66529H8.43515L5.95915 7.33596H11.2618L12.0818 4.66529ZM17.8245 4.66529H14.1738L13.3525 7.33596H18.6458L17.8245 4.66529ZM23.5618 4.66529H19.9165L20.7378 7.33596H26.0392L23.5618 4.66529Z"
                  fill="white"
                />
              </svg>
              <h6 className="mx-2 our-showroom-heading" onClick={onShowroom}>
                Our Showroom
              </h6>
            </div>
          {/* </button> */}
        </div>

        {/* Monitor Section */}
        <div className="monitor-container">
          <div className="d-flex justify-content-space-evenly align-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M15 24V28H9C8.73478 28 8.48043 28.1054 8.29289 28.2929C8.10536 28.4804 8 28.7348 8 29C8 29.2652 8.10536 29.5196 8.29289 29.7071C8.48043 29.8946 8.73478 30 9 30H23C23.2652 30 23.5196 29.8946 23.7071 29.7071C23.8946 29.5196 24 29.2652 24 29C24 28.7348 23.8946 28.4804 23.7071 28.2929C23.5196 28.1054 23.2652 28 23 28H17V24H26C27.0609 24 28.0783 23.5786 28.8284 22.8284C29.5786 22.0783 30 21.0609 30 20V8C30 6.93913 29.5786 5.92172 28.8284 5.17157C28.0783 4.42143 27.0609 4 26 4H6C4.93913 4 3.92172 4.42143 3.17157 5.17157C2.42143 5.92172 2 6.93913 2 8V20C2 21.0609 2.42143 22.0783 3.17157 22.8284C3.92172 23.5786 4.93913 24 6 24H15ZM26 6C26.5304 6 27.0391 6.21071 27.4142 6.58579C27.7893 6.96086 28 7.46957 28 8V20C28 20.5304 27.7893 21.0391 27.4142 21.4142C27.0391 21.7893 26.5304 22 26 22H6C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V8C4 7.46957 4.21071 6.96086 4.58579 6.58579C4.96086 6.21071 5.46957 6 6 6H26Z"
                fill="white"
              />
            </svg>
            <h6
              className="mx-2 text-white"
              style={{ cursor: "pointer" }}
              onClick={onMonitor}
            >
              Monitor
            </h6>
          </div>
        </div>

        {/* Registry Section */}
        <div className="registry-container">
          <div className="d-flex justify-content-space-evenly align-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.592 1.66663H17.408C19.8587 1.66663 21.8 1.66663 23.3187 1.87063C24.8813 2.08129 26.1467 2.52396 27.1453 3.52129C27.322 3.71086 27.4181 3.96159 27.4136 4.22066C27.409 4.47972 27.304 4.7269 27.1208 4.91012C26.9376 5.09334 26.6904 5.19829 26.4314 5.20286C26.1723 5.20743 25.9216 5.11127 25.732 4.93463C25.1667 4.37196 24.3933 4.03329 23.052 3.85329C21.6827 3.66929 19.876 3.66663 17.3333 3.66663H14.6667C12.124 3.66663 10.3187 3.66929 8.94667 3.85329C7.60667 4.03329 6.83333 4.37196 6.26933 4.93596C5.70533 5.49996 5.36667 6.27329 5.18667 7.61329C5.00267 8.98529 5 10.7906 5 13.3333V18.6666C5 21.2093 5.00267 23.016 5.18667 24.3866C5.36667 25.7266 5.70533 26.5 6.26933 27.064C6.83333 27.628 7.60667 27.9666 8.948 28.1466C10.3187 28.3306 12.124 28.3333 14.6667 28.3333H17.3333C19.876 28.3333 21.6827 28.3306 23.0533 28.1466C24.3933 27.9666 25.1667 27.628 25.7307 27.064C26.6587 26.136 26.94 24.6946 26.988 21.3186C26.9919 21.0534 27.101 20.8006 27.2913 20.6158C27.3855 20.5243 27.4968 20.4523 27.6189 20.4038C27.7409 20.3553 27.8713 20.3314 28.0027 20.3333C28.134 20.3352 28.2636 20.363 28.3842 20.415C28.5048 20.4671 28.614 20.5423 28.7055 20.6366C28.797 20.7308 28.869 20.8421 28.9175 20.9642C28.966 21.0862 28.9899 21.2166 28.988 21.348C28.9413 24.584 28.732 26.892 27.1453 28.4786C26.1467 29.476 24.8813 29.9186 23.3187 30.1293C21.7987 30.3333 19.8587 30.3333 17.408 30.3333H14.592C12.1413 30.3333 10.2 30.3333 8.68133 30.1293C7.11867 29.9186 5.85333 29.476 4.85467 28.4786C3.85733 27.48 3.41467 26.2146 3.204 24.652C3 23.132 3 21.192 3 18.7413V13.2586C3 10.808 3 8.86663 3.204 7.34796C3.41467 5.78529 3.85733 4.51996 4.85467 3.52129C5.85333 2.52396 7.11867 2.08129 8.68133 1.87063C10.2013 1.66663 12.1413 1.66663 14.592 1.66663ZM24.152 9.39463C24.4853 9.04571 24.885 8.76693 25.3276 8.57466C25.7701 8.38239 26.2466 8.2805 26.7291 8.27498C27.2116 8.26947 27.6904 8.36043 28.1372 8.54254C28.5841 8.72464 28.99 8.99421 29.3312 9.33541C29.6724 9.67661 29.942 10.0826 30.1241 10.5294C30.3062 10.9762 30.3972 11.455 30.3916 11.9375C30.3861 12.42 30.2842 12.8965 30.092 13.3391C29.8997 13.7816 29.6209 14.1813 29.272 14.5146L22.9333 20.8573C22.6697 21.1352 22.3891 21.3966 22.0933 21.64C21.7858 21.88 21.4551 22.0844 21.1013 22.2533C20.8027 22.396 20.488 22.5 20.0267 22.6533L17.248 23.58C16.9471 23.6806 16.6241 23.6954 16.3153 23.6227C16.0065 23.55 15.724 23.3926 15.4997 23.1683C15.2753 22.9439 15.118 22.6615 15.0452 22.3527C14.9725 22.0438 14.9873 21.7208 15.088 21.42L15.996 18.7L16.0147 18.6426C16.1693 18.18 16.2733 17.8666 16.416 17.568C16.5836 17.2159 16.7892 16.8832 17.0293 16.576C17.2333 16.3146 17.4667 16.0813 17.812 15.736L17.8533 15.6946L24.152 9.39463ZM27.8587 10.808C27.7081 10.6573 27.5293 10.5379 27.3326 10.4563C27.1358 10.3748 26.925 10.3329 26.712 10.3329C26.499 10.3329 26.2882 10.3748 26.0914 10.4563C25.8947 10.5379 25.7159 10.6573 25.5653 10.808L25.3227 11.0506L25.368 11.1933C25.4933 11.5533 25.732 12.0333 26.1827 12.484C26.5814 12.8854 27.0741 13.181 27.616 13.344L27.8587 13.1013C28.0093 12.9507 28.1288 12.772 28.2103 12.5752C28.2918 12.3785 28.3338 12.1676 28.3338 11.9546C28.3338 11.7417 28.2918 11.5308 28.2103 11.334C28.1288 11.1373 28.0093 10.9585 27.8587 10.808ZM26.088 14.872C25.6004 14.6175 25.1552 14.2892 24.768 13.8986C24.3774 13.5114 24.0491 13.0662 23.7947 12.5786L19.2667 17.1066C18.8653 17.508 18.724 17.652 18.6053 17.804C18.4542 17.9977 18.3258 18.2053 18.22 18.4266C18.1373 18.6013 18.072 18.792 17.892 19.3306L17.3587 20.9306L17.736 21.308L19.336 20.7746C19.8747 20.5946 20.0653 20.5293 20.24 20.4466C20.4604 20.34 20.668 20.2115 20.8627 20.0613C21.0147 19.9426 21.1587 19.8013 21.56 19.4L26.088 14.872ZM9.66667 12C9.66667 11.7347 9.77202 11.4804 9.95956 11.2929C10.1471 11.1053 10.4014 11 10.6667 11H19.3333C19.5985 11 19.8529 11.1053 20.0404 11.2929C20.228 11.4804 20.3333 11.7347 20.3333 12C20.3333 12.2652 20.228 12.5195 20.0404 12.7071C19.8529 12.8946 19.5985 13 19.3333 13H10.6667C10.4014 13 10.1471 12.8946 9.95956 12.7071C9.77202 12.5195 9.66667 12.2652 9.66667 12ZM9.66667 17.3333C9.66667 17.0681 9.77202 16.8137 9.95956 16.6262C10.1471 16.4386 10.4014 16.3333 10.6667 16.3333H14C14.2652 16.3333 14.5196 16.4386 14.7071 16.6262C14.8946 16.8137 15 17.0681 15 17.3333C15 17.5985 14.8946 17.8529 14.7071 18.0404C14.5196 18.2279 14.2652 18.3333 14 18.3333H10.6667C10.4014 18.3333 10.1471 18.2279 9.95956 18.0404C9.77202 17.8529 9.66667 17.5985 9.66667 17.3333ZM9.66667 22.6666C9.66667 22.4014 9.77202 22.1471 9.95956 21.9595C10.1471 21.772 10.4014 21.6666 10.6667 21.6666H12.6667C12.9319 21.6666 13.1862 21.772 13.3738 21.9595C13.5613 22.1471 13.6667 22.4014 13.6667 22.6666C13.6667 22.9318 13.5613 23.1862 13.3738 23.3737C13.1862 23.5613 12.9319 23.6666 12.6667 23.6666H10.6667C10.4014 23.6666 10.1471 23.5613 9.95956 23.3737C9.77202 23.1862 9.66667 22.9318 9.66667 22.6666Z"
                fill="white"
              />
            </svg>
            <h6
              className="mx-2 text-white"
              style={{ cursor: "pointer" }}
              onClick={onRegister}
            >
              Registry
            </h6>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="6"
              viewBox="0 0 13 6"
              fill="none"
              className={`dropdown-arrow ${
                isRegistryOpen ? "up" : "down"
              } arrow-icon`}
              onClick={toggleRegistryDropdown}
            >
              <path
                d={
                  isRegistryOpen
                    ? "M6 0L11.1962 5.25L0.803848 5.25L6 0Z"
                    : "M6 6L0.803848 0.75L11.1962 0.75L6 6Z"
                }
                fill="white"
              />
            </svg>
          </div>

          {!isRegistryOpen && (
            <div className="registry-dropdown">
              <label onClick={onCheckList}>Checklist</label>
              <label>Verification</label>
              <label onClick={onRecTable}>RECs Insurance</label>
            </div>
          )}
        </div>

        {/* Listing Section */}
        <div className="listing-container">
          <div className="d-flex justify-content-space-evenly align-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M2.66602 16C2.66602 9.71463 2.66602 6.57196 4.61802 4.61863C6.57268 2.66663 9.71401 2.66663 15.9993 2.66663C22.2847 2.66663 25.4273 2.66663 27.3793 4.61863C29.3327 6.57329 29.3327 9.71463 29.3327 16C29.3327 22.2853 29.3327 25.428 27.3793 27.38C25.4287 29.3333 22.2847 29.3333 15.9993 29.3333C9.71401 29.3333 6.57135 29.3333 4.61802 27.38C2.66602 25.4293 2.66602 22.2853 2.66602 16Z"
                stroke="white"
                strokeWidth="1.5"
              />
              <path
                d="M8 21.0666L9.524 22.6666L13.3333 18.6666M8 11.7333L9.524 13.3333L13.3333 9.33331"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17.332 11.9999H23.9987M17.332 21.3333H23.9987"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            <h6
              className=" mx-2 text-white"
              style={{ cursor: "pointer" }}
              onClick={onListing}
            >
              Listing
            </h6>
          </div>
        </div>

        {/* Redirect Section */}
        <div className="redirect-container">
          <div className="d-flex justify-content-space-evenly align-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M20.9547 16.6667H18.564C18.3747 16.6667 18.2164 16.7307 18.0893 16.8587C17.9622 16.9867 17.8982 17.1453 17.8973 17.3347C17.8964 17.524 17.9604 17.6822 18.0893 17.8093C18.2182 17.9364 18.3764 18 18.564 18H22.1547C22.4596 18 22.7151 17.8969 22.9213 17.6907C23.1276 17.4836 23.2307 17.2276 23.2307 16.9227V13.3333C23.2307 13.144 23.1667 12.9858 23.0387 12.8587C22.9107 12.7307 22.752 12.6667 22.5627 12.6667C22.3733 12.6667 22.2151 12.7307 22.088 12.8587C21.9609 12.9867 21.8973 13.1449 21.8973 13.3333V15.7067C21.084 14.4533 20.0884 13.5222 18.9107 12.9133C17.7347 12.3044 16.6089 12 15.5333 12C13.8764 12 12.436 12.4947 11.212 13.484C9.988 14.4733 9.19511 15.7156 8.83333 17.2107C8.77911 17.4053 8.81156 17.5858 8.93067 17.752C9.04978 17.9182 9.20089 18.0009 9.384 18C9.59111 18 9.76089 17.9293 9.89333 17.788C10.0267 17.6476 10.1231 17.4738 10.1827 17.2667C10.4938 16.1404 11.144 15.2031 12.1333 14.4547C13.1236 13.7071 14.2569 13.3333 15.5333 13.3333C16.4364 13.3333 17.3991 13.6236 18.4213 14.204C19.4436 14.7844 20.288 15.6053 20.9547 16.6667ZM16.004 28C14.3453 28 12.7853 27.6853 11.324 27.056C9.86356 26.4258 8.59289 25.5707 7.512 24.4907C6.43111 23.4107 5.57556 22.1413 4.94533 20.6827C4.31511 19.224 4 17.6644 4 16.004C4 14.3436 4.31511 12.7836 4.94533 11.324C5.57467 9.86356 6.42844 8.59289 7.50667 7.512C8.58489 6.43111 9.85467 5.57556 11.316 4.94533C12.7773 4.31511 14.3373 4 15.996 4C17.6547 4 19.2147 4.31511 20.676 4.94533C22.1364 5.57467 23.4071 6.42889 24.488 7.508C25.5689 8.58711 26.4244 9.85689 27.0547 11.3173C27.6849 12.7778 28 14.3373 28 15.996C28 17.6547 27.6853 19.2147 27.056 20.676C26.4267 22.1373 25.5716 23.408 24.4907 24.488C23.4098 25.568 22.1404 26.4236 20.6827 27.0547C19.2249 27.6858 17.6653 28.0009 16.004 28ZM16 26.6667C18.9778 26.6667 21.5 25.6333 23.5667 23.5667C25.6333 21.5 26.6667 18.9778 26.6667 16C26.6667 13.0222 25.6333 10.5 23.5667 8.43333C21.5 6.36667 18.9778 5.33333 16 5.33333C13.0222 5.33333 10.5 6.36667 8.43333 8.43333C6.36667 10.5 5.33333 13.0222 5.33333 16C5.33333 18.9778 6.36667 21.5 8.43333 23.5667C10.5 25.6333 13.0222 26.6667 16 26.6667Z"
                fill="white"
              />
            </svg>
            <h6 className="mx-2 text-white">Redirect</h6>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="6"
              viewBox="0 0 13 6"
              fill="none"
              className={`dropdown-arrow ${
                isRedirectOpen ? "up" : "down"
              } arrow-icon`}
              onClick={toggleRedirectDropdown}
            >
              <path
                d={
                  isRedirectOpen
                    ? "M6 0L11.1962 5.25L0.803848 5.25L6 0Z"
                    : "M6 6L0.803848 0.75L11.1962 0.75L6 6Z"
                }
                fill="white"
              />
            </svg>
          </div>

          {!isRedirectOpen && (
            <div className="registry-dropdown">
              <label>GAGA Exchange</label>
              <label>GAGA Portal</label>
              <label>Main Website</label>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

/*
import React, { useState } from "react";
import "./Sidebar.css";
import { Link, useNavigate } from "react-router-dom";

const Sidebar = ({ onOptionClick }) => {
  const navigate = useNavigate();
  const [isRegistryOpen, setIsRegistryOpen] = useState(true);
  const [isRedirectOpen, setIsRedirectOpen] = useState(true);

  const toggleRegistryDropdown = () => {
    setIsRegistryOpen(!isRegistryOpen);
  };

  const toggleRedirectDropdown = () => {
    setIsRedirectOpen(!isRedirectOpen);
  };

  const onRegister = () => {
    navigate("/registry");
  };
  const onShowroom = () => {
    navigate("/our-showroom");
  };
  const onListing = () => {
    navigate("/listing");
  };
  const onMonitor = () => {
    navigate("/monitor");
  };

  const onRecTable = () => {
    navigate("/rec-table");
  };
console.log('dudoqdheodh Sidebar ',onOptionClick)

  return (
    <div className="sidebar-container">
      <div className="sidebar">
        <div className="sidebar-content">
          <button className="our-showroom-button" type="button">
            <div className="d-flex justify-content-space-evenly align-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M23.9992 2.66663C24.2299 2.6664 24.4537 2.74602 24.6325 2.89196L24.7325 2.98529L29.0965 7.69196L29.1365 7.74263C29.2725 7.92396 29.3338 8.12929 29.3338 8.32929L29.3312 10.8893C29.3312 12.2146 28.8272 13.4226 27.9978 14.3293V28.3333C27.9978 28.5749 27.9103 28.8084 27.7515 28.9905C27.5926 29.1727 27.3732 29.2911 27.1338 29.324L26.9978 29.3333H5.00182C4.75994 29.3336 4.52614 29.2462 4.34375 29.0874C4.16135 28.9285 4.04271 28.7089 4.00982 28.4693L4.00182 28.3333L3.99915 14.3306C3.21095 13.4677 2.74347 12.36 2.67515 11.1933L2.66582 10.8893V8.38663C2.65439 8.19668 2.69889 8.00755 2.79382 7.84263L2.88049 7.71596L2.93382 7.65463L7.26582 2.98663C7.42235 2.81768 7.6324 2.70795 7.86049 2.67596L7.99915 2.66663H23.9992ZM20.1085 13.9226L20.0925 13.9466C19.6171 14.5839 18.9995 15.1014 18.2889 15.4579C17.5782 15.8143 16.7942 16 15.9992 16C15.1991 16.0004 14.4102 15.8129 13.696 15.4525C12.9817 15.0922 12.3621 14.569 11.8872 13.9253C11.4124 14.5687 10.7933 15.0916 10.0795 15.4519C9.36577 15.8123 8.57738 16 7.77782 16C7.15249 16 6.55382 15.888 5.99915 15.6826L6.00049 27.3333H7.99915V18.336C7.99921 18.0941 8.08691 17.8605 8.24601 17.6783C8.40511 17.4962 8.62484 17.3779 8.86449 17.3453L8.99915 17.3333H14.9938C15.2355 17.3333 15.4689 17.4208 15.6511 17.5796C15.8332 17.7385 15.9516 17.9579 15.9845 18.1973L15.9938 18.3333V27.3306H25.9965V15.6813C24.957 16.0668 23.8203 16.1036 22.7581 15.7861C21.6959 15.4686 20.7659 14.814 20.1085 13.9213M13.9925 19.3333H9.99915V27.3306H13.9925V19.3333ZM23.0058 17.3333C23.2475 17.3333 23.4809 17.4208 23.6631 17.5796C23.8452 17.7385 23.9636 17.9579 23.9965 18.1973L24.0058 18.3333V23.0026C24.0058 23.2443 23.9183 23.4777 23.7595 23.6599C23.6006 23.842 23.3812 23.9604 23.1418 23.9933L23.0058 24.0026H18.3378C18.0962 24.0026 17.8627 23.9151 17.6806 23.7563C17.4985 23.5974 17.38 23.378 17.3472 23.1386L17.3378 23.0026V18.3333C17.3378 18.0916 17.4253 17.8582 17.5842 17.6761C17.743 17.4939 17.9624 17.3755 18.2018 17.3426L18.3378 17.3333H23.0058ZM22.0058 19.3333H19.3365V22.0026H22.0045L22.0058 19.3333ZM10.8858 9.33596H4.66715V10.8893L4.67649 11.116L4.71382 11.4253L4.75782 11.6333L4.82449 11.8626L4.89649 12.06L4.94982 12.1853C4.9916 12.276 5.03737 12.364 5.08715 12.4493L5.22449 12.6653L5.29649 12.764L5.46849 12.972L5.65782 13.164L5.78582 13.2773L5.84182 13.3226C6.26182 13.656 6.76849 13.8853 7.32449 13.9666L7.56449 13.992L7.77782 13.9986C8.56605 13.9994 9.32511 13.7005 9.90121 13.1626C10.4773 12.6246 10.8274 11.8877 10.8805 11.1013L10.8885 10.888L10.8858 9.33596ZM19.1058 9.33596H12.8872V10.8893C12.8872 12.4626 14.0578 13.7653 15.5765 13.9706L15.7845 13.992L15.9978 13.9986C16.786 13.9994 17.5451 13.7005 18.1212 13.1626C18.6973 12.6246 19.0474 11.8877 19.1005 11.1013L19.1085 10.888L19.1058 9.33596ZM27.3285 9.33596H21.1085L21.1098 10.8893C21.1098 12.4626 22.2805 13.7653 23.7978 13.9706L24.0072 13.992L24.2205 13.9986C24.9725 13.9986 25.6618 13.732 26.2005 13.2866L26.3205 13.1826L26.4752 13.032L26.6698 12.8053C26.7418 12.7137 26.8085 12.6177 26.8698 12.5173L27.0085 12.2693L27.0925 12.0853L27.1698 11.8786L27.2098 11.7506L27.2605 11.548L27.2978 11.3386L27.3218 11.116L27.3298 10.8893L27.3285 9.33596ZM12.0818 4.66529H8.43515L5.95915 7.33596H11.2618L12.0818 4.66529ZM17.8245 4.66529H14.1738L13.3525 7.33596H18.6458L17.8245 4.66529ZM23.5618 4.66529H19.9165L20.7378 7.33596H26.0392L23.5618 4.66529Z"
                  fill="white"
                />
              </svg>
              <h6 className="mx-2 our-showroom-heading" onClick={onShowroom}>
                Our Showroom
              </h6>
            </div>
          </button>
        </div>

     
        <div className="monitor-container">
          <div className="d-flex justify-content-space-evenly align-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M15 24V28H9C8.73478 28 8.48043 28.1054 8.29289 28.2929C8.10536 28.4804 8 28.7348 8 29C8 29.2652 8.10536 29.5196 8.29289 29.7071C8.48043 29.8946 8.73478 30 9 30H23C23.2652 30 23.5196 29.8946 23.7071 29.7071C23.8946 29.5196 24 29.2652 24 29C24 28.7348 23.8946 28.4804 23.7071 28.2929C23.5196 28.1054 23.2652 28 23 28H17V24H26C27.0609 24 28.0783 23.5786 28.8284 22.8284C29.5786 22.0783 30 21.0609 30 20V8C30 6.93913 29.5786 5.92172 28.8284 5.17157C28.0783 4.42143 27.0609 4 26 4H6C4.93913 4 3.92172 4.42143 3.17157 5.17157C2.42143 5.92172 2 6.93913 2 8V20C2 21.0609 2.42143 22.0783 3.17157 22.8284C3.92172 23.5786 4.93913 24 6 24H15ZM26 6C26.5304 6 27.0391 6.21071 27.4142 6.58579C27.7893 6.96086 28 7.46957 28 8V20C28 20.5304 27.7893 21.0391 27.4142 21.4142C27.0391 21.7893 26.5304 22 26 22H6C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V8C4 7.46957 4.21071 6.96086 4.58579 6.58579C4.96086 6.21071 5.46957 6 6 6H26Z"
                fill="white"
              />
            </svg>
            <h6
              className="mx-2 text-white"
              style={{ cursor: "pointer" }}
              onClick={onMonitor}
            >
              Monitor
            </h6>
          </div>
        </div>

        <div className="registry-container">
          <div className="d-flex justify-content-space-evenly align-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.592 1.66663H17.408C19.8587 1.66663 21.8 1.66663 23.3187 1.87063C24.8813 2.08129 26.1467 2.52396 27.1453 3.52129C27.322 3.71086 27.4181 3.96159 27.4136 4.22066C27.409 4.47972 27.304 4.7269 27.1208 4.91012C26.9376 5.09334 26.6904 5.19829 26.4314 5.20286C26.1723 5.20743 25.9216 5.11127 25.732 4.93463C25.1667 4.37196 24.3933 4.03329 23.052 3.85329C21.6827 3.66929 19.876 3.66663 17.3333 3.66663H14.6667C12.124 3.66663 10.3187 3.66929 8.94667 3.85329C7.60667 4.03329 6.83333 4.37196 6.26933 4.93596C5.70533 5.49996 5.36667 6.27329 5.18667 7.61329C5.00267 8.98529 5 10.7906 5 13.3333V18.6666C5 21.2093 5.00267 23.016 5.18667 24.3866C5.36667 25.7266 5.70533 26.5 6.26933 27.064C6.83333 27.628 7.60667 27.9666 8.948 28.1466C10.3187 28.3306 12.124 28.3333 14.6667 28.3333H17.3333C19.876 28.3333 21.6827 28.3306 23.0533 28.1466C24.3933 27.9666 25.1667 27.628 25.7307 27.064C26.6587 26.136 26.94 24.6946 26.988 21.3186C26.9919 21.0534 27.101 20.8006 27.2913 20.6158C27.3855 20.5243 27.4968 20.4523 27.6189 20.4038C27.7409 20.3553 27.8713 20.3314 28.0027 20.3333C28.134 20.3352 28.2636 20.363 28.3842 20.415C28.5048 20.4671 28.614 20.5423 28.7055 20.6366C28.797 20.7308 28.869 20.8421 28.9175 20.9642C28.966 21.0862 28.9899 21.2166 28.988 21.348C28.9413 24.584 28.732 26.892 27.1453 28.4786C26.1467 29.476 24.8813 29.9186 23.3187 30.1293C21.7987 30.3333 19.8587 30.3333 17.408 30.3333H14.592C12.1413 30.3333 10.2 30.3333 8.68133 30.1293C7.11867 29.9186 5.85333 29.476 4.85467 28.4786C3.85733 27.48 3.41467 26.2146 3.204 24.652C3 23.132 3 21.192 3 18.7413V13.2586C3 10.808 3 8.86663 3.204 7.34796C3.41467 5.78529 3.85733 4.51996 4.85467 3.52129C5.85333 2.52396 7.11867 2.08129 8.68133 1.87063C10.2013 1.66663 12.1413 1.66663 14.592 1.66663ZM24.152 9.39463C24.4853 9.04571 24.885 8.76693 25.3276 8.57466C25.7701 8.38239 26.2466 8.2805 26.7291 8.27498C27.2116 8.26947 27.6904 8.36043 28.1372 8.54254C28.5841 8.72464 28.99 8.99421 29.3312 9.33541C29.6724 9.67661 29.942 10.0826 30.1241 10.5294C30.3062 10.9762 30.3972 11.455 30.3916 11.9375C30.3861 12.42 30.2842 12.8965 30.092 13.3391C29.8997 13.7816 29.6209 14.1813 29.272 14.5146L22.9333 20.8573C22.6697 21.1352 22.3891 21.3966 22.0933 21.64C21.7858 21.88 21.4551 22.0844 21.1013 22.2533C20.8027 22.396 20.488 22.5 20.0267 22.6533L17.248 23.58C16.9471 23.6806 16.6241 23.6954 16.3153 23.6227C16.0065 23.55 15.724 23.3926 15.4997 23.1683C15.2753 22.9439 15.118 22.6615 15.0452 22.3527C14.9725 22.0438 14.9873 21.7208 15.088 21.42L15.996 18.7L16.0147 18.6426C16.1693 18.18 16.2733 17.8666 16.416 17.568C16.5836 17.2159 16.7892 16.8832 17.0293 16.576C17.2333 16.3146 17.4667 16.0813 17.812 15.736L17.8533 15.6946L24.152 9.39463ZM27.8587 10.808C27.7081 10.6573 27.5293 10.5379 27.3326 10.4563C27.1358 10.3748 26.925 10.3329 26.712 10.3329C26.499 10.3329 26.2882 10.3748 26.0914 10.4563C25.8947 10.5379 25.7159 10.6573 25.5653 10.808L25.3227 11.0506L25.368 11.1933C25.4933 11.5533 25.732 12.0333 26.1827 12.484C26.5814 12.8854 27.0741 13.181 27.616 13.344L27.8587 13.1013C28.0093 12.9507 28.1288 12.772 28.2103 12.5752C28.2918 12.3785 28.3338 12.1676 28.3338 11.9546C28.3338 11.7417 28.2918 11.5308 28.2103 11.334C28.1288 11.1373 28.0093 10.9585 27.8587 10.808ZM26.088 14.872C25.6004 14.6175 25.1552 14.2892 24.768 13.8986C24.3774 13.5114 24.0491 13.0662 23.7947 12.5786L19.2667 17.1066C18.8653 17.508 18.724 17.652 18.6053 17.804C18.4542 17.9977 18.3258 18.2053 18.22 18.4266C18.1373 18.6013 18.072 18.792 17.892 19.3306L17.3587 20.9306L17.736 21.308L19.336 20.7746C19.8747 20.5946 20.0653 20.5293 20.24 20.4466C20.4604 20.34 20.668 20.2115 20.8627 20.0613C21.0147 19.9426 21.1587 19.8013 21.56 19.4L26.088 14.872ZM9.66667 12C9.66667 11.7347 9.77202 11.4804 9.95956 11.2929C10.1471 11.1053 10.4014 11 10.6667 11H19.3333C19.5985 11 19.8529 11.1053 20.0404 11.2929C20.228 11.4804 20.3333 11.7347 20.3333 12C20.3333 12.2652 20.228 12.5195 20.0404 12.7071C19.8529 12.8946 19.5985 13 19.3333 13H10.6667C10.4014 13 10.1471 12.8946 9.95956 12.7071C9.77202 12.5195 9.66667 12.2652 9.66667 12ZM9.66667 17.3333C9.66667 17.0681 9.77202 16.8137 9.95956 16.6262C10.1471 16.4386 10.4014 16.3333 10.6667 16.3333H14C14.2652 16.3333 14.5196 16.4386 14.7071 16.6262C14.8946 16.8137 15 17.0681 15 17.3333C15 17.5985 14.8946 17.8529 14.7071 18.0404C14.5196 18.2279 14.2652 18.3333 14 18.3333H10.6667C10.4014 18.3333 10.1471 18.2279 9.95956 18.0404C9.77202 17.8529 9.66667 17.5985 9.66667 17.3333ZM9.66667 22.6666C9.66667 22.4014 9.77202 22.1471 9.95956 21.9595C10.1471 21.772 10.4014 21.6666 10.6667 21.6666H12.6667C12.9319 21.6666 13.1862 21.772 13.3738 21.9595C13.5613 22.1471 13.6667 22.4014 13.6667 22.6666C13.6667 22.9318 13.5613 23.1862 13.3738 23.3737C13.1862 23.5613 12.9319 23.6666 12.6667 23.6666H10.6667C10.4014 23.6666 10.1471 23.5613 9.95956 23.3737C9.77202 23.1862 9.66667 22.9318 9.66667 22.6666Z"
                fill="white"
              />
            </svg>
            <h6
              className="mx-2 text-white"
              style={{ cursor: "pointer" }}
              // onClick={onRegister}
              onClick={() => onOptionClick("checklist")}
            >
              Registry
            </h6>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="6"
              viewBox="0 0 13 6"
              fill="none"
              className={`dropdown-arrow ${
                isRegistryOpen ? "up" : "down"
              } arrow-icon`}
              onClick={toggleRegistryDropdown}
            >
              <path
                d={
                  isRegistryOpen
                    ? "M6 0L11.1962 5.25L0.803848 5.25L6 0Z"
                    : "M6 6L0.803848 0.75L11.1962 0.75L6 6Z"
                }
                fill="white"
              />
            </svg>
          </div>

          {!isRegistryOpen && (
            <div className="registry-dropdown">
              <label onClick={() => onOptionClick("checklist")}>
                Checklist
              </label>
              <label>Verification</label>
              <label
                //  onClick={onRecTable}
                onClick={() => onOptionClick("recTable")}
              >
                RECs Insurance
              </label>
            </div>
          )}
        </div>

        <div className="listing-container">
          <div className="d-flex justify-content-space-evenly align-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M2.66602 16C2.66602 9.71463 2.66602 6.57196 4.61802 4.61863C6.57268 2.66663 9.71401 2.66663 15.9993 2.66663C22.2847 2.66663 25.4273 2.66663 27.3793 4.61863C29.3327 6.57329 29.3327 9.71463 29.3327 16C29.3327 22.2853 29.3327 25.428 27.3793 27.38C25.4287 29.3333 22.2847 29.3333 15.9993 29.3333C9.71401 29.3333 6.57135 29.3333 4.61802 27.38C2.66602 25.4293 2.66602 22.2853 2.66602 16Z"
                stroke="white"
                strokeWidth="1.5"
              />
              <path
                d="M8 21.0666L9.524 22.6666L13.3333 18.6666M8 11.7333L9.524 13.3333L13.3333 9.33331"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17.332 11.9999H23.9987M17.332 21.3333H23.9987"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            <h6
              className=" mx-2 text-white"
              style={{ cursor: "pointer" }}
              onClick={onListing}
            >
              Listing
            </h6>
          </div>
        </div>

        <div className="redirect-container">
          <div className="d-flex justify-content-space-evenly align-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M20.9547 16.6667H18.564C18.3747 16.6667 18.2164 16.7307 18.0893 16.8587C17.9622 16.9867 17.8982 17.1453 17.8973 17.3347C17.8964 17.524 17.9604 17.6822 18.0893 17.8093C18.2182 17.9364 18.3764 18 18.564 18H22.1547C22.4596 18 22.7151 17.8969 22.9213 17.6907C23.1276 17.4836 23.2307 17.2276 23.2307 16.9227V13.3333C23.2307 13.144 23.1667 12.9858 23.0387 12.8587C22.9107 12.7307 22.752 12.6667 22.5627 12.6667C22.3733 12.6667 22.2151 12.7307 22.088 12.8587C21.9609 12.9867 21.8973 13.1449 21.8973 13.3333V15.7067C21.084 14.4533 20.0884 13.5222 18.9107 12.9133C17.7347 12.3044 16.6089 12 15.5333 12C13.8764 12 12.436 12.4947 11.212 13.484C9.988 14.4733 9.19511 15.7156 8.83333 17.2107C8.77911 17.4053 8.81156 17.5858 8.93067 17.752C9.04978 17.9182 9.20089 18.0009 9.384 18C9.59111 18 9.76089 17.9293 9.89333 17.788C10.0267 17.6476 10.1231 17.4738 10.1827 17.2667C10.4938 16.1404 11.144 15.2031 12.1333 14.4547C13.1236 13.7071 14.2569 13.3333 15.5333 13.3333C16.4364 13.3333 17.3991 13.6236 18.4213 14.204C19.4436 14.7844 20.288 15.6053 20.9547 16.6667ZM16.004 28C14.3453 28 12.7853 27.6853 11.324 27.056C9.86356 26.4258 8.59289 25.5707 7.512 24.4907C6.43111 23.4107 5.57556 22.1413 4.94533 20.6827C4.31511 19.224 4 17.6644 4 16.004C4 14.3436 4.31511 12.7836 4.94533 11.324C5.57467 9.86356 6.42844 8.59289 7.50667 7.512C8.58489 6.43111 9.85467 5.57556 11.316 4.94533C12.7773 4.31511 14.3373 4 15.996 4C17.6547 4 19.2147 4.31511 20.676 4.94533C22.1364 5.57467 23.4071 6.42889 24.488 7.508C25.5689 8.58711 26.4244 9.85689 27.0547 11.3173C27.6849 12.7778 28 14.3373 28 15.996C28 17.6547 27.6853 19.2147 27.056 20.676C26.4267 22.1373 25.5716 23.408 24.4907 24.488C23.4098 25.568 22.1404 26.4236 20.6827 27.0547C19.2249 27.6858 17.6653 28.0009 16.004 28ZM16 26.6667C18.9778 26.6667 21.5 25.6333 23.5667 23.5667C25.6333 21.5 26.6667 18.9778 26.6667 16C26.6667 13.0222 25.6333 10.5 23.5667 8.43333C21.5 6.36667 18.9778 5.33333 16 5.33333C13.0222 5.33333 10.5 6.36667 8.43333 8.43333C6.36667 10.5 5.33333 13.0222 5.33333 16C5.33333 18.9778 6.36667 21.5 8.43333 23.5667C10.5 25.6333 13.0222 26.6667 16 26.6667Z"
                fill="white"
              />
            </svg>
            <h6 className="mx-2 text-white">Redirect</h6>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="6"
              viewBox="0 0 13 6"
              fill="none"
              className={`dropdown-arrow ${
                isRedirectOpen ? "up" : "down"
              } arrow-icon`}
              onClick={toggleRedirectDropdown}
            >
              <path
                d={
                  isRedirectOpen
                    ? "M6 0L11.1962 5.25L0.803848 5.25L6 0Z"
                    : "M6 6L0.803848 0.75L11.1962 0.75L6 6Z"
                }
                fill="white"
              />
            </svg>
          </div>

          {!isRedirectOpen && (
            <div className="registry-dropdown">
              <label>GAGA Exchange</label>
              <label>GAGA Portal</label>
              <label>Main Website</label>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
*/

import React, { useEffect, useRef, useState } from "react";
import "./OurShworoom.css";
import Sidebar from "../Sidebar/Sidebar";
import carImg from "../../assets/carImg.png";
import solarPanel from "../../assets/solar-panel.png";
import solarPanel1 from "../../assets/solar-image.png";
import solarImg from "../../assets/solar-car.png";
import roof from "../../assets/roof.png";
import nature from "../../assets/nature.png";
import { CiCircleChevLeft } from "react-icons/ci";
import { CiCircleChevRight } from "react-icons/ci";

const OurShworoom = () => {
  const [showData, setShowData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0); // To track the sliding index


  useEffect(() => {
    const getData = async () => {
      const authToken = sessionStorage.getItem("authToken");
      try {
        const res = await fetch(
          `http://localhost:8000/api/dashboard/getItems`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "auth-token": `Bearer ${authToken}`,
            },
          }
        );

        if (!res.ok) {
          const text = await res.text(); // Read the response as text
          console.error("Server returned an error:", text);
          alert("Failed to fetch data. Please check your server.");
          return;
        }

        const data = await res.json(); // Wait for the data to be converted to JSON
        console.log("Full response from API:", data);

        // Check if data contains the expected structure
        if (Array.isArray(data.items)) {
          // Assuming `items` is the array you want to display
          setShowData(data.items);
        } else if (Array.isArray(data)) {
          // If the data itself is an array
          setShowData(data);
        } else {
          // Log the unexpected format for debugging purposes
          console.error("Unexpected response format:", data);
        }
      } catch (error) {
        console.error("Error occurred while fetching data:", error);
      }
    };

    getData();
  }, []);

    // Handle left and right clicks
    const handlePrev = () => {
      setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
    };
  
    const handleNext = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex < showData.length - 3 ? prevIndex + 1 : prevIndex
      );
    };

  return (
    <div className="our-showroom">
      <Sidebar />
      <div className="overview-container">
        <h2 className="overview-heading">Overview</h2>
        <h4 className="heading2">Key values for Exchange</h4>

        <div className="card21">
          <div className="showroom-icons">
            <img className="showroom-icons-bg" src={solarImg} alt="Car" />
            <img className="showroom-icons-bg" src={solarPanel} alt="Car" />
            <img className="showroom-icons-bg" src={roof} alt="Car" />
            <img className="showroom-icons-bg" src={nature} alt="Car" />
          </div>
          <img className="car-img" src={carImg} alt="Car" />

          {showData.length > 0 ? (
            <div className="data data2">
              <label>
                <h4>SOLARGAGA ID: {showData[0]?.solarGagaId || "N/A"}</h4>
              </label>
              <div className="d-flex justify-content-space-around align-items-center ">
                <label>Registry: {showData[0]?.totalReg || "N/A"}</label>
                <label style={{ marginLeft: "120px" }}>
                  RECs ID:{" "}
                  <span style={{ color: "#2196F3" }}>
                    {showData[0]?.RecId || "N/A"}
                  </span>
                </label>
              </div>
              <label>
                Capacity:{" "}
                <span className="mx-2"> {showData[0]?.capacity || "N/A"}</span>
              </label>
              <label>
                Renewable Energy Type:{" "}
                <span className="mx-2">
                  {showData[0]?.renewableEnergyType || "N/A"}
                </span>
              </label>
              <label>
                Operating Date:{" "}
                <span className="mx-2">
                  {showData[0]?.operatingDate
                    ? new Date(showData[0].operatingDate).toLocaleDateString(
                        "en-US"
                      )
                    : "N/A"}
                </span>
              </label>
              <label>
                Location:
                <span className="mx-2">
                  {showData[0]?.Location || "N/A"}
                </span>{" "}
              </label>
              <label>
                Available for Sale:{" "}
                <span className="mx-2">
                  {showData[0]?.availableForSale || "N/A"}
                </span>
              </label>
            </div>
          ) : (
            <p>No data available</p>
          )}
        </div>

        <div
          style={{ marginTop: "120px", fontWeight: "700" }}
          className="arrow-icons-container"
        >
          <h3 className="my-4 ">Explore All Our Products</h3>
          <div className="arrow-icons">
            <CiCircleChevLeft className="icons" onClick={handlePrev} />
            <CiCircleChevRight className="icons" onClick={handleNext} />
          </div>
        </div>

        <div className="card-container">
          <div
            className="card-slider"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              transition: "transform 0.5s ease-in-out",
            }}
          >
            {/* Render all items from showData */}
            {showData.map((item, index) => (
              <div
                className="card whole-card-container"
                // style={{ width: "18rem" }}
                key={index}
              >
                {index === 0 ? (
                  <img
                    src={carImg}
                    className="card-img-top image-size"
                    alt="Car"
                  />
                ) : (
                  <img
                    src={solarPanel1}
                    className="card-img-top image-size"
                    alt="Solar Panel"
                  />
                )}

                <div className="card-body card-below">
                  <h6 className="text-center">
                    SOLARGAGA ID: {item?.solarGagaId || "N/A"}
                  </h6>
                  <p className="card-text ">
                    <div
                      className="d-flex justify-content-center align-items-center flex-row"
                      style={{ marginTop: "40px" }}
                    >
                      <p style={{ fontSize: "12px" }}>
                        Registry: {item?.totalReg || "N/A"}
                      </p>
                      <span className="mx-4">
                        <p style={{ fontSize: "12px" }}>
                          RECs ID:{" "}
                          <span style={{ color: "#2196F3" }}>
                            {item?.RecId || "N/A"}
                          </span>
                        </p>
                      </span>
                    </div>
                  </p>
                  <span className="mx-4" style={{ marginTop: "20px" }}>
                    <p style={{ fontSize: "12px" }}>
                      Renewable Energy Type:{" "}
                      {item?.renewableEnergyType || "N/A"}
                    </p>
                  </span>
                  <div className="view-button-container">
                    <button type="button" className="view-button">
                      View Details
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                      >
                        <path
                          d="M9.72225 2H3.61112C3.45758 2 3.33334 2.12425 3.33334 2.27779C3.33334 2.43133 3.45758 2.55557 3.61112 2.55557H9.05168L0.0813866 11.5259C-0.0271289 11.6344 -0.0271289 11.8101 0.0813866 11.9186C0.135632 11.9729 0.206725 12 0.277793 12C0.348861 12 0.419929 11.9729 0.4742 11.9186L9.44446 2.94836V8.38891C9.44446 8.54245 9.56868 8.66669 9.72225 8.66669C9.87582 8.66669 10 8.54245 10 8.38891V2.27779C10 2.12425 9.87575 2 9.72225 2Z"
                          fill="white"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurShworoom;

// import React, { useEffect, useState } from "react";
// import "./OurShworoom.css";
// import Sidebar from "../Sidebar/Sidebar";
// import carImg from "../../assets/carImg.png";

// const OurShworoom = () => {
//   const [showData, setShowData] = useState([]);
//   useEffect(() => {
//     const getData = async () => {
//       const authToken = sessionStorage.getItem("authToken");
//       try {
//         const res = await fetch(
//           `http://localhost:8000/api/dashboard/getItems`,
//           {
//             method: `GET`,
//             headers: {
//               "Content-Type": "application/json",
//               "auth-token": `Bearer ${authToken}`,
//             },
//           }
//         );
//         if (!res.ok) {
//           const text = await res.text(); // Read the response as text
//           console.error("Server returned an error:", text);
//           alert("Failed to sign in. Please check your server.");
//           return;
//         }
//         const data = await res.json();
//         console.log(
//           "Data fetched from get items api in OUR SHOWROOM JSX === ",
//           data
//         );
//         setShowData(data);
//       } catch (error) {
//         console.log(`Error Occuured while fetching data `, error);
//       }
//     };
//     getData();
//   }, []);

//   return (
//     <div className="our-showroom">
//       <Sidebar />
//       <div className="overview-container">
//         <h2 className="overview-heading">Overview</h2>
//         <h4 className="heading2">Key values for Exchange</h4>

//         <div className="card21">
//           <img className="car-img" src={carImg} alt="" />
//           {showData.map((item) => (
//             <div>
//               <label htmlFor="">SOLARGAGA ID: {item?.items?.solarGagaId}</label>
//               <label htmlFor="">
//                 Registry: TIGR APX: {item?.items?.totalReg}
//               </label>
//               <label htmlFor="">RECs ID: {item?.items?.RecId}</label>
//               <label htmlFor="">Capacity: {item?.items?.capacity}</label>
//               <label htmlFor="">
//                 Renewable Energy Type: {item?.items?.renewableEnergyType}
//               </label>
//               <label htmlFor="">
//                 Operating Date: {item?.items?.operatingDate}
//               </label>
//               <label htmlFor="">Location: {item?.items?.Location}</label>
//               <label htmlFor="">
//                 Available for Sale: {item?.items?.availableForSale}
//               </label>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OurShworoom;

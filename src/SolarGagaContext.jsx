import React, { createContext, useState, useEffect } from "react";

// Create context
export const SolarGagaContext = createContext();

const SolarGagaProvider = ({ children }) => {
  const [jwtToken, setJwtToken] = useState(null);

  // Function to fetch token from sessionStorage
  const fetchToken = () => {
    const token = sessionStorage.getItem("authToken");

    if (token) {
      setJwtToken(token); // Set the token in state
      console.log("Token found and set in context:", token);
    } else {
      console.log("No token found, user not logged in");
    }
  };

  // Fetch the token when the provider mounts
  useEffect(() => {
    fetchToken(); // This fetches the token from sessionStorage when the app starts
  }, []);

  // Monitor jwtToken updates
  // useEffect(() => {
  //   if (jwtToken) {
  //     console.log('jwtToken updated in state:', jwtToken);
  //   }
  // }, [jwtToken]);

  useEffect(() => {
    const token = sessionStorage.getItem("authToken");
    if (token) {
      setJwtToken(token);
    }
  }, []);

  return (
    <SolarGagaContext.Provider value={{ jwtToken, setJwtToken }}>
      {children}
    </SolarGagaContext.Provider>
  );
};

export default SolarGagaProvider;

// import React, { createContext, useState, useEffect } from 'react';

// export const SolarGagaContext = createContext();

// const SolarGagaProvider = ({ children }) => {
//   const [jwtToken, setJwtToken] = useState(null);

//   const fetchToken = () => {
//     const token = sessionStorage.getItem('authToken');

//     if (token) {
//       setJwtToken(token);
//     } else {
//       console.log('No token found, user not logged in');
//     }
//   };
//   console.log('jwt tokjen present in context',jwtToken)

//   useEffect(() => {
//     fetchToken();
//   }, []);

//   return (
//     <SolarGagaContext.Provider value={{ jwtToken, setJwtToken }}>
//       {children}
//     </SolarGagaContext.Provider>
//   );
// };

// export default SolarGagaProvider;

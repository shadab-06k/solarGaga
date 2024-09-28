import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState([]);

  const onLogout = async () => {
    sessionStorage.removeItem("authToken");
    navigate("/signin");
  };

  const decodeToken = (token) => {
    try {
      // JWT structure is: header.payload.signature
      const base64Url = token.split(".")[1]; // Extract payload part
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
   // Check if the user is authenticated
//    useEffect(() => {
//     const authToken = sessionStorage.getItem("authToken");
//     if (!authToken) {
//       navigate("/signin"); // Redirect to signin if no token is found
//     }
//   }, [navigate]);
useEffect(() => {
    const authToken = sessionStorage.getItem("authToken");

    if (!authToken) {
      navigate("/signin"); // Redirect to signin if no token is found
    } else {
      const decodedToken = decodeToken(authToken);
      // If the role is not 'admin', redirect to the appropriate page
      if (decodedToken.user.role !== "admin") {
        navigate("/sidebar"); // Redirect to mainData for buyers
      }
    }
  }, [navigate]);

  const handleGetUser = async () => {
    const authToken = sessionStorage.getItem("authToken");

    if (authToken) {
      const decodedToken = decodeToken(authToken);
      const userId = decodedToken?.user?.id; // Extract the userId from the decoded token

      if (userId) {
        try {
          const res = await fetch(`http://localhost:8000/api/user/${userId}`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "auth-token": `Bearer ${authToken}`, 
            },
          });

          const data = await res.json();
          console.log("User data for Main Page ====>>>>", data);
          setUser([data.user]); // Wrapping in array to use .map()
        } catch (error) {
          console.error("Error fetching user data", error);
        }
      }
    }
  };

  useEffect(() => {
    handleGetUser();
  }, []);

  return (
    <div className="my-4 text-center">
      This is Main Component
      {user.length > 0 &&
        user.map((item) => (
          <div key={item?._id}>
            <h1>{item?.name}</h1>
            <p>{item?.email}</p>
            <p>{item?.role}</p>
          </div>
        ))}
      {/* <button className="btn btn-danger" type="button" onClick={onLogout}>
        Logout
      </button> */}
    </div>
  );
};

export default Main;








// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Main = () => {
//   const navigate = useNavigate();
//   const [user, setUser] = useState([]);
//   const onLogout = async () => {
//     const data = sessionStorage.removeItem("authToken");
//     navigate("/signin");
//   };
//   const handleGetUSer = async () => {
//     try {
//       const res = await fetch(`http:http://localhost:8000/api/user/${userId}`, {
//         method: `GET`,
//         headers: {
//           "Content-Type": "application/json",
//           "auth-token": `Bearer ${authToken}`,
//         },
//       });

//       const data = await res.json();
//       console.log("User data for Main Page ====>>>>", data);
//       setUser(data);
//     } catch (error) {}
//   };
//   useEffect(() => {
//     handleGetUSer();
//   }, []);
//   return (
//     <div className="my-4 text-center">
//       This is Main Components
//       {user.map((item) => {
//         <div key={item?._id}>
//           <h1>{item?.name}</h1>
//           <p>{item?.email}</p>
//           <p>{item?.role}</p>
//         </div>;
//       })}
//       <button className="btn btn-danger" type="button" onClick={onLogout}>
//         Logout
//       </button>
//     </div>
//   );
// };

// export default Main;

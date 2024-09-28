import React, { useState, useEffect } from "react";
import "./ListingTable.css"; // Assume you have this for styling

const ListingTable = () => {
  const [data, setData] = useState([]); // To store the fetched data
  const [searchTerm, setSearchTerm] = useState(""); // To handle search functionality

  useEffect(() => {
    const fetchData = async () => {
      try {
        const authToken = sessionStorage.getItem("authToken"); // Replace or remove this if you don't need auth token
        const response = await fetch(
          "http://localhost:8000/api/dashboard/getItems",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "auth-token": `Bearer ${authToken}`, // Remove if not required
            },
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();
        if (result.success && Array.isArray(result.items)) {
          setData(result.items); // Set the fetched data
          console.log("data from api == ", data);
        } else {
          console.error("Unexpected response format:", result);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter the data based on search input
  const filteredData = data.filter((row) =>
    row.solarGagaId.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="list-table">
      <h3 className="listing-heading">Listing</h3>
      <div className="search-filter-container">
        <input
          type="text"
          placeholder="Search the results"
          value={searchTerm}
          onChange={handleSearch}
          className="search-input"
        />
        <button className="filter-button">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="27"
            height="27"
            viewBox="0 0 27 27"
            fill="none"
          >
            <path
              d="M6.63693 13.2743H19.9112M3.31836 6.63715H23.2298M9.9555 19.9114H16.5926"
              stroke="black"
              stroke-width="1.37905"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Filter
        </button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Solargaga ID</th>
            <th>Registry</th>
            <th>RECs ID</th>
            <th>Capacity</th>
            <th>Renewable Energy Type</th>
            <th>Operating Date</th>
            <th>Location</th>
            <th>Sale</th>
            <th>Photograph</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.length > 0 ? (
            filteredData.map((row, index) => (
              <tr key={index}>
                <td>{row.solarGagaId}</td>
                <td>{row.totalReg}</td>
                <td>
                  <a href="#">{row.RecId}</a>
                </td>
                <td>{row.capacity}</td>
                <td>{row.renewableEnergyType}</td>
                <td>
                  {new Date(row.operatingDate).toLocaleDateString("en-US")}
                </td>
                <td>{row.Location}</td>
                <td>{row.availableForSale}</td>
                <td>{row.photograph ? "Yes" : "No"}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="9">No data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ListingTable;

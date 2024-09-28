import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import RecTable from "../RecTable/RecTable";
import "./Listing.css";
import ListingTable from "../ListingTable/ListingTable";

const Listing = () => {
  return (
    <div>
      <Sidebar />
      <ListingTable />{" "}
    </div>
  );
};

export default Listing;

import React, { useState } from "react";
import "./listing.css";
import ListingTable from "./ListingTable";
import RightNav from "../../component/rightNav/RightNav";

const Listing = () => {
  const [sortProperty, setSortProperty] = useState("State");

  const propertySorting = (e) => {
    const selectedSort = e.target.value;
    setSortProperty(selectedSort);
  };
  return (
    <div className="listing">
      <div className="top-header">
        <span></span>
        <RightNav
          input
          placeholder="Search Managers"
          button
          icon
          buttonText="Add Tenant"
        />
      </div>
      <div className="title">
        <h1>Available Units</h1>
      </div>
      <div className="listing-queries">
        <div className="sorting__control">
          <label>Sort By:</label>
          <select value={sortProperty} onChange={propertySorting}>
            <option value="State">State</option>
            <option value="Unit">Unit</option>
            {/* <option value='2020'>2020</option>
            <option value='2019'>2019</option> */}
          </select>
        </div>
        <div className="input-container">
          <div className="search-icon">
            <svg
              viewBox="0 0 20 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 18C13.4183 18 17 14.4183 17 10C17 5.58172 13.4183 2 9 2C4.58172 2 1 5.58172 1 10C1 14.4183 4.58172 18 9 18Z"
                stroke="#95A7BF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18.9999 19.9999L14.6499 15.6499"
                stroke="#95A7BF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <ListingTable
        serial="S/N"
        col1="Property Name"
        col2="Units"
        col3="Status"
        col4="Rent"
      />
    </div>
  );
};

export default Listing;

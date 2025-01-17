import React, { useState } from "react";
import Header from "./Header";

const Complaints = () => {
  const [visibleRows, setVisibleRows] = useState(6); // Default visible rows

  const handleSeeMore = () => {
    setVisibleRows((prev) => prev + 6); // Load 6 more rows on each click
  };

  const exampleData = [
    {
      kpCase: "2024-007",
      barangayBlg: "3",
      date: "12/12/24",
      type: "Sexual Misconduct",
      status: "Pending",
      priority: "Medium",
    },
    {
      kpCase: "2024-008",
      barangayBlg: "4",
      date: "12/13/24",
      type: "Theft",
      status: "Resolved",
      priority: "High",
    },
    {
      kpCase: "2024-009",
      barangayBlg: "5",
      date: "12/14/24",
      type: "Dispute",
      status: "Pending",
      priority: "Low",
    },
    {
      kpCase: "2024-010",
      barangayBlg: "6",
      date: "12/15/24",
      type: "Assault",
      status: "Ongoing",
      priority: "High",
    },
    {
      kpCase: "2024-011",
      barangayBlg: "7",
      date: "12/16/24",
      type: "Fraud",
      status: "Resolved",
      priority: "Medium",
    },
    {
      kpCase: "2024-012",
      barangayBlg: "8",
      date: "12/17/24",
      type: "Noise Complaint",
      status: "Pending",
      priority: "Low",
    },
    {
      kpCase: "2024-013",
      barangayBlg: "9",
      date: "12/18/24",
      type: "Vandalism",
      status: "Ongoing",
      priority: "Medium",
    },
    {
      kpCase: "2024-014",
      barangayBlg: "10",
      date: "12/19/24",
      type: "Harassment",
      status: "Pending",
      priority: "High",
    },
    {
      kpCase: "2024-014",
      barangayBlg: "11",
      date: "12/19/24",
      type: "Harassment",
      status: "Pending",
      priority: "High",
    },
    {
      kpCase: "2024-014",
      barangayBlg: "13",
      date: "12/19/24",
      type: "Harassment",
      status: "Pending",
      priority: "High",
    },
    {
      kpCase: "2024-014",
      barangayBlg: "12",
      date: "12/19/24",
      type: "Harassment",
      status: "Pending",
      priority: "High",
    },
    // Add more data as needed
  ];

  return (
    <div className="complaints-container">
      <Header />
      <div className="header-buttons">
        <button
          onClick={() => console.log("Navigating to Blotter Form...")}
          className="submit-blotter-header"
        >
          Submit Blotter
        </button>
      </div>

      <div className="complaints-title">COMPLAINTS</div>

      {/* Separator Line */}
      <hr className="separator-line-c1" />

      {/* Search Bar */}
      <div className="search-bar-container">
        <div className="search-bar-wrapper">
          <img
            src="/search-icon.png"
            alt="Search Icon"
            className="search-icon"
          />
          <input type="text" placeholder="Search" className="search-bar" />
          <img
            src="/filter-icon.png"
            alt="Filter Icon"
            className="filter-icon"
          />
        </div>
      </div>

      {/* Complaints Table */}
      <div className="complaints-table-container">
        <div className="complaints-header">
          <table>
            <thead>
              <tr>
                <th>KP Case</th>
                <th>Usaping Barangay Blg</th>
                <th>Date</th>
                <th>Type</th>
                <th>Status</th>
                <th>Priority</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {exampleData.slice(0, visibleRows).map((data, index) => (
                <tr key={index}>
                  <td>{data.kpCase}</td>
                  <td>{data.barangayBlg}</td>
                  <td>{data.date}</td>
                  <td>{data.type}</td>
                  <td>{data.status}</td>
                  <td>{data.priority}</td>
                  <td>
                    <a href="#" className="view-link">
                      View
                    </a>
                  </td>
                </tr>
              ))}
              {/* Button row */}
              {visibleRows < exampleData.length && (
                <tr className="button-row">
                  <td colSpan="7">
                    <button className="see-more-button" onClick={handleSeeMore}>
                      See more
                    </button>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Complaints;

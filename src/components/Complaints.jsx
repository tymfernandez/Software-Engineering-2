import React, { useState } from "react";
import Header from "./Header";
import "../styles/Complaints.css";

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

  // Functions for applying dynamic styles
  const getStatusStyles = (status) => {
    switch (status) {
      case "Pending":
        return { color: "#FA8C16", backgroundColor: "#FFE1C1" };
      case "Resolved":
        return { color: "#1F4B2C", backgroundColor: "#D5F5AD" };
      case "Ongoing":
        return { color: "#1367B5", backgroundColor: "#BADEFF" };
      default:
        return {};
    }
  };

  const getPriorityStyles = (priority) => {
    switch (priority) {
      case "Medium":
        return { color: "#9A7723", backgroundColor: "#FFF3B1" };
      case "High":
        return { color: "#AE3132", backgroundColor: "#FFACAD" };
      case "Low":
        return { color: "#57259D", backgroundColor: "#D2B3FD" };
      default:
        return {};
    }
  };

  // State to hold status and priority for each row
  const [statusData, setStatusData] = useState(
    exampleData.map((item) => item.status)
  );
  const [priorityData, setPriorityData] = useState(
    exampleData.map((item) => item.priority)
  );

  // Handle status change
  const handleStatusChange = (index, newStatus) => {
    const updatedStatus = [...statusData];
    updatedStatus[index] = newStatus;
    setStatusData(updatedStatus);
  };

  // Handle priority change
  const handlePriorityChange = (index, newPriority) => {
    const updatedPriority = [...priorityData];
    updatedPriority[index] = newPriority;
    setPriorityData(updatedPriority);
  };

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
            src="../assets/search-icon.png"
            alt="Search Icon"
            className="search-icon"
          />
          <input type="text" placeholder="Search" className="search-bar" />
        </div>
      </div>

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
              {exampleData.slice(0, visibleRows).map((data, index) => {
                const rowBackgroundColor =
                  index % 2 === 0 ? "#FAF8F8" : "#FFFFFF";

                return (
                  <tr
                    key={index}
                    style={{ backgroundColor: rowBackgroundColor }}
                  >
                    <td>{data.kpCase}</td>
                    <td>{data.barangayBlg}</td>
                    <td>{data.date}</td>
                    <td>{data.type}</td>
                    <td>
                      <select
                        value={statusData[index]}
                        onChange={(e) =>
                          handleStatusChange(index, e.target.value)
                        }
                        style={{
                          ...getStatusStyles(statusData[index]),
                          padding: "4px 7px",
                          borderRadius: "5px",
                          fontWeight: "bold",
                          width: "95px",
                          border: "none",
                          outline: "none",
                        }}
                      >
                        <option value="Pending">Pending</option>
                        <option value="Resolved">Resolved</option>
                        <option value="Ongoing">Ongoing</option>
                      </select>
                    </td>
                    <td>
                      <select
                        value={priorityData[index]}
                        onChange={(e) =>
                          handlePriorityChange(index, e.target.value)
                        }
                        style={{
                          ...getPriorityStyles(priorityData[index]),
                          padding: "4px 7px",
                          borderRadius: "5px",
                          fontWeight: "bold",
                          width: "95px",
                          border: "none",
                          outline: "none",
                        }}
                      >
                        <option value="SELECT" disabled>
                          Select
                        </option>{" "}
                        {/* Default option */}
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                      </select>
                    </td>
                    <td>
                      <a href="#" className="view-link">
                        View
                      </a>
                    </td>
                  </tr>
                );
              })}
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

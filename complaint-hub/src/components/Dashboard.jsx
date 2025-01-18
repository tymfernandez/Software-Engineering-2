import React, { useState, useEffect, useRef } from "react";
import Header from "./Header";
import { Bar, Doughnut } from "react-chartjs-2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import ChartDataLabels from "chartjs-plugin-datalabels"; // Import the plugin
import Chart from "chart.js/auto";
import axios from "axios";

ChartJS.register(ArcElement, Tooltip, Legend);
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"; // Import necessary components for Chart.js
import { set } from "mongoose";

// Register the Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

const Dashboard = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedGraph, setSelectedGraph] = useState("monthly");
  const [selectedGraphLabel, setSelectedGraphLabel] = useState("Monthly");
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const [statistics, setStatistics] = useState({
    totalComplaints: 0,
    pendingComplaints: 0,
    inProgressComplaints: 0,
    resolvedComplaints: 0,
    typeBreakdown: [],
  });
  const [trendData, setTrendData] = useState([]);
  const [recentComplaints, setRecentComplaints] = useState([]);

  useEffect(() => {
    const fetchComplaints = async () => {
      try {
        const response = await axios.get("http://localhost:3001/getRecent");
        setRecentComplaints(response.data);
      } catch (error) {
        setError("Failed to fetch recent complaints. Please try again later.");
        console.error("Error fetching recent complaints:", error.message);
      }
    };
  
    fetchComplaints();
  }, []);

  // Render recent complaints
  const renderRecentComplaints = () => {
    return recentComplaints.map((complaint, index) => (
      <div key={index} className="complaint-item">
        <p>
          <strong>KP Case Number:</strong> {complaint.kpCaseNumber}
        </p>
        <p>
          <strong>May Sumbong:</strong> {complaint.maySumbong}
        </p>
        <p>
          <strong>Ipinagsumbong:</strong> {complaint.ipinagsumbong}
        </p>
        <p>
          <strong>Usaping Blg:</strong> {complaint.usapingBlg}
        </p>
        <p>
          <strong>Ukol Sa:</strong> {complaint.ukolSa}
        </p>
        <p>
          <strong>Reklamo:</strong> {complaint.reklamo}
        </p>
        <p>
          <strong>Kalunasan:</strong> {complaint.kalunasan}
        </p>
        <p>
          <strong>Date:</strong>{" "}
          {`${complaint.day}/${complaint.month}/${complaint.year}`}
        </p>
      </div>
    ));
  };

  // Transform trend data for bar charts
  const getBarData = () => {
    const labels = trendData.map((item) => {
      switch (selectedGraph) {
        case "weekly":
          return new Date(item.date).toLocaleDateString("en-US", {
            weekday: "short",
          });
        case "monthly":
          return new Date(item.date).toLocaleDateString("en-US", {
            month: "short",
          });
        case "yearly":
          return new Date(item.date).getFullYear().toString();
        default:
          return "";
      }
    });

    const data = trendData.map((item) => item.count || 0);

    return {
      labels,
      datasets: [
        {
          label: [],
          data,
          backgroundColor: "#003366",
          borderRadius: 5,
        },
      ],
    };
  };

  // Transform type breakdown for pie chart
  const getPieData = () => {
    const typeData = statistics.typeBreakdown || [];
    const total = typeData.reduce((sum, item) => sum + item.count, 0);

    return {
      labels: typeData.map((item) => item._id),
      datasets: [
        {
          data: typeData.map((item) => ((item.count / total) * 100).toFixed(2)),
          backgroundColor: [
            "#0C4094",
            "#3B82F6",
            "#466DAC",
            "#355D9C",
            "#A8C0E7",
          ],
          borderWidth: 0,
          borderRadius: 3,
          hoverOffset: 10,
        },
      ],
    };
  };

  // Handle new complaint submission
  const handleSubmitBlotter = async () => {
    try {
      // Navigate to blotter form or handle submission
      console.log("Navigating to Blotter Form...");
    } catch (error) {
      console.error("Error submitting blotter:", error);
    }
  };

  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleGraphChange = (value) => {
    setSelectedGraph(value);
    setSelectedGraphLabel(
      value === "weekly" ? "Weekly" : value === "monthly" ? "Monthly" : "Yearly"
    );
    setIsDropdownOpen(false);
  };

  // Close the dropdown when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false); // Close the dropdown if click is outside
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // Weekly Bar Graph Data
  const weeklyData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: [],
        data: [5, 8, 4, 6, 7, 3, 2], // Sample data for weekly complaints
        backgroundColor: "#003366", // Bar color
        borderRadius: 5,
      },
    ],
  };

  // Monthly Bar Graph Data
  const monthlyData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: [],
        data: [10, 12, 15, 20, 25, 30, 18, 22, 14, 19, 28, 35], // Sample data for monthly complaints
        backgroundColor: "#003366", // Bar color
        borderRadius: 5,
      },
    ],
  };

  // Yearly Bar Graph Data
  const yearlyData = {
    labels: ["2020", "2021", "2022", "2023", "2024", "2025"],
    datasets: [
      {
        label: [],
        data: [150, 180, 200, 220, 240, 260], // Sample data for yearly complaints
        backgroundColor: "#003366", // Bar color
        borderRadius: 5,
      },
    ],
  };

  // Apply dynamic styles based on percentage
  useEffect(() => {
    const percentageElements = document.querySelectorAll(".card-percentage");
    percentageElements.forEach((element) => {
      const percentValueElement = element.querySelector(".percent-value");
      const value = parseFloat(percentValueElement.textContent);

      if (value < 0) {
        element.style.backgroundColor = "#FFCBBB"; // Negative: light red background
        percentValueElement.style.color = "#DE2B00"; // Negative: darker red text
      } else if (value > 0) {
        element.style.backgroundColor = "#D0EBF4"; // Positive: light blue background
        percentValueElement.style.color = "#258EB1"; // Positive: darker blue text
      }
    });
  }, []);

  // Static data for the pie chart
  const pieData = {
    labels: [
      "Sexual Misconduct",
      "Noise",
      "Theft",
      "Physical Altercation",
      "Others",
    ],
    datasets: [
      {
        data: [25, 23.75, 20, 18.75, 12.5],
        backgroundColor: [
          "#0C4094",
          "#3B82F6",
          "#466DAC",
          "#355D9C",
          "#A8C0E7",
        ],
        borderWidth: 0, // Optional: Removes borders
        borderRadius: 3,
        hoverOffset: 10,
      },
    ],
  };

  // Pie chart options
  const pieOptions = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "30%",
    plugins: {
      legend: {
        display: false, // Disable legend completely
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            return `${tooltipItem.label}: ${tooltipItem.raw}%`;
          },
        },
      },
      datalabels: {
        display: false, // Disable data labels inside the pie chart
      },
    },
    layout: {
      padding: {
        left: 100, // Increase padding on the left side only
        right: 100, // No padding on the right side
        top: 25, // No padding on the top side
        bottom: 25, // No padding on the bottom side
      }, // Adds internal padding for better spacing
    },
  };

  // Custom plugin to draw connecting lines
  const customPlugin = {
    id: "customLines",
    afterDatasetDraw(chart) {
      const { ctx, chartArea } = chart;
      const meta = chart.getDatasetMeta(0);
      const dataset = chart.data.datasets[0];
      const centerX = (chartArea.left + chartArea.right) / 2;
      const centerY = (chartArea.top + chartArea.bottom) / 2;

      meta.data.forEach((arc, index) => {
        const { startAngle, endAngle, outerRadius } = arc;
        const angle = (startAngle + endAngle) / 2;
        const label = chart.data.labels[index];

        // Compute line start (edge of pie slice)
        const lineStartX = centerX + outerRadius * Math.cos(angle);
        const lineStartY = centerY + outerRadius * Math.sin(angle);

        // Compute line end (slightly outside the pie)
        const lineEndX = centerX + (outerRadius + 20) * Math.cos(angle);
        const lineEndY = centerY + (outerRadius + 20) * Math.sin(angle);

        // Override alignment for "Theft"
        let textX;
        if (label === "Theft") {
          textX = lineEndX - 25; // Force alignment to the left for "Theft"
        } else {
          const isRightSide = angle < Math.PI;
          textX = isRightSide ? lineEndX + 25 : lineEndX - 25;
        }

        // Draw the connecting line
        ctx.beginPath();
        ctx.moveTo(lineStartX, lineStartY);
        ctx.lineTo(lineEndX, lineEndY);
        ctx.lineTo(textX, lineEndY); // Horizontal line to label
        ctx.strokeStyle = dataset.backgroundColor[index]; // Match line color to slice
        ctx.lineWidth = 1.5;
        ctx.stroke();
        ctx.closePath();

        // Draw the stacked label text
        ctx.font = "12px Arial";
        ctx.fillStyle = "#033343";
        ctx.textAlign =
          label === "Theft" ? "right" : angle < Math.PI ? "left" : "right";

        // Stack the words
        const words = label.split(" ");
        words.forEach((word, i) => {
          ctx.fillText(word, textX, lineEndY + 12 * i); // Adjust vertical spacing between words
        });
      });
    },
  };

  // Register the custom plugin
  Chart.register(customPlugin);

  const handleViewComplaint = (id) => {
    console.log(`Viewing complaint with id: ${id}`);
  };

  return (
    <div className="dashboard-container">
      {/* Header Section with Submit Blotter Button */}
      <Header />
      <div className="header-buttons">
        <button onClick={handleSubmitBlotter} className="submit-blotter-header">
          Submit Blotter
        </button>
      </div>

      {/* Title */}
      <div className="dashboard-title">DASHBOARD</div>

      {/* Separator Line */}
      <hr className="separator-line-1" />

      {/* Summary Cards */}
      <div className="summary-cards">
        {/* Total Complaints Received */}
        <div className="summary-card">
          <h3 className="card-title">Total Complaints Received</h3>
          <div className="card-content">
            <span className="card-number">20</span>
            <img
              src="complaints-icon.png"
              alt="Complaints Icon"
              className="card-icon"
            />
          </div>
          <div className="card-percentage">
            <span className="percent-value">-5%</span> from last month
          </div>
        </div>

        {/* Pending Progress */}
        <div className="summary-card">
          <h3 className="card-title">Pending Progress</h3>
          <div className="card-content">
            <span className="card-number">10</span>
            <img
              src="progress-icon.png"
              alt="Progress Icon"
              className="card-icon"
            />
          </div>
          <div className="card-percentage">
            <span className="percent-value">+10%</span> from last month
          </div>
        </div>

        {/* Complaints in Progress */}
        <div className="summary-card">
          <h3 className="card-title">Complaints in Progress</h3>
          <div className="card-content">
            <span className="card-number">10</span>
            <img
              src="in-progress-icon.png"
              alt="In Progress Icon"
              className="card-icon"
            />
          </div>
          <div className="card-percentage">
            <span className="percent-value">+10%</span> from last month
          </div>
        </div>

        {/* Resolved Complaints */}
        <div className="summary-card">
          <h3 className="card-title">Resolved Complaints</h3>
          <div className="card-content">
            <span className="card-number">15</span>
            <img
              src="resolved-icon.png"
              alt="Resolved Icon"
              className="card-icon"
            />
          </div>
          <div className="card-percentage">
            <span className="percent-value">+10%</span> from last month
          </div>
        </div>
      </div>

      {/* Conditionally Rendered Graphs */}
      <div className="graph-chart-container">
        <div className="graph-wrapper">
          <hr className="separator-line-2" />
          {/* Graph Selection Dropdown */}
          <div className="graph-selection">
            <div
              className={`custom-dropdown ${isDropdownOpen ? "open" : ""}`}
              onClick={toggleDropdown}
              ref={dropdownRef}
            >
              <span className="selected-option">{selectedGraphLabel}</span>
              <FontAwesomeIcon
                icon={isDropdownOpen ? faAngleUp : faAngleDown}
                className="caret-icon"
              />
              <div
                className={`dropdown-options ${isDropdownOpen ? "open" : ""}`}
              >
                {/* Conditionally render dropdown options */}
                {selectedGraph !== "weekly" && (
                  <div
                    className="dropdown-option"
                    onClick={() => handleGraphChange("weekly")}
                  >
                    Weekly
                  </div>
                )}
                {selectedGraph !== "monthly" && (
                  <div
                    className="dropdown-option"
                    onClick={() => handleGraphChange("monthly")}
                  >
                    Monthly
                  </div>
                )}
                {selectedGraph !== "yearly" && (
                  <div
                    className="dropdown-option"
                    onClick={() => handleGraphChange("yearly")}
                  >
                    Yearly
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Weekly Bar Graph */}
          {selectedGraph === "weekly" && (
            <div
              className="bar-graph-container"
              style={{
                padding: "20px",
                borderRadius: "10px",
              }}
            >
              <h3>
                <img
                  src="com-stats-icon.png"
                  alt="Icon"
                  className="com-stats-icon"
                />
                Complaints Statistics
              </h3>
              <Bar
                data={weeklyData}
                options={{
                  responsive: true,
                  maintainAspectRatio: false, // Disable maintaining aspect ratio
                  aspectRatio: 1, // Optional: Set an aspect ratio
                  plugins: {
                    legend: { display: false }, // Hide the legend
                  },
                }}
                style={{
                  width: "100%", // Set width to 100% of parent container
                  height: "100px", // Set a fixed height
                }}
              />
            </div>
          )}

          {/* Monthly Bar Graph */}
          {selectedGraph === "monthly" && (
            <div
              className="bar-graph-container"
              style={{
                padding: "20px",
                borderRadius: "10px",
              }}
            >
              <h3>
                <img
                  src="com-stats-icon.png"
                  alt="Icon"
                  className="com-stats-icon"
                />
                Complaints Statistics
              </h3>
              <Bar
                data={monthlyData}
                options={{
                  responsive: true,
                  maintainAspectRatio: false, // Disable maintaining aspect ratio
                  aspectRatio: 1, // Optional: Set an aspect ratio
                  plugins: {
                    legend: { display: false }, // Hide the legend
                  },
                }}
                style={{
                  width: "100%", // Set width to 100% of parent container
                  height: "100px", // Set a fixed height
                }}
              />
            </div>
          )}

          {/* Yearly Bar Graph */}
          {selectedGraph === "yearly" && (
            <div
              className="bar-graph-container"
              style={{
                padding: "20px",
                borderRadius: "10px",
              }}
            >
              <h3>
                <img
                  src="com-stats-icon.png"
                  alt="Icon"
                  className="com-stats-icon"
                />
                Complaints Statistics
              </h3>
              <Bar
                data={yearlyData}
                options={{
                  responsive: true,
                  maintainAspectRatio: false, // Disable maintaining aspect ratio
                  aspectRatio: 1, // Optional: Set an aspect ratio
                  plugins: {
                    legend: { display: false }, // Hide the legend
                  },
                }}
                style={{
                  width: "100%", // Set width to 100% of parent container
                  height: "100px", // Set a fixed height
                }}
              />
            </div>
          )}
        </div>

        {/* Pie Chart for Complaint Categories */}
        <div
          className="chart-wrapper"
          style={{
            padding: "20px",
            borderRadius: "10px",
            marginLeft: "20px",
          }}
        >
          <h3>
            <img src="com-bd-icon.png" alt="Icon" className="com-bd-icon" />
            Complaints Breakdown
          </h3>
          <hr className="separator-line-3" />
          <div
            style={{
              position: "relative",
              height: "320px",
              width: "320px",
              overflow: "visible",
            }}
          >
            <Doughnut data={pieData} options={pieOptions} />
          </div>
          {/* Below the chart, showing sample content */}
          <div className="chart-description">
            <div>
              <div
                className="color-box"
                style={{ backgroundColor: "#0C4094" }}
              ></div>
              <div className="label">Sexual Misconduct</div>
              <div className="percentage">25%</div>
            </div>
            <div>
              <div
                className="color-box"
                style={{ backgroundColor: "#3B82F6" }}
              ></div>
              <div className="label">Noise</div>
              <div className="percentage">23.75%</div>
            </div>
            <div>
              <div
                className="color-box"
                style={{ backgroundColor: "#466DAC" }}
              ></div>
              <div className="label">Theft</div>
              <div className="percentage">20%</div>
            </div>
            <div>
              <div
                className="color-box"
                style={{ backgroundColor: "#355D9C" }}
              ></div>
              <div className="label">Physical Altercation</div>
              <div className="percentage">18.75%</div>
            </div>
            <div>
              <div
                className="color-box"
                style={{ backgroundColor: "#A8C0E7" }}
              ></div>
              <div className="label">Others</div>
              <div className="percentage">12.5%</div>
            </div>
          </div>
        </div>
      </div>

      <div className="recent-complaints-container">
        <div className="recent-complaints-header">
          <h3>
            <img
              src="recent-complaints-icon.png"
              alt="Icon"
              className="recent-complaints-icon"
            />
            Recent Complaints
          </h3>
          {renderRecentComplaints()}
          <h3 className="see-all">See all</h3>
        </div>
        return (
  <div>
    <table className="recent-complaints-table">
      <thead>
        <tr>
          <th>KP Case Number</th>
          <th>Usaping Barangay Blg.</th>
          <th>Date</th>
          <th>Type</th>
          <th>Status</th>
          <th>Priority</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {recentComplaints.length > 0 ? (
          recentComplaints.map((complaint) => (
            <tr key={complaint._id}>
              <td>{complaint.kpCase}</td>
              <td>{complaint.usapingBlg}</td>
              <td>{complaint.date}</td>
              <td>{complaint.type}</td>
              <td>{complaint.status}</td>
              <td>{complaint.priority}</td>
              <td>
                <button
                  onClick={() => {
                    console.log("Viewing complaint:", complaint);
                    handleViewComplaint(complaint._id);
                  }}
                >
                  View
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="7" style={{ textAlign: "center" }}>
              {console.log("No complaints to display")}
              No recent complaints found
            </td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
);
      </div>
    </div>
  );
};

export default Dashboard;

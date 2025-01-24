import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Complaints.css";
import axios from "axios";
import Header from "./Header";

const Complaints = () => {
  const [visibleRows, setVisibleRows] = useState(6);
  const [form7Data, setForm7Data] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchForm7Data();
  }, []);

  const fetchForm7Data = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:3001/form7", {
        headers: {
          "Content-Type": "application/json",
          // Add any authentication headers if needed
        },
      });

      // Add more detailed logging
      console.log("API Response Status:", response.status);
      console.log("API Response Headers:", response.headers);
      console.log("API Response Data:", response.data);

      if (Array.isArray(response.data)) {
        setForm7Data(response.data);
        setError(null);
      } else if (response.data && typeof response.data === "object") {
        // Handle case where response might be wrapped in an object
        const dataArray = Array.isArray(response.data.data)
          ? response.data.data
          : [response.data];
        setForm7Data(dataArray);
        setError(null);
      } else {
        throw new Error("Invalid data format received");
      }
    } catch (err) {
      console.error("Error fetching data:", err);
      setError(
        err.response?.data?.message || err.message || "Failed to fetch data"
      );
      setForm7Data([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSeeMore = () => {
    setVisibleRows((prev) => prev + 6);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const complaintsData = form7Data.map((item) => ({
    kpCase: item.kpCaseNumber || "N/A",
    barangayBlg: item.usapingBlg || "N/A",
    date:
      item.month && item.day && item.year
        ? `${item.month}/${item.day}/${item.year}`
        : "N/A",
    type: item.ukolSa || "N/A",
    status: item.status || "Pending",
    priority: item.priority || "Medium",
  }));

  const filteredData = complaintsData.filter((item) =>
    Object.values(item).some((value) =>
      value?.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  if (loading) {
    return (
      <div className="complaints-container">
        <Header />
        <div className="flex items-center justify-center h-64">
          <div className="text-gray-500">Loading complaints data...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="complaints-container">
      <Header />
      <div className="header-buttons">
        <button
          onClick={() => {
            console.log("Navigating to Blotter Form...");
            navigate("/form7");
          }}
          className="submit-blotter-header"
        >
          Submit Blotter
        </button>
      </div>

      <div className="complaints-title">
        COMPLAINTS {form7Data.length > 0 && `(${form7Data.length})`}
      </div>

      <hr className="separator-line-c1" />

      {error && (
        <div className="text-red-500 text-center p-4 bg-red-50 border border-red-200 rounded">
          {error}
        </div>
      )}

      <div className="search-bar-container">
        <div className="search-bar-wrapper">
          <img
            src="/search-icon.png"
            alt="Search Icon"
            className="search-icon"
          />
          <input
            type="text"
            placeholder="Search"
            className="search-bar"
            value={searchTerm}
            onChange={handleSearch}
          />
          <img
            src="/filter-icon.png"
            alt="Filter Icon"
            className="filter-icon"
          />
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
              {filteredData.length > 0 ? (
                filteredData.slice(0, visibleRows).map((data, index) => (
                  <tr key={index}>
                    <td>{data.kpCase}</td>
                    <td>{data.barangayBlg}</td>
                    <td>{data.date}</td>
                    <td>{data.type}</td>
                    <td>{data.status}</td>
                    <td>{data.priority}</td>
                    <td>
                      <a
                        href="#"
                        className="view-link"
                        onClick={() => {
                          console.log("Navigating to Form7View...");
                          navigate("/form7view");
                        }}
                      >
                        View
                      </a>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="text-center py-4 text-gray-500">
                    {error
                      ? "Error loading data"
                      : "No complaints data available"}
                  </td>
                </tr>
              )}
              {visibleRows < filteredData.length && (
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

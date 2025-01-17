import React, { useState } from "react";
import Header from "./Header";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Report = () => {
  const [reportType, setReportType] = useState("");
  const [dateFrom, setDateFrom] = useState(null); // Use null for initial empty state
  const [dateTo, setDateTo] = useState(null); // Use null for initial empty state

  const handleSubmitBlotter = () => {
    // Logic for Submit Blotter button
    console.log("Navigating to Blotter Form...");
  };

  return (
    <div className="report-container">
      {/* Header Section with Submit Blotter Button */}
      <Header />
      <div className="header-buttons">
        <button onClick={handleSubmitBlotter} className="submit-blotter-header">
          Submit Blotter
        </button>
      </div>

      <div className="report-title">REPORTS</div>

      {/* Separator Line */}
      <hr className="separator-line-r1" />

      {/* First Table: Generate New Report */}
      <div className="generate-table">
        <h2 className="generate-report">Generate New Report</h2>

        <div className="report-type">
          <label className="report-type-label">Report Type</label>
          <label>
            <input
              type="radio"
              name="reportType"
              value="Biweekly"
              checked={reportType === "Biweekly"}
              onChange={(e) => setReportType(e.target.value)}
            />
            <span>Biweekly</span>
          </label>
          <label>
            <input
              type="radio"
              name="reportType"
              value="Monthly"
              checked={reportType === "Monthly"}
              onChange={(e) => setReportType(e.target.value)}
            />
            <span>Monthly</span>
          </label>
          <label>
            <input
              type="radio"
              name="reportType"
              value="Yearly"
              checked={reportType === "Yearly"}
              onChange={(e) => setReportType(e.target.value)}
            />
            <span>Yearly</span>
          </label>
        </div>

        {/* Separator Line */}
        <hr className="separator-line-r2" />

        <div className="date-range">
          <label className="date-range-label">Date Range</label>
          <div className="date-inputs">
            <div className="date-input-group">
              <div className="date-input-with-icon">
                <DatePicker
                  selected={dateFrom}
                  onChange={(date) => setDateFrom(date)}
                  placeholderText="From:"
                  className="custom-date-input"
                  dateFormat="dd/MM/yyyy"
                />
                <img
                  src="../assets/calendar-icon.png"
                  alt="calendar icon"
                  className="input-icon"
                />
              </div>
            </div>
            <div className="date-input-group">
              <div className="date-input-with-icon">
                <DatePicker
                  selected={dateTo}
                  onChange={(date) => setDateTo(date)}
                  placeholderText="To:"
                  className="custom-date-input"
                  dateFormat="dd/MM/yyyy"
                />
                <img
                  src="../assets/calendar-icon.png"
                  alt="calendar icon"
                  className="input-icon"
                />
              </div>
            </div>
            <button className="generate-button">Generate</button>
          </div>
        </div>
      </div>

      {/* Second Table: Report Data */}
      <div className="report-table-container">
        <div class="table-header">
          <table>
            <thead>
              <tr>
                <th>Report ID</th>
                <th>Report Type</th>
                <th>Date Generated</th>
                <th>Total Complaints</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>R001</td>
                <td>Biweekly</td>
                <td>2024-10-01</td>
                <td>14</td>
                <td>
                  <button>VIEW</button>
                  <button>DOWNLOAD</button>
                  <button>DELETE</button>
                </td>
              </tr>
              <tr>
                <td>R002</td>
                <td>Monthly</td>
                <td>2024-04-01</td>
                <td>30</td>
                <td>
                  <button>VIEW</button>
                  <button>DOWNLOAD</button>
                  <button>DELETE</button>
                </td>
              </tr>
              <tr>
                <td>R003</td>
                <td>Yearly</td>
                <td>2023-2024</td>
                <td>90</td>
                <td>
                  <button>VIEW</button>
                  <button>DOWNLOAD</button>
                  <button>DELETE</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Report;

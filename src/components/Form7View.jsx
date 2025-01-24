import React, { useState, useEffect } from "react";
import "../styles/Form7View.css";
import axios from "axios";
import Header from "./Header";

const Form7View = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [form7Data, setForm7Data] = useState({});  // Changed to object instead of array
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleRows, setVisibleRows] = useState(6);

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

      if (response.data && typeof response.data === "object") {
        // If response.data is an array, take the first item
        const formData = Array.isArray(response.data) ? response.data[0] : response.data;
        setForm7Data(formData);
      }
      setError(null);
    } catch (err) {
      console.error("Error fetching data:", err);
      setError(err.response?.data?.message || err.message || "Failed to fetch data");
      setForm7Data({});
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="form7-page">
      <Header showButton={false} />
      <h1 className="form7-title">Form 7: Sumbong</h1>
      <h2 className="form7-subtitle">View Submitted Complaint</h2>

      <div className="form7-container">
        <div className="form7-kp-input">
          <label className="form7-kpcase">
            KP Case Number: &nbsp;
            <span>{form7Data.kpCaseNumber}</span>
          </label>
        </div>
        <div className="form7-pormularyoblg">
          <label className="form7-pormularyo">Pormularyo ng KP Blg. 7</label>
        </div>
        <div className="form7-heading">
          <label className="form7-head">
            Republika ng Pilipinas <br />
            Lalawigan ng Kabite <br />
            Bayan ng Indang <br />
            Barangay Poblacion 1
          </label>
        </div>
        <div className="form-group">
          <label className="form7-centered-label">
            <br /> TANGGAPAN NG LUPONG TAGAPAMAYAPA
          </label>
        </div>
        <div className="form-row two-columns centered-row">
          <div className="form-group">
            <span>{form7Data.maySumbong}</span> <br />
            <span>{form7Data.maySumbong1}</span> <br />
            <label className="form7-sumbong">
              (Mga) May Sumbong <br /> -laban kay/kina-
            </label>{" "}
            <br />
            <span>{form7Data.ipinagsumbong}</span> <br />
            <span>{form7Data.ipinagsumbong1}</span> <br />
            <label className="form7-sumbong"> (Mga) Ipinagsusumbong </label>
          </div>
          <div className="form-group">
            <div className="form7-blg-input">
              <label>Usaping Barangay Blg. </label>
              <span>{form7Data.usapingBlg}</span>
            </div>
            <div className="form7-ukol-input">
              <label>Ukol sa:</label>
              <span>{form7Data.ukolSa}</span>
            </div>
          </div>
        </div>
        <div className="form-group">
          <label className="form7-centered-label">REKLAMO</label>
        </div>
        <div className="form7-paragraph">
          <label className="form7-justify">
            AKO/KAMI, ay nagrereklamo laban sa mga ipinagsusumbong na binanggit
            sa itaas dahil sa paglabag sa aking/aming mga karapatan at kapakanan
            sa sumusunod na pamamaraan:
            <div>{form7Data.reklamo}</div>
          </label>
        </div>
        <div className="form7-paragraph">
          <label className="form7-justify">
            DAHIL DITO, AKO/KAMI, na nakikiusap na ipagkaloob sa akin/amin ang
            sumusunod na (mga) kalunasan nang naaalinsunod sa batas at/o
            pagkamakatuwiran:
            <div>{form7Data.kalunasan}</div>
          </label>
        </div>
        <div className="form7-form-input">
          <label className="form7-indent">Ginawa ngayong ika-</label>
          <span>{form7Data.day}</span>
          <label>araw ng</label>
          <span>{form7Data.month}</span>
          <label>20</label>
          <span>{form7Data.year}</span>
          <label>.</label>
        </div>
        <br />
        <div className="form7-sign-container">
          <div className="form7-sign-line"></div>
        </div>
        <p className="form7-sign-text">(Mga) May Sumbong</p>
        <br />
        <div className="form7-form-input">
          <label className="form7-indent">
            Tinanggap at inihain ngayong ika-
          </label>
          <span>{form7Data.day}</span>
          <label>araw ng</label>
          <span>{form7Data.month}</span>
          <label>20</label>
          <span>{form7Data.year}</span>
          <label>.</label>
        </div>
        <br />
        <br />
        <br />
        <div className="form7-sig-container">
          <div className="form7-sig-line"></div>
        </div>
        <p className="form7-sig-text">Punong Barangay/Kalihim ng Lupon</p>
        <br />
      </div>
    </div>
  );
};

export default Form7View;
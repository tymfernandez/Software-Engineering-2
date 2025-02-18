import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { PDFDownloadLink } from "@react-pdf/renderer";
import "../styles/Form8.css";
import Header from "./Header"; //
import FormDocu8 from "./FormDocu8"; //

const Form8 = () => {
  const [kpCaseNumber, setKpCaseNumber] = useState("");
  const [form8Day, setForm8Day] = useState("");
  const [form8Month, setForm8Month] = useState("");
  const [form8Year, setForm8Year] = useState("");
  const [form8Time, setForm8Time] = useState("");
  const [kay, setKay] = useState("");
  const [maySumbong, setMaySumbong] = useState("");

  const fetchAutoGeneratedNumbers = async () => {
    try {
      const response = await axios.get("http://localhost:3001/form8/autogenerate");
      setKpCaseNumber(response.data.caseNumber);
    } catch (error) {
      console.error("Error fetching auto-generated numbers: ", error);
    }
  };

  useEffect(() => {
    fetchAutoGeneratedNumbers();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate all fields
    if (!form8Day || !form8Month || !form8Year || !form8Time || !kay || !maySumbong) {
      alert("Please fill in all fields.");
      return;
    }

    const form8Data = {
      kpCaseNumber,
      kay,
      maySumbong,
      date: `${form8Day} ${form8Month}, 20${form8Year}`,
      time: form8Time,
    };

    axios
      .post("http://localhost:3001/form8", form8Data)
      .then((response) => {
        console.log(response);
        window.location.href = "/form9";
      })
      .catch((error) => {
        console.error("Error submitting Form 8 data: ", error);
      });
  };

  return (
    <div className="form8-page">
      <Header showButton={false} />
      <div className="form8-text">
        <h1 className="form8-title">FORM 8: PAABISO</h1>
        <h2 className="form8-subtitle">Para sa complainant o nagrereklamo</h2>
        <div className="form8-container">
          <form className="form8" onSubmit={handleSubmit}>
            <div className="form8-kp-input">
              <label className="form8-kpcase">KP Case Number:</label>
              <input type="text" id="form8-kpnum" value={kpCaseNumber} readOnly required />
            </div>
            <div className="form8-pormularyoblg">
              <label className="form8-pormularyo">Pormularyo ng KP Blg. 8</label>
            </div>
            <div className="form8-heading">
              <label className="form8-head">
                Republika ng Pilipinas <br />
                Lalawigan ng Kabite <br />
                Bayan ng Indang <br />
                Barangay Poblacion 1
              </label>
            </div>
            <div className="form8-group">
              <label className="form8-centered-label">
                <br /> TANGGAPAN NG LUPONG TAGAPAMAYAPA
              </label>
            </div>
            <div className="form8-date">
              <input
                type="text"
                id="form8-day-1"
                value={form8Day}
                onChange={(e) => setForm8Day(e.target.value)}
                required
              />
              <label>, </label>
              <input
                type="text"
                id="form8-month-1"
                value={form8Month}
                onChange={(e) => setForm8Month(e.target.value)}
                required
              />
              <label>, 20</label>
              <input
                type="text"
                id="form8-year-1"
                value={form8Year}
                onChange={(e) => setForm8Year(e.target.value)}
                required
              />
            </div>
            <div className="form8-group">
              <label className="form8-centered-label">
                <br /> PAABISO NG PAGDINIG <br />
                (Mga Hakbang ng Pamamagitan)
              </label>
            </div>
            <div className="form8-may-sumbong">
              <div className="form8-kay-input">
                <label>KAY: </label>
                <input
                  type="text"
                  id="form8-kay"
                  value={kay}
                  onChange={(e) => setKay(e.target.value)}
                  required
                />
              </div>
              <input
                type="text"
                id="form8-sumbong"
                value={maySumbong}
                onChange={(e) => setMaySumbong(e.target.value)}
                required
              />
              <label className="form8-text-sumbong"> (Mga) May Sumbong </label>
            </div>
            <div className="form8-form-input">
              <label className="form8-indent">
                Ikaw ay inuutusan na sa akin sa ika-
              </label>
              <input
                type="text"
                id="form8-day-2"
                value={form8Day}
                onChange={(e) => setForm8Day(e.target.value)}
                required
              />
              <label>araw ng</label>
              <input
                type="text"
                id="form8-month-2"
                value={form8Month}
                onChange={(e) => setForm8Month(e.target.value)}
                required
              />
              <label>, 20</label>
              <input
                type="text"
                id="form8-year-2"
                value={form8Year}
                onChange={(e) => setForm8Year(e.target.value)}
                required
              />
            </div>
            <div className="form8-form-input">
              <label>sa ganap na ika-</label>
              <input
                type="text"
                id="form8-time"
                value={form8Time}
                onChange={(e) => setForm8Time(e.target.value)}
                required
              />
              <label>ng umaga/hapon, para sa pagdinig ng inyong sumbong.</label>
            </div>
            <div className="form8-signature-container">
              <div className="form8-signature-line"></div>
              <p className="form8-signature-text">
                Punong Barangay/Tagapangulo ng Lupon
              </p>
            </div>
            <div className="form8-form-input">
              <label className="form8-indent">Pinaaabisuhan ngayong ika-</label>
              <input
                type="text"
                id="form8-day-3"
                placeholder=" "
                required
              />
              <label> ng</label>
              <input
                type="text"
                id="form8-month-3"
                placeholder=" "
                required
              />
              <label>, 20</label>
              <input
                type="text"
                id="form8-year-3"
                placeholder=" "
                required
              />
              <label>.</label>
            </div>
            <div className="form8-signatures">
              <div className="form8-sign-line"></div>
              <p className="form8-sign-text">(Mga) May Sumbong</p>
            </div>
            <div className="form8-button-group">
              <button
                type="button"
                className="form8-print-button"
                onClick={() => window.print()}
              >
                Print
              </button>
              <button type="submit" className="form8-next-button">
                Proceed to Form 9
              </button>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Form8;
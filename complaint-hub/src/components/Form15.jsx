import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { PDFDownloadLink } from "@react-pdf/renderer";
import "../main.css";
import Header from "./Header"; //
import FormDocu15 from "./FormDocu15";

const Form15 = () => {
  const [formData, setFormData] = useState({
    form15KpNum: "",
    form15Blg: "",
    form15Ukol: "",
    form15Maysumbong: "",
    form15Maysumbong1: "",
    form15Ipinagsumbong: "",
    form15Ipinagsumbong1: "",
    form15Gawad: "",
    form15Day: "",
    form15Month: "",
    form15Year: "",
    form15Place: "",
  })

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const [showSuccess, setShowSuccess] = useState(false);
      const navigate = useNavigate(); // Initialize navigate
    
      const handleSubmit = () => {
        setShowSuccess(true); // Show success modal
      };
    
      const handleContinue = () => {
        navigate("/complaints"); // Navigate to Complaints page
      };

  return (
    <div className="form15-page">
      <Header showButton={false} />
      <div className="form15-text">
        <h1 className="form15-title">FORM 15: GAWAD NG PAGHAHATOL</h1>

        <div className="form15-container">
          <form className="form15">
            <div className="form15-kp-input">
              <label className="form15-kpcase">KP Case Number:</label>
              <input type="text" id="form15Kpnum" onChange={handleInputChange} />
            </div>
            <div className="form15-pormularyoblg">
              <label className="form15-pormularyo">Pormularyo ng KP Blg. 15</label>
            </div>
            <div className="form15-heading">
              <label className="form15-head">
                Republika ng Pilipinas <br />
                Lalawigan ng Kabite <br />
                Bayan ng Indang <br />
                Barangay Poblacion 1
              </label>
            </div>
            <div className="form-group">
              <label className="form15-centered-label">
                <br /> TANGGAPAN NG LUPONG TAGAPAMAYAPA
              </label>
            </div>
            <div className="form-row two-columns centered-row">
              <div className="form-group">
                <input type="text" id="form15Maysumbong" onChange={handleInputChange} /> <br />
                <input type="text" id="form15Maysumbong1" onChange={handleInputChange} />
                <label className="form15-sumbong">
                  (Mga) May Sumbong <br /> -laban kay/kina-
                </label>
                <input type="text" id="form15Ipinagsumbong" onChange={handleInputChange} /> <br />
                <input type="text" id="form15Ipinagsumbong1" onChange={handleInputChange} />
                <label className="form15-sumbong"> (Mga) Ipinagsusumbong </label>
              </div>

              <div className="form-group">
                <div className="form15-blg-input">
                  <label>Usaping Barangay Blg. </label>
                  <input type="text" id="form15Blg" onChange={handleInputChange} />
                </div>
                <div className="form15-ukol-input">
                  <label>Ukol sa:</label>
                  <input type="text" id="form15Ukol" onChange={handleInputChange}/>
                </div>
              </div>
            </div>
            <div className="form-group">
              <label className="form15-centered-label">GAWAD NG PAGHAHATOL</label>
            </div>
            <div className="form15-paragraph">
              <label className="form15-indent">
                Matapos marinig ang mga salaysay na ipinahayag at maingat na
                pagsusuri ng katibayan na iniharap sa usaping ito, iginagawad
                ang mga sumusunod:
              </label>
              <textarea id="form15Gawad" onChange={handleInputChange} ></textarea>
            </div>
            <br />
            <div className="form15-form-input">
              <label className="form15-indent">Ginawa ngayong ika-</label>
              <input type="text" id="form15Day" onChange={handleInputChange} />
              <label>araw ng</label>
              <input type="text" id="form15Month" onChange={handleInputChange} />
              <label>, 20</label>
              <input type="text" id="form15Year" onChange={handleInputChange} />
              <label>sa</label>
              <input type="text" id="form15Place" onChange={handleInputChange} />
              <label>.</label>
            </div>{" "}
            <br />
            <div className="form15-sign-container">
              <div className="form15-sign-line"></div>
              <p className="form15-sign-text">
                Punong Barangay/Tagapangulo ng Pangkat
              </p>
            </div>
            <br />
            <div className="form15-sig-container">
              <div className="form15-sig-line"></div>
              <p className="form15-sig-text">Kasapi</p>
            </div>{" "}
            <br /> <br />
            <div className="form15-sig-container">
              <div className="form15-sig-line"></div>
              <p className="form15-sig-text">Kasapi</p>
            </div>{" "}
            <br />
            <label>PINATUNAYAN: </label>
            <br /> <br /> <br />
            <div className="form15-sig-container">
              <div className="form15-signa-line"></div>
              <p className="form15-signa-text">Punong Barangay/Kalihim ng Lupon</p>
            </div>
            <br />
            <div className="form15-bullet">
              <ul>
                <li>Lagdaaan ng sinuman sa gumawa ng gawad na paghahatol.</li>
                <li>
                  Lalagdaan ng Punong Barangay kung ang gawad ay ginawa ng
                  Tagapangulo ng Pangkat at ng kalihim ng Lupon, kung ang gawad
                  ay ginawa ng Punong Barangay.
                </li>
              </ul>
            </div>
          </form>
        </div>

        <div className="form15-button-group">
          <PDFDownloadLink
            document={<FormDocu15 data={formData} />}
            fileName="form15.pdf"
            className="form15-print-button"
          >
            {({ blob, url, loading, error }) =>
              loading ? "Loading document..." : "Print"
            }
          </PDFDownloadLink>

          {/* Submit Button */}
          <button
              className="form15-next-button"
              onClick={handleSubmit}
          >
              Submit
          </button>
        </div>

        {showSuccess && (
          <div className="form9-popup-overlay">
            <div className="form9-popup-content">
            <img
                src="/successIcon.png"
                alt="Success Icon"
                className="success-icon"
              />
            <h2>Success!</h2>
              <p>
                Form 15 successfully submitted. Please click the button to
                continue to Complaints page.
              </p>
              <button
                className="form9-popup-continue-button"
                onClick={handleContinue}
              >
                Continue
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Form15;

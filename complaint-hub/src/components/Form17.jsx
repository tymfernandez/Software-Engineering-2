import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PDFDownloadLink } from "@react-pdf/renderer";
import "../main.css";
import Header from "./Header"; //
import FormDocu17 from "./FormDocu17";

const Form17 = () => {
  const [formData, setFormData] = useState({
      form17KpNum: "",
      form17Blg: "",
      form17Ukol: "",
      form17Maysumbong: "",
      form17Maysumbong1: "",
      form17Ipinagsumbong: "",
      form17Ipinagsumbong1: "",
      form17Checkbox1: false,
      form17Checkbox2: false,
      form17Checkbox3: false,
      form17Panlilinlang: "",
      form17Karahasan: "",
      form17Pananakot: "",
      form17Day: "",
      form17Month: "",
      form17Year: "",
      form17DayReceived: "",
      form17MonthReceived: "",
      form17YearReceived: "",
      form17DaySigned: "",
      form17MonthSigned: "",
      form17YearSigned: "",
      form17PlaceSigned: "",
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

    // In your Form17 component, handle checkbox changes as you already have
    const handleCheckboxChange = (checkboxId) => {
      setFormData((prev) => ({
        ...prev,
        [checkboxId]: !prev[checkboxId],
      }));
    };



  return (
    <div className="form17-page">
      <Header showButton={false} />
      <div className="form17-text">
        <h1 className="form17-title">FORM 17: PAGTATANGGI</h1>

        <div className="form17-container">
          <form className="form17">
            <div className="form17-kp-input">
              <label className="form17-kpcase">KP Case Number:</label>
              <input type="text" id="form17KpNum" onChange={handleInputChange} />
            </div>
            <div className="form17-pormularyoblg">
              <label className="form17-pormularyo">Pormularyo ng KP Blg. 17</label>
            </div>
            <div className="form17-heading">
              <label className="form17-head">
                Republika ng Pilipinas <br />
                Lalawigan ng Kabite <br />
                Bayan ng Indang <br />
                Barangay Poblacion 1
              </label>
            </div>
            <div className="form-group">
              <label className="form17-centered-label">
                <br /> TANGGAPAN NG LUPONG TAGAPAMAYAPA
              </label>
            </div>
            <div className="form-row two-columns centered-row">
              <div className="form-group">
                <input type="text" id="form17Maysumbong" onChange={handleInputChange} /> <br />
                <input type="text" id="form17Maysumbong1" onChange={handleInputChange} />
                <label className="form17-sumbong">
                  (Mga) May Sumbong <br /> -laban kay/kina-
                </label>
                <input type="text" id="form17Ipinagsumbong" onChange={handleInputChange} /> <br />
                <input type="text" id="form17Ipinagsumbong1" onChange={handleInputChange} />
                <label className="form17-sumbong"> (Mga) Ipinagsusumbong </label>
              </div>

              <div className="form-group">
                <div className="form17-blg-input">
                  <label>Usaping Barangay Blg. </label>
                  <input type="text" id="form17Blg" onChange={handleInputChange} />
                </div>
                <div className="form17-ukol-input">
                  <label>Ukol sa:</label>
                  <input type="text" id="form17Ukol" onChange={handleInputChange} />
                </div>
              </div>
            </div>
            <div className="form-group">
              <label className="form17-centered-label">PAGTATANGGI</label>
            </div>
            <div className="form17-paragraph">
              <label className="form17-indent">
                Sa pamamagitan nito’y itinatanggi ko/naming ang
                pag-aayos/kasunduan sa paghahatol sapagkat ang akin/aming
                pag-sang-ayon ay walang saysay dahilan sa:
              </label>
            </div>
            <br />
            <div className="form17-paragraph">
              <label className="form17-left">
                (Lagyan ng tsek ang angkop)
              </label>
            </div>
            <div className="form17-checkbox-container">
              <div className="form17-checklist">
                <div className="form17-checkbox-item">
                <input
                  type="checkbox"
                  id="form17Checkbox1"
                  className="form17-checkbox"
                  checked={formData.form17Checkbox1}
                  onChange={() => handleCheckboxChange("form17Checkbox1")}
                />
                  <label for="form17-checkbox1" className="form17-checkbox-label">
                    – Panlilinlang (Ipaliwanag)
                  </label>
                </div>
                <textarea placeholder="" id="form17Panlilinlang" onChange={handleInputChange}></textarea>
              </div>

              <div className="form17-checklist">
                <div className="form17-checkbox-item">
                  <input
                    type="checkbox"
                    className="form17-checkbox"
                    checked={formData.form17Checkbox2}
                    onChange={() => handleCheckboxChange("form17Checkbox2")}
                  />
                  <label for="form17-checkbox2" className="form17-checkbox-label">
                    – Karahasan (Ipaliwanag)
                  </label>
                </div>
                <textarea placeholder="" id="form17Karahasan" onChange={handleInputChange} ></textarea>
              </div>

              <div className="form17-checklist">
                <div className="form17-checkbox-item">
                  <input
                    type="checkbox"
                    className="form17-checkbox"
                    checked={formData.form17Checkbox3}
                    onChange={() => handleCheckboxChange("form17Checkbox3")}
                  />
                  <label for="form17-checkbox3" className="form17-checkbox-label">
                    – Pananakot (Ipaliwanag)
                  </label>
                </div>
                <textarea placeholder="" id="form17Pananakot" onChange={handleInputChange} ></textarea>
              </div>
            </div>{" "}
            <br />
            <div className="form17-form-input">
              <label className="form17-indent">Ngayong ika-</label>
              <input type="text" id="form17Day" onChange={handleInputChange} />
              <label>araw ng</label>
              <input type="text" id="form17Month" onChange={handleInputChange} />
              <label>, 20</label>
              <input type="text" id="form17Year" onChange={handleInputChange} />
              <label>.</label>
            </div>
            <br />
            <div className="form-row two-columns centered-row">
              <div className="form-group">
                <label className="form17-mgasumbong">
                  (Mga) May Sumbong 
                </label>
                <div className="form17-line"></div> <br />
                <div className="form17-line"></div>
              </div>

              <div className="form-group">
                <label className="form17-mgasumbong">
                 (Mga) Ipinagsusumbong{" "}
                </label>
                <div className="form17-line"></div> <br />
                <div className="form17-line"></div>
              </div>
            </div>
            <br /> <br />
            <div className="form-group">
              <div className="form17-form-input">
                <label className="form17-indent">
                  NILAGDAAN at PINANUMPAAN sa harap ko ngayong ika-
                </label>
                <input type="text" id="form17DaySigned" onChange={handleInputChange} />
                <label>araw ng</label>
                <input type="text" id="form17MonthSigned" onChange={handleInputChange} />
              </div>
              <div className="form17-form-input">
                <label>, 20</label>
                <input type="text" id="form17YearSigned" onChange={handleInputChange} />
                <label> sa </label>
                <input type="text" id="form17PlaceSigned" onChange={handleInputChange} />
                <label>.</label>
              </div>
            </div>
            <div className="form17-sign-container">
              <div className="form17-sign-line"></div>
              <p className="form17-sign-text">
                Punong Barangay/Tagapangulo ng Pangkat/Kasapi
              </p>
            </div>
            <br /> <br />
            <div className="form17-form-input">
              <label className="form17-indent">
                Tinanggap at inihain ngayong ika-
              </label>
              <input type="text" id="form17DayReceived" onChange={handleInputChange} />
              <label>araw ng</label>
              <input type="text" id="form17MonthReceived" onChange={handleInputChange} />
              <label>, 20</label>
              <input type="text" id="form17YearReceived" onChange={handleInputChange} />
              <label>.</label>
            </div>
            <br />
            <div className="form17-paragraph">
              <label className="form17-indent">
                *Ang hindi pagtanggi sa pag-aayos o kasunduan ng paghahatol ng
                tagapamagitan sa loob ng taning na panahon, alinsunod sa
                itinakdang sampong (10) araw ay ipapalagay na sa isang
                pagtatakwil sa karapatang tumutol batay sa nasabing kadahilanan.
              </label>
            </div>
          </form>
        </div>

        <div className="form17-button-group">
          <PDFDownloadLink
            document={<FormDocu17 data={formData} />}
            fileName="form17.pdf"
            className="form17-print-button"
          >
            {({ blob, url, loading, error }) =>
              loading ? "Loading document..." : "Print"
            }
          </PDFDownloadLink>

          {/* Submit Button */}
          <button
              className="form17-next-button"
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
                Form 17 successfully submitted. Please click the button to
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

export default Form17;

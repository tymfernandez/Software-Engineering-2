import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../main.css";
import Header from "./Header"; 

const Form20 = () => {

  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate(); // Initialize navigate
  
  const handleSubmit = () => {
    setShowSuccess(true); // Show success modal
  };
  
  const handleContinue = () => {
    navigate("/complaints"); // Navigate to Complaints page
  };

  return (
    <div className="form20-page">
      <Header showButton={false} />
      <div className="form20-text">
        <h1 className="form20-title">FORM 20:</h1>
        <h2 className="form20-subtitle">
          KATIBAYAN UPANG MAKADULOG SA HUKUMAN <br /> DAHIL SA DI PAGTUPAD SA
          KASUNDUAN
        </h2>

        <div className="form20-container">
          <form className="form20">
            <div className="form20-kp-input">
              <label className="form20-kpcase">KP Case Number:</label>
              <input type="text" id="form20-kpnum" placeholder=" " />
            </div>
            <div className="form20-pormularyoblg">
              <label className="form20-pormularyo">Pormularyo ng KP Blg. 20</label>
            </div>
            <div className="form20-heading">
              <label className="form20-head">
                Republika ng Pilipinas <br />
                Lalawigan ng Kabite <br />
                Bayan ng Indang <br />
                Barangay Poblacion 1
              </label>
            </div>
            <div className="form-group">
              <label className="form20-centered-label">
                <br /> TANGGAPAN NG LUPONG TAGAPAMAYAPA
              </label>
            </div>
            <div className="form-row two-columns centered-row">
              <div className="form-group">
              <input type="text" id="form20-maysumbong" />
              <input type="text" id="form20-maysumbong" /> 
                <label className="form20-sumbong">
                  (Mga) May Sumbong <br /> -laban kay/kina-
                </label>
                <input type="text" id="form20-ipinagsumbong" /> 
                <input type="text" id="form20-ipinagsumbong" />
                <label className="form20-sumbong"> (Mga) Ipinagsusumbong </label>
              </div>

              <div className="form-group">
                <div className="form20-blg-input">
                  <label>Usaping Barangay Blg. </label>
                  <input type="text" id="form20-blg" placeholder=" " />
                </div>
                <div className="form20-ukol-input">
                  <label>Ukol sa</label>
                  <input type="text" />
                </div>
              </div>
            </div> 
            <br />
            <div className="form-group">
              <label className="form20-centered-label">
                KATIBAYAN UPANG MAKADULOG SA HUKUMAN
              </label>
            </div>
            <div className="form20-paragraph">
              <label className="form20-indent1">Ito ay nagpapatunay na:</label>
            </div>
            <div className="form20-form-input">
              <label className="form20-indent2">
                1. Nagkaroon ng personal na pagharap sa pagitan ng mga panig sa
                harap ng Punong Barangay/Pangkat ng Tagapagkasundo;
              </label>{" "}
            </div>{" "}
            <br />
            <div className="form20-form-input">
              <label className="form20-indent2">2. Nagkaroon ng pag-aayos; </label>
            </div>{" "}
            <br />
            <div className="form20-form-input">
              <label className="form20-indent2">
                3. Ang kasunduan sa pag-aayos ay tinanggihan sa isang salaysay
                na pinanumpaan{" "}
              </label>
            </div>
            <div className="form20-form-input">
              <label className="form20-indent">
                sa harap ng Puno ng Barangay sa pamamagitan ng{" "}
              </label>
              <input type="text" id="form20-reason" placeholder=" " />
              <label>sa</label>
            </div>
            <div className="form20-form-input">
              <label className="form20-indent">ng </label>
              <input type="text" id="form20-reason" placeholder=" " />
              <label>; at </label>
            </div>
            <br />
            <div className="form20-form-input">
              <label className="form20-indent2">
                4. Dahil dito, ang kaukulang sumbong para sa alitan ay maaari
                ngayong ihain sa hukuman/ tanggpan ng Pamahalaan.
              </label>
            </div>
            <br /> <br />
            <div className="form20-form-input">
              <label className="form20-indent1">Ngayong ika-</label>
              <input type="text" id="form20-day" placeholder=" " />
              <label>araw ng</label>
              <input type="text" id="form20-month" placeholder=" " />
              <label>, 20</label>
              <input type="text" id="form20-year" placeholder=" " />
              <label>.</label>
            </div>
            <br />
            <div className="form20-sign-container">
              <div className="form20-sign-line"></div>
              <p className="form20-sign-text">Kalihim ng Lupon</p>
            </div>
            <br />
            <div className="form20-signature-section">
              <p className="form20-signtext">Pinatunayan:</p>
              <div className="form20-signature-wrapper">
                <div className="form20-signature-line"></div>
              </div>
            </div>
            <p className="form20-sig-text">Tagapangulo ng Lupon</p>
            <br />
          </form>
        </div>

        <div className="form20-button-group">
          <button
            type="button"
            className="form20-print-button"
            onClick={() => window.print()}
          >
            Print
          </button>
          {/* Submit Button */}
          <button
              className="form20-next-button"
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
                Form 20 successfully submitted. Please click the button to
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

export default Form20;

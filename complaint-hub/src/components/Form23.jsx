import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../main.css";
import Header from "./Header";

const Form23 = () => {

  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate(); // Initialize navigate
  
  const handleSubmit = () => {
    setShowSuccess(true); // Show success modal
  };
  
  const handleContinue = () => {
    navigate("/complaints"); // Navigate to Complaints page
  };

  return (
    <div className="form23-page">
      <Header showButton={false} />
      <div className="form23-text">
        <h1 className="form23-title">FORM 23:</h1>
        <h2 className="form23-subtitle">PANUKALA SA PAGPAPATUPAD</h2>

        <div className="form23-container">
          <form className="form23">
            <div className="form23-kp-input">
              <label className="form23-kpcase">KP Case Number:</label>
              <input type="text" id="form23-kpnum" placeholder=" " />
            </div>
            <div className="form23-pormularyoblg">
              <label className="form23-pormularyo">Pormularyo ng KP Blg. 23</label>
            </div>
            <div className="form23-heading">
              <label className="form23-head">
                Republika ng Pilipinas <br />
                Lalawigan ng Kabite <br />
                Bayan ng Indang <br />
                Barangay Poblacion 1
              </label>
            </div>
            <div className="form-group">
              <label className="form23-centered-label">
                <br /> TANGGAPAN NG LUPONG TAGAPAMAYAPA
              </label>
            </div>
            <div className="form-row two-columns centered-row">
              <div className="form-group">
              <input type="text" id="form23-maysumbong" />
              <input type="text" id="form23-maysumbong" /> 
                <label className="form23-sumbong">
                  (Mga) May Sumbong <br /> -laban kay/kina-
                </label>
                <input type="text" id="form23-ipinagsumbong" /> 
                <input type="text" id="form23-ipinagsumbong" /> 
                <label className="form23-sumbong"> (Mga) Ipinagsusumbong </label>
              </div>

              <div className="form-group">
                <div className="form23-blg-input">
                  <label>Usaping Barangay Blg. </label>
                  <input type="text" id="form23-blg" placeholder=" " />
                </div>
                <div className="form23-ukol-input">
                  <label>Ukol sa</label>
                  <input type="text" />
                </div>
              </div>
            </div>
            <div className="form-group">
              <label className="form23-centered-label">PANUKALA SA PAGPAPATUPAD</label>
            </div>
            <div className="form23-paragraph">
              <label className="form23-indent">
                Ang (mga) may sumbong/ pinagsusumbong ay nagpahayag ng mga
                sumusunod:
              </label>
            </div>
            <div className="form23-form-input">
              <label className="form23-indent">1. Noong</label>
              <input type="text" id="form23-petsa" placeholder="(petsa)" />
              <label>ang mga panig sa usaping ito ay lumagda sa isang </label>
            </div>
            <div className="form23-paragraph">
              <label className="form23-justify">
                matiwasay na pag-aayos/tumanggap ng gawad ng paghahatol na
                ibinigay ng Tagapangulo ng Lupon/Pangkat ng tagapagsundo;
              </label>
            </div>
            <div className="form23-paragraph">
              <label className="form23-justify">
                2. Ang sampung araw na taning mula sa petsang binaggit sa itaas
                ay natapos ng wala sa sinumang panig ang naghain ng sinumang
                sanaysay ng pagtanggi sa pag-aayos sa harap ng Tagapangulo ng
                Lupon ng petisyon na nagpapawalang-saysay sa gawad ng paghahatol
                sa hukuman; at
              </label>
            </div>{" "}
            <div className="form23-paragraph">
              <label className="form23-justify">
                3. Ang matiwasay na pag-aayos/gawad ng paghahatol ay pinal at
                ngayon ay nararapat lang ipatupad.
              </label>
            </div>{" "}
            <br />
            <div className="form23-form-input">
              <label className="form23-indent">
                DAHIL DITO, ang mga may sumbong/ipinagsusumbong ay humiling na
                ang katumbas na kasulatan sa pagpapatupad sa usaping ito ay
                ipalabas na ng Tagapangulo ng Lupon.
              </label>
            </div>
            <br /> <br /> <br />
            <div className="form-row two-columns centered-row">
              <div className="form23-sign-container">
                <div className="form23-sign-line"></div>
                <p className="form23-sign-text">Petsa</p>
              </div>
              <br />
              <div className="form23-sign-container">
                <div className="form23-signa-line"></div>
                <p className="form23-signa-text">(Mga) May Sumbong/Ipinagsusumbong</p>
              </div>
            </div>
            <br />
          </form>
        </div>

        <div className="form23-button-group">
          <button
            type="button"
            className="form23-print-button"
            onClick={() => window.print()}
          >
            Print
          </button>
          {/* Submit Button */}
          <button
              className="form23-next-button"
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
                Form 23 successfully submitted. Please click the button to
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

export default Form23;

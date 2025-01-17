import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../main.css";
import Header from "./Header";

const Form24 = () => {

   const [showSuccess, setShowSuccess] = useState(false);
     const navigate = useNavigate(); // Initialize navigate
   
     const handleSubmit = () => {
       setShowSuccess(true); // Show success modal
     };
   
     const handleContinue = () => {
       navigate("/complaints"); // Navigate to Complaints page
     };

  return (
    <div className="form24-page">
      <Header showButton={false} />
      <div className="form24-text">
        <h1 className="form24-title">FORM 24:</h1>
        <h2 className="form24-subtitle">
          PAG-ABISO NG PAGDINIG PARA SA <br /> PAGPAPATUPAD NG KASUNDUAN
        </h2>

        <div className="form24-container">
          <form className="form24">
            <div className="form24-kp-input">
              <label className="form24-kpcase">KP Case Number:</label>
              <input type="text" id="form24-kpnum" placeholder=" " />
            </div>
            <div className="form24-pormularyoblg">
              <label className="form24-pormularyo">Pormularyo ng KP Blg. 24</label>
            </div>
            <div className="form24-heading">
              <label className="form24-head">
                Republika ng Pilipinas <br />
                Lalawigan ng Kabite <br />
                Bayan ng Indang <br />
                Barangay Poblacion 1
              </label>
            </div>
            <div className="form-group">
              <label className="form24-centered-label">
                <br /> TANGGAPAN NG LUPONG TAGAPAMAYAPA
              </label>
            </div>
            <div className="form-row two-columns centered-row">
              <div className="form-group">
                <input type="text" id="form24-maysumbong" /> <br />
                <input type="text" id="form24-maysumbong" />
                <label className="form24-sumbong">
                  (Mga) May Sumbong <br /> -laban kay/kina-
                </label>
                <input type="text" id="form24-ipinagsumbong" /> <br />
                <input type="text" id="form24-ipinagsumbong" />
                <label className="form24-sumbong"> (Mga) Ipinagsusumbong </label>
              </div>

              <div className="form-group">
                <div className="form24-blg-input">
                  <label>Usaping Barangay Blg. </label>
                  <input type="text" id="form24-blg" placeholder=" " />
                </div>
                <div className="form24-ukol-input">
                  <label>Ukol sa:</label>
                  <input type="text" />
                </div>
              </div>
            </div>
            <div className="form-group">
              <label className="form24-centered-label">PAG-ABISO NG PAGDINIG</label>
              <label className="form24-center">
                (Ukol sa: Panukala sa Pagpapatupad)
              </label>
            </div>{" "}
            <br />
            <div className="form-row two-columns centered-row">
              <div className="form-group">
                <div className="form24-kay-input">
                  <label>KAY: </label>
                  <input type="text" id="form24-kay" placeholder=" " />
                  <input type="text" id="form24-sumbong-kay" placeholder=" " />
                </div>
                <div className="form-group">
                  <div className="form24-kay-input">
                    <input type="text" id="form24-kay2" placeholder=" " />
                    <input type="text" id="form24-sumbong-kay2" placeholder=" " />
                  </div>
                </div>
                <div className="form24-form-group-input">
                  <div className="form24-kay-input">
                    <label className="form24-sumbong-label">(Mga) May Sumbong</label>
                    <label className="form24-ipinagsusumbong-label">
                      (Mga) Ipinagsusumbong
                    </label>
                  </div>
                </div>
              </div>
            </div>{" "}
            <br /> <br />
            <div className="form24-form-input">
              <label className="form24-indent">
                Sa pamamagitan nito’y inaatasan ka na humarap sa akin sa ika-
              </label>
              <input type="text" id="form24-araw" placeholder=" " />
              <label> araw ng</label>
              <input type="text" id="form24-buwan" placeholder=" " />
            </div>
            <div className="form24-form-input">
              <label>, 20</label>
              <input type="text" id="form24-year" placeholder=" " />
              <label>sa ganap na ika-</label>
              <input type="text" id="form24-time" placeholder=" " />
              <label>ng umaga/hapon/gabi para sa pagdinig ngpanukala sa</label>
            </div>
            <div className="form24-form-input">
              <label>
                {" "}
                pagpapatupad, na kung saan ang sipi ng kalakip dito, na inihain
                ni
              </label>
              <input type="text" id="form24-pangalan" placeholder=" " />
            </div>
            <div className="form24-form-input">
              <label className="form24-left">
                (pangalan ng mga (mga) may sumbong)/{" "}
              </label>
              <input type="text" id="form24-pangalan" placeholder=" " />
              <label>(ipinagsusumbong). </label>
            </div>{" "}
            <br /> <br />
            <div className="form24-signature-container">
              <div className="form24-sign-line"></div>
              <p className="form24-sign-text">Petsa</p>
            </div>{" "}
            <br />
            <div className="form24-signature-container">
              <div className="form24-signature-line"></div>
              <p className="form24-signature-text">
                Punong Barangay/Tagapangulo ng Lupon
              </p>
            </div>{" "}
            <br />
            <div className="form24-form-input">
              <label className="form24-indent">Pinaabisuhan ngayong ika-</label>
              <input type="text" id="form24-day" placeholder=" " />
              <label>araw ng</label>
              <input type="text" id="form24-month" placeholder=" " />
              <label>, 20</label>
              <input type="text" id="form24-year" placeholder=" " />
              <label>.</label>
            </div>{" "}
            <br /> <br />
            <div className="form-row two-columns centered-row">
              <div className="form24-sign-container">
                <div className="form24-sign-line"></div>
                <p className="form24-sign-text">(Lagda)</p>
                <label className="form24-text1">(Mga) May Sumbong</label>
              </div>
              <div className="form24-sign-container">
                <div className="form24-signa-line"></div>
                <p className="form24-signa-text">(Lagda)</p>
                <label className="form24-text2">(Mga) Ipinagsusumbong</label>
              </div>
            </div>
            <br />
          </form>
        </div>
        <div className="form24-button-group">
          <button
            type="button"
            className="form24-print-button"
            onClick={() => window.print()}
          >
            Print
          </button>
          {/* Submit Button */}
          <button
              className="form24-next-button"
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
                Form 24 successfully submitted. Please click the button to
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

export default Form24;

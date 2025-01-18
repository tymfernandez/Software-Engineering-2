import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../main.css";
import Header from "./Header";

const Form19 = () => {

  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate(); // Initialize navigate
  
  const handleSubmit = () => {
    setShowSuccess(true); // Show success modal
  };
  
  const handleContinue = () => {
    navigate("/complaints"); // Navigate to Complaints page
  };

  return (
    <div className="form19-page">
      <Header showButton={false} />
      <div className="form19-text">
        <h1 className="form19-title">FORM 19:</h1>
        <h2 className="form19-subtitle">PAG-ABISO NG PAGDINIG PARA SA RESPONDENT</h2>

        <div className="form19-container">
          <form className="form19">
            <div className="form19-kp-input">
              <label className="form19-kpcase">KP Case Number:</label>
              <input type="text" id="form19-kpnum" placeholder=" " />
            </div>
            <div className="form19-pormularyoblg">
              <label className="form19-pormularyo">Pormularyo ng KP Blg. 19</label>
            </div>
            <div className="form19-heading">
              <label className="form19-head">
                Republika ng Pilipinas <br />
                Lalawigan ng Kabite <br />
                Bayan ng Indang <br />
                Barangay Poblacion 1
              </label>
            </div>
            <div className="form-group">
              <label className="form19-centered-label">
                <br /> TANGGAPAN NG LUPONG TAGAPAMAYAPA
              </label>
            </div>
            <div className="form-row two-columns centered-row">
              <div className="form-group">
                <input type="text" id="form19-maysumbong" /> <br />
                <input type="text" id="form19-maysumbong" />
                <label className="form19-sumbong">
                  (Mga) May Sumbong <br /> -laban kay/kina-
                </label>
                <input type="text" id="form19-ipinagsumbong" /> <br />
                <input type="text" id="form19-ipinagsumbong" />
                <label className="form19-sumbong"> (Mga) Ipinagsusumbong </label>
              </div>

              <div className="form-group">
                <div className="form19-blg-input">
                  <label>Usaping Barangay Blg. </label>
                  <input type="text" id="form19-blg" placeholder=" " />
                </div>
                <div className="form19-ukol-input">
                  <label>Ukol sa:</label>
                  <input type="text" />
                </div>
              </div>
            </div>
            <div className="form-group">
              <label className="form19-centered-label">PAG-ABISO NG PAGDINIG</label>
              <label className="form19-center">(ukol sa: Di-Pagharap)</label>
            </div> <br /> 
            <div className="form-row two-columns centered-row">
              <div className="form-group">
                <div className="form19-kay-input">
                  <label>KAY: </label>
                  <input type="text" id="form19-kay" placeholder=" " />
                </div>
                <input type="text" id="form19-sumbong-kay" placeholder=" " />
              </div>
            </div> <br /> <br />
            <div className="form19-form-input">
              <label className="form19-indent">
                Sa pamamagitan nito’y inaatasan ka na humarap sa akin/Pangkat sa
                ika-
              </label>
              <input type="text" id="form19-day" placeholder=" " />
              <label> araw ng</label>
            </div>
            <div className="form19-form-input">
              <input type="text" id="form19-month" placeholder=" " />
              <label>, 20</label>
              <input type="text" id="form19-year" placeholder=" " />
              <label>sa ganap na ika-</label>
              <input type="text" id="form19-time" placeholder=" " />
              <label>ng umaga/hapon upang ipaliwanag kung</label>
            </div>
            <div className="form19-form-input">
              <label>
                bakit di ka humarap para sa pamamagitan/pag-aayos na nakatakda
                noong
              </label>
              <input type="text" id="form19-date" placeholder=" " />
            </div>
            <div className="form19-form-input">
              <label>, 20</label>
              <input type="text" id="form19-year" placeholder=" " />
              <label>
                , at kung bakit ang iyong ganting sumbong (kung meron man) na
                nagbuhat sa sumbong
              </label>
            </div>
            <label className="form19-justify">
              ay di dapat ipagwalang-saysay, at kung bakit hindi dapat
              magpalabas ng isang paghahadlang na makapaghain ng ganting-sumbong
              sa hukuman ay di dapat gawin sanhi ng di mo pagharap o pagtangging
              humarap sa Punong Barangay/Pangkat ng tagapagsundo.
            </label>{" "}
            <br /> <br /> 
            <div className="form19-form-input">
              <label className="form19-indent">Ngayong ika-</label>
              <input type="text" id="form19-day" placeholder=" " />
              <label>araw ng</label>
              <input type="text" id="form19-month" placeholder=" " />
              <label>, 20</label>
              <input type="text" id="form19-year" placeholder=" " />
              <label>.</label>
            </div>{" "}
            <br /> <br />
            <div className="form19-signature-container">
              <div className="form19-signature-line"></div>
              <p className="form19-signature-text">
                Punong Barangay/Tagapangulo ng Pangkat
              </p>
              <p className="form19-signa-text">(Guhitan ang di-Angkop) </p>
            </div>{" "}
            <br />
            <div className="form19-form-input">
              <label className="form19-indent">Pinaabisuhan ngayong ika-</label>
              <input type="text" id="form19-day" placeholder=" " />
              <label>araw ng</label>
              <input type="text" id="form19-date" placeholder=" " />
              <label>.</label>
            </div>{" "}
            <br /> <br />
            <div className="form-row two-columns centered-row">
              <div className="form-group-input">
                <label className="form19-mga-sumbong">(Mga) May Sumbong</label> <br /> <br />
                <div className="form19-line"></div> <br /> <br /> <br />
                <div className="form19-line"></div>
              </div>

              <div className="form-group-input">
                <label className="form19-mga-sumbong">(Mga) Ipinagsusumbong </label>{" "}
                <br /> <br />
                <div className="form19-line"></div> <br /> <br /> <br />
                <div className="form19-line"></div>
              </div>
            </div>{" "}
          </form>
        </div>
        <div className="form19-button-group">
          <button
            type="button"
            className="form19-print-button"
            onClick={() => window.print()}
          >
            Print
          </button>
          {/* Submit Button */}
          <button
              className="form19-next-button"
              onClick={handleSubmit}
          >
              Submit
          </button>
        </div>
        
        {/* Pop-up Modal */}
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
                Form 19 successfully submitted. Please click the button to
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

export default Form19;

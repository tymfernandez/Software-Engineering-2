import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Form21.css";
import Header from "./Header";

const Form21 = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate(); // Initialize navigate

  const handleSubmit = () => {
    setShowSuccess(true); // Show success modal
  };

  const handleContinue = () => {
    navigate("/complaints"); // Navigate to Complaints page
  };
  return (
    <div className="form21-page">
      <Header showButton={false} />
      <div className="form21-text">
        <h1 className="form21-title">FORM 21:</h1>
        <h2 className="form21-subtitle">
          KATIBAYAN UPANG MAKADULOG SA HUKUMAN <br /> DAHIL SA DI PAGSIPOT SA KP
          NI COMPLAINANT
        </h2>

        <div className="form21-container">
          <form className="form21">
            <div className="form21-kp-input">
              <label className="form21-kpcase">KP Case Number:</label>
              <input type="text" id="form21-kpnum" placeholder=" " />
            </div>
            <div className="form21-pormularyoblg">
              <label className="form21-pormularyo">
                Pormularyo ng KP Blg. 21
              </label>
            </div>
            <div className="form21-heading">
              <label className="form21-head">
                Republika ng Pilipinas <br />
                Lalawigan ng Kabite <br />
                Bayan ng Indang <br />
                Barangay Poblacion 1
              </label>
            </div>
            <div className="form-group">
              <label className="form21-centered-label">
                <br /> TANGGAPAN NG LUPONG TAGAPAMAYAPA
              </label>
            </div>
            <div className="form-row two-columns centered-row">
              <div className="form-group">
                <input type="text" id="form21-maysumbong" />
                <input type="text" id="form21-maysumbong" />
                <label className="form21-sumbong">
                  (Mga) May Sumbong <br /> -laban kay/kina-
                </label>
                <input type="text" id="form21-ipinagsumbong" />
                <input type="text" id="form21-ipinagsumbong" />
                <label className="form21-sumbong">
                  {" "}
                  (Mga) Ipinagsusumbong{" "}
                </label>
              </div>

              <div className="form-group">
                <div className="form21-blg-input">
                  <label>Usaping Barangay Blg. </label>
                  <input type="text" id="form21-blg" placeholder=" " />
                </div>
                <div className="form21-ukol-input">
                  <label>Ukol sa</label>
                  <input type="text" />
                </div>
              </div>
            </div>{" "}
            <br />
            <div className="form-group">
              <label className="form21-centered-label">
                KATIBAYAN UPANG MAKADULOG SA HUKUMAN
              </label>
            </div>
            <div className="form21-paragraph">
              <label className="form21-indent">
                Ito ay nagpapatunay na ang usaping nakasaad sa itaas ay
                ipinawalangsaysay alinsunod sa kautusan
              </label>
            </div>
            <div className="form21-form-input">
              <label>mga petsang </label>
              <input type="text" id="form21-date" placeholder=" " />
              <label>para sa (mga) may sumbong </label>
              <input type="text" id="form21-pangalan" placeholder=" " />
            </div>
            <div className="form21-form-input">
              <label>(pangalan) at</label>
              <input type="text" id="form21-pangalan" placeholder=" " />
              <label>
                (pangalan) sanhi ng sinadya o pagtangging humarap para{" "}
              </label>
            </div>
            <div className="form21-form-input">
              <label className="form21-justify">
                sa pag dinig sa harap ng Punong Barangay/ Pangkat ng
                Tagapagsundo at dahil dito ang mga my sumbong ay hinahadlangang
                makadulog sa hukuman/tanggapan ng pamahalaan.
              </label>
            </div>
            <br />
            <div className="form21-form-input">
              <label className="form21-indent">Ngayong ika-</label>
              <input type="text" id="form21-day" placeholder=" " />
              <label>araw ng</label>
              <input type="text" id="form21-month" placeholder=" " />
              <label>, 20</label>
              <input type="text" id="form21-year" placeholder=" " />
              <label>.</label>
            </div>
            <br />
            <div className="form21-sign-container">
              <div className="form21-sign-line"></div>
              <p className="form21-sign-text">Kalihim ng Pangkat</p>
            </div>
            <br />
            <div className="form21-signature-section">
              <p className="form21-signtext">Pinatunayan:</p>
              <div className="form21-signature-wrapper">
                <div className="form21-signature-line"></div>
              </div>
            </div>
            <p className="form21-sig-text">Tagapangulo ng Pangkat/Lupon</p>
            <br /> <br />
            <div className="form21-form-input">
              <label className="form21-justify">
                MAHALAGA: Kung ang gumawa ng katibayan ay Kalihim ng Lupon, ang
                Tagapangulo ng Lupon ang magpapatunay. Kung ang kalihim ng
                Pangkat ang gumawa ng katibayan, ang Tagapangulo ng pangkat ang
                magpapatunay.
              </label>
            </div>{" "}
            <br />
          </form>
        </div>

        <div className="form21-button-group">
          <button
            type="button"
            className="form21-print-button"
            onClick={() => window.print()}
          >
            Print
          </button>

          {/* Submit Button */}
          <button className="form21-next-button" onClick={handleSubmit}>
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
                Form 21 successfully submitted. Please click the button to
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

export default Form21;

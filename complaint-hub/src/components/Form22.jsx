import React from "react";
import "../main.css";
import Header from "./Header";

const Form22 = () => {
  return (
    <div className="form22-page">
      <Header showButton={false} />
      <div className="form22-text">
        <h1 className="form22-title">FORM 22:</h1>
        <h2 className="form22-subtitle">
          KATIBAYAN UPANG HADLANGAN ANG GANTING SAKDAL <br />
          PARA SA RESPONDENT NA DI DUMALO SA PATAWAG
        </h2>

        <div className="form22-container">
          <form className="form22">
            <div className="form22-kp-input">
              <label className="form22-kpcase">KP Case Number:</label>
              <input type="text" id="form22-kpnum" placeholder=" " />
            </div>
            <div className="form22-pormularyoblg">
              <label className="form22-pormularyo">Pormularyo ng KP Blg. 22</label>
            </div>
            <div className="form22-heading">
              <label className="form22-head">
                Republika ng Pilipinas <br />
                Lalawigan ng Kabite <br />
                Bayan ng Indang <br />
                Barangay Poblacion 1
              </label>
            </div>
            <div className="form-group">
              <label className="form22-centered-label">
                <br /> TANGGAPAN NG LUPONG TAGAPAMAYAPA
              </label>
            </div>
            <div className="form-row two-columns centered-row">
              <div className="form-group">
              <input type="text" id="form22-maysumbong" />
              <input type="text" id="form22-maysumbong" />
                <label className="form22-sumbong">
                  (Mga) May Sumbong <br /> -laban kay/kina-
                </label>
                <input type="text" id="form22-ipinagsumbong" /> 
                <input type="text" id="form22-ipinagsumbong" /> 
                <label className="form22-sumbong"> (Mga) Ipinagsusumbong </label>
              </div>
              
              <div className="form-group">
                <div className="form22-blg-input">
                  <label>Usaping Barangay Blg. </label>
                  <input type="text" id="form22-blg" placeholder=" " />
                </div>
                <div className="form22-ukol-input">
                  <label>Ukol sa</label>
                  <input type="text" />
                </div>
              </div>
            </div>
            <br />
            <div className="form-group">
              <label className="form22-centered-label">
                KATIBAYAN UPANG HADLANGAN ANG GANTING SAKDAL
              </label>
            </div>
            <div className="form22-paragraph">
              <label className="form22-indent">
                Ito ay nagpapatunay na matapos ang nauunang abiso at pagdinig,
                ang (mga) Ipinagsusumbong na{" "}
              </label>
            </div>
            <div className="form22-form-input">
              <label>sina</label>
              <input type="text" id="form22-pangalan" placeholder=" " />
              <label>(pangalan) at </label>
              <input type="text" id="form22-pangalan" placeholder=" " />
              <label>(pangalan) </label>
            </div>
            <div className="form22-form-input">
              <label className="form22-justify">
                ay napatunayan na sinadya o tumangging humarap ng walang
                makatwirang dahilan sa harap ng Punong Barangay/Pangakat ng
                Tagapagkasundo at dahil dito ang (mga) ipinagsusumbong ay
                hinahadlangan na maghain ng ganting-sakdal (kung mayroon man) na
                magmumula sa sumbong sa hukuman/ tanggapan ng pamahalaan.
              </label>
            </div>
            <br />
            <div className="form22-form-input">
              <label className="form22-indent">Ngayong ika-</label>
              <input type="text" id="form22-day" placeholder=" " />
              <label>araw ng</label>
              <input type="text" id="form22-month" placeholder=" " />
              <label>, 20</label>
              <input type="text" id="form22-year" placeholder=" " />
              <label>.</label>
            </div>
            <br />
            <div className="form22-sign-container">
              <div className="form22-sign-line"></div>
              <p className="form22-sign-text">Kalihim ng Pangkat</p>
            </div>
            <br />
            <div className="form22-signature-section">
              <p className="form22-signtext">Pinatunayan:</p>
              <div className="form22-signature-wrapper">
                <div className="form22-signature-line"></div>
              </div>
            </div>
            <p className="form22-sig-text">Tagapangulo ng Pangkat/Lupon</p>
            <br /> <br />
            <div className="form22-form-input">
              <label className="form22-justify">
                MAHALAGA: Kung ang Kalihim ng Lupon ang gumawa ng katibayan, ang
                Tagapangulo ng lupon ang magpapatunay. Kung ang Kalihim ng
                Pangkat ang gumawa ng katibayan, ang Tagapangulo ng Pangkat ang
                magpapatunay.
              </label>
            </div>
          </form>
        </div>

        <div className="form22-button-group">
          <button
            type="button"
            className="form22-print-button"
            onClick={() => window.print()}
          >
            Print
          </button>
          <button type="button" className="form22-next-button">
            {" "}
            Next{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form22;

import React from "react";
import "../main.css";
import Header from "./Header";

const Form22 = () => {
  return (
    <div className="katibayan-form-page">
      <Header showButton={false} />
      <div className="katibayan-form-text">
        <h1>FORM 22:</h1>
        <h2 className="form22">
          KATIBAYAN UPANG HADLANGAN ANG GANTING SAKDAL <br />
          PARA SA RESPONDENT NA DI DUMALO SA PATAWAG
        </h2>

        <div className="tanggapan-form-container">
          <form className="katibayan-form">
            <div className="kp-input">
              <label className="kpcase">KP Case Number:</label>
              <input type="text" id="kpnum" placeholder=" " />
            </div>
            <div className="pormularyoblg">
              <label className="pormularyo">Pormularyo ng KP Blg. 22</label>
            </div>
            <div className="heading">
              <label className="head">
                Republika ng Pilipinas <br />
                Lalawigan ng Kabite <br />
                Bayan ng Indang <br />
                Barangay Poblacion 1
              </label>
            </div>
            <div className="form-group">
              <label className="centered-label">
                <br /> TANGGAPAN NG LUPONG TAGAPAMAYAPA
              </label>
            </div>
            <div className="form-row two-columns centered-row">
              <div className="form-group">
                <input type="text" />
                <input type="text" /> 
                <label className="sumbong">
                  (Mga) May Sumbong <br /> -laban kay/kina-
                </label>
                <input type="text" />
                <input type="text" />
                <label className="sumbong"> (Mga) Ipinagsusumbong </label>
              </div>

              <div className="form-group">
                <div className="blg-input">
                  <label>Usaping Barangay Blg. </label>
                  <input type="text" id="blg" placeholder=" " />
                </div>
                <div className="ukol-input">
                  <label>Ukol sa</label>
                  <input type="text" />
                </div>
              </div>
            </div>
            <div className="form-group">
              <label className="centered-label">
                KATIBAYAN UPANG HADLANGAN ANG GANTING SAKDAL
              </label>
            </div>
            <div className="paragraph">
              <label className="indent">
                Ito ay nagpapatunay na matapos ang nauunang abiso at pagdinig,
                ang (mga) Ipinagsusumbong{" "}
              </label>
            </div>
            <div className="form-input">
              <label>na sina</label>
              <input type="text" id="pangalan" placeholder=" " />
              <label>(pangalan) at </label>
              <input type="text" id="pangalan" placeholder=" " />
              <label>(pangalan) </label>
            </div>
            <div className="form-input">
              <label className="justify">
                ay napatunayan na sinadya o tumangging humarap ng walang
                makatwirang dahilan sa harap ng Punong Barangay/Pangakat ng
                Tagapagkasundo at dahil dito ang (mga) ipinagsusumbong ay
                hinahadlangan na maghain ng ganting-sakdal (kung mayroon man) na
                magmumula sa sumbong sa hukuman/ tanggapan ng pamahalaan.
              </label>
            </div>
            <br />
            <div className="form-input">
              <label className="indent">Ngayong ika-</label>
              <input type="text" id="day" placeholder=" " />
              <label>araw ng</label>
              <input type="text" id="month" placeholder=" " />
              <label>, 20</label>
              <input type="text" id="year" placeholder=" " />
              <label>.</label>
            </div>
            <br />
            <div className="sign-container">
              <div className="sign-line"></div>
              <p className="sign-text">Kalihim ng Pangkat</p>
            </div>
            <br />
            <div className="signature-section">
              <p className="signtext">Pinatunayan:</p>
              <div className="signature-wrapper">
                <div className="signature-line"></div>
              </div>
            </div>
            <p className="sig-text">Tagapangulo ng Pangkat/Lupon</p>
            <br /> <br />
            <div className="form-input">
              <label className="justify">
                MAHALAGA: Kung ang Kalihim ng Lupon ang gumawa ng katibayan, ang
                Tagapangulo ng lupon ang magpapatunay. Kung ang Kalihim ng
                Pangkat ang gumawa ng katibayan, ang Tagapangulo ng Pangkat ang
                magpapatunay.
              </label>
            </div>
          </form>
        </div>

        <div className="button-group">
          <button
            type="button"
            className="print-button"
            onClick={() => window.print()}
          >
            Print
          </button>
          <button type="button" className="next-button">
            {" "}
            Next{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form22;

import React from "react";
import "../main.css";
import Header from "./Header";

const Form15 = () => {
  return (
    <div className="form15-page">
      <Header showButton={false} />
      <div className="form15-text">
        <h1 className="form15-title">FORM 15: GAWAD NG PAGHAHATOL</h1>

        <div className="form15-container">
          <form className="form15">
            <div className="form15-kp-input">
              <label className="form15-kpcase">KP Case Number:</label>
              <input type="text" id="form15-kpnum" placeholder=" " />
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
                <input type="text" id="form15-maysumbong" /> <br />
                <input type="text" id="form15-maysumbong" />
                <label className="form15-sumbong">
                  (Mga) May Sumbong <br /> -laban kay/kina-
                </label>
                <input type="text" id="form15-ipinagsumbong" /> <br />
                <input type="text" id="form15-ipinagsumbong" />
                <label className="form15-sumbong"> (Mga) Ipinagsusumbong </label>
              </div>

              <div className="form-group">
                <div className="form15-blg-input">
                  <label>Usaping Barangay Blg. </label>
                  <input type="text" id="form15-blg" placeholder=" " />
                </div>
                <div className="form15-ukol-input">
                  <label>Ukol sa:</label>
                  <input type="text" id="form15-ukol" />
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
              <textarea id="form15-gawad" placeholder=" "></textarea>
            </div>
            <br />
            <div className="form15-form-input">
              <label className="form15-indent">Ginawa ngayong ika-</label>
              <input type="text" id="form15-day" placeholder=" " />
              <label>araw ng</label>
              <input type="text" id="form15-month" placeholder=" " />
              <label>, 20</label>
              <input type="text" id="form15-year" placeholder=" " />
              <label>sa</label>
              <input type="text" id="form15-place" placeholder=" " />
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
          <button
            type="button"
            className="form15-print-button"
            onClick={() => window.print()}
          >
            Print
          </button>
          <button type="button" className="form15-next-button">
            {" "}
            Next{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form15;

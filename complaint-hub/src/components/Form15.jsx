import React from "react";
import "../main.css";
import Header from "./Header";

const Form15 = () => {
  return (
    <div className="katibayan-form-page">
      <Header showButton={false} />
      <div className="katibayan-form-text">
        <h1>FORM 15: GAWAD NG PAGHAHATOL</h1>

        <div className="tanggapan-form-container">
          <form className="katibayan-form">
            <div className="kp-input">
              <label className="kpcase">KP Case Number:</label>
              <input type="text" id="kpnum" placeholder=" " />
            </div>
            <div className="pormularyoblg">
              <label className="pormularyo">Pormularyo ng KP Blg. 15</label>
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
                <input type="text" id="maysumbong" /> <br />
                <input type="text" id="maysumbong" />
                <label className="sumbong">
                  (Mga) May Sumbong <br /> -laban kay/kina-
                </label>
                <input type="text" id="ipinagsumbong" /> <br />
                <input type="text" id="ipinagsumbong" />
                <label className="sumbong"> (Mga) Ipinagsusumbong </label>
              </div>

              <div className="form-group">
                <div className="blg-input">
                  <label>Usaping Barangay Blg. </label>
                  <input type="text" id="blg" placeholder=" " />
                </div>
                <div className="ukol-input">
                  <label>Ukol sa:</label>
                  <input type="text" />
                </div>
              </div>
            </div>
            <div className="form-group">
              <label className="centered-label">GAWAD NG PAGHAHATOL</label>
            </div>
            <div className="paragraph">
              <label className="justify">
                Matapos marinig ang mga salaysay na ipinahayag at maingat na
                pagsusuri ng katibayan na iniharap sa usaping ito, iginagawad
                ang mga sumusunod:
              </label>
              <textarea placeholder=" "></textarea>
            </div>
            <br />
            <div className="form-input">
              <label className="indent">Ginawa ngayong ika-</label>
              <input type="text" id="day" placeholder=" " />
              <label>araw ng</label>
              <input type="text" id="month" placeholder=" " />
              <label>, 20</label>
              <input type="text" id="year" placeholder=" " />
              <label>sa</label>
              <input type="text" id="place" placeholder=" " />
              <label>.</label>
            </div>{" "}
            <br />
            <div className="sign-container">
              <div className="sign-line"></div>
              <p className="sign-text">
                Punong Barangay/Tagapangulo ng Pangkat
              </p>
            </div>
            <br />
            <div className="sig-container">
              <div className="sig-line"></div>
              <p className="sig-text">Kasapi</p>
            </div>{" "}
            <br /> <br />
            <div className="sig-container">
              <div className="sig-line"></div>
              <p className="sig-text">Kasapi</p>
            </div>{" "}
            <br />
            <label>PINATUNAYAN: </label>
            <br /> <br /> <br />
            <div className="sig-container">
              <div className="signa-line"></div>
              <p className="signa-text">Punong Barangay/Kalihim ng Lupon</p>
            </div>
            <br />
            <div className="bullet">
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

export default Form15;

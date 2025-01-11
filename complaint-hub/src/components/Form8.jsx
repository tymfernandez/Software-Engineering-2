import React from "react";
import "../main.css";
import Header from "./Header";

const Form8 = () => {
  return (
    <div className="form8-page">
      <Header showButton={false} />
      <div className="form8-text">
        <h1 className="form8-title">FORM 8: PAABISO</h1>
        <h2 className="form8-subtitle">Para sa complainant o nagrereklamo</h2>

        <div className="form8-container">
          <form className="form8">
            <div className="form8-kp-input">
              <label className="form8-kpcase">KP Case Number:</label>
              <input type="text" id="form8-kpnum" placeholder=" " />
            </div>
            <div className="form8-pormularyoblg">
              <label className="form8-pormularyo">Pormularyo ng KP Blg. 8</label>
            </div>
            <div className="form8-heading">
              <label className="form8-head">
                Republika ng Pilipinas <br />
                Lalawigan ng Kabite <br />
                Bayan ng Indang <br />
                Barangay Poblacion 1
              </label>
            </div>
            <div className="form8-group">
              <label className="form8-centered-label">
                <br /> TANGGAPAN NG LUPONG TAGAPAMAYAPA
              </label>
            </div>
            <div className="form8-date">
              <input type="text" id="form8-date" placeholder=" " />
              <label>, 20</label>
              <input type="text" id="form8-year" placeholder=" " />
            </div>
            <div className="form8-group">
              <label className="form8-centered-label">
                <br /> PAABISO NG PAGDINIG <br />
                (Mga Hakbang ng Pamamagitan)
              </label> 
            </div> <br/>
            <div className="form8-may-sumbong">
              <div className="form8-kay-input">
                <label>KAY: </label>
                <input type="text" id="form8-kay" placeholder=" " />
              </div>
              <input type="text" id="form8-sumbong" placeholder=" " /> <br/>
              <label className="form8-text-sumbong"> (Mga) May Sumbong </label>
            </div>
            <br /> <br />
            <div className="form8-form-input">
              <label className="form8-indent">
                Ikaw ay inuutusan na sa akin sa ika-
              </label>
              <input type="text" id="form8-day" placeholder=" " />
              <label>araw ng</label>
              <input type="text" id="form8-month" placeholder=" " />
              <label>, 20</label>
              <input type="text" id="form8-year" placeholder=" " />
            </div>
            <div className="form8-form-input">
              <label>sa ganap na ika-</label>
              <input type="text" id="form8-time" placeholder=" " />
              <label>ng umaga/hapon, para sa pagdinig ng inyong sumbong.</label>
            </div>
            <br />
            <div className="form8-form-input">
              <label className="form8-indent">Ngayong ika-</label>
              <input type="text" id="form8-day" placeholder=" " />
              <label>araw ng</label>
              <input type="text" id="form8-month" placeholder=" " />
              <label>, 20</label>
              <input type="text" id="form8-year" placeholder=" " />
              <label>.</label>
            </div>
            <br />
            <br />
            <div className="form8-signature-container">
              <div className="form8-signature-line"></div>
              <p className="form8-signature-text">
                Punong Barangay/Tagapangulo ng Lupon
              </p>
            </div>
            <br /> <br />
            <div className="form8-form-input">
              <label className="form8-indent">Pinaaabisuhan ngayong ika-</label>
              <input type="text" id="form8-day" placeholder=" " />
              <label> ng</label>
              <input type="text" id="form8-month" placeholder=" " />
              <label>, 20</label>
              <input type="text" id="form8-year" placeholder=" " />
              <label>.</label>
            </div>
            <br /> <br />
            <br />
            <br />
            <div className="form8-signatures">
              <div className="form8-sign-line"></div>
              <div className="form8-sign-container">
                <div className="form8-sign-line"></div>
              </div>
              <p className="form8-sign-text">(Mga) May Sumbong</p>
            </div>
          </form>
        </div>
        <div className="form8-button-group">
          <button
            type="button"
            className="form8-print-button"
            onClick={() => window.print()}
          >
            Print
          </button>
          <button type="button" className="form8-next-button">
            {" "}
            Proceed to Form 9{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form8;

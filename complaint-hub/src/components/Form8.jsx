import React from "react";
import "../main.css";
import Header from "./Header";

const Form8 = () => {
  return (
    <div className="paabiso-form-page">
      <Header showButton={false} />
      <div className="paabiso-form-text">
        <h1>FORM 8: PAABISO</h1>
        <p className="centered-text">Para sa complainant o nagrereklamo</p>

        <div className="tanggapan-form-container">
          <form className="paabiso-form">
            <div className="kp-input">
              <label className="kpcase">KP Case Number:</label>
              <input type="text" id="kpnum" placeholder=" " />
            </div>
            <div className="pormularyoblg">
              <label className="pormularyo">Pormularyo ng KP Blg. 8</label>
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
            <div className="date">
              <input type="text" id="date" placeholder=" " />
              <label>, 20</label>
              <input type="text" id="year" placeholder=" " />
            </div>
            <div className="form-group">
              <label className="centered-label">
                <br /> PAABISO NG PAGDINIG <br />
                (Mga Hakbang ng Pamamagitan)
              </label>
            </div>
            <div className="may-sumbong">
              <div className="kay-input">
                <label>KAY: </label>
                <input type="text" id="kay" placeholder=" " />
              </div>
              <input type="text" id="sumbong" placeholder=" " />
              <label className="text-sumbong"> (Mga) May Sumbong </label>
            </div>
            <br /> <br />
            <div className="form-input">
              <label className="indent">
                Ikaw ay inuutusan na sa akin sa ika-
              </label>
              <input type="text" id="day" placeholder=" " />
              <label>araw ng</label>
              <input type="text" id="month" placeholder=" " />
              <label>, 20</label>
              <input type="text" id="year" placeholder=" " />
            </div>
            <div className="form-input">
              <label>sa ganap na ika-</label>
              <input type="text" id="time" placeholder=" " />
              <label>ng umaga/hapon, para sa pagdinig ng inyong sumbong.</label>
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
            <br />
            <div className="signature-container">
              <div className="signature-line"></div>
              <p className="signature-text">
                Punong Barangay/Tagapangulo ng Lupon
              </p>
            </div>
            <br /> <br />
            <div className="form-input">
              <label className="indent">Pinaaabisuhan ngayong ika-</label>
              <input type="text" id="day" placeholder=" " />
              <label> ng</label>
              <input type="text" id="month" placeholder=" " />
              <label>, 20</label>
              <input type="text" id="year" placeholder=" " />
              <label>.</label>
            </div>
            <br /> <br />
            <br />
            <br />
            <div className="signatures">
              <div className="sign-line"></div>
              <div className="sign-container">
                <div className="sign-line"></div>
              </div>
              <p className="sign-text">(Mga) May Sumbong</p>
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
            Proceed to Form 9{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form8;

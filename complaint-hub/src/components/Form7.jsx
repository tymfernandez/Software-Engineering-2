import React from "react";
import "../main.css";
import Header from "./Header"; //

const Form7 = () => {
  return (
    <div className="katibayan-form-page">
      <Header showButton={false} />
      <div className="katibayan-form-text">
        <h1>FORM 7: SUMBONG</h1>
        <p>
          {" "}
          Submit complaints for documentation and resolution by the Barangay
        </p>

        <div className="tanggapan-form-container">
          <form className="katibayan-form">
            <div className="kp-input">
              <label className="kpcase">KP Case Number:</label>
              <input type="text" id="kpnum" placeholder=" " />
            </div>
            <div className="pormularyoblg">
              <label className="pormularyo">Pormularyo ng KP Blg. 7</label>
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
              <label className="centered-label">REKLAMO</label>
            </div>
            <div className="paragraph">
              <label className="justify">
                AKO/KAMI, ay nagrereklamo laban sa mga ipinagsusumbong na
                binanggit sa itaas dahil sa paglabag sa aking/aming mga
                karapatan at kapakanan sa sumusunod na pamamaraan:
              </label>
              <textarea placeholder=" "></textarea>
            </div>
            <div className="paragraph">
              <label className="justify">
                DAHIL DITO, AKO/KAMI, na nakikiusap na ipagkaloob sa akin/amin
                ang sumusunod na (mga) kalunasan nang naaalinsunod sa batas at/o
                pagkamakatuwiran:
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
              <label>.</label>
            </div>{" "}
            <br />
            <div className="sign-container">
              <div className="sign-line"></div>
              <p className="sign-text">(Mga) May Sumbong</p>
            </div>
            <br /> <br />
            <div className="form-input">
              <label className="indent">Tinanggap at inihain ngayong</label>
              <input type="text" id="day" placeholder=" " />
              <label>araw ng</label>
              <input type="text" id="month" placeholder=" " />
              <label>, 20</label>
              <input type="text" id="year" placeholder=" " />
              <label>.</label>
            </div>
            <br /> <br /> <br /> <br />
            <div className="sig-container">
              <div className="sig-line"></div>
            </div>
            <p className="sig-text">Punong Barangay/Kalihim ng Lupon</p>
            <br />
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

export default Form7;

import React from "react";
import "../main.css";
import Header from "./Header"; //

const Form7 = () => {
  return (
    <div className="form7-page">
      <Header showButton={false} />
      <div className="form7-text">
        <h1 className="form7-title">FORM 7: SUMBONG</h1>
        <h2 className="form7-subtitle">
          {" "}
          Submit complaints for documentation and resolution by the Barangay
        </h2>

        <div className="form7-container">
          <form className="form7-form">
            <div className="form7-kp-input">
              <label className="form7-kpcase">KP Case Number:</label>
              <input type="text" id="form7-kpnum" placeholder=" " />
            </div>
            <div className="form7-pormularyoblg">
              <label className="form7-pormularyo">Pormularyo ng KP Blg. 7</label>
            </div>
            <div className="form7-heading">
              <label className="form7-head">
                Republika ng Pilipinas <br />
                Lalawigan ng Kabite <br />
                Bayan ng Indang <br />
                Barangay Poblacion 1
              </label>
            </div>
            <div className="form7-group">
              <label className="form7-centered-label">
                <br /> TANGGAPAN NG LUPONG TAGAPAMAYAPA
              </label>
            </div>
            <div className="form-row two-columns centered-row">
              <div className="form7-group">
                <input type="text" id="form7-maysumbong" />
                <input type="text" id="form7-maysumbong" /> 
                <label className="form7-sumbong">
                  (Mga) May Sumbong <br /> -laban kay/kina-
                </label>
                <input type="text" id="form7-ipinagsumbong" /> 
                <input type="text" id="form7-ipinagsumbong" /> 
                <label className="form7-sumbong"> (Mga) Ipinagsumbong </label>
              </div>

              <div className="form7-group">
                <div className="form7-blg-input">
                  <label>Usaping Barangay Blg. : </label> 
                  <input type="text" id="form7-blg" placeholder=" " />
                </div>
                <div className="form7-ukol-input">
                  <label>Ukol sa:</label>
                  <input type="text" />
                </div>
              </div>
            </div>
            <div className="form7-group">
              <label className="form7-centered-label">REKLAMO</label>
            </div>
            <div className="form7-paragraph">
              <label className="form7-justify">
                AKO/KAMI, ay nagrereklamo laban sa mga ipinagsusumbong na
                binanggit sa itaas dahil sa paglabag sa aking/aming mga
                karapatan at kapakanan sa sumusunod na pamamaraan:
              </label>
              <textarea placeholder=" "></textarea>
            </div>
            <div className="form7-paragraph">
              <label className="form7-justify">
                DAHIL DITO, AKO/KAMI, na nakikiusap na ipagkaloob sa akin/amin
                ang sumusunod na (mga) kalunasan nang naaalinsunod sa batas at/o
                pagkamakatuwiran:
              </label> <br />
              <textarea placeholder=" "></textarea>
            </div>
            <br />
            <div className="form7-input">
              <label className="form7-indent">Ginawa ngayong ika-</label>
              <input type="text" id="form7-day" placeholder=" " />
              <label> araw ng</label>
              <input type="text" id="form7-month" placeholder=" " />
              <label>, 20</label>
              <input type="text" id="form7-year" placeholder=" " />
              <label>.</label>
            </div>{" "}
            <br />
            <div className="form7-sign-container">
              <div className="form7-sign-line"></div>
              <p className="form7-sign-text">(Mga) May Sumbong</p>
            </div>
            <br /> <br />
            <div className="form7-input">
              <label className="form7-indent">Tinanggap at inihain ngayong</label>
              <input type="text" id="form7-day" placeholder=" " />
              <label>araw ng</label>
              <input type="text" id="form7-month" placeholder=" " />
              <label>, 20</label>
              <input type="text" id="form7-year" placeholder=" " />
              <label>.</label>
            </div>
            <br /> <br /> <br /> <br />
            <div className="form7-sig-container">
              <div className="form7-sig-line"></div>
            </div>
            <p className="form7-sig-text">Punong Barangay/Kalihim ng Lupon</p>
            <br />
          </form>
        </div>

        <div className="form7-button-group">
          <button
            type="button"
            className="form7-print-button"
            onClick={() => window.print()}
          >
            Print
          </button>
          <button type="button" className="form7-next-button">
            {" "}
            Next{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form7;
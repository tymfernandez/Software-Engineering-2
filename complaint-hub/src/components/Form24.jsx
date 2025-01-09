import React from "react";
import "../main.css";
import Header from "./Header";

const Form24 = () => {
  return (
    <div className="patawag-form-page">
      <Header showButton={false} />
      <div className="patawag-form-text">
        <h1>FORM 24:</h1>
        <h2>
          PAG-ABISO NG PAGDINIG PARA SA <br /> PAGPAPATUPAD NG KASUNDUAN
        </h2>

        <div className="tanggapan-form-container">
          <form className="patawag-form">
            <div className="kp-input">
              <label className="kpcase">KP Case Number:</label>
              <input type="text" id="kpnum" placeholder=" " />
            </div>
            <div className="pormularyoblg">
              <label className="pormularyo">Pormularyo ng KP Blg. 24</label>
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
              <label className="centered-label">PAG-ABISO NG PAGDINIG</label>
              <label className="center">
                (Ukol sa: Panukala sa Pagpapatupad)
              </label>
            </div>{" "}
            <br />
            <div className="form-row two-columns centered-row">
              <div className="form-group">
                <div className="kay-input">
                  <label>KAY: </label>
                  <input type="text" id="kay" placeholder=" " />
                  <input type="text" id="sumbong-kay" placeholder=" " />
                </div>
                <div className="form-group">
                  <div className="kay-input">
                    <input type="text" id="kay2" placeholder=" " />
                    <input type="text" id="sumbong-kay2" placeholder=" " />
                  </div>
                </div>
                <div className="form-group-input">
                  <div className="kay-input">
                    <label className="sumbong-label">(Mga) May Sumbong</label>
                    <label className="ipinagsusumbong-label">
                      (Mga) Ipinagsusumbong
                    </label>
                  </div>
                </div>
              </div>
            </div>{" "}
            <br /> <br />
            <div className="form-input">
              <label className="indent">
                Sa pamamagitan nito’y inaatasan ka na humarap sa akin sa ika-
              </label>
              <input type="text" id="araw" placeholder=" " />
              <label> araw ng</label>
              <input type="text" id="buwan" placeholder=" " />
            </div>
            <div className="form-input">
              <label>, 20</label>
              <input type="text" id="year" placeholder=" " />
              <label>sa ganap na ika-</label>
              <input type="text" id="time" placeholder=" " />
              <label>ng umaga/hapon/gabi para sa pagdinig ngpanukala sa</label>
            </div>
            <div className="form-input">
              <label>
                {" "}
                pagpapatupad, na kung saan ang sipi ng kalakip dito, na inihain
                ni
              </label>
              <input type="text" id="pangalan" placeholder=" " />
            </div>
            <div className="form-input">
              <label className="left">
                (pangalan ng mga (mga) may sumbong)/{" "}
              </label>
              <input type="text" id="pangalan" placeholder=" " />
              <label>(ipinagsusumbong). </label>
            </div>{" "}
            <br /> <br />
            <div className="signature-container">
              <div className="sign-line"></div>
              <p className="sign-text">Petsa</p>
            </div>{" "}
            <br />
            <div className="signature-container">
              <div className="signature-line"></div>
              <p className="signature-text">
                Punong Barangay/Tagapangulo ng Lupon
              </p>
            </div>{" "}
            <br />
            <div className="form-input">
              <label className="indent">Pinaabisuhan ngayong ika-</label>
              <input type="text" id="day" placeholder=" " />
              <label>araw ng</label>
              <input type="text" id="month" placeholder=" " />
              <label>, 20</label>
              <input type="text" id="year" placeholder=" " />
              <label>.</label>
            </div>{" "}
            <br /> <br />
            <div className="form-row two-columns centered-row">
              <div className="sign-container">
                <div className="sign-line"></div>
                <p className="sign-text">(Lagda)</p>
                <label className="text1">(Mga) May Sumbong</label>
              </div>
              <div className="sign-container">
                <div className="signa-line"></div>
                <p className="signa-text">(Lagda)</p>
                <label className="text2">(Mga) Ipinagsusumbong</label>
              </div>
            </div>
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

export default Form24;

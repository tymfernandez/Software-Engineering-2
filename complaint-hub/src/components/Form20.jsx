import React from "react";
import "../main.css";
import Header from "./Header"; 

const Form20 = () => {
  return (
    <div className="katibayan-form-page">
      <Header showButton={false} />
      <div className="katibayan-form-text">
        <h1>FORM 20:</h1>
        <h2 className="form22">
          KATIBAYAN UPANG MAKADULOG SA HUKUMAN <br /> DAHIL SA DI PAGTUPAD SA
          KASUNDUAN
        </h2>

        <div className="tanggapan-form-container">
          <form className="katibayan-form">
            <div className="kp-input">
              <label className="kpcase">KP Case Number:</label>
              <input type="text" id="kpnum" placeholder=" " />
            </div>
            <div className="pormularyoblg">
              <label className="pormularyo">Pormularyo ng KP Blg. 20</label>
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
                KATIBAYAN UPANG MAKADULOG SA HUKUMAN
              </label>
            </div>
            <div className="paragraph">
              <label className="indent1">Ito ay nagpapatunay na:</label>
            </div>
            <div className="form-input">
              <label className="indent2">
                1. Nagkaroon ng personal na pagharap sa pagitan ng mga panig sa
                harap ng Punong Barangay/Pangkat ng Tagapagkasundo;
              </label>{" "}
            </div>{" "}
            <br />
            <div className="form-input">
              <label className="indent2">2. Nagkaroon ng pag-aayos; </label>
            </div>{" "}
            <br />
            <div className="form-input">
              <label className="indent2">
                3. Ang kasunduan sa pag-aayos ay tinanggihan sa isang salaysay
                na pinanumpaan{" "}
              </label>
            </div>
            <div className="form-input">
              <label className="indent">
                sa harap ng Puno ng Barangay sa pamamagitan ng{" "}
              </label>
              <input type="text" id="reason" placeholder=" " />
              <label>sa</label>
            </div>
            <div className="form-input">
              <label className="indent">ng </label>
              <input type="text" id="reason" placeholder=" " />
              <label>; at </label>
            </div>
            <br />
            <div className="form-input">
              <label className="indent2">
                4. Dahil dito, ang kaukulang sumbong para sa alitan ay maaari
                ngayong ihain sa hukuman/ tanggpan ng Pamahalaan.
              </label>
            </div>
            <br /> <br />
            <div className="form-input">
              <label className="indent1">Ngayong ika-</label>
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
              <p className="sign-text">Kalihim ng Lupon</p>
            </div>
            <br />
            <div className="signature-section">
              <p className="signtext">Pinatunayan:</p>
              <div className="signature-wrapper">
                <div className="signature-line"></div>
              </div>
            </div>
            <p className="sig-text">Tagapangulo ng Lupon</p>
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

export default Form20;

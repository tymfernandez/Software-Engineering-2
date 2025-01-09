import React from "react";
import "../main.css";
import Header from "./Header";

const Form21 = () => {
  return (
    <div className="katibayan-form-page">
      <Header showButton={false} />
      <div className="katibayan-form-text">
        <h1>FORM 21:</h1>
        <h2>
          KATIBAYAN UPANG MAKADULOG SA HUKUMAN <br /> DAHIL SA DI PAGSIPOT SA KP
          NI COMPLAINANT
        </h2>

        <div className="tanggapan-form-container">
          <form className="katibayan-form">
            <div className="kp-input">
              <label className="kpcase">KP Case Number:</label>
              <input type="text" id="kpnum" placeholder=" " />
            </div>
            <div className="pormularyoblg">
              <label className="pormularyo">Pormularyo ng KP Blg. 21</label>
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
            </div>{" "}
            <br />
            <div className="form-group">
              <label className="centered-label">
                KATIBAYAN UPANG MAKADULOG SA HUKUMAN
              </label>
            </div>
            <div className="paragraph">
              <label className="indent">
                Ito ay nagpapatunay na ang usaping nakasaad sa itaas ay
                ipinawalangsaysay alinsunod sa kautusan
              </label>
            </div>
            <div className="form-input">
              <label>mga petsang </label>
              <input type="text" id="date" placeholder=" " />
              <label>para sa (mga) may sumbong </label>
              <input type="text" id="pangalan" placeholder=" " />
            </div>
            <div className="form-input">
              <label>(pangalan) at</label>
              <input type="text" id="pangalan" placeholder=" " />
              <label>
                (pangalan) sanhi ng sinadya o pagtangging humarap para{" "}
              </label>
            </div>
            <div className="form-input">
              <label className="justify">
                sa pag dinig sa harap ng Punong Barangay/ Pangkat ng
                Tagapagsundo at dahil dito ang mga my sumbong ay hinahadlangang
                makadulog sa hukuman/tanggapan ng pamahalaan.
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
                MAHALAGA: Kung ang gumawa ng katibayan ay Kalihim ng Lupon, ang
                Tagapangulo ng Lupon ang magpapatunay. Kung ang kalihim ng
                Pangkat ang gumawa ng katibayan, ang Tagapangulo ng pangkat ang
                magpapatunay.
              </label>
            </div>{" "}
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

export default Form21;

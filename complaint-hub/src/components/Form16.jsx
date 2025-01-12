import React from "react";
import "../main.css";
import Header from "./Header";

const Form16 = () => {
  return (
    <div className="form16-page">
      <Header showButton={false} />
      <div className="form16-text">
        <h1 className="form16-title">FORM 16: KASUNDUANG PAG-AAYOS</h1>

        <div className="form16-container">
          <form className="form16">
            <div className="form16-kp-input">
              <label className="form16-kpcase">KP Case Number:</label>
              <input type="text" id="form16-kpnum" placeholder=" " />
            </div>
            <div className="form16-pormularyoblg">
              <label className="form16-pormularyo">Pormularyo ng KP Blg. 16</label>
            </div>
            <div className="form16-heading">
              <label className="form16-head">
                Republika ng Pilipinas <br />
                Lalawigan ng Kabite <br />
                Bayan ng Indang <br />
                Barangay Poblacion 1
              </label>
            </div>
            <div className="form-group">
              <label className="form16-centered-label">
                <br /> TANGGAPAN NG LUPONG TAGAPAMAYAPA
              </label>
            </div>
            <div className="form-row two-columns centered-row">
              <div className="form-group">
                <input type="text" id="form16-maysumbong" /> <br />
                <input type="text" id="form16-maysumbong" /> <br />
                <label className="form16-sumbong">
                  (Mga) May Sumbong <br /> -laban kay/kina-
                </label> <br />
                <input type="text" id="form16-ipinagsumbong" /> <br />
                <input type="text" id="form16-ipinagsumbong" /> <br />
                <label className="form16-sumbong"> (Mga) Ipinagsusumbong </label>
              </div>
            </div>
            <br />
            <div className="form-group">
              <label className="form16-centered-label">KASUNDUANG PAG-AAYOS </label>
            </div>
            <div className="form16-paragraph">
              <label className="form16-indent">
                Kami, ang mga maysumbong at (mga) ipinagsusumbong sa mga usaping
                isinasaad sa itaas, ay nagkakasundo sa pamamagitan nito na
                aayusing ang aming alitan tulad ng mga sumusunod:
              </label>
              <textarea placeholder=" "></textarea>
            </div>
            <label className="form16-left">
              at nangangako na aming tutuparin ng may katapatan ang mga
              alituntunin ng pag-aayos.
            </label>
            <br /> <br />
            <div className="form16-form-input">
              <label className="form16-indent">Pinagkasunduan ngayong ika-</label>
              <input type="text" id="form16-day" placeholder=" " />
              <label>araw ng</label>
              <input type="text" id="form16-month" placeholder=" " />
              <label>, 20</label>
              <input type="text" id="form16-year" placeholder=" " />
              <label>.</label>
            </div>{" "}
            <br /> <br />
            <div className="form-row two-columns centered-row">
              <div className="form-group">
                <label className="form16-mgasumbong">
                  (Mga) May Sumbong
                </label>
                <input type="text" id="form16-mgamaysumbong" /> <br />
                <input type="text" id="form16-mgamaysumbong" />
              </div>

              <div className="form-group">
                <label className="form16-mgasumbong">
                  (Mga) Ipinagsusumbong{" "}
                </label>
                <input type="text" id="form16-mgaipinagsumbong" /> <br />
                <input type="text" id="form16-mgaipinagsumbong" />
              </div>
            </div>{" "}
            <br /> <br />
            <label className="form16-centered-label"> PAGPAPATUNAY</label>
            <div className="form16-paragraph">
              <label className="form16-indent">
                Pinatutunayan ko sa pamamagitan nito na ang sinundang kasunduan
                ng pag-aayos ay pinagkasunduan ng mga panig nang Malaya at
                kusang-loob, matapos kong maipaliwanag sa kanila kung ano ang
                pag-aayos na ito at ang mga kahihinatnan nito.
              </label>
            </div>
            <br /> <br /> <br />
            <div className="form16-sig-container">
              <div className="form16-sig-line"></div>
            </div>
            <p className="form16-sig-text">Punong Barangay/Tagapangulo ng Lupon</p>
            <br />
          </form>
        </div>

        <div className="form16-button-group">
          <button
            type="button"
            className="form16-print-button"
            onClick={() => window.print()}
          >
            Print
          </button>
          <button type="button" className="form16-next-button">
            {" "}
            Next{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form16;

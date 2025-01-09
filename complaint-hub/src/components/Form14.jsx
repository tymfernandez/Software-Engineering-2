import React from "react";
import "../main.css";
import Header from "./Header";

const Form14 = () => {
  return (
    <div className="katibayan-form-page">
      <Header showButton={false} />
      <div className="katibayan-form-text">
        <h1>FORM 14:</h1>
        <h2>KASUNDUAN UKOL SA PAGHAHATOL NG TAGAPAMAGITAN</h2>

        <div className="tanggapan-form-container">
          <form className="katibayan-form">
            <div className="kp-input">
              <label className="kpcase">KP Case Number:</label>
              <input type="text" id="kpnum" placeholder=" " />
            </div>
            <div className="pormularyoblg">
              <label className="pormularyo">Pormularyo ng KP Blg. 14</label>
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
                  <input type="text" id="ukol" />
                </div>
              </div>
            </div>
            <br />
            <div className="form-group">
              <label className="centered-label">
                KASUNDUAN UKOL SA PAGHAHATOL NG TAGAPAMAGITAN{" "}
              </label>
            </div>
            <div className="paragraph">
              <label className="justify">
                Sa pamamagitan nito'y nagkakasundo kami na pahatulan ang aming
                alitan sa Punong Barangay/Pangkat at Tagapagkasundo (mangyaring
                guhitan ang di-kailangan), at nangangako kami na tutupad sa
                gawad na ihahatol ukol dito. Ginawa naming ang kasunduang ito ng
                kusang-loob na may lubos na pagkakaunawa sa anumang kahihinatnan
                nito.
              </label>
            </div>
            <br />
            <div className="form-input">
              <label className="indent">Pinagkasunduan ngayong ika-</label>
              <input type="text" id="day" placeholder=" " />
              <label>araw ng</label>
              <input type="text" id="month" placeholder=" " />
              <label>, 20</label>
              <input type="text" id="year" placeholder=" " />
              <label>.</label>
            </div>{" "}
            <br /> <br />
            <div className="form-row two-columns centered-row">
              <div className="form-group">
                <label className="mgasumbong">
                  (Mga) May Sumbong <br /> -laban kay/kina-
                </label>
                <input type="text" id="mgamaysumbong" /> <br />
                <input type="text" id="mgamaysumbong" />
              </div>

              <div className="form-group">
                <label className="mgasumbong">
                  {" "}
                  <br /> (Mga) Ipinagsusumbong{" "}
                </label>
                <input type="text" id="mgaipinagsumbong" /> <br />
                <input type="text" id="mgaipinagsumbong" />
              </div>
            </div>{" "}
            <br /> <br />
            <label className="left"> PAGPAPATUNAY: </label>
            <div className="paragraph">
              <label className="justify">
                Sa pamamagitan nito’y pinatutunayan ko na ang sinusundang
                Kasunduan ng Paghahatol ay pinagkasunduan ng mga panig nang
                Malaya at kusang-loob, matapos kong maipaliwanag sa kanila kung
                ano ang kasunduang ito at ang mga kahihinatnan nito.
              </label>
            </div>
            <br /> <br /> <br />
            <div className="sig-container">
              <div className="sig-line"></div>
            </div>
            <p className="sig-text">Punong Barangay/Tagapangulo ng Lupon</p>
            <p className="signa-text">(Guhitan ang di-kailangan)</p>
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

export default Form14;

import React from "react";
import "../main.css";
import Header from "./Header";

const Form14 = () => {
  return (
    <div className="form14-page">
      <Header showButton={false} />
      <div className="form14-text">
        <h1 className="form14-title">FORM 14:</h1>
        <h2 className="form14-subtitle">KASUNDUAN UKOL SA PAGHAHATOL NG TAGAPAMAGITAN</h2>

        <div className="form14-container">
          <form className="form14">
            <div className="form14-kp-input">
              <label className="form14-kpcase">KP Case Number:</label>
              <input type="text" id="form14-kpnum" placeholder=" " />
            </div>
            <div className="form14-pormularyoblg">
              <label className="form14-pormularyo">Pormularyo ng KP Blg. 14</label>
            </div>
            <div className="form14-heading">
              <label className="form14-head">
                Republika ng Pilipinas <br />
                Lalawigan ng Kabite <br />
                Bayan ng Indang <br />
                Barangay Poblacion 1
              </label>
            </div>
            <div className="form-group">
              <label className="form14-centered-label">
                <br /> TANGGAPAN NG LUPONG TAGAPAMAYAPA
              </label>
            </div>
            <div className="form-row two-columns centered-row">
              <div className="form-group">
                <input type="text" id="form14-maysumbong" /> <br />
                <input type="text" id="form14-maysumbong" />
                <label className="form14-sumbong">
                  (Mga) May Sumbong <br /> -laban kay/kina-
                </label>
                <input type="text" id="form14-ipinagsumbong" /> <br />
                <input type="text" id="form14-ipinagsumbong" />
                <label className="form14-sumbong"> (Mga) Ipinagsusumbong </label>
              </div>

              <div className="form-group">
                <div className="form14-blg-input">
                  <label>Usaping Barangay Blg. </label>
                  <input type="text" id="form14-blg" placeholder=" " />
                </div>
                <div className="form14-ukol-input">
                  <label>Ukol sa:</label>
                  <input type="text" id="form14-ukol" />
                </div>
              </div>
            </div>
            <br />
            <div className="form-group">
              <label className="form14-centered-label">
                KASUNDUAN UKOL SA PAGHAHATOL NG TAGAPAMAGITAN{" "}
              </label>
            </div>
            <div className="form14-paragraph">
              <label className="form14-indent">
                Sa pamamagitan nito'y nagkakasundo kami na pahatulan ang aming
                alitan sa Punong Barangay/Pangkat at Tagapagkasundo (mangyaring
                guhitan ang di-kailangan), at nangangako kami na tutupad sa
                gawad na ihahatol ukol dito. Ginawa naming ang kasunduang ito ng
                kusang-loob na may lubos na pagkakaunawa sa anumang kahihinatnan
                nito.
              </label>
            </div>
            <br />
            <div className="form14-form-input">
              <label className="form14-indent">Pinagkasunduan ngayong ika-</label>
              <input type="text" id="form14-day" placeholder=" " />
              <label>araw ng</label>
              <input type="text" id="form14-month" placeholder=" " />
              <label>, 20</label>
              <input type="text" id="form14-year" placeholder=" " />
              <label>.</label>
            </div>{" "}
            <br /> <br />
            <div className="form-row two-columns centered-row">
              <div className="form-group">
                <label className="form14-mgasumbong">
                  (Mga) May Sumbong <br /> -laban kay/kina-
                </label>
                <input type="text" id="form14-mgamaysumbong" /> <br />
                <input type="text" id="form14-mgamaysumbong" />
              </div>

              <div className="form-group">
                <label className="form14-mgasumbong">
                  {" "}
                  <br /> (Mga) Ipinagsusumbong{" "}
                </label>
                <input type="text" id="form14-mgaipinagsumbong" /> <br />
                <input type="text" id="form14-mgaipinagsumbong" />
              </div>
            </div>{" "}
            <br /> <br />
            <label className="form14-left"> PAGPAPATUNAY: </label>
            <div className="form14-paragraph">
              <label className="form14-indent">
                Sa pamamagitan nito’y pinatutunayan ko na ang sinusundang
                Kasunduan ng Paghahatol ay pinagkasunduan ng mga panig nang
                Malaya at kusang-loob, matapos kong maipaliwanag sa kanila kung
                ano ang kasunduang ito at ang mga kahihinatnan nito.
              </label>
            </div>
            <br /> <br /> <br />
            <div className="form14-sig-container">
              <div className="form14-sig-line"></div>
            </div>
            <p className="form14-sig-text">Punong Barangay/Tagapangulo ng Lupon</p>
            <p className="form14-signa-text">(Guhitan ang di-kailangan)</p>
            <br />
          </form>
        </div>

        <div className="form14-button-group">
          <button
            type="button"
            className="form14-print-button"
            onClick={() => window.print()}
          >
            Print
          </button>
          <button type="button" className="form14-next-button">
            {" "}
            Next{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form14;

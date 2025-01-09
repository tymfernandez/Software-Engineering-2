import React from "react";
import "../main.css";
import Header from "./Header";

const Form23 = () => {
  return (
    <div className="katibayan-form-page">
      <Header showButton={false} />
      <div className="katibayan-form-text">
        <h1>FORM 23:</h1>
        <h2>PANUKALA SA PAGPAPATUPAD</h2>

        <div className="tanggapan-form-container">
          <form className="katibayan-form">
            <div className="kp-input">
              <label className="kpcase">KP Case Number:</label>
              <input type="text" id="kpnum" placeholder=" " />
            </div>
            <div className="pormularyoblg">
              <label className="pormularyo">Pormularyo ng KP Blg. 23</label>
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
              <label className="centered-label">PANUKALA SA PAGPAPATUPAD</label>
            </div>
            <div className="paragraph">
              <label className="indent">
                Ang (mga) may sumbong/ pinagsusumbong ay nagpahayag ng mga
                sumusunod:
              </label>
            </div>
            <div className="form-input">
              <label className="indent">1. Noong</label>
              <input type="text" id="petsa" placeholder="(petsa)" />
              <label>ang mga panig sa usaping ito ay lumagda sa isang </label>
            </div>
            <div className="form-input">
              <label className="justify">
                matiwasay na pag-aayos/tumanggap ng gawad ng paghahatol na
                ibinigay ng Tagapangulo ng Lupon/Pangkat ng tagapagsundo;
              </label>
            </div>
            <br />
            <div className="form-input">
              <label className="indent">
                2. Ang sampung araw na taning mula sa petsang binaggit sa itaas
                ay natapos ng wala sa sinumang panig ang naghain ng sinumang
                sanaysay ng pagtanggi sa pag-aayos sa harap ng Tagapangulo ng
                Lupon ng petisyon na nagpapawalang-saysay sa gawad ng paghahatol
                sa hukuman; at
              </label>
            </div>{" "}
            <div className="form-input">
              <label className="indent">
                3. Ang matiwasay na pag-aayos/gawad ng paghahatol ay pinal at
                ngayon ay nararapat lang ipatupad.
              </label>
            </div>{" "}
            <br />
            <div className="form-input">
              <label className="indent">
                DAHIL DITO, ang mga may sumbong/ipinagsusumbong ay humiling na
                ang katumbas na kasulatan sa pagpapatupad sa usaping ito ay
                ipalabas na ng Tagapangulo ng Lupon.
              </label>
            </div>
            <br />
            <div className="form-row two-columns centered-row">
              <div className="sign-container">
                <div className="sign-line"></div>
                <p className="sign-text">Petsa</p>
              </div>
              <br />
              <div className="sign-container">
                <div className="signa-line"></div>
                <p className="signa-text">(Mga) May Sumbong/ipinagsusumbong</p>
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

export default Form23;

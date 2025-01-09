import React from "react";
import "../main.css";
import Header from "./Header";

const Form9 = () => {
  return (
    <div className="patawag-form-page">
      <Header showButton={false} />
      <div className="patawag-form-text">
        <h1>FORM 9: PATAWAG</h1>
        <p className="centered-text">Para sa inireklamo</p>

        <div className="tanggapan-form-container">
          <form className="patawag-form">
            <div className="kp-input">
              <label className="kpcase">KP Case Number:</label>
              <input type="text" id="kpnum" placeholder=" " />
            </div>
            <div className="pormularyoblg">
              <label className="pormularyo">Pormularyo ng KP Blg. 9</label>
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
              <label className="centered-label">PATAWAG</label>
            </div>
            <div className="form-row two-columns centered-row">
              <div className="form-group">
                <div className="kay-input">
                  <label>KAY: </label>
                  <input type="text" id="kay" placeholder=" " />
                </div>
                <input type="text" id="sumbong-kay" placeholder=" " />
                <label className="ipinagsusumbong">
                  {" "}
                  (Mga) Ipinagsusumbong{" "}
                </label>
              </div>

              <div className="form-group">
                <input type="text" />
                <input type="text" />
              </div>
            </div>
            <div className="paragraph">
              <label>
                Sa pamamagitan nito, kayo ay ipinatawag upang personal na
                humarap sa aking kasama{" "}
              </label>
            </div>
            <div className="form-input">
              <label>ang inyong mga testigo, sa ika-</label>
              <input type="text" id="day" placeholder=" " />
              <label>araw ng</label>
              <input type="text" id="month" placeholder=" " />
              <label>, 20</label>
              <input type="text" id="year" placeholder=" " />
              <label>sa ganap na ika-</label>
            </div>
            <div className="form-input">
              <input type="text" id="time" placeholder=" " />
              <label>
                ng umaga/hapon, upang sagutin ang sumbong na ginawa sa harap ko,
                na ang sipi ay
              </label>
            </div>
            <label>
              {" "}
              kalakip nito, para pamagitnaan/pagkasunduin ang inyong (mga)
              alitan ng (mga) nagsusumbong.
            </label>
            <div className="paragraph">
              <label>
                Sa pamamagitan nito kayo’y binabalaan na ang inyong pagtanggi o
                kusang di pagharap bilang pagtalima sa patawag na ito, kayo ay
                hahadlangan na makapaghain ng ganting-sumbong na magmumula sa
                nasabing sumbong.
              </label>
            </div>
            <div className="paragraph">
              <label>
                TUPARIN ITO, at kung hindi'y parurusaha kayo sa salang
                paglapastangan sa hukuman.
              </label>
            </div>
            <div className="form-input">
              <label className="indent">Ngayong ika-</label>
              <input type="text" id="day" placeholder=" " />
              <label>araw ng</label>
              <input type="text" id="month" placeholder=" " />
              <label>, 20</label>
              <input type="text" id="year" placeholder=" " />
              <label>.</label>
            </div>{" "}
            <br />
            <div className="signature-container">
              <div className="signature-line"></div>
              <p className="signature-text">
                Punong Barangay/Tagapangulo ng Lupon
              </p>
            </div>
          </form>
        </div>

        {/* ------------------------------------------ */}

        <div className="patawag-form-container">
          <form className="patawag-form">
            <div className="kp-input">
              <label className="kpcase">KP Case Number:</label>
              <input type="text" id="kpnum" placeholder=" " />
            </div>
            {/* ULAT NG OPISYAL Section */}
            <div className="form-group">
              <label className="centered-label">
                {" "}
                <br /> ULAT NG OPISYAL
              </label>
              <div className="name-input">
                <label className="indent">
                  Inihatid ang patawag na ito sa inirereklamo{" "}
                </label>
                <input type="text" id="pangalan" placeholder=" " />
                <label>noong ika-</label>
                <input type="text" id="day" placeholder=" " />
              </div>
              <div className="form-input">
                <label>araw ng</label>
                <input type="text" id="month" placeholder=" " />
                <label>, 20</label>
                <input type="text" id="year" placeholder=" " />
                <label>
                  sa pamamagitan ng (isulat ang pangalan/mga pangalan ng
                </label>
              </div>
              <label> inirereklamo at kung paano ipinahatid): </label>
            </div>
            {/* INIREREKLAMO Section */}
            <br /> <br />
            <div className="inirereklamo-section">
              <label>(Mga) Inirereklamo:</label>
              <div className="reasons-input">
                <input type="text" id="blank" placeholder=" " />
                <label>
                  1. Ibinigay sa kanila nang personal ang patawag o{" "}
                </label>
              </div>
              <div className="reasons-input">
                <input type="text" id="blank" placeholder="" />
                <label>
                  2. Ibinigay sa kanila ang patawag, subalit tinanggihan itong
                  tanggapin, o{" "}
                </label>
              </div>
              <div className="reason-input">
                <div className="reasons-input">
                  <input type="text" id="blank" placeholder="" />
                  <label>
                    3. Iniwan ang nasabing patawag sa kanilang bahay kay
                  </label>
                </div>
                <input type="text" id="name" placeholder="Pangalan" />
              </div>
              <div className="reason-input">
                <div className="reasons-input">
                  <input type="text" id="blank" placeholder="" />
                  <label>
                    4. Iniwan ang nasabing patawag sa kanya/kanilang
                  </label>
                </div>
                <label className="four">
                  tanggapan/lugar ng kanyang pinagtatrabahuan kay
                </label>
                <div className="reasons-input">
                  <input type="text" id="name" placeholder="Pangalan" />
                  <label> ang tao na siyang </label>
                </div>
                <label className="four">namamahala dito.</label>
              </div>
            </div>
            <br />
            <div className="sign-container">
              <div className="sign-line"></div>
              <p className="sign-text">OPISYAL</p>
            </div>
            <br />
            <p className="signature-text">
              Tinanggap ng Inirereklamo/Kinatawan
            </p>
            <div className="sign-section">
              <div className="signature-container">
                <div className="signa-line"></div>
                <p className="signature-text">Pangalan, Lagda at Petsa</p>
              </div>
              <div className="signature-container">
                <div className="signa-line"></div>
                <p className="signature-text">Pangalan, Lagda at Petsa</p>
              </div>
            </div>
            <div className="sign-section">
              <div className="signature-container">
                <div className="signa-line"></div>
                <p className="signature-text">Pangalan, Lagda at Petsa</p>
              </div>
              <div className="signature-container">
                <div className="signa-line"></div>
                <p className="signature-text">Pangalan, Lagda at Petsa</p>
              </div>
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
            Next{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form9;

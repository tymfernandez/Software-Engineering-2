import React from "react";
import "../main.css";
import Header from "./Header";

const Form19 = () => {
  return (
    <div className="patawag-form-page">
      <Header showButton={false} />
      <div className="patawag-form-text">
        <h1>FORM 19:</h1>
        <h2>PAG-ABISO NG PAGDINIG PARA SA RESPONDENT</h2>

        <div className="tanggapan-form-container">
          <form className="patawag-form">
            <div className="kp-input">
              <label className="kpcase">KP Case Number:</label>
              <input type="text" id="kpnum" placeholder=" " />
            </div>
            <div className="pormularyoblg">
              <label className="pormularyo">Pormularyo ng KP Blg. 19</label>
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
              <label className="center">(ukol sa: Di-Pagharap)</label>
            </div>
            <div className="form-row two-columns centered-row">
              <div className="form-group">
                <div className="kay-input">
                  <label>KAY: </label>
                  <input type="text" id="kay" placeholder=" " />
                </div>
                <input type="text" id="sumbong-kay" placeholder=" " />
              </div>
            </div>
            <div className="form-input">
              <label className="indent">
                Sa pamamagitan nito’y inaatasan ka na humarap sa akin/Pangkat sa
                ika-
              </label>
              <input type="text" id="day" placeholder=" " />
              <label> araw ng</label>
            </div>
            <div className="form-input">
              <input type="text" id="month" placeholder=" " />
              <label>, 20</label>
              <input type="text" id="year" placeholder=" " />
              <label>sa ganap na ika-</label>
              <input type="text" id="time" placeholder=" " />
              <label>ng umaga/hapon upang ipaliwanag kung</label>
            </div>
            <div className="form-input">
              <label>
                {" "}
                bakit di ka humarap para sa pamamagitan/pag-aayos na nakatakda
                noong
              </label>
              <input type="text" id="date" placeholder=" " />
            </div>
            <div className="form-input">
              <label>, 20</label>
              <input type="text" id="year" placeholder=" " />
              <label>
                , at kung bakit ang iyong ganting sumbong (kung meron man) na
                nagbuhat sa sumbong{" "}
              </label>
            </div>
            <label className="justify">
              ay di dapat ipagwalang-saysay, at kung bakit hindi dapat
              magpalabas ng isang paghahadlang na makapaghain ng ganting-sumbong
              sa hukuman ay di dapat gawin sanhi ng di mo pagharap o pagtangging
              humarap sa Punong Barangay/Pangkat ng tagapagsundo.
            </label>{" "}
            <br />
            <div className="form-input">
              <label className="indent">Ngayong ika-</label>
              <input type="text" id="day" placeholder=" " />
              <label>araw ng</label>
              <input type="text" id="month" placeholder=" " />
              <label>, 20</label>
              <input type="text" id="year" placeholder=" " />
              <label>.</label>
            </div>{" "}
            <br /> <br />
            <div className="signature-container">
              <div className="signature-line"></div>
              <p className="signature-text">
                Punong Barangay/Tagapangulo ng Pangkat
              </p>
              <p className="signa-text">(Guhitan ang di-Angkop) </p>
            </div>{" "}
            <br />
            <div className="form-input">
              <label className="indent">Pinaabisuhan ngayong ika-</label>
              <input type="text" id="day" placeholder=" " />
              <label>araw ng</label>
              <input type="text" id="date" placeholder=" " />
              <label>.</label>
            </div>{" "}
            <br /> <br />
            <div className="form-row two-columns centered-row">
              <div className="form-group-input">
                <label className="mga-sumbong">(Mga) May Sumbong</label> <br />
                <div className="line"></div> <br /> <br /> <br />
                <div className="line"></div>
              </div>

              <div className="form-group-input">
                <label className="mga-sumbong">(Mga) Ipinagsusumbong </label>{" "}
                <br />
                <div className="line"></div> <br /> <br /> <br />
                <div className="line"></div>
              </div>
            </div>{" "}
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

export default Form19;

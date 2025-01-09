import React from "react";
import "../main.css";
import Header from "./Header";

const Form18 = () => {
  return (
    <div className="patawag-form-page">
      <Header showButton={false} />
      <div className="patawag-form-text">
        <h1>FORM 18:</h1>
        <h2>
          PAG-ABISO NG PAGDINIG PARA SA <br /> COMPLAINANT O NAGREREKLAMO
        </h2>

        <div className="tanggapan-form-container">
          <form className="patawag-form">
            <div className="kp-input">
              <label className="kpcase">KP Case Number:</label>
              <input type="text" id="kpnum" placeholder=" " />
            </div>
            <div className="pormularyoblg">
              <label className="pormularyo">Pormularyo ng KP Blg. 18</label>
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
              <label className="center">(Ukol sa: Di-Pagharap)</label>
            </div>{" "}
            <br />
            <div className="form-row two-columns centered-row">
              <div className="form-group">
                <div className="kay-input">
                  <label>KAY: </label>
                  <input type="text" id="kay" placeholder=" " />
                  <input type="text" id="sumbong-kay" placeholder=" " />
                </div>
              </div>
            </div>{" "}
            <br /> <br />
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
                , at bakit ang iyong sumbong ay di-dapat Ipawalang-saysay, at
                kung bakit di ka dapat
              </label>
            </div>
            <label className="justify">
              magpalabas ng paghahadlang makapagsakdal ka sa hukuman/tanggapan
              ng pamahalaan, at ang kaparusahang paglapastangan sa hukuman ay
              di-dapat gawin sanhi ng di mo pagharap o pagtangging humarap sa
              Punong Barangay/Tagapangulo ng lupon.
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
            <div className="right-group">
              <label className="mgasumbong">(Mga) May Sumbong</label> <br />{" "}
              <br />
              <div className="line"></div> <br /> <br /> <br />
              <div className="line"></div> <br />
              <label className="mgasumbong">
                {" "}
                <br /> (Mga) Ipinagsusumbong{" "}
              </label>{" "}
              <br /> <br />
              <div className="line"></div> <br /> <br /> <br />
              <div className="line"></div>
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

export default Form18;

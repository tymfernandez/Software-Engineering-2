import React from "react";
import "../main.css";
import Header from "./Header";

const Form17 = () => {
  return (
    <div className="katibayan-form-page">
      <Header showButton={false} />
      <div className="katibayan-form-text">
        <h1>FORM 17: PAGTATANGGI</h1>

        <div className="tanggapan-form-container">
          <form className="katibayan-form">
            <div className="kp-input">
              <label className="kpcase">KP Case Number:</label>
              <input type="text" id="kpnum" placeholder=" " />
            </div>
            <div className="pormularyoblg">
              <label className="pormularyo">Pormularyo ng KP Blg. 17</label>
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
              <label className="centered-label">PAGTATANGGI</label>
            </div>
            <div className="paragraph">
              <label className="justify">
                Sa pamamagitan nito’y itinatanggi ko/naming ang
                pag-aayos/kasunduan sa paghahatol sapagkat ang akin/aming
                pag-sang-ayon ay walang saysay dahilan sa:
              </label>
            </div>
            <br />
            <div class="checkbox-container">
              <div className="checklist">
                <div class="checkbox-item">
                  <input type="checkbox" id="checkbox1" class="checkbox" />
                  <label for="checkbox1" class="checkbox-label">
                    – Panlilinlang (Ipaliwanag)
                  </label>
                </div>
                <textarea placeholder="" class="checkbox-textarea"></textarea>
              </div>

              <div className="checklist">
                <div class="checkbox-item">
                  <input type="checkbox" id="checkbox2" class="checkbox" />
                  <label for="checkbox2" class="checkbox-label">
                    – Karahasan (Ipaliwanag)
                  </label>
                </div>
                <textarea placeholder="" class="checkbox-textarea"></textarea>
              </div>

              <div className="checklist">
                <div class="checkbox-item">
                  <input type="checkbox" id="checkbox3" class="checkbox" />
                  <label for="checkbox3" class="checkbox-label">
                    – Pananakot (Ipaliwanag)
                  </label>
                </div>
                <textarea placeholder="" class="checkbox-textarea"></textarea>
              </div>
            </div>{" "}
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
            <br /> <br />
            <br />
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
            </div>
            <br /> <br />
            <div className="form-group">
              <div className="form-input">
                <label className="indent">
                  NILAGDAAN at PINANUMPAAN sa harap ko ngayong ika-
                </label>
                <input type="text" id="day" placeholder=" " />
                <label>araw ng</label>
                <input type="text" id="month" placeholder=" " />
              </div>
              <div className="form-input">
                <label>, 20</label>
                <input type="text" id="year" placeholder=" " />
                <label> sa </label>
                <input type="text" id="place" placeholder=" " />
                <label>.</label>
              </div>
            </div>
            <div className="sign-container">
              <div className="sign-line"></div>
              <p className="sign-text">
                Punong Barangay/Tagapangulo ng Pangkat/Kasapi
              </p>
            </div>
            <br /> <br />
            <div className="form-input">
              <label className="indent">
                Tinanggap at inihain ngayong ika-
              </label>
              <input type="text" id="day" placeholder=" " />
              <label>araw ng</label>
              <input type="text" id="month" placeholder=" " />
              <label>, 20</label>
              <input type="text" id="year" placeholder=" " />
              <label>.</label>
            </div>
            <br />
            <div className="paragraph">
              <label className="justify">
                *Ang hindi pagtanggi sa pag-aayos o kasunduan ng paghahatol ng
                tagapamagitan sa loob ng taning na panahon, alinsunod sa
                itinakdang sampong (10) araw ay ipapalagay na sa isang
                pagtatakwil sa karapatang tumutol batay sa nasabing kadahilanan.
              </label>
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

export default Form17;

import React from "react";
import "../main.css";
import Header from "./Header";

const Form17 = () => {
  return (
    <div className="form17-page">
      <Header showButton={false} />
      <div className="form17-text">
        <h1 className="form17-title">FORM 17: PAGTATANGGI</h1>

        <div className="form17-container">
          <form className="form17">
            <div className="form17-kp-input">
              <label className="form17-kpcase">KP Case Number:</label>
              <input type="text" id="form17-kpnum" placeholder=" " />
            </div>
            <div className="form17-pormularyoblg">
              <label className="form17-pormularyo">Pormularyo ng KP Blg. 17</label>
            </div>
            <div className="form17-heading">
              <label className="form17-head">
                Republika ng Pilipinas <br />
                Lalawigan ng Kabite <br />
                Bayan ng Indang <br />
                Barangay Poblacion 1
              </label>
            </div>
            <div className="form-group">
              <label className="form17-centered-label">
                <br /> TANGGAPAN NG LUPONG TAGAPAMAYAPA
              </label>
            </div>
            <div className="form-row two-columns centered-row">
              <div className="form-group">
                <input type="text" id="form17-maysumbong" /> <br />
                <input type="text" id="form17-maysumbong" />
                <label className="form17-sumbong">
                  (Mga) May Sumbong <br /> -laban kay/kina-
                </label>
                <input type="text" id="form17-ipinagsumbong" /> <br />
                <input type="text" id="form17-ipinagsumbong" />
                <label className="form17-sumbong"> (Mga) Ipinagsusumbong </label>
              </div>

              <div className="form-group">
                <div className="form17-blg-input">
                  <label>Usaping Barangay Blg. </label>
                  <input type="text" id="form17-blg" placeholder=" " />
                </div>
                <div className="form17-ukol-input">
                  <label>Ukol sa:</label>
                  <input type="text" />
                </div>
              </div>
            </div>
            <div className="form-group">
              <label className="form17-centered-label">PAGTATANGGI</label>
            </div>
            <div className="form17-paragraph">
              <label className="form17-indent">
                Sa pamamagitan nito’y itinatanggi ko/naming ang
                pag-aayos/kasunduan sa paghahatol sapagkat ang akin/aming
                pag-sang-ayon ay walang saysay dahilan sa:
              </label>
            </div>
            <br />
            <div className="form17-checkbox-container">
              <div className="form17-checklist">
                <div className="form17-checkbox-item">
                  <input type="checkbox" id="form17-checkbox1" className="form17-checkbox" />
                  <label for="form17-checkbox1" className="form17-checkbox-label">
                    – Panlilinlang (Ipaliwanag)
                  </label>
                </div>
                <textarea placeholder="" className="form17-checkbox-textarea"></textarea>
              </div>

              <div className="form17-checklist">
                <div className="form17-checkbox-item">
                  <input type="checkbox" id="form17-checkbox2" className="form17-checkbox" />
                  <label for="form17-checkbox2" className="form17-checkbox-label">
                    – Karahasan (Ipaliwanag)
                  </label>
                </div>
                <textarea placeholder="" className="form17-checkbox-textarea"></textarea>
              </div>

              <div className="form17-checklist">
                <div className="form17-checkbox-item">
                  <input type="checkbox" id="form17-checkbox3" className="form17-checkbox" />
                  <label for="form17-checkbox3" className="form17-checkbox-label">
                    – Pananakot (Ipaliwanag)
                  </label>
                </div>
                <textarea placeholder="" className="form17-checkbox-textarea"></textarea>
              </div>
            </div>{" "}
            <br />
            <div className="form17-form-input">
              <label className="form17-indent">Ngayong ika-</label>
              <input type="text" id="form17-day" placeholder=" " />
              <label>araw ng</label>
              <input type="text" id="form17-month" placeholder=" " />
              <label>, 20</label>
              <input type="text" id="form17-year" placeholder=" " />
              <label>.</label>
            </div>
            <br />
            <div className="form-row two-columns centered-row">
              <div className="form-group">
                <label className="form17-mgasumbong">
                  (Mga) May Sumbong 
                </label>
                <div className="form17-line"></div> <br />
                <div className="form17-line"></div>
              </div>

              <div className="form-group">
                <label className="form17-mgasumbong">
                 (Mga) Ipinagsusumbong{" "}
                </label>
                <div className="form17-line"></div> <br />
                <div className="form17-line"></div>
              </div>
            </div>
            <br /> <br />
            <div className="form-group">
              <div className="form17-form-input">
                <label className="form17-indent">
                  NILAGDAAN at PINANUMPAAN sa harap ko ngayong ika-
                </label>
                <input type="text" id="form17-day" placeholder=" " />
                <label>araw ng</label>
                <input type="text" id="form17-month" placeholder=" " />
              </div>
              <div className="form17-form-input">
                <label>, 20</label>
                <input type="text" id="form17-year" placeholder=" " />
                <label> sa </label>
                <input type="text" id="form17-place" placeholder=" " />
                <label>.</label>
              </div>
            </div>
            <div className="form17-sign-container">
              <div className="form17-sign-line"></div>
              <p className="form17-sign-text">
                Punong Barangay/Tagapangulo ng Pangkat/Kasapi
              </p>
            </div>
            <br /> <br />
            <div className="form17-form-input">
              <label className="form17-indent">
                Tinanggap at inihain ngayong ika-
              </label>
              <input type="text" id="form17-day" placeholder=" " />
              <label>araw ng</label>
              <input type="text" id="form17-month" placeholder=" " />
              <label>, 20</label>
              <input type="text" id="form17-year" placeholder=" " />
              <label>.</label>
            </div>
            <br />
            <div className="form17-paragraph">
              <label className="form17-indent">
                *Ang hindi pagtanggi sa pag-aayos o kasunduan ng paghahatol ng
                tagapamagitan sa loob ng taning na panahon, alinsunod sa
                itinakdang sampong (10) araw ay ipapalagay na sa isang
                pagtatakwil sa karapatang tumutol batay sa nasabing kadahilanan.
              </label>
            </div>
          </form>
        </div>

        <div className="form17-button-group">
          <button
            type="button"
            className="form17-print-button"
            onClick={() => window.print()}
          >
            Print
          </button>
          <button type="button" className="form17-next-button">
            {" "}
            Next{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form17;

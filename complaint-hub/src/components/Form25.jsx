import React from "react";
import "../main.css";
import Header from "./Header";

const Form25 = () => {
  return (
    <div className="form25-page">
      <Header showButton={false} />
      <div className="form25-text">
        <h1 className="form25-title">FORM 25:</h1>
        <h2 className="form25-subtitle">
          PAG-ABISO TUNGKOL SA PAGPAPATUPAD <br /> PAGSAMSAM NG ARI-ARIAN
        </h2>

        <div className="form25-container">
          <form className="form25">
            <div className="form25-kp-input">
              <label className="form25-kpcase">KP Case Number:</label>
              <input type="text" id="form25-kpnum" placeholder=" " />
            </div>
            <div className="form25-pormularyoblg">
              <label className="form25-pormularyo">Pormularyo ng KP Blg. 25</label>
            </div>
            <div className="form25-heading">
              <label className="form25-head">
                Republika ng Pilipinas <br />
                Lalawigan ng Kabite <br />
                Bayan ng Indang <br />
                Barangay Poblacion 1
              </label>
            </div>
            <div className="form-group">
              <label className="form25-centered-label">
                <br /> TANGGAPAN NG LUPONG TAGAPAMAYAPA
              </label>
            </div>
            <div className="form-row two-columns centered-row">
              <div className="form-group">
                <input type="text" id="form25-maysumbong" /> <br />
                <input type="text" id="form25-maysumbong" />
                <label className="form25-sumbong">
                  (Mga) May Sumbong <br /> -laban kay/kina-
                </label>
                <input type="text" id="form25-ipinagsumbong" /> <br />
                <input type="text" id="form25-ipinagsumbong" />
                <label className="form25-sumbong"> (Mga) Ipinagsusumbong </label>
              </div>

              <div className="form-group">
                <div className="form25-blg-input">
                  <label>Usaping Barangay Blg. </label>
                  <input type="text" id="form25-blg" placeholder=" " />
                </div>
                <div className="form25-ukol-input">
                  <label>Ukol sa:</label>
                  <input type="text" />
                </div>
              </div>
            </div>
            <div className="form-group">
              <label className="form25-centered-label">
                PAG-ABISO TUNGKOL SA PAGPAPATUPAD
              </label>
            </div>
            <div className="form25-form-input">
              <label className="form25-indent">SAPAGKAT, noong</label>
              <input type="text" id="form25-petsas" placeholder="(petsa)" />
              <label>, isang matiwasay na pag-aayos ang </label>
            </div>
            <div className="form25-form-input">
              <label className="form25-justify">
                nilagdaan ng mga panig sa usaping binabanggit sa itaas (o isang
                gawad ng paghahatol ang ibinigay ng Punong Barangay/Pangkat ng
                Tagapagkasundo);
              </label>
            </div>{" "}
            <br />
            <div className="form25-form">
              <div className="form25-form-input">
                <label className="form25-indent">
                  SAPAGKAT, ang mga tuntunin at mga kondisyon ng pag-aayos , ang
                  bahaging nagbibigay desisyon ng gawad ay mababasa tulad ng
                  sumusunod:
                </label>
              </div>{" "}
              
              <textarea placeholder=" "></textarea>
            </div>{" "}
            <br />
            <div className="form25-form-input">
              <label className="form25-indent">
                Ang nasabing pag-aayos/gawad ng pinal at ngayon ay nararapat na
                ipatupad;
              </label>
            </div>{" "}
            <br />
            <div className="form25-form-input">
              <label className="form25-indent">SAPAGKAT, ang obligadong panig</label>
              <input type="text" id="form25-pangalan" placeholder=" " />
              <label>(pangalan ng kusang-loob na </label>
            </div>
            <div className="form25-form-input">
              <label>
                tumutupad sa binanggit na pag-aayos/gawad ng paghatol), sa loob
                ng limang (5) araw mula sa petsa ng pagdinig sa panukala sa
                pagpapatupad:
              </label>
            </div>{" "}
            <br />
            <div className="form25-form-input">
              <label className="form25-indent">
                DAHIL DITO, sa pangalan ng Lupong Tagapamayapa at sa
                kapangyarihang ibinigay sa akin at ng Lupon sa pamamagitan ng
                batas at mga Alituntunin ng Katarungang Pambarangay, akin
                gagawin
              </label>
            </div>
            <div className="form25-form-input">
              <label>
                upang maisakatuparan mula sa mga kalakal at mga personal na
                ari-arian ni
              </label>
              <input type="text" id="form25-pangalan" placeholder=" " />
            </div>
            <div className="form25-form-input">
              <label> (pangalan ng obligadong panig) ang halagang</label>
              <input type="text" id="form25-compensation" placeholder=" " />
              <label> (ilahad ang</label>
            </div>
            <div className="form25-form-input">
              <label className="form25-justify">
                halaga ng pag-aayos o gawad) pinagkasunduan sa nasabing
                matiwasay na pag-aayos (o sa inihatol sa nasabing gawad sa
                paghahatol), maliban kung ang kusang loob na pagtupad sa
                nasabing pag-aayos o gawad ay ginawa sa sandaling natanggap ito.
              </label>
            </div>
            <br /> <br />
            <div className="form25-form-input">
              <label className="form25-indent">Nilagdaan ngayong ika-</label>
              <input type="text" id="form25-day" placeholder=" " />
              <label>araw ng</label>
              <input type="text" id="form25-month" placeholder=" " />
              <label>, 20</label>
              <input type="text" id="form25-year" placeholder=" " />
              <label>.</label>
            </div>{" "}
            <br /> <br />
            <div className="form25-signature-container">
              <div className="form25-signature-line"></div>
              <p className="form25-signature-text">Punong Barangay</p>
            </div>{" "}
            <br />
            <div className="form25-form-input">
              <label className="form25-justify">Binigyan ng Sipi:</label>
            </div>{" "}
            <br /> <br />
            <div className="form-row two-columns centered-row">
              <div className="form25-form-group-input">
                <br />
                <div className="form25-line"></div> <br /> <br /> <br />
                <div className="form25-line"></div>
                <label className="form25-mga-sumbong">(Mga) May Sumbong</label>
              </div>

              <div className="form25-form-group-input">
                {" "}
                <br />
                <div className="form25-line"></div> <br /> <br /> <br />
                <div className="form25-line"></div>
                <label className="form25-mga-sumbong">(Mga) Ipinagsusumbong </label>
              </div>
            </div>{" "}
          </form>
        </div>
        <div className="form25-button-group">
          <button
            type="button"
            className="form25-print-button"
            onClick={() => window.print()}
          >
            Print
          </button>
          <button type="button" className="form25-next-button">
            {" "}
            Next{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form25;

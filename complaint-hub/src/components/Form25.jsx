import React from "react";
import "../main.css";
import Header from "./Header";

const Form25 = () => {
  return (
    <div className="patawag-form-page">
      <Header showButton={false} />
      <div className="patawag-form-text">
        <h1>FORM 25:</h1>
        <h2>
          PAG-ABISO TUNGKOL SA PAGPAPATUPAD <br /> PAGSAMSAM NG ARI ARIAN
        </h2>

        <div className="tanggapan-form-container">
          <form className="patawag-form">
            <div className="kp-input">
              <label className="kpcase">KP Case Number:</label>
              <input type="text" id="kpnum" placeholder=" " />
            </div>
            <div className="pormularyoblg">
              <label className="pormularyo">Pormularyo ng KP Blg. 25</label>
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
              <label className="centered-label">
                PAG-ABISO TUNGKOL SA PAGPAPATUPAD
              </label>
            </div>
            <div className="form-input">
              <label className="indent">SAPAGKAT, noong</label>
              <input type="text" id="petsa" placeholder="(petsa)" />
              <label>, isang matiwasay na pag-aayos ang </label>
            </div>
            <div className="form-input">
              <label className="justify">
                nilagdaan ng mga panig sa usaping binabanggit sa itaas (o isang
                gawad ng paghahatol ang ibinigay ng Punong Barangay/Pangkat ng
                Tagapagkasundo);
              </label>
            </div>{" "}
            <br />
            <div className="form">
              <div className="form-input">
                <label className="indent">
                  SAPAGKAT, ang mga tuntunin at mga kondisyon ng pag-aayos , ang
                  bahaging nagbibigay desisyon ng gawad ay mababasa tulad ng
                  sumusunod:
                </label>
              </div>{" "}
              <br />
              <textarea placeholder=" "></textarea>
            </div>{" "}
            <br />
            <div className="form-input">
              <label className="indent">
                Ang nasabing pag-aayos/gawad ng pinal at ngayon ay nararapat na
                ipatupad;
              </label>
            </div>{" "}
            <br />
            <div className="form-input">
              <label className="indent">SAPAGKAT, ang obligadong panig</label>
              <input type="text" id="pangalan" placeholder=" " />
              <label>(pangalan ng kusang-loob na </label>
            </div>
            <div className="form-input">
              <label>
                tumutupad sa binanggit na pag-aayos/gawad ng paghatol), sa loob
                ng limang (5) araw mula sa petsa ng pagdinig sa panukala sa
                pagpapatupad:
              </label>
            </div>{" "}
            <br />
            <div className="form-input">
              <label className="indent">
                DAHIL DITO, sa pangalan ng Lupong Tagapamayapa at sa
                kapangyarihang ibinigay sa akin at ng Lupon sa pamamagitan ng
                batas at mga Alituntunin ng Katarungang Pambarangay, akin
                gagawin
              </label>
            </div>
            <div className="form-input">
              <label>
                upang maisakatuparan mula sa mga kalakal at mga personal na
                ari-arian ni
              </label>
              <input type="text" id="pangalan" placeholder=" " />
            </div>
            <div className="form-input">
              <label> (pangalan ng obligadong panig) ang halagang</label>
              <input type="text" id="compensation" placeholder=" " />
              <label> (ilahad ang</label>
            </div>
            <div className="form-input">
              <label className="justify">
                halaga ng pag-aayos o gawad) pinagkasunduan sa nasabing
                matiwasay na pag-aayos (o sa inihatol sa nasabing gawad sa
                paghahatol), maliban kung ang kusang loob na pagtupad sa
                nasabing pag-aayos o gawad ay ginawa sa sandaling natanggap ito.
              </label>
            </div>
            <br /> <br />
            <div className="form-input">
              <label className="indent">Nilagdaan ngayong ika-</label>
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
              <p className="signature-text">Punong Barangay</p>
            </div>{" "}
            <br />
            <div className="form-input">
              <label className="justify">Binigyan ng Sipi:</label>
            </div>{" "}
            <br /> <br />
            <div className="form-row two-columns centered-row">
              <div className="form-group-input">
                <br />
                <div className="line"></div> <br /> <br /> <br />
                <div className="line"></div>
                <label className="mga-sumbong">(Mga) May Sumbong</label>
              </div>

              <div className="form-group-input">
                {" "}
                <br />
                <div className="line"></div> <br /> <br /> <br />
                <div className="line"></div>
                <label className="mga-sumbong">(Mga) Ipinagsusumbong </label>
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

export default Form25;
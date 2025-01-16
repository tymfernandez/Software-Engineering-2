import React, { useState } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import "../main.css";
import Header from "./Header"; //
import FormDocu9 from "./FormDocu9"; //

const Form9 = () => {
  const [formData, setFormData] = useState({
    form9KpCaseNumber: "",
    form9Maysumbong: "",
    form9Maysumbong1: "",
    form9Ipinagsumbong: "",
    form9Ipinagsumbong1: "",
    form9Blg: "",
    form9Ukol: "",
    form9Kay: "",
    form9SumbongKay: "",
    form9Day: "",
    form9Month: "",
    form9Year: "",
    form9Time: "",
    form9DayNow: "",
    form9MonthNow: "",
    form9YearNow: "",
    form9Pangalan: "",
    form9DayUlat: "",
    form9MonthUlat: "",
    form9YearUlat: "",
    form9Blank1: "",
    form9Blank2: "",
    form9Blank3: "",
    form9Blank4: "",
    form9Name: "",
    form9Name1: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  return (
    <div className="form9-page">
      <Header showButton={false} />
      <div className="patawag-form-text">
        <h1 className="form9-title">FORM 9: PATAWAG</h1>
        <h2 className="form9-subtitle">Para sa inireklamo</h2>

        <div className="tanggapan-form-container">
          <form className="patawag-form">
            <div className="form9-kp-input">
              <label className="form9-kpcase">KP Case Number:</label>
              <input type="text" id="form9KpCaseNumber" onChange={handleInputChange} />
            </div>
            <div className="form9-pormularyoblg">
              <label className="form9-pormularyo">Pormularyo ng KP Blg. 9</label>
            </div>
            <div className="form9-heading">
              <label className="form9-head">
                Republika ng Pilipinas <br />
                Lalawigan ng Kabite <br />
                Bayan ng Indang <br />
                Barangay Poblacion 1
              </label>
            </div>
            <div className="form-group">
              <label className="form9-centered-label">
                <br /> TANGGAPAN NG LUPONG TAGAPAMAYAPA
              </label>
            </div>
            <div className="form-row two-columns centered-row">
              <div className="form-group">
                <input type="text" id="form9Maysumbong" onChange={handleInputChange} /> <br />
                <input type="text" id="form9Maysumbong1" onChange={handleInputChange} /> <br />
                <label className="form9-sumbong">
                  (Mga) May Sumbong <br /> -laban kay/kina-
                </label> <br />
                <input type="text" id="form9Ipinagsumbong" onChange={handleInputChange} /> <br />
                <input type="text" id="form9Ipinagsumbong1" onChange={handleInputChange} /> <br />
                <label className="form9-sumbong"> (Mga) Ipinagsusumbong </label>
              </div>

              <div className="form-group">
                <div className="form9-blg-input">
                  <label>Usaping Barangay Blg. </label>
                  <input type="text" id="form9Blg" onChange={handleInputChange} />
                </div>
                <div className="form9-ukol-input">
                  <label>Ukol sa:</label>
                  <input type="text" id="form9Ukol" onChange={handleInputChange} />
                </div>
              </div>
            </div>
            <div className="form-group">
              <label className="form9-centered-label">PATAWAG</label>
            </div>
            <div className="form-row two-columns centered-row">
              <div className="form-group">
                <div className="form9-kay-input">
                  <label>KAY: </label>
                  <input type="text" id="form9Kay" onChange={handleInputChange} />
                </div>
                <input type="text" id="form9SumbongKay" onChange={handleInputChange} />
                <label className="form9-ipinagsusumbong">
                  {" "}(Mga) Ipinagsusumbong{" "}
                </label>
              </div>

              <div className="form-group">
                <input type="text" id="form9SumbongKay" onChange={handleInputChange} />
                <input type="text" id="form9SumbongKay" onChange={handleInputChange} />
              </div>
            </div>
            <div className="form9-paragraph">
              <label>
                Sa pamamagitan nito, kayo ay ipinatawag upang personal na
                humarap sa aking kasama{" "}
              </label>
            </div>
            <div className="form9-form-input">
              <label>ang inyong mga testigo, sa ika-</label>
              <input type="text" id="form9Day" onChange={handleInputChange} />
              <label>araw ng</label>
              <input type="text" id="form9Month" onChange={handleInputChange} />
              <label>, 20</label>
              <input type="text" id="form9Year" onChange={handleInputChange} />
              <label>sa ganap na ika-</label>
            </div>
            <div className="form9-form-input">
              <input type="text" id="form9Time" onChange={handleInputChange} />
              <label>
                ng umaga/hapon, upang sagutin ang sumbong na ginawa sa harap ko,
                na ang sipi ay
              </label>
            </div>
            <div className="form9-form-input">
              <label>
                {" "}
                kalakip nito, para pamagitnaan/pagkasunduin ang inyong (mga)
                alitan ng (mga) nagsusumbong.
              </label>
            </div>
            <div className="form9-form-input">
              <label className="form9-indent">
                Sa pamamagitan nito kayo’y binabalaan na ang inyong pagtanggi o
                kusang di pagharap bilang pagtalima sa patawag na ito, kayo ay
                hahadlangan na makapaghain ng ganting-sumbong na magmumula sa
                nasabing sumbong.
              </label>
            </div>
            <div className="form9-paragraph">
              <label>
                TUPARIN ITO, at kung hindi'y parurusaha kayo sa salang
                paglapastangan sa hukuman.
              </label>
            </div>
            <div className="form9-form-input">
              <label className="form9-indent">Ngayong ika-</label>
              <input type="text" id="form9DayNow" onChange={handleInputChange} />
              <label>araw ng</label>
              <input type="text" id="form9MonthNow" onChange={handleInputChange} />
              <label>, 20</label>
              <input type="text" id="form9YearNow" onChange={handleInputChange} />
              <label>.</label>
            </div>{" "}
            <br />
            <div className="form9-signature-container">
              <div className="form9-signature-line"></div>
              <p className="form9-signature-text">
                Punong Barangay/Tagapangulo ng Lupon
              </p>
            </div>
          </form>
        </div>
      
        {/* ------------------------------------------ */}
        <div className="form9-patawag-form-container">
          <form className="form9-patawag-form">
            <div className="form9-kp-input">
              <label className="form9-kpcase">KP Case Number:</label>
              <input type="text" id="form9KpCaseNumber" onChange={handleInputChange} />
            </div>
            {/* ULAT NG OPISYAL Section */}
            <div className="form-group">
              <label className="form9-centered-label">
                {" "}<br /> ULAT NG OPISYAL
              </label>
              <div className="form9-name-input">
                <label className="form9-indent">
                  Inihatid ang patawag na ito sa inirereklamo{" "}
                </label>
                <input type="text" id="form9Pangalan" onChange={handleInputChange} />
                <label>noong ika-</label>
                <input type="text" id="form9DayUlat" onChange={handleInputChange} />
              </div>
              <div className="form9-form-input">
                <label>araw ng</label>
                <input type="text" id="form9MonthUlat" onChange={handleInputChange} />
                <label>, 20</label>
                <input type="text" id="form9YearUlat" onChange={handleInputChange} />
                <label>
                  sa pamamagitan ng (isulat ang pangalan/mga pangalan ng
                </label>
              </div>
              <label> inirereklamo at kung paano ipinahatid): </label>
            </div>
            {/* INIREREKLAMO Section */}
            <br /> <br />
            <div className="form9-inirereklamo-section">
              <label>(Mga) Inirereklamo:</label>
              <div className="form9-reasons-input">
                <input type="text" id="form9Blank1" onChange={handleInputChange} />
                <label>
                  1. Ibinigay sa kanila nang personal ang patawag o{" "}
                </label>
              </div>
              <div className="form9-reasons-input">
                <input type="text" id="form9Blank2" onChange={handleInputChange} />
                <label>
                  2. Ibinigay sa kanila ang patawag, subalit tinanggihan itong
                  tanggapin, o{" "}
                </label>
              </div>
              <div className="form9-reason-input">
                <div className="form9-reasons-input">
                  <input type="text" id="form9Blank3" onChange={handleInputChange} />
                  <label>
                    3. Iniwan ang nasabing patawag sa kanilang bahay kay
                  </label>
                </div>
                <input type="text" id="form9Name" onChange={handleInputChange} />
              </div>
              <div className="form9-reason-input">
                <div className="form9-reasons-input">
                  <input type="text" id="form9Blank4" onChange={handleInputChange} />
                  <label>
                    4. Iniwan ang nasabing patawag sa kanya/kanilang
                  </label>
                </div>
                <label className="form9-four">
                tanggapan/lugar ng kanyang pinagtatrabahuan kay
                </label>
              </div>
              <div className="form9-reasons-input">

                <input type="text" id="form9Name1" onChange={handleInputChange} />
                <label> isang tao na siyang </label>
              </div>
              <label className="form9-four">namamahala dito.</label>
            </div>
            <br />
            <div className="form9-sign-container">
              <div className="form9-sign-line"></div>
              <p className="form9-sign-text">OPISYAL</p>
            </div>
            <br />
            <p className="form9-signature-text">
              Tinanggap ng Inirereklamo/Kinatawan
            </p>
            <div className="form9-sign-section">
              <div className="form9-signature-container">
                <div className="form9-signa-line"></div>
                <p className="form9-signature-text">Pangalan, Lagda at Petsa</p>
              </div>
              <div className="form9-signature-container">
                <div className="form9-signa-line"></div>
                <p className="form9-signature-text">Pangalan, Lagda at Petsa</p>
              </div>
            </div>
            <div className="form9-sign-section">
              <div className="form9-signature-container">
                <div className="form9-signa-line"></div>
                <p className="form9-signature-text">Pangalan, Lagda at Petsa</p>
              </div>
              <div className="form9-signature-container">
                <div className="form9-signa-line"></div>
                <p className="form9-signature-text">Pangalan, Lagda at Petsa</p>
              </div>
            </div>
          </form>
        </div>
        <div className="form9-button-group">
          <PDFDownloadLink
            document={<FormDocu9 data={formData} />}
            fileName="form9.pdf"
            className="form9-print-button"
          >
            {({ blob, url, loading, error }) =>
              loading ? "Loading document..." : "Print"
            }
          </PDFDownloadLink>
        </div>
      </div>
    </div>
  );
};

export default Form9;
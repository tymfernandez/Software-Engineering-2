import React, { useState } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import "../main.css";
import Header from "./Header"; //
import FormDocu16 from "./FormDocu16";

const Form16 = () => {
  const [formData, setFormData] = useState({
    form16KpNum: "",
    form16Maysumbong: "",
    form16Maysumbong1: "",
    form16Ipinagsumbong: "",
    form16Ipinagsumbong1: "",
    form16Pagaayos: "",
    form16Day: "",
    form16Month: "",
    form16Year: "",

  })

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  return (
    <div className="form16-page">
      <Header showButton={false} />
      <div className="form16-text">
        <h1 className="form16-title">FORM 16: KASUNDUANG PAG-AAYOS</h1>

        <div className="form16-container">
          <form className="form16">
            <div className="form16-kp-input">
              <label className="form16-kpcase">KP Case Number:</label>
              <input type="text" id="form16KpNum" onChange={handleInputChange} />
            </div>
            <div className="form16-pormularyoblg">
              <label className="form16-pormularyo">Pormularyo ng KP Blg. 16</label>
            </div>
            <div className="form16-heading">
              <label className="form16-head">
                Republika ng Pilipinas <br />
                Lalawigan ng Kabite <br />
                Bayan ng Indang <br />
                Barangay Poblacion 1
              </label>
            </div>
            <div className="form-group">
              <label className="form16-centered-label">
                <br /> TANGGAPAN NG LUPONG TAGAPAMAYAPA
              </label>
            </div>
            <div className="form-row two-columns centered-row">
              <div className="form-group">
                <input type="text" id="form16Maysumbong" onChange={handleInputChange} /> <br />
                <input type="text" id="form16Maysumbong1" onChange={handleInputChange} /> <br />
                <label className="form16-sumbong">
                  (Mga) May Sumbong <br /> -laban kay/kina-
                </label> <br />
                <input type="text" id="form16Ipinagsumbong" onChange={handleInputChange} /> <br />
                <input type="text" id="form16Ipinagsumbong1" onChange={handleInputChange} /> <br />
                <label className="form16-sumbong"> (Mga) Ipinagsusumbong </label>
              </div>
            </div>
            <br />
            <div className="form-group">
              <label className="form16-centered-label">KASUNDUANG PAG-AAYOS </label>
            </div>
            <div className="form16-paragraph">
              <label className="form16-indent">
                Kami, ang mga maysumbong at (mga) ipinagsusumbong sa mga usaping
                isinasaad sa itaas, ay nagkakasundo sa pamamagitan nito na
                aayusing ang aming alitan tulad ng mga sumusunod:
              </label>
              <textarea textarea id="form16Pagaayos" onChange={handleInputChange}></textarea>
            </div>
            <label className="form16-left">
              at nangangako na aming tutuparin ng may katapatan ang mga
              alituntunin ng pag-aayos.
            </label>
            <br /> <br />
            <div className="form16-form-input">
              <label className="form16-indent">Pinagkasunduan ngayong ika-</label>
              <input type="text" id="form16Day" onChange={handleInputChange} />
              <label>araw ng</label>
              <input type="text" id="form16Month" onChange={handleInputChange} />
              <label>, 20</label>
              <input type="text" id="form16Year" onChange={handleInputChange} />
              <label>.</label>
            </div>{" "}
            <br /> <br />
            <div className="form-row two-columns centered-row">
              <div className="form-group">
                <label className="form16-mgasumbong">
                  (Mga) May Sumbong
                </label>
                <div className="form16-line"></div> <br />
                <div className="form16-line"></div>
              </div>

              <div className="form-group">
                <label className="form16-mgasumbong">
                  (Mga) Ipinagsusumbong{" "}
                </label>
                <div className="form16-line"></div> <br />
                <div className="form16-line"></div>
              </div>
            </div>{" "}
            <br /> <br />
            <label className="form16-centered-label"> PAGPAPATUNAY</label>
            <div className="form16-paragraph">
              <label className="form16-indent">
                Pinatutunayan ko sa pamamagitan nito na ang sinundang kasunduan
                ng pag-aayos ay pinagkasunduan ng mga panig nang Malaya at
                kusang-loob, matapos kong maipaliwanag sa kanila kung ano ang
                pag-aayos na ito at ang mga kahihinatnan nito.
              </label>
            </div>
            <br /> <br /> <br />
            <div className="form16-sig-container">
              <div className="form16-sig-line"></div>
            </div>
            <p className="form16-sig-text">Punong Barangay/Tagapangulo ng Lupon</p>
            <br />
          </form>
        </div>

        <div className="form16-button-group">
          <PDFDownloadLink
            document={<FormDocu16 data={formData} />}
            fileName="form16.pdf"
            className="form16-print-button"
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

export default Form16;

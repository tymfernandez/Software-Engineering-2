import React, { useState } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import "../main.css";
import Header from "./Header"; //
import FormDocu8 from "./FormDocu8"; //

const Form8 = () => {
  const [formData, setFormData] = useState({
    form8KpCaseNumber: "",
    form8Kay: "",
    form8Sumbong: "",
    form8Date: "",
    form8Day: "",
    form8Month: "",
    form8Year: "",
    form8DayUtos: "",
    form8MonthUtos: "",
    form8YearUtos: "",
    form8DayNow: "",
    form8MonthNow: "",
    form8YearNow: "",
    form8DayBiso: "",
    form8MonthBiso: "",
    form8YearBiso: "",
    form8Time: "",
    
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  }

  return (
    <div className="form8-page">
      <Header showButton={false} />
      <div className="form8-text">
        <h1 className="form8-title">FORM 8: PAABISO</h1>
        <h2 className="form8-subtitle">Para sa complainant o nagrereklamo</h2>

        <div className="form8-container">
          <form className="form8">
            <div className="form8-kp-input">
              <label className="form8-kpcase">KP Case Number:</label>
              <input type="text" id="form8KpCaseNumber" onChange={handleInputChange} />
            </div>
            <div className="form8-pormularyoblg">
              <label className="form8-pormularyo">Pormularyo ng KP Blg. 8</label>
            </div>
            <div className="form8-heading">
              <label className="form8-head">
                Republika ng Pilipinas <br />
                Lalawigan ng Kabite <br />
                Bayan ng Indang <br />
                Barangay Poblacion 1
              </label>
            </div>
            <div className="form8-group">
              <label className="form8-centered-label">
                <br /> TANGGAPAN NG LUPONG TAGAPAMAYAPA
              </label>
            </div>
            <div className="form8-date">
              <input type="text" id="form8Date" onChange={handleInputChange} />
              <label>, 20</label>
              <input type="text" id="form8Year" onChange={handleInputChange} />
            </div>
            <div className="form8-group">
              <label className="form8-centered-label">
                <br /> PAABISO NG PAGDINIG <br />
                (Mga Hakbang ng Pamamagitan)
              </label> 
            </div> <br/>
            <div className="form8-may-sumbong">
              <div className="form8-kay-input">
                <label>KAY: </label>
                <input type="text" id="form8Kay" onChange={handleInputChange} />
              </div>
              <input type="text" id="form8Sumbong" onChange={handleInputChange} /> <br/>
              <label className="form8-text-sumbong"> (Mga) May Sumbong </label>
            </div>
            <br /> <br />
            <div className="form8-form-input">
              <label className="form8-indent">
                Ikaw ay inuutusan na sa akin sa ika-
              </label>
              <input type="text" id="form8DayUtos" onChange={handleInputChange} />
              <label>araw ng</label>
              <input type="text" id="form8MonthUtos" onChange={handleInputChange} />
              <label>, 20</label>
              <input type="text" id="form8YearUtos" onChange={handleInputChange} />
            </div>
            <div className="form8-form-input">
              <label>sa ganap na ika-</label>
              <input type="text" id="form8Time" onChange={handleInputChange} />
              <label>ng umaga/hapon, para sa pagdinig ng inyong sumbong.</label>
            </div>
            <br />
            <div className="form8-form-input">
              <label className="form8-indent">Ngayong ika-</label>
              <input type="text" id="form8DayNow" onChange={handleInputChange} />
              <label>araw ng</label>
              <input type="text" id="form8MonthNow" onChange={handleInputChange} />
              <label>, 20</label>
              <input type="text" id="form8YearNow" onChange={handleInputChange} />
              <label>.</label>
            </div>
            <br />
            <br />
            <div className="form8-signature-container">
              <div className="form8-signature-line"></div>
              <p className="form8-signature-text">
                Punong Barangay/Tagapangulo ng Lupon
              </p>
            </div>
            <br /> <br />
            <div className="form8-form-input">
              <label className="form8-indent">Pinaaabisuhan ngayong ika-</label>
              <input type="text" id="form8DayBiso" onChange={handleInputChange} />
              <label> ng</label>
              <input type="text" id="form8MonthBiso" onChange={handleInputChange} />
              <label>, 20</label>
              <input type="text" id="form8YearBiso" onChange={handleInputChange} />
              <label>.</label>
            </div>
            <br /> <br />
            <br />
            <br />
            <div className="form8-signatures">
              <div className="form8-sign-line"></div>
              <div className="form8-sign-container">
                <div className="form8-sign-line"></div>
              </div>
              <p className="form8-sign-text">(Mga) May Sumbong</p>
            </div>
          </form>
        </div>
        <div className="form8-button-group">
          <button
            type="button"
            className="form8-print-button"
            onClick={() => window.print()}
          >
            Print
          </button>
          <button type="button" className="form8-next-button">
            {" "}
            Proceed to Form 9{" "}
          </button>
        </div>
        <PDFDownloadLink
          document={<FormDocu8 data={formData} />}
          fileName="Form8.pdf"
        >
        {({ loading }) => (loading ? "Generating PDF..." : <button>Download PDF</button>)}
        </PDFDownloadLink>
      </div>
    </div>
  );
};

export default Form8;
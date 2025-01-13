import React, { useState } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import "../main.css";
import Header from "./Header"; //
import FormDocuments from "./FormDocuments";

const Form7 = () => {
  const [formData, setFormData] = useState({
    form7KpCaseNumber: "",
    form7Blg: "",
    form7UkolSa: "",
    form7MaySumbong: "",
    form7Ipinagsumbong: "",
    reklamo: "",
    resolutionRequest: "",
    form7Day: "",
    form7Month: "",
    form7Year: "",
    form7ReceiveDay: "",
    form7ReceiveMonth: "",
    form7ReceiveYear: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  return (
    <div className="form7-page">
      <Header showButton={false} />
      <h1 className="form7-title">Form 7: Sumbong</h1>
      <h2 className="form7-subtitle">Submit complaints for documentation and resolution by the Barangay</h2>
      
      <div className="form7-container">
        <form>
          <div className="form7-kp-input">
            <label className="form7-kpcase">
              KP Case Number: &nbsp;
              <input type="text" id="form7KpCaseNumber" onChange={handleInputChange} />
            </label>
          </div>
          <div className="form7-pormularyoblg">
            <label className="form7-pormularyo">Pormularyo ng KP Blg. 7</label>
          </div>
          <div className="form7-heading">
          <label className="form7-head">
            Republika ng Pilipinas <br />
            Lalawigan ng Kabite <br />
            Bayan ng Indang <br />
            Barangay Poblacion 1
          </label>
          </div>
          <div className="form-group">
            <label className="form7-centered-label">
              <br /> TANGGAPAN NG LUPONG TAGAPAMAYAPA
            </label>
          </div>
          <div className="form-row two-columns centered-row">
            <div className="form-group">
              <input type="text" id="form7Maysumbong" onChange={handleInputChange} /> <br />
              <input type="text" id="form7Maysumbong" onChange={handleInputChange} /> <br />
              <label className="form7-sumbong">
                (Mga) May Sumbong <br /> -laban kay/kina-
              </label> <br />
              <input type="text" id="form7Ipinagsumbong" onChange={handleInputChange} /> <br />
              <input type="text" id="form7Ipinagsumbong" onChange={handleInputChange} /> <br />
              <label className="form7-sumbong"> (Mga) Ipinagsusumbong </label>
            </div>

            <div className="form-group">
              <div className="form7-blg-input">
                <label>Usaping Barangay Blg. </label>
                <input type="text" id="form7Blg" onChange={handleInputChange} />
              </div>
              <div className="form7-ukol-input">
                <label>Ukol sa:</label>
                <input type="text" id="form7UkolSa" onChange={handleInputChange} />
              </div>
            </div>
          </div>
          <div className="form-group">
            <label className="form7-centered-label">REKLAMO</label>
          </div>
          <div className="form7-paragraph">
            <label className="form7-justify">
            AKO/KAMI, ay nagrereklamo laban sa mga ipinagsusumbong na binanggit sa itaas dahil sa paglabag sa aking/aming mga karapatan at kapakanan sa sumusunod na pamamaraan:

              <textarea id="reklamo" onChange={handleInputChange}></textarea>
            </label>
          </div>
          <div className="form7-paragraph">
            <label className="form7-justify">
            DAHIL DITO, AKO/KAMI, na nakikiusap na ipagkaloob sa akin/amin
                ang sumusunod na (mga) kalunasan nang naaalinsunod sa batas at/o
                pagkamakatuwiran:
              <textarea id="resolutionRequest" onChange={handleInputChange}></textarea>
            </label>
          </div>

          <div className="form7-form-input">
            <label className="form7-indent">Ginawa ngayong ika-</label>
            <input type="text" id="form7Day" onChange={handleInputChange} />
            <label>araw ng</label>
            <input type="text" id="form7Month" onChange={handleInputChange} />
            <label>20</label>
            <input type="text" id="form7Year" onChange={handleInputChange} />
            <label>.</label>
          </div>
          <br />

          <div className="form7-sign-container">
              <div className="form7-sign-line"></div>
          </div>
          <p className="form7-sign-text">(Mga) May Sumbong</p>
          <br />
          <div className="form7-form-input">
            <label className="form7-indent">Tinanggap at inihain ngayong ika-</label>
            <input type="text" id="form7ReceiveDay" onChange={handleInputChange} />
            <label>araw ng</label>
            <input type="text" id="form7ReceiveMonth" onChange={handleInputChange} />
            <label>20</label>
            <input type="text" id="form7ReceiveYear" onChange={handleInputChange} />
            <label>.</label>
          </div>
          <br /> <br /> 
          <br /> 
          <div className="form7-sig-container">
              <div className="form7-sig-line"></div>
          </div>
          <p className="form7-sig-text">Punong Barangay/Kalihim ng Lupon</p>
            <br />
        </form>
      </div>
      <div className="form7-button-group">
          <button
            type="button"
            className="form7-print-button"
            onClick={() => window.print()}
          >
            Print
          </button>
          <button type="button" className="form7-next-button">
            {" "}
            Next{" "}
          </button>
        </div>
        
        <PDFDownloadLink document={<FormDocuments data={formData} />} fileName="Form7_Sumbong.pdf">
          {({ loading }) => (loading ? "Generating PDF..." : "Download PDF")}
        </PDFDownloadLink>

    </div>
  );
};

export default Form7;
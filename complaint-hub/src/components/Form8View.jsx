import React, { useState } from "react";
import "../main.css";
import Header from "./Header";
const Form8View = ({ formData }) => {
  return (
    <div className="form8-page">
      <Header showButton={false} />
      <div className="form8-text">
        <h1 className="form8-title">FORM 8: PAABISO</h1>
        <h2 className="form8-subtitle">Para sa complainant o nagrereklamo</h2>
        <div className="form8-container">
          <div className="form8">
            <div className="form8-kp-input">
              <label className="form8-kpcase">KP Case Number:
              <span>{formData.form8KpCaseNumber}</span>
              </label>
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
              <span>{formData.form8Date}</span>
              <label>, 20</label>
              <span>{formData.form8Year}</span>
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
                <span>{formData.form8Kay}</span>
              </div>
              <span>{formData.form8Sumbong}</span> <br />
              <label className="form8-text-sumbong"> (Mga) May Sumbong </label>
            </div>
            <br /> <br />
            <div className="form8-form-input">
              <label className="form8-indent">
                Ikaw ay inuutusan na sa akin sa ika-
              </label>
              <span>{formData.form8DayUtos}</span>
              <label>araw ng</label>
              <span>{formData.form8MonthUtos}</span>
              <label>, 20</label>
              <span>{formData.form8YearUtos}</span>
            </div>
            <div className="form8-form-input">
              <label>sa ganap na ika-</label>
              <span>{formData.form8Time}</span>
              <label>ng umaga/hapon, para sa pagdinig ng inyong sumbong.</label>
            </div>
            <br />
            <div className="form8-form-input">
              <label className="form8-indent">Ngayong ika-</label>
              <span>{formData.form8DayNow}</span>
              <label>araw ng</label>
              <span>{formData.form8MonthNow}</span>
              <label>, 20</label>
              <span>{formData.form8YearNow}</span>
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
              <span>{formData.form8DayBiso}</span>
              <label> ng</label>
              <span>{formData.form8MonthBiso}</span>
              <label>, 20</label>
              <span>{formData.form8YearBiso}</span>
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
        </div>
        </div>
    </div>
    </div>
  );
};
export default Form8View;
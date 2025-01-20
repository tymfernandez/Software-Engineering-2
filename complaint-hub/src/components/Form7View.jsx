import React, { useState } from "react";
import "../main.css";
import Header from "./Header";

const Form7View = ({ formData }) => {
  return (
    <div className="form7-page">
      <Header showButton={false} />
      <h1 className="form7-title">Form 7: Sumbong</h1>
      <h2 className="form7-subtitle">View Submitted Complaint</h2>

      <div className="form7-container">
        <div className="form7-kp-input">
          <label className="form7-kpcase">
            KP Case Number: &nbsp;
            <span>{formData.form7KpCaseNumber}</span>
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
            <span>{formData.form7MaySumbong}</span> <br />
            <span>{formData.form7MaySumbong1}</span> <br />
            <label className="form7-sumbong">
              (Mga) May Sumbong <br /> -laban kay/kina-
            </label>{" "}
            <br />
            <span>{formData.form7Ipinagsumbong}</span> <br />
            <span>{formData.form7Ipinagsumbong1}</span> <br />
            <label className="form7-sumbong"> (Mga) Ipinagsusumbong </label>
          </div>

          <div className="form-group">
            <div className="form7-blg-input">
              <label>Usaping Barangay Blg. </label>
              <span>{formData.form7Blg}</span>
            </div>
            <div className="form7-ukol-input">
              <label>Ukol sa:</label>
              <span>{formData.form7UkolSa}</span>
            </div>
          </div>
        </div>
        <div className="form-group">
          <label className="form7-centered-label">REKLAMO</label>
        </div>
        <div className="form7-paragraph">
          <label className="form7-justify">
            AKO/KAMI, ay nagrereklamo laban sa mga ipinagsusumbong na binanggit sa
            itaas dahil sa paglabag sa aking/aming mga karapatan at kapakanan sa
            sumusunod na pamamaraan:
            <div>{formData.reklamo}</div>
          </label>
        </div>
        <div className="form7-paragraph">
          <label className="form7-justify">
            DAHIL DITO, AKO/KAMI, na nakikiusap na ipagkaloob sa akin/amin ang
            sumusunod na (mga) kalunasan nang naaalinsunod sa batas at/o
            pagkamakatuwiran:
            <div>{formData.resolutionRequest}</div>
          </label>
        </div>

        <div className="form7-form-input">
          <label className="form7-indent">Ginawa ngayong ika-</label>
          <span>{formData.form7Day}</span>
          <label>araw ng</label>
          <span>{formData.form7Month}</span>
          <label>20</label>
          <span>{formData.form7Year}</span>
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
          <span>{formData.form7ReceiveDay}</span>
          <label>araw ng</label>
          <span>{formData.form7ReceiveMonth}</span>
          <label>20</label>
          <span>{formData.form7ReceiveYear}</span>
          <label>.</label>
        </div>
        <br />
        <br />
        <br />
        <div className="form7-sig-container">
          <div className="form7-sig-line"></div>
        </div>
        <p className="form7-sig-text">Punong Barangay/Kalihim ng Lupon</p>
        <br />
      </div>
    </div>
  );
};

export default Form7View;

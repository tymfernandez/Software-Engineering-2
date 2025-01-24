import React from "react";
import "../styles/BlotterForm.css";

const BlotterForm = () => {
  return (
    <div className="blotter-form-page">
      <div className="blotter-form-text">
        <h1>Blotter Report Form</h1>
        <p className="centered-text">
          Submit complaints for documentation and resolution by the barangay
        </p>

        <div className="blotter-form-container">
          <form className="blotter-form">
            {/* Row with 3 columns */}
            <div className="form-row three-columns">
              <div className="form-group">
                <label>KP Case Number</label>
                <input type="text" />
              </div>
              <div className="form-group">
                <label>Usaping Barangay Blg.</label>
                <input type="text" />
              </div>
              <div className="form-group">
                <label>Ukol sa</label>
                <input type="text" />
              </div>
            </div>

            {/* Row with 2 columns */}
            <div className="form-row two-columns centered-row">
              <div className="form-group">
                <label>(Mga) May Sumbong</label>
                <input type="text" />
                <label className="optional-label"> optional </label>
                <input type="text" />
                <input type="text" />
              </div>
              <div className="form-group">
                <label>(Mga) Ipinagsusumbong</label>
                <input type="text" />
                <label className="optional-label"> optional </label>
                <input type="text" />
                <input type="text" />
              </div>
            </div>

            {/* REKLAMO Section */}
            <div className="form-group">
              <label className="centered-label">REKLAMO</label>
              <p className="left-aligned-text">
                AKO/KAMI, ay nagrereklamo laban sa mga ipinagsusumbong na
                binanggit sa itaas dahil sa paglabag sa aking/aming mga
                karapatan at kapakanan sa sumusunod na pamamaraan:{" "}
              </p>
              <textarea placeholder=" "></textarea>
            </div>

            {/* Pagkakasunduan Section */}
            <div className="form-group">
              <label> </label>
              <p className="left-aligned-text">
                DAHIL DITO, AKO/KAMI, na nakikiusap na ipagkaloob sa akin/amin
                ang mga sumusunod na (mga) kalunasan nang naaalinsunod sa batas
                at/o pagkamakatuwiran:{" "}
              </p>
              <textarea placeholder=" "></textarea>
            </div>

            {/* Date Section */}
            <div className="date-section">
              <div className="date-input">
                <label htmlFor="day">Ginawa ngayong ika-</label>
                <input type="text" id="day" placeholder=" " />
                <label htmlFor="mpnth"> araw ng </label>
                <input type="text" id="month" placeholder=" " />
                <label htmlFor="year">, 20</label>
                <input type="text" id="age" placeholder=" " />
              </div>
            </div>

            <div className="date-section">
              <div className="date-input">
                <label htmlFor="day">Tinanggap at inihain nga</label>
                <input type="text" id="day" placeholder=" " />
                <label htmlFor="mpnth"> araw ng </label>
                <input type="text" id="month" placeholder=" " />
                <label htmlFor="year">, 20</label>
                <input type="text" id="age" placeholder=" " />
              </div>
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

export default BlotterForm;

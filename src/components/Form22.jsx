import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import axios from "axios";
import "../styles/Form22.css";
import Header from "./Header";

const Form22 = () => {
  const [formData, setFormData] = useState({
    form22KpNum: "",
    form22Blg: "",
    form22Ukol: "",
    form22MaySumbong: "",
    form22MaySumbong1: "",
    form22IpinagSumbong: "",
    form22IpinagSumbong1: "",
    form22Pangalan: "",
    form22Pangalan1: "",
    form22Day: "",
    form22Month: "",
    form22Year: "",
  });

  const [showSuccess, setShowSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3001/form22/autogenerate")
      .then((response) => {
        setFormData((prevData) => ({
          ...prevData,
          form22KpNum: response.data.kpCaseNumber,
          form22Blg: response.data.usapingBlg,
        }));
      })
      .catch((error) => {
        console.error("Error fetching auto-generated numbers: ", error);
        setError("Failed to fetch auto-generated numbers");
      });
  }, []);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await axios.post("http://localhost:3001/form22", formData);
      setShowSuccess(true);
    } catch (error) {
      console.error("Error submitting Form 22 data:", error);
      if (error.response) {
        setError(
          error.response.data.message || "Failed to submit Form 22 data"
        );
      } else {
        setError("Failed to submit Form 22 data. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleContinue = () => {
    navigate("/complaints");
  };

  return (
    <div className="form22-page">
      <Header showButton={false} />
      <div className="form22-text">
        <h1 className="form22-title">FORM 22:</h1>
        <h2 className="form22-subtitle">
          KATIBAYAN UPANG HADLANGAN ANG GANTING SAKDAL <br />
          PARA SA RESPONDENT NA DI DUMALO SA PATAWAG
        </h2>

        <div className="form22-container">
          <form className="form22">
            <div className="form22-kp-input">
              <label className="form22-kpcase">KP Case Number:</label>
              <input
                type="text"
                id="form22kpnum"
                value={formData.form22KpNum}
                onChange={handleInputChange}
              />
            </div>
            <div className="form22-pormularyoblg">
              <label className="form22-pormularyo">
                Pormularyo ng KP Blg. 22
              </label>
            </div>
            <div className="form22-heading">
              <label className="form22-head">
                Republika ng Pilipinas <br />
                Lalawigan ng Kabite <br />
                Bayan ng Indang <br />
                Barangay Poblacion 1
              </label>
            </div>
            <div className="form-group">
              <label className="form22-centered-label">
                <br /> TANGGAPAN NG LUPONG TAGAPAMAYAPA
              </label>
            </div>
            <div className="form-row two-columns centered-row">
              <div className="form-group">
                <input
                  type="text"
                  id="form22MaySumbong"
                  value={formData.form22MaySumbong}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  id="form22MaySumbong1" // Note the "1" for the second input
                  value={formData.form22MaySumbong1}
                  onChange={handleInputChange}
                />
                <label className="form22-sumbong">
                  (Mga) May Sumbong <br /> -laban kay/kina-
                </label>
                <input
                  type="text"
                  id="form22IpinagSumbong"
                  value={formData.form22IpinagSumbong}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  id="form22IpinagSumbong1" // Note the "1" for the second input
                  value={formData.form22IpinagSumbong1}
                  onChange={handleInputChange}
                />
                <label className="form22-sumbong">
                  {" "}
                  (Mga) Ipinagsusumbong{" "}
                </label>
              </div>

              <div className="form-group">
                <div className="form22-blg-input">
                  <label>Usaping Barangay Blg. </label>
                  <input
                    type="text"
                    id="form22Blg"
                    value={formData.form22Blg} // Changed from form22KpNum
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form22-ukol-input">
                  <label>Ukol sa</label>
                  <input
                    type="text"
                    id="form22Ukol"
                    value={formData.form22Ukol}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
            <br />
            <div className="form-group">
              <label className="form22-centered-label">
                KATIBAYAN UPANG HADLANGAN ANG GANTING SAKDAL
              </label>
            </div>
            <div className="form22-paragraph">
              <label className="form22-indent">
                Ito ay nagpapatunay na matapos ang nauunang abiso at pagdinig,
                ang (mga) Ipinagsusumbong na{" "}
              </label>
            </div>
            <div className="form22-form-input">
              <label>sina</label>
              <input
                type="text"
                id="form22Pangalan"
                value={formData.form22Pangalan}
                onChange={handleInputChange}
                placeholder=" "
              />
              <label>(pangalan) at </label>
              <input
                type="text"
                id="form22Pangalan1" // Note the "1" for the second input
                value={formData.form22Pangalan1}
                onChange={handleInputChange}
                placeholder=" "
              />
              <label>(pangalan) </label>
            </div>
            <div className="form22-form-input">
              <label className="form22-justify">
                ay napatunayan na sinadya o tumangging humarap ng walang
                makatwirang dahilan sa harap ng Punong Barangay/Pangakat ng
                Tagapagkasundo at dahil dito ang (mga) ipinagsusumbong ay
                hinahadlangan na maghain ng ganting-sakdal (kung mayroon man) na
                magmumula sa sumbong sa hukuman/ tanggapan ng pamahalaan.
              </label>
            </div>
            <br />
            <div className="form22-form-input">
              <label className="form22-indent">
                Ngayong ika-</label>
              <input
                type="text"
                id="form22Day"
                value={formData.form22Day}
                onChange={handleInputChange}
                placeholder=" "
              />
               <label>araw ng</label>
              <input
                type="text"
                id="form22Month"
                value={formData.form22Month}
                onChange={handleInputChange}
                placeholder=" "
              />
              <label>20</label>
              <input
                type="text"
                id="form22Year"
                value={formData.form22Year}
                onChange={handleInputChange}
                placeholder=" "
              />
              <label>.</label>
            </div>
            <br />
            <div className="form22-sign-container">
              <div className="form22-sign-line"></div>
              <p className="form22-sign-text">Kalihim ng Pangkat</p>
            </div>
            <br />
            <div className="form22-signature-section">
              <p className="form22-signtext">Pinatunayan:</p>
              <div className="form22-signature-wrapper">
                <div className="form22-signature-line"></div>
              </div>
            </div>
            <p className="form22-sig-text">Tagapangulo ng Pangkat/Lupon</p>
            <br /> <br />
            <div className="form22-form-input">
              <label className="form22-justify">
                MAHALAGA: Kung ang Kalihim ng Lupon ang gumawa ng katibayan, ang
                Tagapangulo ng lupon ang magpapatunay. Kung ang Kalihim ng
                Pangkat ang gumawa ng katibayan, ang Tagapangulo ng Pangkat ang
                magpapatunay.
              </label>
            </div>
          </form>
        </div>

        <div className="form22-button-group">
          <button
            type="button"
            className="form22-print-button"
            onClick={() => window.print()}
          >
            Print
          </button>
          <button
            type="button"
            className="form22-next-button"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>

        {showSuccess && (
          <div className="form9-popup-overlay">
            <div className="form9-popup-content">
              <img
                src="/successIcon.png"
                alt="Success Icon"
                className="success-icon"
              />
              <h2>Success!</h2>
              <p>
                Form 22 successfully submitted. Please click the button to
                continue to Complaints page.
              </p>
              <button
                className="form9-popup-continue-button"
                onClick={handleContinue}
              >
                Continue
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Form22;

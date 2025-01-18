import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { PDFDownloadLink } from "@react-pdf/renderer";
import axios from "axios";
import "../main.css";
import Header from "./Header"; //
import FormDocu14 from "./FormDocu14"; //

const Form14 = () => {
  const navigate = useNavigate();
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    form14KpNum: "",
    form14Blg: "",
    form14Ukol: "",
    form14MaySumbong: "",
    form14MaySumbong1: "",
    form14IpinagSumbong: "",
    form14IpinagSumbong1: "",
    form14Day: "",
    form14Month: "",
    form14Year: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:3001/form14/autogenerate")
      .then((response) => {
        setFormData((prevData) => ({
          ...prevData,
          form14KpNum: response.data.kpCaseNumber,
          form14Blg: response.data.usapingBlg,
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
    setError(null);
    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:3001/form14",
        formData
      );
      console.log("Form submitted successfully:", response.data);
      // Handle successful form submission
      navigate("/complaints");
    } catch (error) {
      console.error("Error submitting Form 14 data:", error);
      if (error.response) {
        console.error("Server responded with:", error.response.data);
      }
      setError("Failed to submit Form 14 data");
    } finally {
      setLoading(false);
    }
  };

  const handleContinue = () => {
    navigate("/complaints");
  };

  return (
    <div className="form14-page">
      <Header showButton={false} />
      <div className="form14-text">
        <h1 className="form14-title">FORM 14:</h1>
        <h2 className="form14-subtitle">
          KASUNDUAN UKOL SA PAGHAHATOL NG TAGAPAMAGITAN
        </h2>

        <div className="form14-container">
          <form className="form14">
            <div className="form14-kp-input">
              <label className="form14-kpcase">KP Case Number:</label>
              <input
                type="text"
                id="form14KpNum"
                value={formData.form14KpNum}
                onChange={handleInputChange}
              />
            </div>
            <div className="form14-pormularyoblg">
              <label className="form14-pormularyo">
                Pormularyo ng KP Blg. 14
              </label>
            </div>
            <div className="form14-heading">
              <label className="form14-head">
                Republika ng Pilipinas <br />
                Lalawigan ng Kabite <br />
                Bayan ng Indang <br />
                Barangay Poblacion 1
              </label>
            </div>
            <div className="form-group">
              <label className="form14-centered-label">
                <br /> TANGGAPAN NG LUPONG TAGAPAMAYAPA
              </label>
            </div>
            <div className="form-row two-columns centered-row">
              <div className="form-group">
                <input
                  type="text"
                  id="form14MaySumbong"
                  value={formData.form14MaySumbong}
                  onChange={handleInputChange}
                />{" "}
                <br />
                <input
                  type="text"
                  id="form14MaySumbong1"
                  value={formData.form14MaySumbong1}
                  onChange={handleInputChange}
                />
                <label className="form14-sumbong">
                  (Mga) May Sumbong <br /> -laban kay/kina-
                </label>
                <input
                  type="text"
                  id="form14IpinagSumbong"
                  value={formData.form14IpinagSumbong}
                  onChange={handleInputChange}
                />{" "}
                <br />
                <input
                  type="text"
                  id="form14IpinagSumbong1"
                  value={formData.form14IpinagSumbong1}
                  onChange={handleInputChange}
                />
                <label className="form14-sumbong">
                  {" "}
                  (Mga) Ipinagsusumbong{" "}
                </label>
              </div>

              <div className="form-group">
                <div className="form14-blg-input">
                  <label>Usaping Barangay Blg. </label>
                  <input
                    type="text"
                    id="form14Blg"
                    value={formData.form14Blg}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form14-ukol-input">
                  <label>Ukol sa:</label>
                  <input
                    type="text"
                    id="form14Ukol"
                    value={formData.form14Ukol}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
            <br />
            <div className="form-group">
              <label className="form14-centered-label">
                KASUNDUAN UKOL SA PAGHAHATOL NG TAGAPAMAGITAN{" "}
              </label>
            </div>
            <div className="form14-paragraph">
              <label className="form14-indent">
                Sa pamamagitan nito'y nagkakasundo kami na pahatulan ang aming
                alitan sa Punong Barangay/Pangkat at Tagapagkasundo (mangyaring
                guhitan ang di-kailangan), at nangangako kami na tutupad sa
                gawad na ihahatol ukol dito. Ginawa naming ang kasunduang ito ng
                kusang-loob na may lubos na pagkakaunawa sa anumang kahihinatnan
                nito.
              </label>
            </div>
            <br />
            <div className="form14-form-input">
              <label className="form14-indent">
                Pinagkasunduan ngayong ika-
              </label>
              <input type="text" id="form14Day" 
              value={formData.form14Day}
              onChange={handleInputChange} />
              <label>araw ng</label>
              <input
                type="text"
                id="form14Month"
                value={formData.form14Month}
                onChange={handleInputChange}
              />
              <label>, 20</label>
              <input type="text" id="form14Year"
              value={formData.form14Year}
              onChange={handleInputChange} />
              <label>.</label>
            </div>{" "}
            <br /> <br />
            <div className="form-row two-columns centered-row">
              <div className="form-group">
                <label className="form14-mgasumbong">
                  (Mga) May Sumbong <br /> -laban kay/kina-
                </label>
                <div className="form14-line"></div> <br />
                <div className="form14-line"></div>
              </div>

              <div className="form-group">
                <label className="form14-mgasumbong">
                  {" "}
                  <br /> (Mga) Ipinagsusumbong{" "}
                </label>
                <div className="form14-line"></div> <br />
                <div className="form14-line"></div>
              </div>
            </div>{" "}
            <br /> <br />
            <label className="form14-left"> PAGPAPATUNAY: </label>
            <div className="form14-paragraph">
              <label className="form14-indent">
                Sa pamamagitan nito’y pinatutunayan ko na ang sinusundang
                Kasunduan ng Paghahatol ay pinagkasunduan ng mga panig nang
                Malaya at kusang-loob, matapos kong maipaliwanag sa kanila kung
                ano ang kasunduang ito at ang mga kahihinatnan nito.
              </label>
            </div>
            <br /> <br /> <br />
            <div className="form14-sig-container">
              <div className="form14-sig-line"></div>
            </div>
            <p className="form14-sig-text">
              Punong Barangay/Tagapangulo ng Lupon
            </p>
            <p className="form14-signa-text">(Guhitan ang di-kailangan)</p>
            <br />
          </form>
        </div>

        <div className="form14-button-group">
          <PDFDownloadLink
            document={<FormDocu14 data={formData} />}
            fileName="form14.pdf"
            className="form14-print-button"
          >
            {({ blob, url, loading, error }) =>
              loading ? "Loading document..." : "Print"
            }
          </PDFDownloadLink>

          {/* Submit Button */}
          <button className="form14-next-button" onClick={handleSubmit}>
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
                Form 14 successfully submitted. Please click the button to
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

export default Form14;

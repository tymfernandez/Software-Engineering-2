import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../main.css";
import Header from "./Header";

const Form9 = () => {
  const [values, setValues] = useState({
    kpCaseNumber: "",
    maySumbong: "",
    ipinagsumbong: "",
    usapingBlg: "",
    ukolSa: "",
    day: "",
    month: "",
    year: "",
    time: "",
    kay: "",
    sumbongKay: "",
    pangalan: "",
    blank: "",
    name: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch auto-generated numbers for kpCaseNumber and usapingBlg
    axios
      .get("http://localhost:3001/form7/autogenerate")
      .then((response) => {
        setValues((prev) => ({
          ...prev,
          kpCaseNumber: response.data.kpCaseNumber,
          usapingBlg: response.data.usapingBlg,
        }));
      })
      .catch((error) => {
        console.error("Error fetching auto-generated numbers: ", error);
      });
  }, []);

  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleNext = () => {
    setIsLoading(true);
    setError("");

    axios
      .post("http://localhost:3001/form9", values)
      .then((response) => {
        console.log(response);
        window.location.href = "/dashboard";
      })
      .catch((error) => {
        console.error("Error adding Form 9 data: ", error);
        setError("An error occurred during form submission. Please try again.");
      })
      .finally(() => {
        setIsLoading(false);
      });
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
              <input
                type="text"
                id="form9-kpnum"
                name="kpCaseNumber"
                value={values.kpCaseNumber}
                onChange={handleInput}
                placeholder=" "
                readOnly
              />
            </div>
            <div className="form9-pormularyoblg">
              <label className="form9-pormularyo">
                Pormularyo ng KP Blg. 9
              </label>
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
                <input
                  type="text"
                  id="form9-maysumbong"
                  name="maySumbong"
                  value={values.maySumbong}
                  onChange={handleInput}
                />{" "}
                <br />
                <input
                  type="text"
                  id="form9-maysumbong"
                  name="maySumbong"
                  value={values.maySumbong}
                  onChange={handleInput}
                />{" "}
                <br />
                <label className="form9-sumbong">
                  (Mga) May Sumbong <br /> -laban kay/kina-
                </label>
                <input
                  type="text"
                  id="form9-ipinagsumbong"
                  name="ipinagsumbong"
                  value={values.ipinagsumbong}
                  onChange={handleInput}
                />{" "}
                <br />
                <input
                  type="text"
                  id="form9-ipinagsumbong"
                  name="ipinagsumbong"
                  value={values.ipinagsumbong}
                  onChange={handleInput}
                />
                <label className="form9-sumbong"> (Mga) Ipinagsusumbong </label>
              </div>

              <div className="form-group">
                <div className="form9-blg-input">
                  <label>Usaping Barangay Blg. </label>
                  <input
                    type="text"
                    id="form9-blg"
                    name="usapingBlg"
                    value={values.usapingBlg}
                    onChange={handleInput}
                    placeholder=" "
                    readOnly
                  />
                </div>
                <div className="form9-ukol-input">
                  <label>Ukol sa:</label>
                  <input
                    type="text"
                    name="ukolSa"
                    value={values.ukolSa}
                    onChange={handleInput}
                  />
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
                  <input
                    type="text"
                    id="form9-kay"
                    name="kay"
                    value={values.kay}
                    onChange={handleInput}
                    placeholder=" "
                  />
                </div>
                <input
                  type="text"
                  id="form9-sumbong-kay"
                  name="sumbongKay"
                  value={values.sumbongKay}
                  onChange={handleInput}
                  placeholder=" "
                />
                <label className="form9-ipinagsusumbong">
                  {" "}
                  (Mga) Ipinagsusumbong{" "}
                </label>
              </div>

              <div className="form-group">
                <input
                  type="text"
                  id="form9-kay"
                  name="kay"
                  value={values.kay}
                  onChange={handleInput}
                />
                <input
                  type="text"
                  id="form9-kay"
                  name="kay"
                  value={values.kay}
                  onChange={handleInput}
                />
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
              <input
                type="text"
                id="form9-day"
                name="day"
                value={values.day}
                onChange={handleInput}
                placeholder=" "
              />
              <label>araw ng</label>
              <input
                type="text"
                id="form9-month"
                name="month"
                value={values.month}
                onChange={handleInput}
                placeholder=" "
              />
              <label>, 20</label>
              <input
                type="text"
                id="form9-year"
                name="year"
                value={values.year}
                onChange={handleInput}
                placeholder=" "
              />
              <label>sa ganap na ika-</label>
            </div>
            <div className="form9-form-input">
              <input
                type="text"
                id="form9-time"
                name="time"
                value={values.time}
                onChange={handleInput}
                placeholder=" "
              />
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
            </div>{" "}
            <br />
            <div className="form9-form-input">
              {" "}
              <br />
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
              <input
                type="text"
                id="form9-day"
                name="day"
                value={values.day}
                onChange={handleInput}
                placeholder=" "
              />
              <label>araw ng</label>
              <input
                type="text"
                id="form9-month"
                name="month"
                value={values.month}
                onChange={handleInput}
                placeholder=" "
              />
              <label>, 20</label>
              <input
                type="text"
                id="form9-year"
                name="year"
                value={values.year}
                onChange={handleInput}
                placeholder=" "
              />
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
              <input
                type="text"
                id="form9-kpnum"
                name="kpCaseNumber"
                value={values.kpCaseNumber}
                onChange={handleInput}
                placeholder=" "
                readOnly
              />
            </div>
            {/* ULAT NG OPISYAL Section */}
            <div className="form-group">
              <label className="form9-centered-label">
                {" "}
                <br /> ULAT NG OPISYAL
              </label>
              <div className="form9-name-input">
                <label className="form9-indent">
                  Inihatid ang patawag na ito sa inirereklamo{" "}
                </label>
                <input
                  type="text"
                  id="form9-pangalan"
                  name="pangalan"
                  value={values.pangalan}
                  onChange={handleInput}
                  placeholder=" "
                />
                <label>noong ika-</label>
                <input
                  type="text"
                  id="form9-day"
                  name="day"
                  value={values.day}
                  onChange={handleInput}
                  placeholder=" "
                />
              </div>
              <div className="form9-form-input">
                <label>araw ng</label>
                <input
                  type="text"
                  id="form9-month"
                  name="month"
                  value={values.month}
                  onChange={handleInput}
                  placeholder=" "
                />
                <label>, 20</label>
                <input
                  type="text"
                  id="form9-year"
                  name="year"
                  value={values.year}
                  onChange={handleInput}
                  placeholder=" "
                />
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
                <input
                  type="text"
                  id="form9-blank"
                  name="blank"
                  value={values.blank}
                  onChange={handleInput}
                  placeholder=" "
                />
                <label>
                  1. Ibinigay sa kanila nang personal ang patawag o{" "}
                </label>
              </div>
              <div className="form9-reasons-input">
                <input
                  type="text"
                  id="form9-blank"
                  name="blank"
                  value={values.blank}
                  onChange={handleInput}
                  placeholder=""
                />
                <label>
                  2. Ibinigay sa kanila ang patawag, subalit tinanggihan itong
                  tanggapin, o{" "}
                </label>
              </div>
              <div className="form9-reason-input">
                <div className="form9-reasons-input">
                  <input
                    type="text"
                    id="form9-blank"
                    name="blank"
                    value={values.blank}
                    onChange={handleInput}
                    placeholder=""
                  />
                  <label>
                    3. Iniwan ang nasabing patawag sa kanilang bahay kay
                  </label>
                </div>
                <input
                  type="text"
                  id="form9-name"
                  name="name"
                  value={values.name}
                  onChange={handleInput}
                  placeholder="Pangalan"
                />
              </div>
              <div className="form9-reason-input">
                <div className="form9-reasons-input">
                  <input
                    type="text"
                    id="form9-blank"
                    name="blank"
                    value={values.blank}
                    onChange={handleInput}
                    placeholder=""
                  />
                  <label>
                    4. Iniwan ang nasabing patawag sa kanya/kanilang
                  </label>
                </div>
                <label className="form9-four">
                  tanggapan/lugar ng kanyang pinagtatrabahuan kay
                </label>
                <div className="form9-reasons-input">
                  <input
                    type="text"
                    id="form9-name"
                    name="name"
                    value={values.name}
                    onChange={handleInput}
                    placeholder="Pangalan"
                  />
                  <label> ang tao na siyang </label>
                </div>
                <label className="form9-four">namamahala dito.</label>
              </div>
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
            {error && <p className="error-text">{error}</p>}{" "}
            {/* Display error */}
          </form>
        </div>
        <div className="form9-button-group">
          <button
            type="button"
            className="form9-print-button"
            onClick={() => window.print()}
          >
            Print
          </button>
          <button
            type="button"
            className="form9-next-button"
            onClick={handleNext}
            disabled={isLoading}
          >
            {isLoading ? "Submitting..." : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form9;
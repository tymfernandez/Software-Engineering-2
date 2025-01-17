import React from "react";
import { useNavigate } from "react-router-dom";
import "../main.css";
import Header from "./Header";

const Form18 = () => {
  const handleInputChange = (e) => {
      const { id, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [id]: value,
      }));
    }
  
    const navigate = useNavigate();
  
    const handleProceedToForm19 = () => {
      navigate("/form19");
    };

  return (
    <div className="form18-page">
      <Header showButton={false} />
      <div className="form18-text">
        <h1 className="form18-title">FORM 18:</h1>
        <h2 className="form18-subtitle">
          PAG-ABISO NG PAGDINIG PARA SA <br /> COMPLAINANT O NAGREREKLAMO
        </h2>

        <div className="form18-container">
          <form className="form18">
            <div className="form18-kp-input">
              <label className="form18-kpcase">KP Case Number:</label>
              <input type="text" id="form18-kpnum" placeholder=" " />
            </div>
            <div className="form18-pormularyoblg">
              <label className="form18-pormularyo">Pormularyo ng KP Blg. 18</label>
            </div>
            <div className="form18-heading">
              <label className="form18-head">
                Republika ng Pilipinas <br />
                Lalawigan ng Kabite <br />
                Bayan ng Indang <br />
                Barangay Poblacion 1
              </label>
            </div>
            <div className="form-group">
              <label className="form18-centered-label">
                <br /> TANGGAPAN NG LUPONG TAGAPAMAYAPA
              </label>
            </div>
            <div className="form-row two-columns centered-row">
              <div className="form-group">
                <input type="text" id="form18-maysumbong" /> <br />
                <input type="text" id="form18-maysumbong" />
                <label className="form18-sumbong">
                  (Mga) May Sumbong <br /> -laban kay/kina-
                </label>
                <input type="text" id="form18-ipinagsumbong" /> <br />
                <input type="text" id="form18-ipinagsumbong" />
                <label className="form18-sumbong"> (Mga) Ipinagsusumbong </label>
              </div>

              <div className="form-group">
                <div className="form18-blg-input">
                  <label>Usaping Barangay Blg. </label>
                  <input type="text" id="form18-blg" placeholder=" " />
                </div>
                <div className="form18-ukol-input">
                  <label>Ukol sa:</label>
                  <input type="text" />
                </div>
              </div>
            </div>
            <div className="form-group">
              <label className="form18-centered-label">PAG-ABISO NG PAGDINIG</label>
              <label className="form18-center">(Ukol sa: Di-Pagharap)</label>
            </div>{" "}
            <br />
            <div className="form-row two-columns centered-row">
              <div className="form-group">
                <div className="form18-kay-input">
                  <label>KAY: </label>
                  <input type="text" id="form18-kay" placeholder=" " /> <br />
                  
                </div>
                <input type="text" id="form18-sumbong-kay" placeholder=" " />
              </div>
            </div>{" "}
            <br /> <br />
            <div className="form18-form-input">
              <label className="form18-indent">
                Sa pamamagitan nito’y inaatasan ka na humarap sa akin/Pangkat sa
                ika-
              </label>
              <input type="text" id="form18-day" placeholder=" " />
              <label> araw ng</label>
            </div>
            <div className="form18-form-input">
              <input type="text" id="form18-month" placeholder=" " />
              <label>, 20</label>
              <input type="text" id="form18-year" placeholder=" " />
              <label>sa ganap na ika-</label>
              <input type="text" id="form18-time" placeholder=" " />
              <label>ng umaga/hapon upang ipaliwanag kung</label>
            </div>
            <div className="form18-form-input">
              <label>
                {" "}
                bakit di ka humarap para sa pamamagitan/pag-aayos na nakatakda
                noong
              </label>
              <input type="text" id="form18-date" placeholder=" " />
            </div>
            <div className="form18-form-input">
              <label>, 20</label>
              <input type="text" id="form18-year" placeholder=" " />
              <label>
                , at bakit ang iyong sumbong ay di-dapat Ipawalang-saysay, at
                kung bakit di ka dapat
              </label>
            </div>
            <label className="form18-justify">
              magpalabas ng paghahadlang makapagsakdal ka sa hukuman/tanggapan
              ng pamahalaan, at ang kaparusahang paglapastangan sa hukuman ay
              di-dapat gawin sanhi ng di mo pagharap o pagtangging humarap sa
              Punong Barangay/Tagapangulo ng lupon.
            </label>{" "}
            <br /> <br />
            <div className="form18-form-input">
              <label className="form18-indent">Ngayong ika-</label>
              <input type="text" id="form18-day" placeholder=" " />
              <label>araw ng</label>
              <input type="text" id="form18-month" placeholder=" " />
              <label>, 20</label>
              <input type="text" id="form18-year" placeholder=" " />
              <label>.</label>
            </div>{" "}
            <br /> <br />
            <div className="form18-signature-container">
              <div className="form18-signature-line"></div>
              <p className="form18-signature-text">
                Punong Barangay/Tagapangulo ng Pangkat
              </p>
            </div>{" "}
            <br />
            <div className="form18-form-input">
              <label className="form18-indent">Pinaabisuhan ngayong ika-</label>
              <input type="text" id="form18-day" placeholder=" " />
              <label>araw ng</label>
              <input type="text" id="form18-date" placeholder=" " />
              <label>.</label>
            </div>{" "}
            <br /> <br />
            <div className="form18-right-group">
              <label className="form18-mgasumbong">(Mga) May Sumbong</label> <br />{" "}
              <br /> <br />
              <div className="form18-line"></div> <br /> <br /> <br />
              <div className="form18-line"></div> <br />
              <label className="form18-mgasumbong">
                {" "}
                <br /> (Mga) Ipinagsusumbong{" "}
              </label>{" "}
              <br /> <br /> <br />
              <div className="form18-line"></div> <br /> <br /> <br />
              <div className="form18-line"></div>
            </div>{" "}
            <br />
          </form>
        </div>
        <div className="form18-button-group">
          <button
            type="button"
            className="form18-print-button"
            onClick={() => window.print()}
          >
            Print
          </button>
          <button 
            className="form8-next-button" 
            onClick={() => handleProceedToForm19()}
          >
            Proceed to Form 19
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form18;

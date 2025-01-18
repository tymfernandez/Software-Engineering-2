import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import navigate
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { PDFDownloadLink } from "@react-pdf/renderer";
import "../main.css";
import Header from "./Header";
import Header from "./Header"; //
import FormDocu7 from "./FormDocu7";

const Form7 = () => {
  const [kpCaseNumber, setKpCaseNumber] = useState(""); // Store kpCaseNumber
  const [usapingBlg, setUsapingBlg] = useState(""); // Store usapingBlg
  const navigate = useNavigate(); // Initialize navigate

  const handleSubmit = (event) => {
    event.preventDefault();

    // Construct form data from input values
    const form7Data = {
      kpCaseNumber: kpCaseNumber, // Include kpCaseNumber
      maySumbong: event.target.maysumbong1.value + ", " + event.target.maysumbong2.value,
      ipinagsumbong: event.target.ipinagsumbong1.value + ", " + event.target.ipinagsumbong2.value,
      usapingBlg: usapingBlg, // Include usapingBlg
      ukolSa: event.target.ukolSa.value,
      reklamo: event.target.reklamo.value,
      kalunasan: event.target.kalunasan.value,
      day: event.target.day.value,
      month: event.target.month.value,
      year: event.target.year.value,
    };

    // Make sure the correct backend URL is used here
    axios
      .post("http://localhost:3001/form7", form7Data)
      .then((response) => {
        console.log(response);
        navigate("/form8"); // Redirect to dashboard on success
      })
      .catch((error) => {
        console.error("Error adding Form 7 data: ", error);
      });
  };

  // Function to fetch the auto-generated numbers from the backend
  const fetchAutoGeneratedNumbers = async () => {
    try {
      const response = await axios.get("http://localhost:3001/form7/autogenerate"); // API endpoint to get the numbers
      setKpCaseNumber(response.data.kpCaseNumber); // Set the kpCaseNumber
      setUsapingBlg(response.data.usapingBlg); // Set the usapingBlg
    } catch (error) {
      console.error("Error fetching auto-generated numbers: ", error);
    }
  };

  // Fetch the auto-generated numbers when the component mounts
  React.useEffect(() => {
    fetchAutoGeneratedNumbers();
  }, []);

  return (
    <div className="katibayan-form-page">
      <Header showButton={false} />
      <div className="katibayan-form-text">
        <h1>FORM 7: SUMBONG</h1>
        <p>Submit complaints for documentation and resolution by the Barangay</p>

        <div className="tanggapan-form-container">
          <form className="katibayan-form" onSubmit={handleSubmit}>
            <div className="kp-input">
              <label className="kpcase">KP Case Number:</label>
              <input
                type="text"
                id="kpnum"
                name="kpnum"
                value={kpCaseNumber}
                readOnly // Make it non-editable
                required
              />
            </div>

            <div className="pormularyoblg">
              <label className="pormularyo">Pormularyo ng KP Blg. 7</label>
            </div>

            <div className="heading">
              <label className="head">
                Republika ng Pilipinas <br />
                Lalawigan ng Kabite <br />
                Bayan ng Indang <br />
                Barangay Poblacion 1
              </label>
            </div>

            <div className="form-group">
              <label className="centered-label">
                <br /> TANGGAPAN NG LUPONG TAGAPAMAYAPA
              </label>
            </div>

            <div className="form-row two-columns centered-row">
              <div className="form-group">
                <input type="text" id="maysumbong1" name="maysumbong1" required /> <br />
                <input type="text" id="maysumbong2" name="maysumbong2" required />
                <label className="sumbong">
                  (Mga) May Sumbong <br /> -laban kay/kina-
                </label>
                <input type="text" id="ipinagsumbong1" name="ipinagsumbong1" required /> <br />
                <input type="text" id="ipinagsumbong2" name="ipinagsumbong2" required />
                <label className="sumbong"> (Mga) Ipinagsusumbong </label>
              </div>

              <div className="form-group">
                <div className="blg-input">
                  <label>Usaping Barangay Blg. </label>
                  <input
                    type="text"
                    id="blg"
                    name="blg"
                    value={usapingBlg}
                    readOnly // Make it non-editable
                    required
                  />
                </div>
                <div className="ukol-input">
                  <label>Ukol sa:</label>
                  <input type="text" id="ukolSa" name="ukolSa" placeholder="Enter Subject" required />
                </div>
              </div>
            </div>

            <div className="form-group">
              <label className="centered-label">REKLAMO</label>
            </div>

            <div className="paragraph">
              <label className="justify">
                AKO/KAMI, ay nagrereklamo laban sa mga ipinagsumbong na binanggit sa itaas dahil sa
                paglabag sa aking/aming mga karapatan at kapakanan sa sumusunod na pamamaraan:
              </label>
              <textarea id="reklamo" name="reklamo" required placeholder="Enter complaint details here"></textarea>
            </div>

            <div className="paragraph">
              <label className="justify">
                DAHIL DITO, AKO/KAMI, na nakikiusap na ipagkaloob sa akin/amin ang sumusunod na (mga)
                kalunasan nang naaalinsunod sa batas at/o pagkamakatuwiran:
              </label>
              <textarea id="kalunasan" name="kalunasan" required placeholder="Enter requested solution here"></textarea>
            </div>

            <br />
            <div className="form-input">
              <label className="indent">Ginawa ngayong ika-</label>
              <input type="text" id="day" name="day" placeholder="Day" required />
              <label>araw ng</label>
              <input type="text" id="month" name="month" placeholder="Month" required />
              <label>, 20</label>
              <input type="text" id="year" name="year" placeholder="Year" required />
              <label>.</label>
            </div>
            <br />
        </form>
      </div>
      <div className="form7-button-group">
          <PDFDownloadLink
            document={<FormDocu7 data={formData} />}
            fileName="form7.pdf"
            className="form7-print-button"
          >
            {({ blob, url, loading, error }) =>
              loading ? "Loading document..." : "Print"
            }
          </PDFDownloadLink>
          
          <button
            className="form7-next-button"
            onClick={handleNext}
            style={{ marginLeft: "10px" }} // Optional styling
          >
            Next
          </button>
      </div>


    </div>
  );
};

export default Form7;

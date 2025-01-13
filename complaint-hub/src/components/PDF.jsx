import React from "react";
import Pdf from "react-to-pdf";

const ref = React.createRef();

const PDF = (props) => {
    return (
        <>
        <div className="Form7" ref={ref}>
            <h1>Form 7: Sumbong</h1>
            <h2>Submit complaints for documentation and resolution by the Barangay</h2>
            <div>
                <form>
                    <div>
                        <label>KP Case Number:</label>
                        <input type="text" placeholder=" " />
                    </div>
                    <div>
                        <label>Pormularyo ng KP Blg. 7</label>
                    </div>
                    <div>
                        <label>
                            Republika ng Pilipinas <br />
                            Lalawigan ng Kabite <br />
                            Bayan ng Indang <br />
                            Barangay Poblacion 1
                        </label>
                    </div>
                    <div>
                        <label>TANGGAPAN NG LUPONG TAGAPAMAYAPA</label>
                    </div>
                    <div>
                        <input type="text" />
                        <input type="text" />
                        <label>
                            (Mga) May Sumbong <br /> -laban kay/kina-
                        </label>
                        <input type="text" />
                        <input type="text" />
                        <label> (Mga) Ipinagsumbong </label>
                    </div>
                    <div>
                        <div>
                            <label>Usaping Barangay Blg. : </label>
                            <input type="text" placeholder=" " />
                        </div>
                        <div>
                            <label>Ukol sa:</label>
                            <input type="text" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <Pdf targetRef={ref} filename="Form7_Sumbong.pdf">
            {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
        </Pdf>
        </>
    );
}

export default PDF;
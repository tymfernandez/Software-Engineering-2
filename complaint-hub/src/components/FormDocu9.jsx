import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

// Styles to match your original form design
const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: "Helvetica",
    fontSize: 11,
    backgroundColor: "#ffffff", // white background
  },
  header: {
    textAlign: "center",
    marginBottom: 10,
  },
  kpNum: {
    textAlign: "right",
    marginTop: "5px",
    marginBottom: "15px",
  },
  pormularyo: {
    textAlign: "left",
    marginBottom: "15px",
  },
  formRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  label: {
    fontSize: 11,
    marginRight: 5,
  },
  center: {
    textAlign: "center",
  },
  formRowRight: {
    flexDirection: "row",
    justifyContent: "flex-end", // Aligns content to the right
    alignItems: "center", // Aligns items vertically
    marginBottom: 8, // Spacing below the row
  },
  indent: {
    indent: "20px",
    marginTop: 20,
    marginBottom: 3,
  },
  inputDay: {
    borderBottom: "1px solid black",
    fontSize: 11,
    padding: 2,
    width: "50px", // Adjust the width of the input box
  },
  inputMonth: {
    borderBottom: "1px solid black",
    fontSize: 11,
    padding: 2,
    width: "100px", // Adjust the width of the input box
  },
  inputYear: {
    borderBottom: "1px solid black",
    fontSize: 11,
    padding: 2,
    width: "50px", // Adjust the width of the input box
  },
  justify: {
    textAlign: "justify",
  },
  textarea: {
    fontSize: 11,
    padding: 5,
    height: 50,
    marginBottom: 10,
  },
  footer: {
    marginTop: 20,
    fontSize: 11,
    textAlign: "center",
  },
  signSection: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inputLine: {
    borderBottom: "1px solid black",
    width: "70px", // Adjust the length of the line
    fontSize: 11,
  },
  inputLineTime: {
    borderBottom: "1px solid black",
    width: "150px", // Adjust the length of the line
    fontSize: 11,
},
  inputLineYear: {
    borderBottom: "1px solid black",
    width: "40px", // Adjust the length of the line
    fontSize: 11,
  },
  inputLiney: {
    borderBottom: "1px solid black",
    width: "150px", // Adjust the length of the line
    fontSize: 11,
  },
  line: {
    borderBottom: "1px solid black",
    width: "100%", // Adjust the width if you want shorter lines
    marginBottom: 5, // Adjust spacing between lines
  },
  signatoryRight: {
    flexDirection: "column",
    alignItems: "flex-end", // Align content to the right side
    marginTop: 50, // Adjust the vertical positioning as needed
  },
  signatoryLine: {
    borderBottom: "1px solid black",
    width: "200px", // Adjust the width of the signatory line
    marginBottom: 5, // Add spacing between the line and the text
  },
  signatoryText: {
    fontSize: 11,
    textAlign: "center", // Center-align the text below the line
    marginRight: "70px",
  },
  signatoryLeft: {
    flexDirection: "column",
    alignItems: "flex-start", // Align content to the left side
    marginTop: 50, // Adjust the vertical positioning as needed
  },
  signText: {
    fontSize: 11,
    textAlign: "center", // Center-align the text below the line
  },
  twoColumnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10, // Add space between rows of columns
  },
  container: {
    flexDirection: "row", // Make it a two-column layout
    justifyContent: "space-between", // Add space between columns
    marginTop: 20, // Adjust spacing from the top
  },
  column: {
    flex: 1, // Each column takes equal space
    paddingHorizontal: 10, // Add padding between columns
  },
  lineRow: {
    flexDirection: "column", // Keep lines in rows within the column
    marginBottom: 20, // Add spacing between rows
  },
  patawagLine: {
    borderBottom: "1px solid black", // Create the horizontal line
    marginTop: "10px", // Add spacing between lines in a row
    marginBottom: "5px", // Add spacing between lines in a row
    width: "70%", // Full width of the column
  },
  patawagText: {
    fontSize: 11,
    marginLeft: "20px", // Center-align text under the lines
    marginTop: 5, // Add spacing between the line and text
  },
  blockText: {
    marginTop: 5, // Add spacing from the top or previous elements
    marginBottom: 10,
    fontSize: 11,
    lineHeight: 1.5, // Adjust line height for better readability
    textAlign: "justify", // Justify text for a clean block appearance
},
});

// Component to render the form document
const FormDocu9 = ({ data }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Form Header */}
        <View style={styles.kpNum}>
          <Text>KP Case Number: {data.form9KpCaseNumber || "                    "}</Text>
        </View>
        
        <View style={styles.pormularyo}>
          <Text>Pormularyo ng KP Blg. 9</Text>
        </View>
        
        <View style={styles.header}>
          <Text>Republika ng Pilipinas</Text>
          <Text>Lalawigan ng Kabite</Text>
          <Text>Bayan ng Indang</Text>
          <Text>Barangay Poblacion 1</Text>
        </View>
         
        <View style={styles.header}>
          <Text>TANGGAPAN NG LUPONG TAGAPAMAYAPA</Text>
        </View>

        {/* Two-Column Layout */}
        <View style={styles.twoColumnContainer}>
          {/* Left Column */}
          <View style={styles.column}>
          <View style={{ marginVertical: 15, textAlign: "left" }}>
            <Text style={{ borderBottom: "1px solid black", width: "75%", alignSelf: "left", marginBottom: 5 }}>
              {data.form9Maysumbong || " ".repeat(25)} {/* Creates the underline effect */}
            </Text>
            <Text style={{ borderBottom: "1px solid black", width: "75%", alignSelf: "left", marginBottom: 5 }}>
              {data.form9Maysumbong1 || " ".repeat(25)} {/* Creates the underline effect */}
            </Text>
            <Text style={{ fontStyle: "italic", marginBottom: 2, marginLeft: "25px" }}>(Mga) Maysumbong</Text>
            <Text style={{ fontStyle: "italic", marginBottom: 2, marginLeft: "25px" }}>-laban kay/kina-</Text>
          </View>

          <View style={{ marginVertical: 15, textAlign: "left" }}>
            <Text style={{ borderBottom: "1px solid black", width: "75%", alignSelf: "left", marginBottom: 5 }}>
              {data.form9Ipinagsumbong || " ".repeat(25)} {/* Creates the underline effect */}
            </Text>
            <Text style={{ borderBottom: "1px solid black", width: "75%", alignSelf: "left", marginBottom: 5 }}>
              {data.form9Ipinagsumbong1 || " ".repeat(25)} {/* Creates the underline effect */}
            </Text>
            <Text style={{ fontStyle: "italic", marginBottom: 2, marginLeft: "25px" }}>(Mga) Ipinagsusumbong</Text>
          </View>
          </View>

          {/* Right Column */}
          <View style={styles.column}>
          <View style={styles.formRowRight}>
            <Text style={styles.label}>Usaping Barangay Blg.:</Text>
            <Text style={styles.inputLine}>
              {data.form9Blg || " "}
            </Text>
          </View>
            <View style={styles.formRowRight}>
              <Text style={styles.label}>Ukol sa:</Text>
              <Text style={styles.inputLiney}>{data.form9Ukol || " "}</Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
            <Text style={styles.center}>PATAWAG</Text>
            <Text>{'\n'}</Text> {/* Blank line */}
        </View>

        {/* Two-Column Layout */}
        <View style={styles.container}>
          {/* First Column */}
          <View style={styles.column}>
            <View style={styles.lineRow}>
              <Text>KAY: </Text>
              <View style={styles.patawagLine}>
              <Text>{data.form9Kay || " "}</Text>
              </View>
              <View style={styles.patawagLine}>
              <Text>{data.form9SumbongKay || " "}</Text>
              </View>
              <Text style={styles.patawagText}>(Mga) Ipinagsusumbong</Text>
            </View>
          </View>

          {/* Second Column */}
          <View style={styles.column}>
            <View style={styles.lineRow}>
                <Text>  </Text>
              <View style={styles.patawagLine}>
              <Text>{data.form9SumbongKay || " "}</Text>
              </View>
              <View style={styles.patawagLine}>
              <Text>{data.form9SumbongKay || " "}</Text>
              </View>
            </View>
          </View>
        </View>

        {/*Body*/}
        <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 10 }}>
            <Text>Sa pamamagitan nito, kayo ay ipinatawag upang personal na humarap sa aking kasama ang inyong mga </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 10 }}>
            <Text>testigo, sa ika- </Text>
            <View style={{ borderBottom: "1px solid black", width: 60, marginLeft: 5 }}>
                <Text>{data.form9Day || " "}</Text>
            </View>
            <Text> araw ng </Text>
            <View style={{ borderBottom: "1px solid black", width: 100, marginLeft: 5 }}>
                <Text>{data.form9Month || " "}</Text>
            </View>
            <Text>, 20 </Text>
            <View style={{ borderBottom: "1px solid black", width: 50, marginLeft: 5 }}>
                <Text>{data.form9Year || " "}</Text>
            </View>
            <Text>sa ganap na ika- </Text>
            <View style={{ borderBottom: "1px solid black", width: 100, marginLeft: 5 }}>
                <Text>{data.form9Time || " "}</Text>
            </View>
        </View>

        <View>
          <Text style={styles.blockText}>
          ng umaga/hapon, upang sagutin ang sumbong na ginawa sa harap ko, na ang sipi ay kalakip nito, para pamagitnaan/pagkasunduin ang inyong (mga) alitan ng (mga) nagsusumbong.
          </Text>
        </View>

        <View>
          <Text style={styles.blockText}>
          Sa pamamagitan nito kayo’y binabalaan na ang inyong pagtanggi o kusang di pagharap bilang pagtalima sa patawag na ito, kayo ay hahadlangan na makapaghain ng ganting-sumbong na magmumula sa nasabing sumbong.
          </Text>
        </View>

        <View>
          <Text style={styles.blockText}>
          TUPARIN ITO, at kung hindi’y parurusahan kayo sa salang paglapastangan sa hukuman.
          </Text>
        </View>
        

        {/* Footer */}
        <View style={{ flexDirection: "row", alignItems: "center", marginTop: 5 }}>         
            <Text>Ngayong ika- </Text>
            <View style={{ borderBottom: "1px solid black", width: 60, marginLeft: 5 }}>
                <Text>{data.form9DayNow || " "}</Text>
            </View>
            <Text> araw ng </Text>
            <View style={{ borderBottom: "1px solid black", width: 100, marginLeft: 5 }}>
                <Text>{data.form9MonthNow || " "}</Text>
            </View>
            <Text>, 20 </Text>
            <View style={{ borderBottom: "1px solid black", width: 50, marginLeft: 5 }}>
                <Text>{data.form9YearNow || " "}</Text>
            </View>
            <Text>. </Text>
        </View>

        {/* Left-Aligned Signatory */}
        <View style={styles.signatoryLeft}>
          <br />
          <View style={styles.signatoryLine}></View>
          <Text style={styles.signText}>Punong Barangay/Tagapangulo ng Lupon</Text>
        </View>        
      </Page>

      <Page size="A4" style={styles.page}> 
        <View style={styles.kpNum}>
          <Text>KP Case Number: {data.form9KpCaseNumber || "                    "}</Text>
        </View>

        <View style={styles.header}>
          <Text>ULAT NG OPISYAL</Text>
          <Text>{'\n'}</Text> {/* Blank line */}
          <Text>{'\n'}</Text> {/* Blank line */}
        </View>

        <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 10 }}>
            <Text>Inihatid ang patawag na ito sa inirereklamo </Text>
            <View style={{ borderBottom: "1px solid black", width: 100, marginLeft: 5 }}>
                <Text>{data.form9Pangalan || " "}</Text>
            </View>
            <Text> noong ika- </Text>
            <View style={{ borderBottom: "1px solid black", width: 30, marginLeft: 5 }}>
                <Text>{data.form9DayUlat || " "}</Text>
            </View>
            <Text>araw ng </Text>
            <View style={{ borderBottom: "1px solid black", width: 90, marginLeft: 5 }}>
                <Text>{data.form9MonthUlat || " "}</Text>
            </View>
        </View>

        <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 10, textAlign: "justify" }}>  
            <Text>, 20 </Text>
            <View style={{ borderBottom: "1px solid black", width: 50, marginLeft: 5 }}>
                <Text>{data.form9YearUlat || " "}</Text>
            </View>
            <Text>sa pamamagitan ng (Isulat ang pangalan/ mga pangalan ng inirereklamo at kung paano ipina-</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 10, textAlign: "justify" }}>  
            <Text>hatid)</Text>
            <Text>{'\n'}</Text> {/* Blank line */}
            <Text>{'\n'}</Text> {/* Blank line */}
        </View>

        <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 10, textAlign: "justify" }}>  
            <Text>(Mga) Inirereklamo:</Text>
            <Text>{'\n'}</Text> {/* Blank line */}
            <Text>{'\n'}</Text> {/* Blank line */}
        </View>

        <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 10 }}>
            <View style={{ borderBottom: "1px solid black", width: 100, marginLeft: 5 }}>
                <Text>{data.form9Blank1 || " "}</Text>
            </View>
            <Text>1. Ibinigay sa kanila nang personal ang patawag, o
            </Text>
        </View>

        <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 10 }}>
            <View style={{ borderBottom: "1px solid black", width: 100, marginLeft: 5 }}>
                <Text>{data.form9Blank2 || " "}</Text>
            </View>
            <Text>2. Ibinigay sa kanila ang patawag, subalit tinanggihan itong tanggapin, o
            </Text>
        </View>

        <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 10 }}>
            <View style={{ borderBottom: "1px solid black", width: 100, marginLeft: 5 }}>
                <Text>{data.form9Blank3 || " "}</Text>
            </View>
            <Text>3. Iniwan ang nasabing patawag sa kanilang bahay kay</Text>
            <View style={{ borderBottom: "1px solid black", width: 120, marginLeft: 5 }}>
                <Text>{data.form9Name || " "}</Text>
            </View>
        </View>

        <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 10, marginLeft: "110px" }}>
            <Text>sa isang taong may sapat na gulang at marunong magpasya at naninirahan doon, o</Text>
        </View>

        <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 10 }}>
            <View style={{ borderBottom: "1px solid black", width: 100, marginLeft: 5 }}>
                <Text>{data.form9Blank4 || " "}</Text>
            </View>
            <Text>4. Iniwan ang nasabing patawag sa kanya/kanilang tanggapan/lugar ng kanyang/ </Text>
        </View>

        <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 10, marginLeft: "110px" }}>
            <Text>kanilang tanggapan/lugar ng kanyang pinagtratrabahuan kay</Text>
            <View style={{ borderBottom: "1px solid black", width: 110, marginLeft: 5 }}>
                <Text>{data.form9Name1 || " "}</Text>
            </View>
        </View>

        <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 10, marginLeft: "110px" }}>
            <Text>isang tao na siyang namamahal dito.</Text>
        </View>

        {/* Right-Aligned Signatory */}
        <View style={styles.signatoryRight}>
          <View style={styles.signatoryLine}></View>
          <Text style={styles.signatoryText}>OPISYAL</Text>
          <Text>{'\n'}</Text> {/* Blank line */}
          <Text>{'\n'}</Text> {/* Blank line */}
        </View>

        <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 20, textAlign: "justify" }}>  
            <Text>Tinanggap ng Inirereklamo/Kinatawan</Text>
            <Text>{'\n'}</Text> {/* Blank line */}
            <Text>{'\n'}</Text> {/* Blank line */}
        </View>

        {/* Two-Column Layout */}
        <View style={styles.container}>
          {/* First Column */}
          <View style={styles.column}>
            <View style={styles.lineRow}>
              <View style={styles.signatoryLine}></View>
              <Text style={styles.signatoryText}>Pangalan, Lagda at Petsa</Text>
            </View>
            <Text>{'\n'}</Text> {/* Blank line */}
          </View>
          

          {/* Second Column */}
          <View style={styles.column}>
            <View style={styles.lineRow}>
              <View style={styles.signatoryLine}></View>
              <Text style={styles.signatoryText}>Pangalan, Lagda at Petsa</Text>
            </View>
          </View>
          <Text>{'\n'}</Text> {/* Blank line */}
        </View>

        <View style={styles.container}>
          {/* First Column */}
          <View style={styles.column}>
            <View style={styles.lineRow}>
              <View style={styles.signatoryLine}></View>
              <Text style={styles.signatoryText}>Pangalan, Lagda at Petsa</Text>
            </View>
          </View>
          

          {/* Second Column */}
          <View style={styles.column}>
            <View style={styles.lineRow}>
              <View style={styles.signatoryLine}></View>
              <Text style={styles.signatoryText}>Pangalan, Lagda at Petsa</Text>
            </View>
          </View>
          
        </View>





      </Page>

    </Document>
  );
};

export default FormDocu9;

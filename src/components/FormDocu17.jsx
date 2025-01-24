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
  },
  pormularyo: {
    textAlign: "left",
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
    textIndent: 35,
    marginTop: 15,
    marginBottom: 5,
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
    width: "150px", // Adjust the width of the input box
  },
  inputYear: {
    borderBottom: "1px solid black",
    fontSize: 11,
    padding: 2,
    width: "50px", // Adjust the width of the input box
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
    marginTop: 30, // Adjust the vertical positioning as needed
  },
  signatoryLine: {
    borderBottom: "1px solid black",
    width: "250px", // Adjust the width of the signatory line
    marginBottom: 5, // Add spacing between the line and the text
  },
  signatoryText: {
    fontSize: 11,
    textAlign: "center", // Center-align the text below the line
  },
  signatoryLeft: {
    flexDirection: "column",
    alignItems: "flex-start", // Align content to the left side
    marginTop: 30, // Adjust the vertical positioning as needed
  },
  signText: {
    fontSize: 11,
    textAlign: "center", // Center-align the text below the line
    marginLeft: "10px",
  },
  signaText: {
    fontSize: 11,
    textAlign: "center", // Center-align the text below the line
    marginLeft: "0px",
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
    alignContent: "center",
  },
  patawagLine: {
    borderBottom: "1px solid black", // Create the horizontal line
    marginTop: "20px", // Add spacing between lines in a row
    marginBottom: "5px", // Add spacing between lines in a row
    width: "70%", // Full width of the column
    marginLeft: "40px",
  },
  patawagText: {
    fontSize: 11,
    marginLeft: "20px", // Center-align text under the lines
    marginTop: 5, // Add spacing between the line and text
  },
  divider: {
    width: 1,
    backgroundColor: "black",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
    marginTop: 5,
  },
  checkbox: {
    marginLeft: 35,
    width: 12,
    height: 12,
    borderWidth: 1,
    borderColor: "black",
    marginRight: 5,
  },
  checked: {
    width: 8,
    height: 8,
    backgroundColor: "black",
    marginLeft: 2,
  },
  explanation: {
    marginLeft: 60,
    marginRight: 35,
    marginBottom: 10,
    textDecoration: "underline",
    textAlign: "justify",
  },
});

const FormDocu17 = ({ data }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Form Header */}
        <View style={styles.kpNum}>
          <Text>KP Case Number: {data.form17KpNum || "                    "}</Text>
        </View>
        <br />
        <View style={styles.pormularyo}>
          <Text>Pormularyo ng KP Blg. 17</Text>
        </View>
        <br />
        <View style={styles.header}>
          <Text>Republika ng Pilipinas</Text>
          <Text>Lalawigan ng Kabite</Text>
          <Text>Bayan ng Indang</Text>
          <Text>Barangay Poblacion 1</Text>
        </View>
        <br /> 
        <View style={styles.header}>
          <Text>TANGGAPAN NG LUPONG TAGAPAMAYAPA</Text>
        </View>

        {/* Two-Column Layout */}
        <View style={styles.twoColumnContainer}>
          {/* Left Column */}
          <View style={styles.column}>
          <View style={{ marginVertical: 10, textAlign: "left" }}>
            <Text style={{ borderBottom: "1px solid black", width: "75%", alignSelf: "left", marginBottom: 5 }}>
              {data.form17Maysumbong || " ".repeat(25)} {/* Creates the underline effect */}
            </Text>
            <Text style={{ borderBottom: "1px solid black", width: "75%", alignSelf: "left", marginBottom: 5, marginTop: 10 }}>
              {data.form17Maysumbong1 || " ".repeat(25)} {/* Creates the underline effect */}
            </Text>
            <Text style={{ fontStyle: "italic", marginBottom: 2, marginLeft: "37px" }}>(Mga) Maysumbong</Text>
            <Text style={{ fontStyle: "italic", marginBottom: 2, marginLeft: "40px" }}>-laban kay/kina-</Text>
          </View>

          <View style={{ marginVertical: 10, textAlign: "left" }}>
            <Text style={{ borderBottom: "1px solid black", width: "75%", alignSelf: "left", marginBottom: 5 }}>
              {data.form17Ipinagsumbong || " ".repeat(25)} {/* Creates the underline effect */}
            </Text>
            <Text style={{ borderBottom: "1px solid black", width: "75%", alignSelf: "left", marginBottom: 5,  marginTop: 10 }}>
              {data.form17Ipinagsumbong1 || " ".repeat(25)} {/* Creates the underline effect */}
            </Text>
            <Text style={{ marginLeft: "25px", marginBottom: 2 }}>(Mga) Ipinagsusumbong</Text>
          </View>
          </View>

          {/* Right Column */}
          <View style={styles.column}>
          <View style={styles.formRowRight}>
            <Text style={styles.label}>Usaping Barangay Blg.:</Text>
            <Text style={styles.inputLine}>
              {data.form17Blg || " "}
            </Text>
          </View>
            <View style={styles.formRowRight}>
              <Text style={styles.label}>Ukol sa:</Text>
              <Text style={styles.inputLiney}>{data.form17Ukol || " "}</Text>
            </View>
          </View>
        </View>

        {/* Textarea */}
        <View style={styles.section}>
          <Text style={styles.center}>PAGTATANGGI</Text> 
          <Text style={styles.indent}> Sa pamamagitan nito’y itinatanggi ko/naming ang
                pag-aayos/kasunduan sa paghahatol sapagkat ang akin/aming
                pag-sang-ayon ay walang saysay dahilan sa:</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>(Lagyan ng tsek ang angkop)</Text>
        </View>


        {/* Checkboxes */}
        <View style={styles.section}>
            {/* Checkbox 1 */}
            <View style={styles.checkboxContainer}>
                <View style={styles.checkbox}>
                    {data.form17Checkbox1 && <View style={styles.checked} />}
                </View>
                <Text style={styles.label}> - Panlilinlang (Ipaliwanag):</Text>
            </View>
            {data.form17Checkbox1 && (
            <Text style={styles.explanation}>{data.form17Panlilinlang}</Text>
            )}

            {/* Checkbox 2 */}
            <View style={styles.checkboxContainer}>
                <View style={styles.checkbox}>
                    {data.form17Checkbox2 && <View style={styles.checked} />}
                </View>
                <Text style={styles.label}> - Karahasan (Ipaliwanag):</Text>
            </View>
            {data.form17Checkbox2 && (
            <Text style={styles.explanation}>{data.form17Karahasan}</Text>
            )}

            {/* Checkbox 3 */}
            <View style={styles.checkboxContainer}>
                <View style={styles.checkbox}>
                    {data.form17Checkbox3 && <View style={styles.checked} />}
                </View>
                <Text style={styles.label}> - Pananakot (Ipaliwanag):</Text>
                </View>
            {data.form17Checkbox3 && (
            <Text style={styles.explanation}>{data.form17Pananakot}</Text>
            )}
        </View>

        {/* Date */}
        <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 10, marginTop: 10, marginLeft: 35 }}>         
            <Text>Ngayong ika- </Text>
            <View style={{ borderBottom: "1px solid black", width: 40, marginLeft: 5 }}>
                <Text>{data.form17Day || " "}</Text>
            </View>
            <Text> araw ng </Text>
            <View style={{ borderBottom: "1px solid black", width: 100, marginLeft: 5 }}>
                <Text>{data.form17Month || " "}</Text>
            </View>
            <Text>, 20 </Text>
            <View style={{ borderBottom: "1px solid black", width: 40, marginLeft: 5 }}>
                <Text>{data.form17Year || " "}</Text>
            </View>
            <Text>. </Text>
        </View>

        {/* Two-Column Layout */}
        <View style={styles.container}>
          {/* First Column */}
          <View style={styles.column}>
            <View style={styles.lineRow}>
              <Text style={{textAlign: "center"}}>(Mga) May Sumbong</Text>
              <View style={styles.patawagLine}></View>
              <View style={styles.patawagLine}></View>
            </View>
          </View>

          {/* Second Column */}
          <View style={styles.column}>
            <View style={styles.lineRow}>
            <Text style={{textAlign: "center"}}>(Mga) Ipinagsusumbong</Text>
              <View style={styles.patawagLine}></View>
              <View style={styles.patawagLine}></View>
            </View>
          </View>
        </View>

        {/* Date */}
        <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 5, marginTop: 5, marginLeft: 35 }}>         
            <Text>NILAGDAAN AT PINANUMPAAN sa harap ko ngayong ika- </Text>
            <View style={{ borderBottom: "1px solid black", width: 40, marginLeft: 5 }}>
                <Text>{data.form17DaySigned || " "}</Text>
            </View>
            <Text> araw ng </Text>
            <View style={{ borderBottom: "1px solid black", width: 100, marginLeft: 5 }}>
                <Text>{data.form17MonthSigned || " "}</Text>
            </View>
        </View>

        <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 10, marginLeft: 35 }}>         
            <Text>, 20 </Text>
            <View style={{ borderBottom: "1px solid black", width: 40, marginLeft: 5 }}>
                <Text>{data.form17YearSigned || " "}</Text>
            </View>
            <Text>sa </Text>
            <View style={{ borderBottom: "1px solid black", width: 100, marginLeft: 5 }}>
                <Text>{data.form17PlaceSigned || " "}</Text>
            </View>
            <Text>. </Text>
        </View>
        
        {/* Left-Aligned Signatory */}
        <View style={styles.signatoryLeft}>
          <View style={styles.signatoryLine}></View>
          <Text style={styles.signaText}>Punong Barangay/Tagapangulo ng Pangkat/Kasapi</Text>
        </View>

        {/* Date */}
        <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 10, marginTop: 10, marginLeft: 35 }}>         
            <Text>Tinanggap at inihain ngayong ika- </Text>
            <View style={{ borderBottom: "1px solid black", width: 40, marginLeft: 5 }}>
                <Text>{data.form17DayReceived || " "}</Text>
            </View>
            <Text> araw ng </Text>
            <View style={{ borderBottom: "1px solid black", width: 100, marginLeft: 5 }}>
                <Text>{data.form17MonthReceived || " "}</Text>
            </View>
            <Text>, 20 </Text>
            <View style={{ borderBottom: "1px solid black", width: 40, marginLeft: 5 }}>
                <Text>{data.form17YearReceived || " "}</Text>
            </View>
            <Text>. </Text>
        </View>

        <View style={styles.section}> 
          <Text style={styles.indent}>*Ang hindi pagtanggi sa pag-aayos o kasunduan ng paghahatol ng
                tagapamagitan sa loob ng taning na panahon, alinsunod sa
                itinakdang sampong (10) araw ay ipapalagay na sa isang
                pagtatakwil sa karapatang tumutol batay sa nasabing kadahilanan.</Text>
        </View>
      </Page>
    </Document>
  );
};

export default FormDocu17;
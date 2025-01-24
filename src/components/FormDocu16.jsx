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
    marginTop: 20,
    marginBottom: 5,
    lineHeight: 1,
  },
  bullet: {
    textIndent: 35,
    marginTop: 5,
    lineHeight: 1,
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
    width: "200px", // Adjust the width of the signatory line
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
    marginLeft: "70px",
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
});

// Component to render the form document
const FormDocu16 = ({ data }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Form Header */}
        <View style={styles.kpNum}>
          <Text>KP Case Number: {data.form16KpNum || "                    "}</Text>
        </View>
        <br />
        <View style={styles.pormularyo}>
          <Text>Pormularyo ng KP Blg. 16</Text>
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
            <Text style={{ borderBottom: "1px solid black", width: "35%", alignSelf: "left", marginBottom: 5 }}>
              {data.form16Maysumbong || " ".repeat(25)} {/* Creates the underline effect */}
            </Text>
            <Text style={{ borderBottom: "1px solid black", width: "35%", alignSelf: "left", marginBottom: 5, marginTop: 10 }}>
              {data.form16Maysumbong1 || " ".repeat(25)} {/* Creates the underline effect */}
            </Text>
            <Text style={{ fontStyle: "italic", marginBottom: 2, marginLeft: "37px" }}>(Mga) Maysumbong</Text>
            <Text style={{ fontStyle: "italic", marginBottom: 2, marginLeft: "40px" }}>-laban kay/kina-</Text>
          </View>

          <View style={{ marginVertical: 10, textAlign: "left" }}>
            <Text style={{ borderBottom: "1px solid black", width: "35%", alignSelf: "left", marginBottom: 5 }}>
              {data.form16Ipinagsumbong || " ".repeat(25)} {/* Creates the underline effect */}
            </Text>
            <Text style={{ borderBottom: "1px solid black", width: "35%", alignSelf: "left", marginBottom: 5,  marginTop: 10 }}>
              {data.form16Ipinagsumbong1 || " ".repeat(25)} {/* Creates the underline effect */}
            </Text>
            <Text style={{ marginLeft: "25px", marginBottom: 2 }}>(Mga) Ipinagsusumbong</Text>
          </View>
          </View>
        </View>

        {/* Textarea */}
        <View style={styles.section}>
          <Text style={styles.center}>KASUNDUANG PAG-AAYOS</Text> 
          <Text style={styles.indent}>Kami, ang mga maysumbong at (mga) ipinagsusumbong sa mga usaping
                isinasaad sa itaas, ay nagkakasundo sa pamamagitan nito na
                aayusing ang aming alitan tulad ng mga sumusunod:</Text>
        </View>
        <View>
          {[...Array(3)].map((_, index) => (
            <Text key={index} style={styles.line}>
              {data.form15Gawad || " "}
            </Text>
          ))}
        </View>
        <View style={styles.section}>
          <Text style={{textAlign: "left"}}>at nangangako na aming tutuparin ng may katapatan ang mga
          alituntunin ng pag-aayos.</Text>
        </View>


        {/* Date */}
        <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 10, marginTop: 10, marginLeft: 35 }}>         
            <Text>Pinagkasunduan ngayong ika- </Text>
            <View style={{ borderBottom: "1px solid black", width: 40, marginLeft: 5 }}>
                <Text>{data.form15Day || " "}</Text>
            </View>
            <Text> araw ng </Text>
            <View style={{ borderBottom: "1px solid black", width: 100, marginLeft: 5 }}>
                <Text>{data.form15Month || " "}</Text>
            </View>
            <Text>, 20 </Text>
            <View style={{ borderBottom: "1px solid black", width: 40, marginLeft: 5 }}>
                <Text>{data.form15Year || " "}</Text>
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

        <View style={styles.section}>
          <Text style={styles.center}>PAGPAPATUNAY</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.indent}>Pinatutunayan ko sa pamamagitan nito na ang sinundang kasunduan
                ng pag-aayos ay pinagkasunduan ng mga panig nang Malaya at
                kusang-loob, matapos kong maipaliwanag sa kanila kung ano ang
                pag-aayos na ito at ang mga kahihinatnan nito.</Text>
        </View>

        <View style={styles.signatoryLeft}>
          <View style={styles.signatoryLine}></View>
          <Text style={styles.signText}>Punong Barangay/Kalihim ng Lupon</Text>
        </View>
      </Page>
    </Document>
  );
};

export default FormDocu16;
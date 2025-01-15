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
    indent: 20,
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
    marginRight: "37px",
  },
  signatoryLeft: {
    flexDirection: "column",
    alignItems: "flex-start", // Align content to the left side
    marginTop: 50, // Adjust the vertical positioning as needed
  },
  signText: {
    fontSize: 11,
    textAlign: "center", // Center-align the text below the line
    marginLeft: "10px",
  },
  twoColumnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10, // Add space between rows of columns
  },
  column: {
    flex: 1,
    paddingHorizontal: 10, // Add spacing between content and column borders
  },
  divider: {
    width: 1,
    backgroundColor: "black",
  },
});

// Component to render the form document
const FormDocuments = ({ data }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Form Header */}
        <View style={styles.kpNum}>
          <Text>KP Case Number: {data.form7KpCaseNumber || "                    "}</Text>
        </View>
        <br />
        <View style={styles.pormularyo}>
          <Text>Pormularyo ng KP Blg. 7</Text>
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
          <View style={{ marginVertical: 15, textAlign: "center" }}>
            <Text style={{ borderBottom: "1px solid black", width: "75%", alignSelf: "center", marginBottom: 5 }}>
              {data.form7MaySumbong || " ".repeat(25)} {/* Creates the underline effect */}
            </Text>
            <Text style={{ borderBottom: "1px solid black", width: "75%", alignSelf: "center", marginBottom: 5 }}>
              {data.form7MaySumbong || " ".repeat(25)} {/* Creates the underline effect */}
            </Text>
            <Text style={{ fontStyle: "italic", marginBottom: 2 }}>(Mga) Maysumbong</Text>
            <Text>-laban kay/kina-</Text>
          </View>

          <View style={{ marginVertical: 15, textAlign: "center" }}>
            <Text style={{ borderBottom: "1px solid black", width: "75%", alignSelf: "center", marginBottom: 5 }}>
              {data.form7Ipinagsumbong || " ".repeat(25)} {/* Creates the underline effect */}
            </Text>
            <Text style={{ borderBottom: "1px solid black", width: "75%", alignSelf: "center", marginBottom: 5 }}>
              {data.form7Ipinagsumbong || " ".repeat(25)} {/* Creates the underline effect */}
            </Text>
            <Text style={{ fontStyle: "italic", marginBottom: 2 }}>(Mga) Ipinagsusumbong</Text>
          </View>
          </View>

          {/* Right Column */}
          <View style={styles.column}>
          <View style={styles.formRowRight}>
            <Text style={styles.label}>Usaping Barangay Blg.:</Text>
            <Text style={styles.inputLine}>
              {data.form7Blg || " "}
            </Text>
          </View>
            <View style={styles.formRowRight}>
              <Text style={styles.label}>Ukol sa:</Text>
              <Text style={styles.inputLiney}>{data.form7UkolSa || " "}</Text>
            </View>
          </View>
        </View>

        {/* Textarea */}
        <View style={styles.section}>
          <Text style={styles.center}>REKLAMO</Text> 
          <br /> 
          <br />
          <Text style={styles.indent}> AKO/KAMI, ay nagrereklamo laban sa mga ipinagsusumbong na binanggit sa itaas dahil sa paglabag sa aking/aming mga karapatan at kapakanan sa sumusunod na pamamaraan:
          </Text>
        </View>
        <View>
          {[...Array(8)].map((_, index) => (
            <Text key={index} style={styles.line}>
              {data.reklamo || " "}
            </Text>
          ))}
        </View>
        <br /> 
          <br />
        <View style={styles.section}>          
          <Text style={styles.indent}> DAHIL DITO, AKO/KAMI, na nakikiusap na ipagkaloob sa akin/amin ang sumusunod na (mga) kalunasan nang naaalinsunod sa batas at/o pagkamakatuwiran:
          </Text>
        </View>
        <View>
          {[...Array(2)].map((_, index) => (
            <Text key={index} style={styles.line}>
              {data.resolutionRequest || " "}
            </Text>
          ))}
        </View>
        

        {/* Footer */}
        <View style={styles.formRow}>
          <br />
          <br />
          <Text style={styles.label}>Ginawa ngayong ika-</Text>
          <Text style={styles.inputDay}>{data.form7Day || "  "}</Text>
          <Text style={styles.label}>araw ng</Text>
          <Text style={styles.inputMonth}>{data.form7Month || " "}</Text>
          <Text style={styles.label}>, 20</Text>
          <Text style={styles.inputYear}>{data.form7Year || " "}</Text>
          <br />
        </View>
        
        {/* Right-Aligned Signatory */}
        <View style={styles.signatoryRight}>
          <View style={styles.signatoryLine}></View>
          <Text style={styles.signatoryText}>(Mga) May Sumbong</Text>
        </View>
        <br />
        <View style={styles.formRow}>
          <Text style={styles.label}>Tinanggap at inihain ngayong ika-</Text>
          <Text style={styles.inputDay}>{data.form7ReceiveDay || " "}</Text>
          <Text style={styles.label}>araw ng</Text>
          <Text style={styles.inputMonth}>{data.form7ReceiveMonth || " "}</Text>
          <Text style={styles.label}>20</Text>
          <Text style={styles.inputYear}>{data.form7ReceiveYear || " "}</Text>
        </View>
        {/* Left-Aligned Signatory */}
        <View style={styles.signatoryLeft}>
          <br />
          <View style={styles.signatoryLine}></View>
          <Text style={styles.signText}>Punong Barangay/Kalihim ng Lupon</Text>
        </View>
      </Page>
    </Document>
  );
};

export default FormDocuments;

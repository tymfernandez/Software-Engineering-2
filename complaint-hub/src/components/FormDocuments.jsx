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
  inputBox: {
    borderBottom: "1px solid black",
    fontSize: 11,
    padding: 2,
  },
  textarea: {
    border: "1px solid black",
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
          <Text>KP Case Number: {data.form7KpCaseNumber || "____________________"}</Text>
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
          <Text>Barangay Poblation 1</Text>
        </View>
        <br /> 
        <View style={styles.header}>
          <Text>TANGGAPAN NG LUPONG TAGAPAMAYAPA</Text>
        </View>

        {/* Two-Column Layout */}
        <View style={styles.twoColumnContainer}>
          {/* Left Column */}
          <View style={styles.column}>
          <View style={styles.formRow}>
              <Text style={styles.inputBox}>{data.form7MaySumbong || "____________________"}</Text> <br />
              <Text style={styles.inputBox}>{data.form7MaySumbong || "____________________"}</Text> <br />
              <Text style={styles.center}>(Mga) May Sumbong:</Text>
              <Text style={styles.center}>(Mga) -laban kay/kina- </Text> <br /> <br />
            </View>
            <View style={styles.formRow}>
              <Text style={styles.inputBox}>{data.form7Ipinagsumbong || "____________________"}</Text>
              <Text style={styles.inputBox}>{data.form7Ipinagsumbong || "____________________"}</Text>
              <Text style={styles.center}>(Mga) Ipinagsusumbong:</Text>
            </View>
          </View>

          {/* Divider (Optional) */}
          <View style={styles.divider} />

          {/* Right Column */}
          <View style={styles.column}>
            
          </View>
        </View>

        {/* Footer */}
        <View style={styles.formRow}>
          <Text style={styles.label}>Ginawa ngayong ika-</Text>
          <Text style={styles.inputBox}>{data.form7Day || "___"}</Text>
          <Text style={styles.label}>araw ng</Text>
          <Text style={styles.inputBox}>{data.form7Month || "__________"}</Text>
          <Text style={styles.label}>20</Text>
          <Text style={styles.inputBox}>{data.form7Year || "__"}</Text>
        </View>
        <View style={styles.formRow}>
          <Text style={styles.label}>Tinanggap at inihain ngayong ika-</Text>
          <Text style={styles.inputBox}>{data.form7ReceiveDay || "___"}</Text>
          <Text style={styles.label}>araw ng</Text>
          <Text style={styles.inputBox}>{data.form7ReceiveMonth || "__________"}</Text>
          <Text style={styles.label}>20</Text>
          <Text style={styles.inputBox}>{data.form7ReceiveYear || "__"}</Text>
        </View>
        <View style={styles.signSection}>
          <Text style={styles.footer}>(Mga) May Sumbong</Text>
          <Text style={styles.footer}>Punong Barangay/Kalihim ng Lupon</Text>
        </View>
      </Page>
    </Document>
  );
};

export default FormDocuments;

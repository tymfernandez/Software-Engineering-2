import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

// Define styles for the PDF document
const styles = StyleSheet.create({
  page: {
    fontFamily: "Arial",
    padding: 20,
    fontSize: 11,
    lineHeight: 1.5,
    color: "black", // Changed from "white" to "black" for visibility
  },
  section: {
    marginBottom: 15,
  },
  label: {
    fontWeight: "bold",
  },
  text: {
    marginBottom: 5,
  },
  signatureLine: {
    marginTop: 10,
    borderTop: "1px solid black",
    width: "100%",
  },
});

const FormDocuments = ({ data }) => {
  // Validate the incoming data object to avoid null/undefined errors
  if (!data) {
    return (
      <Document>
        <Page size="A4" style={styles.page}>
          <Text>No data provided for this document.</Text>
        </Page>
      </Document>
    );
  }

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* KP Case Number */}
        <View style={styles.section}>
          <Text style={styles.label}>KP Case Number:</Text>
          <Text style={styles.text}>{data.form7KpCaseNumber || "N/A"}</Text>
        </View>

        {/* Barangay and Complaint Details */}
        <View style={styles.section}>
          <Text style={styles.label}>Republika ng Pilipinas</Text>
          <Text>Barangay Poblacion 1</Text>
          <Text>Usaping Barangay Blg: {data.form7Blg || "N/A"}</Text>
          <Text>Ukol sa: {data.form7UkolSa || "N/A"}</Text>
        </View>

        {/* Sumbong and Ipinagsumbong */}
        <View style={styles.section}>
          <Text style={styles.label}>(Mga) May Sumbong:</Text>
          <Text>{data.form7MaySumbong || "N/A"}</Text>
          <Text style={styles.label}>(Mga) Ipinagsumbong:</Text>
          <Text>{data.form7Ipinagsumbong || "N/A"}</Text>
        </View>

        {/* Reklamo */}
        <View style={styles.section}>
          <Text style={styles.label}>Reklamo:</Text>
          <Text>{data.reklamo || "N/A"}</Text>
        </View>

        {/* Resolution Request */}
        <View style={styles.section}>
          <Text style={styles.label}>Request for Resolution:</Text>
          <Text>{data.resolutionRequest || "N/A"}</Text>
        </View>

        {/* Date Section */}
        <View style={styles.section}>
          <Text>
            Ginawa ngayong ika-{data.form7Day || "___"} araw ng{" "}
            {data.form7Month || "___"}, 20{data.form7Year || "___"}.
          </Text>
        </View>

        {/* Receive Date Section */}
        <View style={styles.section}>
          <Text>
            Tinanggap at inihain ngayong ika-{data.form7ReceiveDay || "___"} araw
            ng {data.form7ReceiveMonth || "___"}, 20
            {data.form7ReceiveYear || "___"}.
          </Text>
        </View>

        {/* Signatures */}
        <View style={styles.section}>
          <View style={styles.signatureLine}></View>
          <Text>(Mga) May Sumbong</Text>
        </View>
        <View style={styles.section}>
          <View style={styles.signatureLine}></View>
          <Text>Punong Barangay/Kalihim ng Lupon</Text>
        </View>
      </Page>
    </Document>
  );
};

export default FormDocuments;

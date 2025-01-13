import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

// Styles to match your original form design
const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: "Helvetica",
    fontSize: 11,
    backgroundColor: "#f0f8ff", // Light blue background
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 12,
    textAlign: "center",
    marginBottom: 15,
  },
  header: {
    textAlign: "center",
    marginBottom: 10,
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
  inputBox: {
    flex: 1,
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
});

// Component to render the form document
const FormDocuments = ({ data }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Title and Subtitle */}
        <Text style={styles.title}>FORM 7: SUMBONG</Text>
        <Text style={styles.subtitle}>
          Submit complaints for documentation and resolution by the Barangay
        </Text>

        {/* Form Fields */}
        <View style={styles.header}>
          <Text>Form Number: KP Blg. 7</Text>
          <Text>Republika ng Pilipinas</Text>
          <Text>Lalawigan ng Kabite</Text>
          <Text>Bayan ng Indang</Text>
          <Text>Barangay Poblation 1</Text>
        </View>

        <View style={styles.formRow}>
          <Text style={styles.label}>KP Case Number:</Text>
          <Text style={styles.inputBox}>{data.kpCaseNumber || "____________________"}</Text>
        </View>

        <View style={styles.formRow}>
          <Text style={styles.label}>Usaping Barangay Blg.:</Text>
          <Text style={styles.inputBox}>{data.usapingBarangay || "____________________"}</Text>
        </View>

        <View style={styles.formRow}>
          <Text style={styles.label}>Ukol sa:</Text>
          <Text style={styles.inputBox}>{data.ukolSa || "____________________"}</Text>
        </View>

        <View style={styles.formRow}>
          <Text style={styles.label}>(Mga) May Sumbong:</Text>
          <Text style={styles.inputBox}>{data.maySumbong || "____________________"}</Text>
        </View>

        <View style={styles.formRow}>
          <Text style={styles.label}>-laban kay/kina-:</Text>
          <Text style={styles.inputBox}>{data.labanKay || "____________________"}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>REKLAMO:</Text>
          <Text style={styles.textarea}>
            {data.reklamo ||
              "____________________________________________\n____________________________________________"}
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>
            DAHIL DITO, AKO/KAMI, na nakikiusap na ipagkaloob sa akin/amin ang sumusunod na (mga)
            kalunasan nang naaayon sa batas:
          </Text>
          <Text style={styles.textarea}>
            {data.resolutionRequest ||
              "____________________________________________\n____________________________________________"}
          </Text>
        </View>

        <View style={styles.formRow}>
          <Text style={styles.label}>Ginawa ngayong ika-</Text>
          <Text style={styles.inputBox}>{data.day || "___"}</Text>
          <Text style={styles.label}>araw ng</Text>
          <Text style={styles.inputBox}>{data.month || "__________"}</Text>
          <Text style={styles.label}>20</Text>
          <Text style={styles.inputBox}>{data.year || "__"}</Text>
        </View>

        <View style={styles.formRow}>
          <Text style={styles.label}>Tinanggap at inihain ngayong ika-</Text>
          <Text style={styles.inputBox}>{data.receiveDay || "___"}</Text>
          <Text style={styles.label}>araw ng</Text>
          <Text style={styles.inputBox}>{data.receiveMonth || "__________"}</Text>
          <Text style={styles.label}>20</Text>
          <Text style={styles.inputBox}>{data.receiveYear || "__"}</Text>
        </View>

        {/* Footer */}
        <View>
          <Text style={styles.footer}>(Mga) May Sumbong</Text>
          <Text style={styles.footer}>Punong Barangay/Kalihim ng Lupon</Text>
        </View>
      </Page>
    </Document>
  );
};

export default FormDocuments;

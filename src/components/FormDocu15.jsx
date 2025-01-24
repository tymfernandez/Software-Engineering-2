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
const FormDocu15 = ({ data }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Form Header */}
        <View style={styles.kpNum}>
          <Text>KP Case Number: {data.form15KpNum || "                    "}</Text>
        </View>
        <br />
        <View style={styles.pormularyo}>
          <Text>Pormularyo ng KP Blg. 15</Text>
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
              {data.form15Maysumbong || " ".repeat(25)} {/* Creates the underline effect */}
            </Text>
            <Text style={{ borderBottom: "1px solid black", width: "75%", alignSelf: "left", marginBottom: 5, marginTop: 10 }}>
              {data.form15Maysumbong1 || " ".repeat(25)} {/* Creates the underline effect */}
            </Text>
            <Text style={{ fontStyle: "italic", marginBottom: 2, marginLeft: "37px" }}>(Mga) Maysumbong</Text>
            <Text style={{ fontStyle: "italic", marginBottom: 2, marginLeft: "40px" }}>-laban kay/kina-</Text>
          </View>

          <View style={{ marginVertical: 10, textAlign: "left" }}>
            <Text style={{ borderBottom: "1px solid black", width: "75%", alignSelf: "left", marginBottom: 5 }}>
              {data.form15Ipinagsumbong || " ".repeat(25)} {/* Creates the underline effect */}
            </Text>
            <Text style={{ borderBottom: "1px solid black", width: "75%", alignSelf: "left", marginBottom: 5,  marginTop: 10 }}>
              {data.form15Ipinagsumbong1 || " ".repeat(25)} {/* Creates the underline effect */}
            </Text>
            <Text style={{ marginLeft: "25px", marginBottom: 2 }}>(Mga) Ipinagsusumbong</Text>
          </View>
          </View>

          {/* Right Column */}
          <View style={styles.column}>
          <View style={styles.formRowRight}>
            <Text style={styles.label}>Usaping Barangay Blg.:</Text>
            <Text style={styles.inputLine}>
              {data.form15Blg || " "}
            </Text>
          </View>
            <View style={styles.formRowRight}>
              <Text style={styles.label}>Ukol sa:</Text>
              <Text style={styles.inputLiney}>{data.form15Ukol || " "}</Text>
            </View>
          </View>
        </View>

        {/* Textarea */}
        <View style={styles.section}>
          <Text style={styles.center}>GAWAD NG PAGHAHATOL</Text> 
          <Text style={styles.indent}> Matapos marinig ang mga salaysay na ipinahayag at maingat na
                pagsusuri ng katibayan na iniharap sa usaping ito, iginagawad
                ang mga sumusunod:</Text>
        </View>
        <View>
          {[...Array(3)].map((_, index) => (
            <Text key={index} style={styles.line}>
              {data.form15Gawad || " "}
            </Text>
          ))}
        </View>
        <br /> 
          <br />        

        {/* Footer */}
        <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 10, marginTop: 10, marginLeft: 35 }}>         
            <Text>Ginawa ngayong ika- </Text>
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
            <Text>sa </Text>
            <View style={{ borderBottom: "1px solid black", width: 100, marginLeft: 5 }}>
                <Text>{data.form15Place || " "}</Text>
            </View>
            <Text>. </Text>
        </View>
        
        {/* Right-Aligned Signatory */}
        <View style={styles.signatoryRight}>
          <View style={styles.signatoryLine}></View>
          <Text style={styles.signatoryText}>Punong Barangay/Tagapangulo ng Pangkat</Text>
        </View>
        
        
        
        {/* Left-Aligned Signatory */}
        <View style={styles.signatoryLeft}>
          <View style={styles.signatoryLine}></View>
          <Text style={styles.signaText}>Kasapi</Text>
        </View>

        <View style={styles.signatoryLeft}>
          <View style={styles.signatoryLine}></View>
          <Text style={styles.signaText}>Kasapi</Text>
        </View>

        <View style={styles.signatoryLeft}>
          <Text style={{marginBottom: 20}}>PINATUNAYAN: </Text>
          <View style={styles.signatoryLine}></View>
          <Text style={styles.signText}>Punong Barangay/Kalihim ng Lupon</Text>
        </View>

        <View style={styles.section}> 
          <Text>{'\n'}</Text> {/* Blank line */}
          <Text style={styles.bullet}>• Lagdaaan ng sinuman sa gumawa ng gawad na paghahatol.</Text>
          <Text style={{marginLeft: 35}}>• Lalagdaan ng Punong Barangay kung ang gawad ay ginawa ng
                  Tagapangulo ng Pangkat at ng kalihim ng Lupon, kung ang gawad
                  ay ginawa ng Punong Barangay.</Text>
        </View>
      </Page>
    </Document>
  );
};

export default FormDocu15;
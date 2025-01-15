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
    marginTop: "20px",
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
const FormDocu8 = ({ data }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Form Header */}
        <View style={styles.kpNum}>
          <Text>KP Case Number: {data.form8KpCaseNumber || "                    "}</Text>
        </View>
        <br />
        <View style={styles.pormularyo}>
          <Text>Pormularyo ng KP Blg. 8</Text>
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

         {/* Right Column */}
        <View style={styles.formRowRight}>
            <Text style={styles.inputLine}>
                {data.form8Date || " "}
                </Text>
                <Text style={styles.label}>, 20</Text>
                <Text style={styles.inputLineYear}>
                {data.form8Year || " "}
            </Text>
        </View>

        <View style={styles.section}>
            <Text style={styles.center}>PAABISO NG PAGDINIG</Text>
            <br />
            <Text style={styles.center}>(Mga Hakbang ng Pamamagitan)</Text>
        </View>
        
        <View style={styles.section}>
          <View style={{ marginVertical: 15, textAlign: "left" }}>
            <Text>KAY: </Text>
            <Text style={{ borderBottom: "1px solid black", width: "150px", alignSelf: "left", marginBottom: 5, justifyContent: "flex-start" }}>
                {data.form8Kay || " ".repeat(25)} {/* Creates the underline effect */}
            </Text>
            <Text style={{ borderBottom: "1px solid black", width: "150px", alignSelf: "left", marginBottom: 5, justifyContent: "flex-start" }}>
                {data.form8Sumbong || " ".repeat(25)} {/* Creates the underline effect */}
            </Text>
            <Text style={{ fontStyle: "italic", marginBottom: 2, marginLeft: "25px" }}>(Mga) Maysumbong</Text> <br />
          </View>
          <Text>{'\n'}</Text> {/* Blank line */}
        </View>

        {/*Body*/}
        <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 10 }}>
            <Text>Ikaw ay inuutusan na humarap sa akin sa </Text>
            <View style={{ borderBottom: "1px solid black", width: 60, marginLeft: 5 }}>
                <Text>{data.form8DayUtos || " "}</Text>
            </View>
            <Text> araw ng </Text>
            <View style={{ borderBottom: "1px solid black", width: 100, marginLeft: 5 }}>
                <Text>{data.form8MonthUtos || " "}</Text>
            </View>
            <Text>, 20 </Text>
            <View style={{ borderBottom: "1px solid black", width: 50, marginLeft: 5 }}>
                <Text>{data.form8YearUtos || " "}</Text>
            </View>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 10 }}>
            <Text>Sa ganap na ika </Text>
            <View style={{ borderBottom: "1px solid black", width: 100, marginLeft: 5 }}>
                <Text>{data.form8Time || " "}</Text>
            </View>
            <Text> ng umaga/hapon para sa pagdinig ng iyong sumbong. </Text>
            <Text>{'\n'}</Text> {/* Blank line */}
            <Text>{'\n'}</Text> {/* Blank line */}
        </View>
        

        {/* Footer */}
        <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 10, marginTop: 20 }}>         
            <Text>Ngayong ika- </Text>
            <View style={{ borderBottom: "1px solid black", width: 60, marginLeft: 5 }}>
                <Text>{data.form8DayNow || " "}</Text>
            </View>
            <Text> araw ng </Text>
            <View style={{ borderBottom: "1px solid black", width: 100, marginLeft: 5 }}>
                <Text>{data.form8MonthNow || " "}</Text>
            </View>
            <Text>, 20 </Text>
            <View style={{ borderBottom: "1px solid black", width: 50, marginLeft: 5 }}>
                <Text>{data.form8YearNow || " "}</Text>
            </View>
            <Text>. </Text>
        </View>

        {/* Left-Aligned Signatory */}
        <View style={styles.signatoryLeft}>
          <br />
          <View style={styles.signatoryLine}></View>
          <Text style={styles.signText}>Punong Barangay/Tagapangulo ng Lupon</Text>
          <Text>{'\n'}</Text> {/* Blank line */}
          <Text>{'\n'}</Text> {/* Blank line */}
        </View>
        
        
        <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 10 }}>
            <Text>{'\n'}</Text> {/* Blank line */}
            <Text>Pinaaabisuhan ngayong ika- </Text>
            <View style={{ borderBottom: "1px solid black", width: 60, marginLeft: 5 }}>
                <Text>{data.form8DayNow || " "}</Text>
            </View>
            <Text> araw ng </Text>
            <View style={{ borderBottom: "1px solid black", width: 100, marginLeft: 5 }}>
                <Text>{data.form8MonthNow || " "}</Text>
            </View>
            <Text>, 20 </Text>
            <View style={{ borderBottom: "1px solid black", width: 50, marginLeft: 5 }}>
                <Text>{data.form8YearNow || " "}</Text>
            </View>
            <Text>. </Text>
        </View>

        {/* Right-Aligned Signatory */}
        <View style={styles.signatoryRight}>
          <View style={styles.signatoryLine}></View>
          <Text style={styles.signatoryText}>(Mga) May Sumbong</Text>
        </View>
        
      </Page>
    </Document>
  );
};

export default FormDocu8;

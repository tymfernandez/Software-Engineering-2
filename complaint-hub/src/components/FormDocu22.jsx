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
  note: {
    fontSize: 11,
    marginRight: 5,
    lineHeight: 1.5,
    textAlign: "justify",
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
  blockText: {
    textIndent: 35,
    marginTop: 5, // Add spacing from the top or previous elements
    marginBottom: 10,
    fontSize: 11,
    lineHeight: 1.5, // Adjust line height for better readability
    textAlign: "justify", // Justify text for a clean block appearance
},
});

// Component to render the form document
const FormDocu22 = ({ data }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Form Header */}
        <View style={styles.kpNum}>
          <Text>KP Case Number: {data.form22KpNum || "                    "}</Text>
        </View>
        
        <View style={styles.pormularyo}>
          <Text>Pormularyo ng KP Blg. 22</Text>
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
              {data.form22MaySumbong || " ".repeat(25)} {/* Creates the underline effect */}
            </Text>
            <Text style={{ borderBottom: "1px solid black", width: "75%", alignSelf: "left", marginBottom: 5,  marginTop: 10  }}>
              {data.form22MaySumbong1 || " ".repeat(25)} {/* Creates the underline effect */}
            </Text>
            <Text style={{ fontStyle: "italic", marginBottom: 2, marginLeft: "37px" }}>(Mga) Maysumbong</Text>
            <Text style={{ fontStyle: "italic", marginBottom: 2, marginLeft: "40px" }}>-laban kay/kina-</Text>
          </View>

          <View style={{ marginVertical: 15, textAlign: "left" }}>
            <Text style={{ borderBottom: "1px solid black", width: "75%", alignSelf: "left", marginBottom: 5 }}>
              {data.form22Ipinagsumbong || " ".repeat(25)} {/* Creates the underline effect */}
            </Text>
            <Text style={{ borderBottom: "1px solid black", width: "75%", alignSelf: "left", marginBottom: 5,  marginTop: 10  }}>
              {data.form22Ipinagsumbong1 || " ".repeat(25)} {/* Creates the underline effect */}
            </Text>
            <Text style={{ fontStyle: "italic", marginBottom: 2, marginLeft: "25px" }}>(Mga) Ipinagsusumbong</Text>
          </View>
          </View>

          {/* Right Column */}
          <View style={styles.column}>
          <View style={styles.formRowRight}>
            <Text style={styles.label}>Usaping Barangay Blg.:</Text>
            <Text style={styles.inputLine}>
              {data.form22Blg || " "}
            </Text>
          </View>
            <View style={styles.formRowRight}>
              <Text style={styles.label}>Ukol sa:</Text>
              <Text style={styles.inputLiney}>{data.form22Ukol || " "}</Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
            <Text style={styles.center}>KATIBAYAN UPANG HADLANGAN ANG GANTING SAKDAL</Text>
            <Text>{'\n'}</Text> {/* Blank line */}
        </View>

        <View>
          <Text style={styles.blockText}>
            Ito ay nagpapatunay na matapos ang nauunang abiso at pagdinig, ang (mga) Ipinagsusumbong na
            sina
            </Text>
        </View>

        <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 10 }}>
                    <View style={{ borderBottom: "1px solid black", width: 130, marginLeft: 5 }}>
                        <Text>{data.form22Pangalan || " "}</Text>
                    </View>
                    <Text> (pangalan at)</Text>
                    <View style={{ borderBottom: "1px solid black", width: 130, marginLeft: 5 }}>
                        <Text>{data.form22Pangalan1 || " "}</Text>
                    </View>
                    <Text>(pangalan) ay napatunayan na sinadya o</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 10, lineHeight: 1.2 }}>
            <Text>tumangging humarap ng walang makatwirang dahilan sa harap ng Punong Barangay/Pangakat ng Tagapagkasundo at dahil dito ang (mga) ipinagsusumbong ay hinahadlangan na maghain ng ganting-sakdal (kung mayroon man) na magmumula sa sumbong sa hukuman/ tanggapan ng pamahalaan.</Text>
        
        </View>

        <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10, marginLeft: 35}}>         
            <Text>Ngayong ika- </Text>
            <View style={{ borderBottom: "1px solid black", width: 60, marginLeft: 5 }}>
                <Text>{data.form22Day || " "}</Text>
            </View>
            <Text> araw ng </Text>
            <View style={{ borderBottom: "1px solid black", width: 100, marginLeft: 5 }}>
                <Text>{data.form22Month || " "}</Text>
            </View>
            <Text>, 20 </Text>
            <View style={{ borderBottom: "1px solid black", width: 50, marginLeft: 5 }}>
                <Text>{data.form22Year || " "}</Text>
            </View>
            <Text>. </Text>
        </View>

        {/* Right-Aligned Signatory */}
        <View style={styles.signatoryRight}>
          <View style={styles.signatoryLine}></View>
          <Text style={styles.signatoryText}>Kalihim ng Pangkat</Text>
        </View>


       <View>
            <Text style={styles.label}>
                Pinatunayan:
            </Text>
        </View>

        {/* Left-Aligned Signatory */}
        <View style={styles.signatoryLeft}>
          <br />
          <View style={styles.signatoryLine}></View>
          <Text style={styles.signText}>Punong Barangay/Tagapangulo ng Lupon</Text>
        </View>


        <View>
            <Text>{'\n'}</Text> {/* Blank line */}
            <Text>{'\n'}</Text> {/* Blank line */}
            <Text style={styles.note}>
             MAHALAGA: Kung ang Kalihim ng Lupon ang gumawa ng katibayan, ang Tagapangulo ng lupon ang magpapatunay. Kung ang Kalihim ng Pangkat ang gumawa ng katibayan, ang Tagapangulo ng Pangkat ang magpapatunay.
            </Text>
        </View>  
      </Page>
    </Document>
    );
}

export default FormDocu22;
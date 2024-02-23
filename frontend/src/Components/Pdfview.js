import React from "react";
import { useLocation } from "react-router-dom";

import {
  PDFViewer,
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";

const Pdfview = () => {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const data = params.get("data");

  const styles = StyleSheet.create({
    page: {
      flexDirection: "row",
    },
    section: {
      flexGrow: 1,
    },
  });

  return (
    <PDFViewer width="100%" height="500px">
      <Document>
        <Page size="A4" style={styles.page}>
          <div style={styles.section}>
            <h1>My PDF Content</h1>
            <p>This is a sample PDF created in React.</p>
          </div>
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default Pdfview;

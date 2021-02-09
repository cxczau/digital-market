import React, { useEffect, useState } from "react";
import { Form, Col, Button } from "react-bootstrap";
import jsPDF from "jspdf";
import { DeterminePosition } from "./Utility/MagicUtility";

const jsPDFSettings = {
  orientation: "p",
  unit: "mm",
  format: "a4",
};

const PrintPdf = (props) => {
  const generatePdf = () => {
    const doc = new jsPDF(jsPDFSettings);

    props.imageUris.map((item, index) => {
      const { x, y } = DeterminePosition(index);

      doc.addImage(item, "JPEG", x, y, 63, 88);

      // Check if end of page && document
      if (index % 9 === 8 && index !== props.imageUris.length - 1) {
        doc.addPage(jsPDFSettings);
      }
    });

    doc.save("proxies.pdf");
  };

  // console.log(props?.imageUris);

  return (
    <div>
      <Button
        variant="Secondary"
        onClick={generatePdf}
        disabled={!props?.imageUris || props?.imageUris?.length < 1}
      >
        Print List
      </Button>
    </div>
  );
};

export default PrintPdf;

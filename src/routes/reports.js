const express = require("express");
const router = express.Router();

const PdfPrinter = require("pdfmake");
const fs = require("fs");

const fonts = require("../fonts");
const ticketStyles = require("../styles/ticketStyles");
const reportStyles = require("../styles/reportStyles");
// const { content } = require("./pdfContent");
// const { content } = require("./ticketContent");
const { content } = require("../templates/liquidacionEstacionario");

// TICKET SETTINGS
let ticketDefinition = {
  content: content,
  styles: ticketStyles,
  pageSize: { width: 300, height: 1000 },
};

// FULL SIZE REPORT SETTINGS
let reportDefinition = {
  content: content,
  styles: reportStyles,
  // pageSize: "A5",
  // pageSize: { height: 1000 },
  // pageOrientation: "landscape",
};

router.get("/estacionario/liquidacion", (req, res) => {
  const printer = new PdfPrinter(fonts);
  let pdfDoc = printer.createPdfKitDocument(reportDefinition);
  pdfDoc.pipe(fs.createWriteStream("./pdfs/liquidacion-estacionario.pdf"));
  pdfDoc.end();
  res.json({ message: "Reporte creado con exito!" });
});

module.exports = router;

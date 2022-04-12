const express = require("express");
const router = express.Router();

const PdfPrinter = require("pdfmake");
const fs = require("fs");

const fonts = require("../fonts");
const ticketStyles = require("../styles/ticketStyles");
const reportStyles = require("../styles/reportStyles");
// const { liquidacionPortatilContent } = require("../templates/ticketContent");
const { content } = require("../templates/ticketContent");
const { estacionarioContent } = require("../templates/liquidacionEstacionario");

// TICKET SETTINGS
let liquidacionPortatilDefinition = {
  content: content,
  styles: ticketStyles,
  pageSize: { width: 300, height: 1000 },
};

// FULL SIZE REPORT SETTINGS
let liquidacionEstacionarioDefinition = {
  content: estacionarioContent,
  styles: reportStyles,
};

router.get("/estacionario/liquidacion", (req, res) => {
  const printer = new PdfPrinter(fonts);
  let pdfDoc = printer.createPdfKitDocument(liquidacionEstacionarioDefinition);
  pdfDoc.pipe(fs.createWriteStream("./pdfs/estacionario-liquidacion.pdf"));
  pdfDoc.end();
  res.json({ message: "Reporte creado con exito!" });
});

router.get("/estacionario/prenomina", (req, res) => {
  const printer = new PdfPrinter(fonts);
  let pdfDoc = printer.createPdfKitDocument(liquidacionEstacionarioDefinition);
  pdfDoc.pipe(fs.createWriteStream("./pdfs/estacionario-prenomina.pdf"));
  pdfDoc.end();
  res.json({ message: "Reporte creado con exito!" });
});

router.get("/portatil/liquidacion", (req, res) => {
  const printer = new PdfPrinter(fonts);
  let pdfDoc = printer.createPdfKitDocument(liquidacionPortatilDefinition);
  pdfDoc.pipe(fs.createWriteStream("./pdfs/portatil-liquidacion.pdf"));
  pdfDoc.end();
  res.json({ message: "Reporte creado con exito!" });
});

module.exports = router;

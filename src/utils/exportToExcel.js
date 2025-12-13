import ExcelJS from "exceljs";
import { saveAs } from "file-saver";
import { DataFormat } from "./excelDataFormatter";

export async function downloadExcel(data) {
  const workbook = new ExcelJS.Workbook();
  const ws = workbook.addWorksheet("Personal");

  // Define your own custom column headers for Excel
  ws.columns = [
    { header: "Name", key: "name", width: 25 },
    { header: "Age", key: "age", width: 10 },
    { header: "Gender", key: "gender", width: 10 },
    { header: "Phone", key: "phone", width: 20 },
    { header: "Symptoms", key: "symptoms", width: 25 },
    { header: "Payments Count", key: "paymentsCount", width: 18 },
  ];

  // Add specific part of json and add rows
  data.forEach((doc) => {
    ws.addRow(DataFormat(doc));
  });

  const buffer = await workbook.xlsx.writeBuffer();
  saveAs(new Blob([buffer]), "personal_data.xlsx");
}

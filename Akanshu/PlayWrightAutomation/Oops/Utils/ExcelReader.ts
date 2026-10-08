import * as XLSX from "xlsx";
const excelData =
  "9pmPlayWright31March2026/Akanshu/PlayWrightAutomation/DataFetching/DataFetchingTS.xlsx";
export function readExcel(sheetName: string): any[] {
  const workBook = XLSX.readFile(excelData);

  const workSheet = workBook.Sheets[sheetName];

  const data = XLSX.utils.sheet_to_json(workSheet, { defval: null });

  return data;
}

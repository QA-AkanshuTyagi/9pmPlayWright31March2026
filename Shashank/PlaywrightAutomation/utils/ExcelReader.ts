import * as Excel from "xlsx"; //any name like excel "using excel every where when taking any data"
//only for declaration jo bhi data ayega usko iske name se represent krenge"
export function readExcelData (filePath:string, sheetName:string)
{
    const excelFile = Excel.readFile(filePath) //excelRead
    const workbookSheet = excelFile.Sheets[sheetName] //sheetRead
    const data = Excel.utils.sheet_to_json(workbookSheet) //excel data convert to json
    return data
}


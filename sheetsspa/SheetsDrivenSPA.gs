/*******************************************************************************
 * 
 * Enter the Spreadsheet ID where your data is hosted.
 * 
 ******************************************************************************/
const SPREADSHEET_ID = '1ud2TnN0VOgr_b0lBLRhtVCpkGNx41W5HzzQWrERfdCM';

/*******************************************************************************
 * 
 * HEADINGS contains the creator-defined headings / tabs for the page.
 * 
 * Enter tabs in the following format:
 * [DISPLAY_NAME, INTRO_TEXT, SHEET_NAME, TAB_ORDER]
 * 
 * i.e.,
 * 
 * ['My Page Title', 'Intro text for the page.', 'Sheet1', 'Name,Col 1,Col 2']
 * Only DISPLAY_NAME is required, other values can be null or excluded.
 * 
 ******************************************************************************/
const HEADINGS = [
  ['Home', 'Welcome to the page!', null],
  ['Page 1', 'This is the 1st page of data.', 'firstdata'],
  ['Page2', 'This is the 2nd page of data.', 'seconddata', 'Name,Prop 1,Prop 2']
];

/*******************************************************************************
 * 
 * Retrieve the HTML for this application.
 * 
 ******************************************************************************/
function doGet(e) {
  return HtmlService.createTemplateFromFile('SheetsDrivenSPA.html').evaluate();
}

/*******************************************************************************
 * 
 * Retrieve the creator-defined headings for the page.
 * 
 ******************************************************************************/
function getHeadings() {
  return HEADINGS;
}

/*******************************************************************************
 * 
 * Retrieve the contents of the specified tab.
 * 
 * Your sheet should have a header "visible" w/ TRUE | FALSE values. This will
 * allow you to selectively allow data to be loaded into the browser.
 * 
 ******************************************************************************/
function getSheetContents(sheetName) {
  let s = SpreadsheetApp.openById(SPREADSHEET_ID);
  let sheet = s.getSheetByName(sheetName);
  let columns = sheet.getMaxColumns();
  let rows = sheet.getMaxRows();
  let range = sheet.getRange(1, 1, rows, columns).getValues();
  if (range && range.length > 0) {
    let result = [];
    for (let r = 1; r < range.length; r++) {
      let value = {}; 
      for (let c = 0; c < range[r].length; c++) {
        value[range[0][c]] = range[r][c];
      }
      if (value && value.visible) {
        result.push(value);
      }
    }
    return result;
  }
  return null;
}

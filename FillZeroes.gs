function fillInZeroes() {
  
  var sheet = SpreadsheetApp.getActiveSheet();
  var lastColumn = sheet.getLastColumn();
  var lastRow = sheet.getLastRow();
  
  var range = sheet.getRange(1, 1, lastRow, lastColumn);
  var data = range.getValues();
  
  for (var r = 0; r < data.length; r++) {
    for (var c = 0; c < data[r].length; c++) {
      if (data[r][c] == "") {
        data[r][c] = 0;
      }
    }
  }
  
  range.setValues(data);
}

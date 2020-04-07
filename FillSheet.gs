function myFunction() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var range = sheet.getRange(1, 1, 1000, 1000);
  var values = range.getValues();
  for (var r = 0; r < values.length; r++) {
    for (var c = 0; c < values[r].length; c++) {
      values[r][c] = (r + 1) * (c + 1);
    }
  }
  range.setValues(values);
}

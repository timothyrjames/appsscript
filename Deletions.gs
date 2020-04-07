function clearCurrentSelection() {
  var values = SpreadsheetApp.getActiveSheet().getSelection().getActiveRange().getValues();
  
  for (var i = 0; i < values.length; i++) {
    for (var k = 0; k < values[i].length; k++) {
      values[i][k] = "";
    }
  }
  SpreadsheetApp.getSelection().getActiveRange().setValues(values); 
}

function deleteCurrentRow() {
    SpreadsheetApp.getActiveSheet().deleteRow(SpreadsheetApp.getActiveSheet().getSelection().getActiveRange().getRow());
}

function x() {
  Logger.log(getFirstRowWithoutValue(2));
}

function getFirstRowWithoutValue(column) {
  var range = SpreadsheetApp.getActiveSheet().getRange(1, column, SpreadsheetApp.getActiveSheet().getLastRow(), 1);
  var values = range.getValues();
  for (var i = 0; i < values.length; i++) {
    if (values[i][0]) {
      continue;
    } else {
      return i + 1;
    }
  }
  return -1;
}

function setValue(cellName, value) {
  SpreadsheetApp.getActiveSpreadsheet().getRange(cellName).setValue(value);
}

function getValue(cellName) {
  return SpreadsheetApp.getActiveSpreadsheet().getRange(cellName).getValue();
}

function getNextRow() {
  return SpreadsheetApp.getActiveSpreadsheet().getLastRow() + 1;
}

function setUser1() {
  setValue('I1', 'User 1');
}

function setUser2() {
  setValue('I1', 'User 2');
} 

function addRecord(a, b, c) {
  var row = getNextRow();
  setValue('A' + row, a);
  setValue('B' + row, b);
  setValue('C' + row, c);
}

function punchIn() {
  addRecord(getValue('I1'), new Date(), 'In');
}

function punchOut() {
  addRecord(getValue('I1'), new Date(), 'Out');
}

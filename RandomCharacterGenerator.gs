function myFunction() {

  const START_COLUMN = 2;
  const START_ROW = 2;

  var goodRoles = [
    "villager",
    "seer",
    "doctor",
    "mayor"
  ];
  
  var badRoles = goodRoles.slice();
  
  var currentColumn = START_COLUMN;
  var currentRow = START_ROW;
  
  while (badRoles.length > 0 || goodRoles.length > 0) {
    var currentRoles = goodRoles;
    var alignment = "good";
    
    if (Math.random() < 0.5) {
      currentRoles = badRoles;
      alignment = "bad";
    }
    
    if (currentRoles.length > 0) {
      var index = Math.floor(Math.random() * currentRoles.length);
      var value = currentRoles.splice(index, 1);
      SpreadsheetApp.getActiveSheet().getRange(currentRow, currentColumn).setValue(alignment);
      SpreadsheetApp.getActiveSheet().getRange(currentRow, currentColumn + 1).setValue(value);
      currentRow++;
    }
  }
}

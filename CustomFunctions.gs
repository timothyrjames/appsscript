/**
This is a sample function for Google Sheets.
@customFunction
*/
function MYSAMPLE() {
  var myArray = new Array();
  myArray[0] = 10;
  myArray[1] = 20;
  
  var sameAsMyArray = [10, 20];
  
  return myArray[0] + myArray[1];
}

/**
This is my own custom SUM function.
@customFunction
*/
function MYSUM(values) {
  var total = 0;
//  var i = 0;
//  while (i < values.length) {
//    total = total + parseInt(values[i]);
//    i++;
//  }
  for (var i = 0; i < values.length; i++) {
    total += parseInt(values[i]);
  }
  return total;
}


/**
This function will compute an average of values 
if the values are between 60 and 89.
@customFunction
*/
function BDAVERAGE(values) {
  var total = 0;
  var count = 0;
  for (var i = 0; i < values.length; i++) {
    var score = parseInt(values[i]);
    if (score >= 60 && score < 90) {
      count++;
      total += score;
    }
  }
  return total / count;
}


function testArrayCreate() {
  var arrayDeclaration = [3, 4, 5, 6, 7];  // from 0 to 4, aka 0 to arrayDeclaration.length - 1
  Logger.log(arrayDeclaration.length);
  Logger.log(arrayDeclaration);
  Logger.log("The first value is : " + arrayDeclaration[0]);
  Logger.log("The third value is : " + arrayDeclaration[2]);
  Logger.log("The 10th value is : " + arrayDeclaration[9]);
  
  var otherArray = new Array("April", "May", "June");
  Logger.log(otherArray);
  Logger.log("Other array length is : " + otherArray.length);
  Logger.log(otherArray[1]);
  
  addValueToArray(otherArray);
  addValueToArray(otherArray);
  addValueToArray(otherArray);
  Logger.log(otherArray);
  
  addToBeginningOfArray(otherArray);
  Logger.log(otherArray);
  
  Logger.log("Removed " + arrayDeclaration.pop());
  Logger.log("Removed " + arrayDeclaration.shift());
  Logger.log(arrayDeclaration);
}

function addValueToArray(array) {
  array.push(7);
}

function addToBeginningOfArray(array) {
  array.unshift(-7);
}

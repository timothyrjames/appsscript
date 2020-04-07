function myFunction() {
  var myArray = [0, 1, 2, 3];
  Logger.log("My array is: " + myArray);
  Logger.log("My array is " + myArray.length + " elements.");
  
  myArray.reverse();
  
  Logger.log("My array reversed is: " + myArray);
  
  myArray.reverse();
  Logger.log("My original array is: " + myArray);
  var s = myArray.toString();
  Logger.log("My array as a string: " + s);
  var joined = myArray.join();
  Logger.log("My array joined is: " + joined);
  var exclamation = myArray.join("!");
  Logger.log("My array joined with exclamation points is: " + exclamation);
  Logger.log("My array with no separation is: " + myArray.join(""));
  
  if (myArray instanceof Array) {
    Logger.log("myArray is an array.");
  } else {
    Logger.log("myArray is *not* an array.");
  }
  
  if (s instanceof Array) {
    Logger.log("toString gave us an array! how odd.");
  } else {
    Logger.log("toString didn't give us an array. as expected.");
  }
}

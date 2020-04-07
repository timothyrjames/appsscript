function testCountProducts() {
  var testArray = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Tests").getRange(2, 1, 6, 4).getValues();
  
  var failedTests = 0;
  if (COUNTPRODUCTS(testArray, "Shirt", 0, "XL") != 1) {
    failedTests++;
    Logger.log("Test 1 failed.");
  }
  if (COUNTPRODUCTS(testArray, "Shirt", null, null) != 3) {
    failedTests++;
    Logger.log("Test 2 failed.");
  }
  if (COUNTPRODUCTS(testArray, "Hat", 0, null, "L") != 8) {
    failedTests++;
    Logger.log("Test 3 failed.");
  }
  if (COUNTPRODUCTS(testArray, null, null, null) != 63) {
    failedTests++;
    Logger.log("Test 4 failed.");
  }
  
  Logger.log("Tests complete, " + failedTests + " failed tests.");
}



/**
 This function will count the products based on some criteria.
 @param {range} productRange the range of products to analyze.
 @param {string} type the type of product to count. If not included, all types will be counted.
 @param {number} color the color code to count.  If not included, all colors will be counted.
 @param {string} size the size of the product to count. If not included, all sizes will be counted. 
 @return {number} the total number of products that match the criteria.
 @customfunction
*/
function COUNTPRODUCTS(productRange, type, color, size) {
  var typeColumn = 0;
  var colorColumn = 1;
  var sizeColumn = 2;
  var quantityColumn = 3;
  
  var total = 0;
  
  for (var i = 0; i < productRange.length; i++) {
    if (color == null || productRange[i][colorColumn] == color) {
      if (type == null || productRange[i][typeColumn] == type) {
        if (size == null || productRange[i][sizeColumn] == size) {
          total += productRange[i][quantityColumn];
        }
      }
    }
  }
  Logger.log("When called with type: " + type + ", color: " + color + ", and size: " + size + ", result is: " + total);
  return total;
}

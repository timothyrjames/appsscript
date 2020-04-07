/**
 * Count the number of values in a range.
 * @param {number[]} range The range of values to count.
 * @returns {number} The count of values in the range.
 * @customfunction
 */
function COUNTVALUES(range) {
  return range.length;
}

/**
 * Add up to four values together.
 * @param {number[]} range The range of values to add.
 * @returns {number} The sum of up to 4 values in the range.
 * @customfunction
 */
function ADDALL(range) {
  var sum = 0;
  if (range) {
    for (var i = 0; i < range.length; i++) {
      sum += Number(range[i]);
    }
  }
  return sum;
}



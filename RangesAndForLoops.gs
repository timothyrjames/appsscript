var colors = ["red", "blue", "black", "green", "brown", "yellow", "orange", "white", "purple"];

/**
 * This function will identify if this value is a color we know.
 * @param {string} value The value to check.
 * @returns {boolean} true if the value is a known color.
 * @customfunction
 */
function ISCOLOR(value) {
  if (value) {
    var potentialColor = value.toLowerCase();
    for (var i = 0; i < colors.length; i++) {
      if (potentialColor == colors[i]) {
        return true;
      }
    }
  }
  return false;
}

/**
 * This function will identify whether or not a range has negatives.
 * @param {number[]} range The range to check for negatives.
 * @returns {boolean} true if the range has negatives.
 * @customfunction
 */
function HASNEGATIVES(range) {
  if (range) {
    if (range.length > 0) {
      for (var i = 0; i < range.length; i++) {
        if (Number(range[i]) < 0) {
          return true;
        }
      }
    } else if (range < 0) {
      return true;
    }
  }
  return false;
}

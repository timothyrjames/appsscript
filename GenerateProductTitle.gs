/**
 * This function will generate a product title based on the inputs.
 * @param {number} colorCode A number representing a color code for this product.
 * @param {number} materialCode A number representing a material code for this product.
 * @param {string} itemType The type of item we are selling.
 * @param {string} size The size of the item we we are selling.
 * @returns {string} A descriptive product title.
 * @customfunction
 */
function GENPRODUCTTITLE(colorCode, materialCode, itemType, size) {
  var result = "";
  
  if (colorCode == 0 || colorCode == 6) {
    result += "Red ";
  } else if (colorCode == 1) {
    result += "Blue ";
  } else if (colorCode == 2) {
    result += "Green ";
  } else if (colorCode == 3) {
    result += "Brown ";
  }
  
  if (materialCode == 0) {
    result += "Cotton ";
  } else if (materialCode == 1) {
    result += "Polyester ";
  }
  
  result += itemType;
  
  if (size == "S") {
    result += ", Size: Small";
  } else if (size == "M") {
    result += ", Size: Medium";
  } else if (size == "L") {
    result += ", Size: Large";
  } else if (size == "XL") {
    result += ", Size: Extra Large";
  } else if (size == "2XL" || size == "XXL") {
    result += ", Size: Extra Extra Large";
  }
  
  return result;
}

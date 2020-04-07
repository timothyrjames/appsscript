/**
 * This file contains functions for computing geometric area and circumference for circles.
 *
 * @fileOverview This file contains geometric circle formulas.
 * @author Timothy James
 * @version 1.0
 */

/**
 * This function returns the area for a circle with a particular radius.
 * @param {number} radius The radius for this circle.
 * @return {number} The area for this circle.
 * @customfunction 
 */
function AREA(radius) {
  // formula for a circle is PI * radius^2.
  return Math.PI * radius * radius;
}

/**
 * This function returns the circumference for a particular radius.
 * @param {number} radius The radius for this circle.
 * @return {number} The circumference for this circle.
 * @customfunction
 */
function CIRCUMFERENCE(radius) {
  // formula for the circle is 2 * PI * radius;
  // or, diameter * PI.
  var diameter = radius * 2;
  return diameter * Math.PI;
}

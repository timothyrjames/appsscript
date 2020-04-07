/**
 * Build a car object at the position x, y pointed in the specified direction.
 *
 * @param {number} x The x coordinate.
 * @param {number} y The y coordinate.
 * @param {string} direction The direction - should be up, left, right, or down.
 * @constructor
 */
function Car(x, y, direction) {
  this.x = 0;
  if (x) {
    this.x = x;
  }
  this.y = 0;
  if (y) {
    this.y = y;
  }
  this.direction = "up";
  if (direction) {
    this.direction = direction;
  }
  
  this.turnLeft = function() {
    if (this.direction == "up") {
      this.direction = "left";
    } else if (this.direction == "left") {
      this.direction = "down";
    } else if (this.direction == "down") {
      this.direction = "right";
    } else if (this.direction == "right") {
      this.direction = "up";
    }
  };
  
  this.turnRight = function() {
    if (this.direction == "up") {
      this.direction = "right";
    } else if (this.direction == "left") {
      this.direction = "up";
    } else if (this.direction == "down") {
      this.direction = "left";
    } else if (this.direction == "right") {
      this.direction = "down";
    }
  };
  
  this.moveForward = function() {
    if (this.direction == "up") {
      this.y += 1;
    } else if (this.direction == "left") {
      this.x -= 1;
    } else if (this.direction == "down") {
      this.y -= 1;
    } else if (this.direction == "right") {
      this.x += 1;
    }
  };
  
  this.moveBackwards = function() {
    if (this.direction == "up") {
      this.y -= 1;
    } else if (this.direction == "left") {
      this.x += 1;
    } else if (this.direction == "down") {
      this.y += 1;
    } else if (this.direction == "right") {
      this.x -= 1;
    }
  };
  
  this.getPosition = function() {
    return this.x + ", " + this.y;
  };
  
  this.getDirection = function() {
    return this.direction;
  }
}

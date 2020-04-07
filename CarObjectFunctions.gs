function GETPOSITION(range) {

  var myCar = new car.Car();
  
  for (var i = 0; i < range.length; i++) {
    if (range[i] == "FORWARD") {
      myCar.moveForward();
    } else if (range[i] == "LEFT") {
      myCar.turnLeft();
    } else if (range[i] == "RIGHT") {
      myCar.turnRight();
    } else if (range[i] == "BACKWARDS") {
      myCar.moveBackwards();
    }
  }
  
  return myCar.getPosition();
}

function GETDIRECTION(range) {
  var myCar = new car.Car();
  
  for (var i = 0; i < range.length; i++) {
    if (range[i] == "FORWARD") {
      myCar.moveForward();
    } else if (range[i] == "LEFT") {
      myCar.turnLeft();
    } else if (range[i] == "RIGHT") {
      myCar.turnRight();
    }
  }
  
  return myCar.getDirection();
}

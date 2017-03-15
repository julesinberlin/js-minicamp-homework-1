//Do not change any of the function names

function multiplyByTen(num) {
  var product = num * 10;
  return product;
}

function subtractFive(num) {
  var difference = num - 5;
  return difference;
}

function areSameLength(str1, str2) {
  //return true if the two strings have the same length
  //otherwise return false
  if (str1.length == str2.length) {
    return true;
  }
  return false;
}

function areEqual(x, y) {
  if (x === y) {
    return true;
  }
  return false;
}

function lessThanNinety(num) {
  if (num < 90){
    return true;
  }
  return false;
}

function greaterThanFifty(num) {
  if (num>50) {
    return true;
  }
  return false;
}

function add(x, y) {
  var sum = x + y;
  return sum;
}

function subtract(x, y) {
  var minus = x - y;
  return minus;
}

function divide(x, y) {
  var div = x / y;
  return div;
}

function multiply(x, y) {
  var product = x * y;
  return product;
}

function getRemainder(x, y) {
  var modulus = x % y;
  return modulus;
}

function isEven(num) {
  //return true if num is even
  //otherwise return false
  if (num % 2 == 0) {
    return true;
  }
  return false;
}

function isOdd(num) {
  //return true if num is false
  //otherwise return false
  if (num % 2 != 0) {
    return true;
  }
  return false;
}

function square(num) {
  //square num and return the new value
  var square = Math.pow(num, 2);
  return square;
}

function cube(num) {
  //cube num and return the new value
  var cub = Math.pow(num, 3);
  return cub;
}

function raiseToPower(num, exponent) {
  //raise num to whatever power is passed in as exponent
  var power = Math.pow(num, exponent);
  return power;
}

function roundNumber(num) {
  //round num and return it
  var round = Math.round(num);
  return round;
}

function roundUp(num) {
  //round num up and return it
  var up = Math.ceil(num);
  return up;
}

function addExclamationPoint(str) {
  //add an exclamation point to the end of str and return the new string
  //'hello world' -> 'hello world!'
  var sentence = str + '!';
  return sentence;
}

function combineNames(firstName, lastName) {
  //return firstName and lastName combined as one string and separated by a space.
  //'Lambda', 'School' -> 'Lambda School'
  var fullName = firstName + ' ' + lastName;
  return fullName;
}

function getGreeting(name) {
  //Take the name string and concatenate other strings onto it so it takes the following form:
  //'Sam' -> 'Hello Sam!'
  var greetings = 'Hello' + ' ' + name + '!';
  return greetings;
}

//If you can't remember these area formulas then head over to Google or look at the test code.

function getRectangleArea(length, width) {
  //return the area of the rectangle by using length and width
  var area = length * width;
  return area;
}

function getTriangleArea(base, height) {
  //return the area of the triangle by using base and height
  var area = 0.5 * base * height;
  return area;
}

function getCircleArea(radius) {
  //return the rounded area of the circle given the radius
  var circle = Math.round(Math.PI * Math.pow (radius, 2));
  return circle;
}

function getRectangularPrismVolume(length, width, height) {
  //return the volume of the 3D rectangular prism given the length, width, and height
  var volume = length * width * height;
  return volume;
}

//Do not modify code below this line.
////--------------------------------

module.exports = {
  multiplyByTen: multiplyByTen,
  subtractFive: subtractFive,
  areSameLength: areSameLength,
  areEqual: areEqual,
  lessThanNinety: lessThanNinety,
  greaterThanFifty: greaterThanFifty,
  add: add,
  subtract: subtract,
  divide: divide,
  multiply: multiply,
  getRemainder: getRemainder,
  isEven: isEven,
  isOdd: isOdd,
  square: square,
  cube: cube,
  raiseToPower: raiseToPower,
  roundNumber: roundNumber,
  roundUp: roundUp,
  addExclamationPoint: addExclamationPoint,
  combineNames: combineNames,
  getGreeting: getGreeting,
  getRectangleArea: getRectangleArea,
  getTriangleArea: getTriangleArea,
  getCircleArea: getCircleArea,
  getRectangularPrismVolume: getRectangularPrismVolume
};

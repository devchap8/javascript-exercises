const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce(((a, b) => a + b), 0);
};

const multiply = function(arr) {
  return arr.reduce(((a, b) => a * b), 1);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(num) {
  if (num === 0) return 1;
  let factorial = 1;
  for (let i = num; i > 0; i--) {
    factorial *= i
  }
  return factorial;
};

console.log(sum([5, 5, 5, 5, 5]));

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

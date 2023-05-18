const add = function(a,b) {
  return a + b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
  let sum = 0;
	for (const a of arr) {
    sum += a;
  }
  return sum;
};

const multiply = function(arr) {
  let mul = 1;
  for (const a of arr) {
    mul *= a;
  }

  return mul;
};

const power = function(a,b) {
	let mul = 1;
  for (let i = 0; i<b; i++){
    mul *= a;
  }
  return mul;
};

const factorial = function(n) {
  let res = 1;
	for (let i=1;i<=n;i++){
    res *= i;
  }
  return res;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

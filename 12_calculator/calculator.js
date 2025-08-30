const add = function(num1, num2) {
  return num1+num2;
};

const subtract = function(num1, num2) {
	return num1-num2;
};

const sum = function(nums) {
  let sum = 0;
	for (let i = 0; i < nums.length; i++)
    sum += nums[i];
  return sum;
};

const multiply = function(nums) {
  let sum = nums[0];
	for (let i = 1; i < nums.length; i++)
    sum *= nums[i];
  return sum;
};

const power = function(num1, num2) {
  let answer = num1;
  for (let i = 1; i < num2; i++)
    answer *= num1;
	return answer;
};

const factorial = function(num) {
	let answer = 1;
  for (let i = 1; i <= num; i++)
    answer *= i;
  return answer;
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

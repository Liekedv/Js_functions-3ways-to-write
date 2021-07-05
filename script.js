//function declaration
function calculate(number1, number2) {
  return number1 + number2;
}

calculate(5, 6); 

//function expression

const calculate1 = function(number1,number2) {
  const total1 = number1 * number1;
  const total2 = number2 * number2;
  const total = total1 + total2;
  return total * total;
};

(calculate1(6,5);

// arrow function
const calculate2 = (number1, number2) => {
  return number1 + number2;
};
calculate2(5, 6);
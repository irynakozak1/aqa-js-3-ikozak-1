// Function Declaration
function calculateAreaDeclaration(width, height) {
  const area = width * height;
  return area;
}
console.log(calculateAreaDeclaration(2, 5));

// Function Expression
const calculateAreaExpression = function (width, height) {
  const area = width * height;
  return area;
};
console.log(calculateAreaExpression(3, 5));

// Arrow Function Expression
const calculateAreaArrow = (width, height) => {
  const area = width * height;
  return area;
};
console.log(calculateAreaArrow(4, 5));

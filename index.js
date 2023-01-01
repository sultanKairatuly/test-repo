setTimeout(() => {
  console.log("Hello");
}, 1000);
console.log("this change is from test branch");
function multiply(a = b, b = a) {
  console.log("a: ", a);
  console.log("b: ", b);
  return a * b;
}

const sum = multiply(5, 6);
console.log(sum);
console.log("dddd");

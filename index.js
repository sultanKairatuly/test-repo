setTimeout(() => {
  console.log("Hello");
}, 1000);
console.log("this change is from test branch");
function multiply(a, b = a) {
  return a * b;
}

const sum = multiply(5);
console.log(sum);

function sayHi(name) {
  return `Hello ${name}!How are you?I am fine thank you`;
}

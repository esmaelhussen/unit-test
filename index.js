const stringLength = (string) => {
  if (string.length === 0) {
    return "no string found";
  } else if (string.length > 10) {
    return "more than ten character";
  }
  return string.length;
};

const reverseString = (string) => {
  return string.split("").reverse().join("");
};

class Calculator {
  add(x, y) {
    return x + y;
  }
  subt(x, y) {
    return x - y;
  }
  mult(x, y) {
    return x * y;
  }
  div(x, y) {
    return x / y;
  }
}

const capital = (string) => {
  if (string.length === 0) {
    return "no string found";
  }
  return string
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

module.exports = { stringLength, reverseString, Calculator, capital };

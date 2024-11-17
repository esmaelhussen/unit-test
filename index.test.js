const {
  stringLength,
  reverseString,
  Calculator,
  capital,
} = require("./index.js");

test("string between 0 and 10", () => {
  expect(stringLength("esmaelH")).toBe(7);
});

test("no string found", () => {
  expect(stringLength("")).toBe("no string found");
});

test("string greater than 10", () => {
  expect(stringLength("esmael hussen")).toBe("more than ten character");
});

test("checking reverse string", () => {
  expect(reverseString("esmael")).toBe("leamse");
});

describe("Calculator ", () => {
  const calculator = new Calculator();
  describe("sum of two numbers", () => {
    test("Test 1", () => expect(calculator.add(25, 15)).toEqual(40));
    test("Test 2", () => expect(calculator.add(10, 15)).toEqual(25));
    test("Test 3", () => expect(calculator.add(14, 15)).toEqual(29));
  });

  describe("Difference of Two Numbers", () => {
    test("Test 1", () => expect(calculator.subt(25, 5)).toEqual(20));
    test("Test 2", () => expect(calculator.subt(10, 10)).toEqual(0));
    test("Test 3", () => expect(calculator.subt(35, 15)).toEqual(20));
  });

  describe("product of Two Numbers", () => {
    test("Test 1", () => expect(calculator.mult(5, 5)).toEqual(25));
    test("Test 2", () => expect(calculator.mult(10, 10)).toEqual(100));
    test("Test 3", () => expect(calculator.mult(10, 15)).toEqual(150));
  });

  describe("Divide of two Numbers", () => {
    test("Test 1", () => expect(calculator.div(20, 5)).toEqual(4));
    test("Test 2", () => expect(calculator.div(40, 40)).toEqual(1));
    test("Test 3", () => expect(calculator.div(45, 15)).toEqual(3));
  });
});

test("capitalize the strings", () => {
  expect(capital("computer science")).toBe("Computer Science");
});

const {
  stringLength,
  reverseString,
  calculator,
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
    test("Test 1", () => expect(calculator.add(10, 5)).toEqual(15));
    test("Test 2", () => expect(calculator.add(20, 10)).toEqual(30));
    test("Test 3", () => expect(calculator.add(30, 15)).toEqual(45));
  });

  describe("Difference of Two Numbers", () => {
    test("Test 1", () => expect(calculator.sub(10, 5)).toEqual(5));
    test("Test 2", () => expect(calculator.sub(20, 10)).toEqual(10));
    test("Test 3", () => expect(calculator.sub(30, 15)).toEqual(15));
  });

  describe("product of Two Numbers", () => {
    test("Test 1", () => expect(calculator.mult(10, 5)).toEqual(50));
    test("Test 2", () => expect(calculator.mult(20, 10)).toEqual(200));
    test("Test 3", () => expect(calculator.mult(30, 15)).toEqual(450));
  });

  describe("Divide of two Numbers", () => {
    test("Test 1", () => expect(calculator.div(10, 5)).toEqual(2));
    test("Test 2", () => expect(calculator.div(20, 10)).toEqual(2));
    test("Test 3", () => expect(calculator.div(30, 15)).toEqual(2));
  });
});

test("capitalize the strings", () => {
  expect(capital("computer science")).toBe("Computer Science");
});

// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {

  if (typeof actual === "string") {

    actual = `"${actual}"`;
    
  }

  if (typeof expected === 'string') {
    expected = `"${expected}"`;
  }

  if (actual === expected) {
    console.log(`👍 Assertion passed: ${actual} == ${expected}`);
  } else {
    console.log(`👎 Assertion failed: ${actual} != ${expected}`);
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

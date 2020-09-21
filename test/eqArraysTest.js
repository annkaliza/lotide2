
const assert = require('chai').assert;

const eqArrays= require('../eqArrays');

const assertArraysEqual = function(firstArray, secondArray) {
  

  if (eqArrays(firstArray, secondArray)) {
    console.log(`👍 Assertion passed: [${firstArray}] == [${secondArray}]`);
  } else {
    console.log(`👎 Assertion failed: [${firstArray}] != [${secondArray}]`);
  }

};


describe("#eqArrays", () => {
  it("should equal", () => {
    assert.strictEqual(assertArraysEqual([2,1,3],[2,1,3]));
  });
});


const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual');

// assertArraysEqual([2,1,3],[2,1,3]);
// assertArraysEqual(['hello', 'hi'],['helo','hi']);
// assertArraysEqual([1,2,3],[1,2]);
// assertArraysEqual(['Lighthouse Labs'],['Lighthouse Labs']);
// assertArraysEqual(["h","a"],["H","a"]);

describe("#arraysEqual", () => {
  it("should equal", () => {
    assert.strictEqual(assertArraysEqual(['Lighthouse Labs'],['Lighthouse Labs']));
  });
});
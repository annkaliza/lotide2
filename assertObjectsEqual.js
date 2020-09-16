const eqArrays = function (arr1, arr2) {
  let n1 = arr1.length;
  let n2 = arr2.length;
  if (n1 !== n2) {
    return false;
  } else {
    for (let i = 0; i < n1; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }
};

const eqObjects = function (object1, object2) {
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (const key of Object.keys(object1)) {
      if (Array.isArray(object1[key])) {
        if (!eqArrays(object1[key], object2[key])) {
          return false;
        }
      } else {
        if (object1[key] !== object2[key]) {
          return false;
        }
      }
    }
  } else {
    return false;
  }
  return true;
};

const assertObjectsEqual = function (actual, expected) {
  const inspect = require("util").inspect;

  if (eqObjects(actual, expected)) {
    console.log(`👍 Assertion passed: [${actual}] == [${expected}]`);
  } else {
    console.log(`👎 Assertion failed: [${actual}] != [${expected}]`);
  }
};

assertObjectsEqual({ a: [1], b: 2 }, { a: [1], b: 2 });
assertObjectsEqual({ a: [1], b: 2 }, { a: [1], b: [2] });

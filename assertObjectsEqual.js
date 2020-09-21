
const eqObjects= require('./eqObjects');


const assertObjectsEqual = function (actual, expected) {
  const inspect = require("util").inspect;

  if (eqObjects(actual, expected)) {
    console.log(`👍 Assertion passed: [${actual}] == [${expected}]`);
  } else {
    console.log(`👎 Assertion failed: [${actual}] != [${expected}]`);
  }
};
module.exports = assertObjectsEqual;

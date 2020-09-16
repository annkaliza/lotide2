const assertEqual = function (actual, expected) {
  if (typeof actual === "string") {
    actual = `"${actual}"`;
  }

  if (typeof expected === "string") {
    expected = `"${expected}"`;
  }

  if (actual === expected) {
    console.log(`👍 Assertion passed: ${actual} == ${expected}`);
  } else {
    console.log(`👎 Assertion failed: ${actual} != ${expected}`);
  }
};

const countLetters = function(sentence) {
  let letterCounter = {};
  sentence = sentence.toLowerCase();
  for (let char of sentence) {
    if (char !== ' ') {
      if (letterCounter[char]) {
        letterCounter[char] += 1;
      } else {
        letterCounter[char] = 1;
      }
    }
  }
  return letterCounter;
};

console.log(countLetters(" lighthouse in the House"));
const test = countLetters("My name is Sarah !");
assertEqual(test['a'],3);
assertEqual(test['s'],2);
assertEqual(test['z'],undefined);
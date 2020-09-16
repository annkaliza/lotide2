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

const countOnly = function (allItems, itemsToCount) {
  let result = {};

  for (let item of allItems) {
    if (itemsToCount[item] === true) {
      if (result[item]) {
        result[item] += 1;
      } else {
        result[item] = 1;
      }
    }
  }
  return result;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];

const result1 = countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true,
});

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);

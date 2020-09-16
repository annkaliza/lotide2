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

const assertArraysEqual = function(firstArray, secondArray) {
  

  if (eqArrays(firstArray, secondArray)) {
    console.log(`👍 Assertion passed: [${firstArray}] == [${secondArray}]`);
  } else {
    console.log(`👎 Assertion failed: [${firstArray}] != [${secondArray}]`);
  }

};
const middle = function(array) {
  let mid = [];
  const length = array.length;
  if (array.length > 2) {
    if (array.length % 2 === 0) {
      mid.push(array[(length / 2) - 1]);
      mid.push(array[length / 2]);
    } else {
      mid.push(array[Math.floor(length / 2)]);
    }
  }
  return mid;
};

assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])
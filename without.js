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

const without = function (originalArr, itemsToRemove) {
  let result = []
  let isExist; 
  for (i = 0; i < originalArr.length; i++) {
    isExist = false
    for (j = 0; j < itemsToRemove.length; j++) {
      if (originalArr[i] === itemsToRemove[j]) {
        isExist = true
      }
    }
    if (!isExist) {
      result.push(originalArr[i])
    }
  }
  return result
}


  assertArraysEqual(without([1,2,3], [3,4]), [1,2])
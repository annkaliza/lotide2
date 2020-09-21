

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


module.exports = without;
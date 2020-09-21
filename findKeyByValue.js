

const findKeyByValue = function (obj, value) {
  for (const prop in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, prop)) {
      if (obj.hasOwnProperty(prop)) {
        if (obj[prop] === value) {
          return prop;
        }
      }
    }
  }
};


module.exports = findKeyByValue;

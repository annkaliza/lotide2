

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

module.exports = countLetters;
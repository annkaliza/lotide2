const assertEqual = require('../assertEqual');
const assert = require('chai').assert;

// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual(1, "1");
// assertEqual("bootcamp", "Bootcamp");


describe("#assertEqual", () => {
  it("should equal", () => {
    assert.strictEqual(assertEqual(1, 1));
  });
});
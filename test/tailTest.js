const assert = require('chai').assert;
const assertEqual = require('../assertEqual');
const tail= require('../tail');




const names = tail(["anam", "maham", "adil"]);


describe("#tail", () => {
  it("should equal", () => {
    assert.strictEqual(assertEqual(names[0], "maham"));
  });
});
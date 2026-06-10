const assert = require("assert");

function add(a, b) {
  return a + b;
}

assert.strictEqual(add(2, 2), 4, "2 + 2 deve ser 4");
assert.strictEqual(add(-1, 1), 0, "-1 + 1 deve ser 0");

console.log("Testes básicos OK.");

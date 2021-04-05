describe("ucFirst", function() {
  it('Uppercase the first symbol', function() {
    assert.strictEqual(ucFirst("John"),
      "John");
  });

  it("Doesn't die on an empty string", function() {
    assert.strictEqual(ucFirst(""), "");
  });
});


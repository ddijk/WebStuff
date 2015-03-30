describe("my suite", function() {


  it("2 plus 3 is 5", function() {
    expect(add(2,3)).toBe(5);
  });

  it("2 min 3 is -1", function() {
    expect(subtract(2,3)).toBe(-1);
  });

  it("5 min 3 is 2", function() {
    expect(subtract(5,3)).toBe(2);
  });

   it("5 min 3 is 2", function() {
    var a = new add();
    expect(a.constructor).toBe(add);
  });

});

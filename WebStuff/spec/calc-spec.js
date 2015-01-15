fs = require('fs');
myCode = fs.readFileSync('./src/calculator.js','utf-8') ;// depends on the file encoding

eval(myCode);




describe("my suite", function() {


  it("2 plus 3 is 5", function() {
    expect(add(2,3)).toBe(5);
  });

   it("2 plus 3 is ", function() {
    expect(add(2,3)).toBe(6);
  });
});

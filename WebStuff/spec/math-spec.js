fs = require('fs');
myCode = fs.readFileSync('./src/math.js','utf-8') ;// depends on the file encoding

eval(myCode);
describe("my math suite", function() {


  it("factorial of 3 is 6", function() {
    expect(factorial(3)).toBe(6);
  });

  

});
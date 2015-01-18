fs = require('fs');
myCode = fs.readFileSync('./src/calculator.js','utf-8') ;// depends on the file encoding

eval(myCode);

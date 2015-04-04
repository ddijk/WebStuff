fs = require('fs');
myCode = fs.readFileSync('./src/math.js','utf-8') ;// depends on the file encoding

eval(myCode);
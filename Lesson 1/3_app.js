var program = require('commander');
var fs      = require('fs');

program
  .version('0.1.0')
  .option('-f, --filename [value]', 'An optional value')
  .parse(process.argv);

if(program.filename  ){
      fs. readFile(program.filename, 'utf8', function(err, contents) {
        if(err)console.log("File Not Exist");
        else console.log("Hi "+ contents);
      });
    }

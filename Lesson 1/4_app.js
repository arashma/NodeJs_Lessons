var program = require('commander');
var fs      = require('fs');

program
  .version('0.1.0')
  .option('-f, --filename [value]', 'An optional value')
  .parse(process.argv);

if(program.filename  ){
      fs. readFile(program.filename, 'utf8', function(err, contents) {
        if(err)console.log("File Not Exist");
        else {
          var data = contents;
          fs.writeFile('hi.txt', data, function(err, data){
              if (err) console.log(err);
              console.log("Successfully Written to File.");
          });
          console.log("Hi "+ contents);
        }
      });
    }

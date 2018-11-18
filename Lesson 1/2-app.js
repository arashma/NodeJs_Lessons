var program = require('commander');


program
  .version('0.1.0')
  .option('-l, --lastname [value]', 'An optional value')
  .option('-f, --firstname [value]', 'An optional value')
  .parse(process.argv);
  
if(program.firstname && program.lastname )
console.log(' Hi',program.firstname, program.lastname);

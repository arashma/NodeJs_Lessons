function grab(flag){
  var index = process.argv.indexOf(flag);
  return (index === -1 ) ? null : process.argv[index + 1];
}

var firstName = grab('--firstname');
var lastNmame = grab('--lastname');

    if(!firstName && !lastNmame){
      console.log("Usage :");
      console.log("\t--firstname \t\t Write your firstname");
        console.log("\t--lastname \t\t Write your lastname");
    }
    else if(!firstName)
    console.log("Not firstName");
    else if(!lastNmame)
    console.log("Not lastNmame");
    else
    console.log(`Hi ${firstName} ${lastNmame}`);

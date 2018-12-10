var pathToRegex = require('path-to-regex');
var http  = require('http');


http.createServer(function (req, res) {
    let parser = new pathToRegex(':path*');  

    let result = parser.match(req.url);
    if(result.path.length == 0){
          res.writeHead(200, {"Content-Type":"text/plain"});
          res.end("Wellcome");
    }else if(result.path.length == 2){
        if(result.path[0] == 'user')
        {
            setTimeout(function () {
                      res.writeHead(200, {"Content-Type":"text/plain"});
                      res.end("Hi " + result.path[1]);
                    },1000); 
        }
    }
  }).listen(3000);
  console.log("Server running on http://localhost:3000");
  
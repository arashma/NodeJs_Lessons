var http  = require('http');

http.createServer(function (req, res) {
    if (req.url == "/") {
        res.writeHead(200, {"Content-Type":"text/json"});
       res.end("Wellcome");
  }else{
         var url = req.url;
         var name = url.split('/').reverse()[0];
         var path = "/user/"+ name;

       if(path == url){
         setTimeout(function () {
           res.writeHead(200, {"Content-Type":"text/plain"});
           res.end("Hi " + name);
             },5000);
        }else{
          res.writeHead(200, {"Content-Type":"text/plain"});
          res.end("Uh oh ! data not found.. ");
        }
    }
}).listen(3000);
console.log("Server running on http://localhost:2000");

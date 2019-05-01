//Load express module with `require` directive

var express = require('express')
var app = express()
var os = require("os");

// Let's keep score of the visitor count

var visitorCount = 0;
var t_start = Date.now();

// Define request response in root URL (/)

app.use(express.static('public')) ;


app.get('/', function (req, res) {

  var visitorAddr ; 
  var t_now = Date.now() ;
  var hostname = os.hostname();

  visitorCount++ ;
   


  visitorAddr = req.connection.remoteAddress ;
  visitorAddr = visitorAddr.replace(/^.*:/, '') ;
  res.send('<img src="/Dev.png" width=200px><H1>Hello World!</H1><br>Serving you from '+hostname+' <br>You are visitor: #'+visitorCount+' and coming from '+visitorAddr+'<br>Container is up for '+(t_now-t_start)+' ms') ;
  res.end() ;
})

  //Launch listening server on port 8081
app.listen(8081, function () {
  console.log('app listening on port 8081!')
})


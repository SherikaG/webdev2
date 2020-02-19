var http = require('http')
var concat = require('concat-stream')
var url = process.argv[2]

http.get(url, function (req) {
  req.setEncoding('utf8')
  var sink = concat(function(data){
    console.log(data.split('').length)
    console.log(data)
  })
  req.pipe(sink)
})
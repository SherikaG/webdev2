var http = require('http')
var concat = require('concat-stream')

var urls = [];
var data = [];
var responseCount = 0;

process.argv.slice(2).forEach(function (item) {
  urls.push(item);
})

urls.forEach(function (item, index) {
  http.get(item, function (req) {
    req.setEncoding('utf8')
    req.pipe(concat(function (res) {
      data[index] = res;
      responseCount++
      if (responseCount === urls.length) {
        console.log(data.join('\n'));
      }
    }))
  })
})
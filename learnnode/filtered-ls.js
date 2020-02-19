var fs = require('fs')

var dir = process.argv[2]
var ext = process.argv[3]
var extFilter = new RegExp('\\.' + ext + '$');

fs.readdir(dir, function (err, list) {
  list.forEach(function (item){
    if (extFilter.test(item)) {
      console.log(item)
    }
  })
})
const express = require('express')
    const app = express()
    app.get('/home', function(req, res) {
      res.end('Hello World!')
    })
    //app.listen(3000)
    app.listen(process.argv[2])
    app.use(express.static(process.argv[3] || path.join(__dirname, 'public')))

var express = require('express')
var app = express()
var path = require('path')

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
})

app.use(express.static('public'));

app.listen(8001, () => {
  console.log("Listening on port 8001")
})

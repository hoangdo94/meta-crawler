var express = require('express');
var bodyParser = require('body-parser');
var crawler = require('./crawler');
var app = express();

app.use(bodyParser.json());

app.post('/', function (req, res) {
  var link = req.body.link;
  if (!link) {
    return res.json({
      error: 'no link'
    });
  }
  crawler(link, function(err, data) {
    if (err) {
      return res.json(err);
    } else {
      return res.json(data);
    }
  });
});

app.listen(8989, function () {
  console.log('Crawler listening on port 8989!');
});

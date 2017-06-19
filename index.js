var express = require('express');
var passport = require('passport');
var app = express();

require('./config')(app, passport, express);

//start server
var port = 3000;
app.listen(port, function() {
  console.log(`Listening on port ${port}!!`);
});

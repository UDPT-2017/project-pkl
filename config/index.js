module.exports = function(app, passport, express) {
  require('./middlewares')(app, passport, express);

  require('./views')(app);

  require('./routes')(app, passport);
};

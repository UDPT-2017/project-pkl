var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var cookieSession = require('cookie-session');
var flash = require('connect-flash');

module.exports = function(app, passport, express) {
    app.use(express.static('public'));

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }));

    app.use(cookieParser('secret'));
    app.use(cookieSession({
        name: 'session',
        secret: 'secret'
    }));
    app.use(flash());

    app.use(passport.initialize());
    app.use(passport.session());
    require('./passport')(passport);
};

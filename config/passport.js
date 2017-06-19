var LocalStrategy = require('passport-local').Strategy;
//var passport = require('passport');
var User = require('../app/models/user');
var bcryptjs = require('bcryptjs');

module.exports = function(passport) {
    passport.serializeUser(function(user, done) {
        console.log('MaTaiKhoan will be serialized is ' + user.MaTaiKhoan);
        done(null, user.MaTaiKhoan);
    });

    passport.deserializeUser(function(MaTaiKhoan, done) {
        console.log('MaTaiKhoan will be deserialized is ' + MaTaiKhoan);
        User.findByMaTaiKhoan(MaTaiKhoan, function(err, user) {
            done(err, user);
        });
    });

    passport.use('local_signIn', new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password',
        passReqToCallback: true,
    }, function(req, username, password, done) {
        console.log('the password we are checking is', password);
        User.localFindOne(username, function(err, user) {
            if (err) {
                console.log(err);
                return done(err);
            }

            if (!user) {
                return done(null, false, {
                    message: 'Tên đăng nhập không tồn tại'
                });
            }

            console.log('Before compare password');

            if (bcryptjs.compareSync(password, user.MatKhau) === true) {
              console.log('Compare password successfully!!!');

              return done(null, user);
            }
            else {
              console.log('Wrong password!!!');
              
              return done(null, false, {
                  message: 'Mật khẩu không đúng'
              });
            }
        });
    }));
};

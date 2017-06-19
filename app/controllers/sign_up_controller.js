var signUp = require("../models/sign_up");

var sign_up_controller = {
  index: function(req, res) {
    res.render('sign_up', {
      layout: 'client_layout',
      title: 'Đăng ký',
      active4: 'active'
    });
  },
  signUp: function(req, res) {
    var client = {
      username: req.body.username,
      password: req.body.password,
      name: req.body.name,
      sex: req.body.sex,
      address: req.body.address,
      identicationNumber: req.body.identicationNumber,
      phoneNumber: req.body.phoneNumber,
    };

    signUp.signUp(client, function(error, errorMessage) {
      if (error) {
        res.render('sign_up', {
          layout: 'client_layout',
          title: 'Đăng ký',
          active4: 'active',
          errorMessage: 'Có lỗi trong quá trình đăng ký'
        })
      }
      else {
        if (errorMessage) {
          res.render('sign_up', {
            layout: 'client_layout',
            title: 'Đăng ký',
            active4: 'active',
            errorMessage: errorMessage
          })
        }
        else {
          res.render('successful_sign_up', {
            layout: 'client_layout',
            title: 'Đăng ký',
            active4: 'active',
            username: client.username,
            name: client.name
          })
        }
      }
    });
  }
};

module.exports = sign_up_controller;

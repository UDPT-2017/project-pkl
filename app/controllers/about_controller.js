var about_controller = {
  index: function(req, res) {
    var message = req.flash('error')[0];
    if (message) {
      res.render('about', {
        layout: 'client_layout',
        title: 'Thông Tin Phương Trang ',
        active5: 'active',
        message: message
      });
    } else {
      if (req.user) {
        if (req.user.Avartar) {
          res.render('about', {
            layout: 'client_layout',
            title: 'Thông Tin Phương Trang ',
            active5: 'active',
            user: req.user.TenDangNhap,
            avartar: req.user.Avartar
          });
        } else {
          console.log('no avartar');
          res.render('about', {
            layout: 'client_layout',
            title: 'Thông Tin Phương Trang ',
            active5: 'active',
            user: req.user.TenDangNhap,
            avartar: 'images/male_avartar.png'
          });
        }
      } else {
        res.render('about', {
          layout: 'client_layout',
          title: 'Thông Tin Phương Trang ',
          active5: 'active'
        });
      }
    }
  },
};



module.exports = about_controller;

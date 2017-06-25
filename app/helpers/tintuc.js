var tintucHelper = {
  tintucRender: function(message, user, avartar, tintuc, res) {
    res.render('tintuc', {
      layout: 'client_layout',
      title: 'TrangTinTuc',
      active3: 'active',
      tintuc: tintuc,
      message: message,
      user: user,
      avartar: avartar,
      css: 'gallery.css'
    });
  },
  index: function(error, result, req, res) {
    console.log('RESULT TRONG HELPER');
    console.log(result);

    var message = req.flash('error')[0];

    if (message) {
        if (error) {
            tintucHelper.tintucRender(message, null, null, null, res);
        } else {
            tintucHelper.tintucRender(message, null, null, result, res);
        }
    } else {
        if (req.user) {
            if (req.user.Avartar) {
                if (error) {
                    tintucHelper.tintucRender(null, req.user.TenDangNhap, req.user.Avartar, null, res);
                } else {
                    tintucHelper.tintucRender(null, req.user.TenDangNhap, req.user.Avartar, result, res);
                }
            } else {
                if (error) {
                    tintucHelper.tintucRender(null, req.user.TenDangNhap, 'images/male_avartar.png', null, res);
                } else {
                    tintucHelper.tintucRender(null, req.user.TenDangNhap, 'images/male_avartar.png', result, res);
                }
            }
        } else {
            if (error) {
                tintucHelper.tintucRender(null, null, null, null, res);
            } else {
                console.log('TRONG KHONG DANG NHAP, KHONG LOI');
                tintucHelper.tintucRender(null, null, null, result, res);
            }
        }
    }
  },
}

module.exports = tintucHelper;

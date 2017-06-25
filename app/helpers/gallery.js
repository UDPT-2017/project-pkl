var galleryHelper = {
  galleryRender: function(message, user, avartar, diadiem, res) {
    res.render('gallery', {
      layout: 'client_layout',
      title: 'Gallery',
      active1: 'active',
      diadiem: diadiem,
      message: message,
      user: user,
      avartar: avartar,
      css: 'css/gallery.css'
    });
  },
  index: function(error, result, req, res) {
    console.log('RESULT TRONG HELPER');
    console.log(result);

    var message = req.flash('error')[0];

    if (message) {
        if (error) {
            galleryHelper.galleryRender(message, null, null, null, res);
        } else {
            galleryHelper.galleryRender(message, null, null, result, res);
        }
    } else {
        if (req.user) {
            if (req.user.Avartar) {
                if (error) {
                    galleryHelper.galleryRender(null, req.user.TenDangNhap, req.user.Avartar, null, res);
                } else {
                    galleryHelper.galleryRender(null, req.user.TenDangNhap, req.user.Avartar, result, res);
                }
            } else {
                if (error) {
                    galleryHelper.galleryRender(null, req.user.TenDangNhap, 'images/male_avartar.png', null, res);
                } else {
                    galleryHelper.galleryRender(null, req.user.TenDangNhap, 'images/male_avartar.png', result, res);
                }
            }
        } else {
            if (error) {
                galleryHelper.galleryRender(null, null, null, null, res);
            } else {
                console.log('TRONG KHONG DANG NHAP, KHONG LOI');
                galleryHelper.galleryRender(null, null, null, result, res);
            }
        }
    }
  },
}

module.exports = galleryHelper;

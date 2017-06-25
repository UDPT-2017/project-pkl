module.exports = {
  xemThongTinRender: function(error, thongtintaikhoan, thongtinkhachhang, res) {
    var data = {
      layout: 'client_layout',
      title: 'Thông tin tài khoản',
      message: '',
      user: '',
      avartar: '',
      css: '/css/xem_thong_tin.css',
      thongtintaikhoan: null,
      thongtinkhachhang: null,
    }

    if (thongtintaikhoan) {
        if (thongtintaikhoan.Avartar) {
            if (error) {
                data.user = thongtintaikhoan.TenDangNhap;
                data.avartar = '/' + thongtintaikhoan.Avartar;
            } else {
                data.user = thongtintaikhoan.TenDangNhap;
                data.avartar = '/' + thongtintaikhoan.Avartar;
                data.thongtinkhachhang = thongtinkhachhang[0];
                data.thongtintaikhoan = thongtintaikhoan;
            }
        } else {
            if (error) {
              data.user = thongtintaikhoan.TenDangNhap;
              data.avartar = '/images/male_avartar.png';
            } else {
              data.user = thongtintaikhoan.TenDangNhap;
              data.avartar = '/images/male_avartar.png';
              data.thongtinkhachhang = thongtinkhachhang[0];
              data.thongtintaikhoan = thongtintaikhoan;
            }
        }
    }

    res.render('xem_thong_tin', data);
  }
}

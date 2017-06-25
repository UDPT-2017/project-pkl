var pool = require('../../config/db');



var tintuc = {
  laytatcatintuc: function(callback) {
    pool.query("select matintuc, tieudetintuc,ngaydangtintuc,noidungtomtat, anhdaidientintuc from TINTUC", [], function(error, result) {
      if (error) {
        callback(error, null);
      } else {
        callback(null, result.rows);
      }
    });

  },
  laytintuc: function(matintuc, callback) {
    pool.query("select TieuDeTinTuc, NgayDangTinTuc,NoiDungTinTuc,SoLuocLike,AnhDaiDienTinTuc from TINTUC where MaTinTuc = $1", [matintuc], function(error, result) {
      if (error) {
        callback(error, null);
      } else {
        console.log(result.rows);
        callback(null, result.rows);
      }
    });

  },
  laycomment:function(matintuc,callback){
    pool.query("select a.NoiDungComment,b.TenDangNhap,b.Avartar  from TINTUC_COMMENTS a, TAIKHOAN b where a.MaTinTuc = $1 and a.MaTaiKhoan = b.MaTaiKhoan", [matintuc], function(error, result) {
      if (error) {
        callback(error, null);
      } else {
        console.log(result.rows);
        callback(null, result.rows);
      }
    });


  }

};

module.exports = tintuc;

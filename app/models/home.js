var pool = require('../../config/db');

module.exports = {
    layHinhAnh: function(callback) {
        pool.query("select LinkHA, DiaDiem, MoTa from gallery", [], function(error, result) {
          if (error) {
            callback(error, null);
          }
          else {
            callback(null, result.rows);
          }
        });
    },
    layTinTuc: function(callback) {
        pool.query("select TieuDeTinTuc, NoiDungTomTat, AnhDaiDienTinTuc from TINTUC order by NgayDangTinTuc desc limit 6", [], function(error, result) {
          if (error) {
            callback(error, null);
          }
          else {
            callback(null, result.rows);
          }
        });
    },
    layKhuyenMai: function(callback) {
      pool.query("select TenKhuyenMai, MoTaKhuyenMai, AnhKhuyenMai from KHUYENMAI order by NgayBatDau desc limit 8", [], function(error, result) {
        if (error) {
          callback(error, null);
        }
        else {
          callback(null, result.rows);
        }
      });
    }
}

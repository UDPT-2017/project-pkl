var pool = require('../../config/db');

module.exports = {
    layThongTin: function(TenDangNhap, callback) {
        pool.query("select TenKhachHang, GioiTinhKH, DiaChiKH, SoCMNDKH, DienthoaiKH from TAIKHOAN tk, KHACHHANG kh where tk.MaKhachHang= kh.MaKhachHang and TenDangNhap = $1", [TenDangNhap], function(error, result) {
            if (error) {
                callback(error, null);
            } else {
                callback(null, result.rows);
            }
        });
    },
    chinhSuaThongTin: function(Ten, GioiTinh, DiaChi, SoCMND, DienThoai, callback) {
        query = "update KHACHHANG set ";

        if (Ten) {
            query = query + "TenKhachHang = " + "\'" + Ten + "\'";
        } else {
            if (GioiTinh) {
              console.log('here');
                query = query + "GioiTinhKH = " +  "\'" + GioiTinh + "\'";
            } else {
                if (DiaChi) {
                    query = query + "DiaChiKH = " +  "\'" + DiaChi + "\'";
                } else {
                    if (SoCMND) {
                        query = query + "SoCMNDKH = " +  "\'" + SoCMND + "\'";
                    } else {
                        if (DienThoai) {
                            query = query + "DienthoaiKH = " +  "\'" + DienThoai + "\'";
                        }
                    }
                }
            }
        }

        pool.query(query, [], function(error, result) {
          if (error) {
            callback(error);
          }
          else {
            callback(null);
          }
        });
    },
    thayDoiAnhDaiDien: function(link, tendangnhap, callback) {
      pool.query("update TAIKHOAN set Avartar = $1 where TenDangNhap = $2", [link, tendangnhap], function(error, result) {
        if (error) {
          callback(error);
        }
        else {
          callback(null);
        }
      });
    }
};

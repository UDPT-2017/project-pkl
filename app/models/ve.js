var pool = require('../../config/db');

var ve = {
    XemTatCaVe: function(tendangnhap, callback) {
        pool.query("select MaVe, GiaVeThuc, TrangThaiVe, TrangThaiThanhToan, MaGhe, MaXe from VE v, TAIKHOAN tk where TenDangNhap = $1 and tk.MaKhachHang = v.MaKhachHang", [tendangnhap], function(error, result) {
            if (error)
            {
                console.error(error);
                callback(error, null);           
            }

            callback(error, result.rows);
        });
    }
};

module.exports = ve;
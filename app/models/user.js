var pool = require('../../config/db');

var user = {
    findByMaTaiKhoan: function(MaTaiKhoan, callback) {
        pool.query("select * from TAIKHOAN where MaTaiKhoan = $1", [MaTaiKhoan], function(err, result) {
            if (err) {
                console.error(err);
                return callback(err, null);
            }

            var user = {
                MaTaiKhoan: result.rows[0].mataikhoan,
                DiemTichLuy: result.rows[0].diemtichluy,
                LoaiTaiKhoan: result.rows[0].loaitaikhoan,
                SoTien: result.rows[0].sotien,
                TenDangNhap: result.rows[0].tendangnhap,
                MatKhau: result.rows[0].matkhau,
                MaKhachHang: result.rows[0].makhachhang,
                Avartar: result.rows[0].avartar
            };

            return callback(err, user);
        });
    },
    localFindOne: function(username, callback) {
        console.log('TenDanNhap at localFindOne: ' + username);

        pool.query("select MaTaiKhoan, MatKhau from TAIKHOAN where TenDangNhap = $1", [username], function(err, result) {
            if (err) {
                console.log(err);
                return callback(err, null);
            }

            console.log('Result in localFindOne: ' + result);
            console.log(result);

            if (result.rowCount <= 0) {
                return callback(null, null);
            }

            var user = {
                MaTaiKhoan: result.rows[0].mataikhoan,
                MatKhau: result.rows[0].matkhau
            };

            console.log(user);

            return callback(null, user);
        });
    }
};

module.exports = user;

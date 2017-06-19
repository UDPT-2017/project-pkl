var pool = require('../../config/db');
var bcrypt = require('bcryptjs');
var taoMa = require('../helpers/taoMa');

var signUp = {
    signUp: function(client, callback) {
        pool.query("select TenDangNhap from TAIKHOAN where TenDangNhap = $1", [client.username], function(error, result) {
            if (error) {
                console.log(error);
                callback(error, null);
            } else {
                if (result.rowCount == 1) {
                    callback(null, 'Tên đăng nhập này đã tồn tại');
                } else {
                    taoMa.taoMaKH(function(error2, errorMessage2, MaKhachHangMoi) {
                        if (error2) {
                            console.log(error2);
                            callback(error2, null);
                        } else {
                            if (errorMessage2) {
                                callback(null, errorMessage2);
                            } else {
                                pool.query("insert into KHACHHANG(MaKhachHang, TenKhachHang, GioiTinhKH, DiaChiKH, SoCMNDKH, DienthoaiKH) values($1, $2, $3, $4, $5, $6)", [MaKhachHangMoi, client.name, client.sex, client.address, client.identicationNumber, client.phoneNumber], function(error3, result3) {
                                    if (error3) {
                                        console.log(error3);
                                        callback(error3, null);
                                    } else {
                                        taoMa.taoMaTK(function(error4, errorMessage4, MaTaiKhoanMoi) {
                                            if (error4) {
                                                console.log(error4);
                                                callback(error4, null);
                                            } else {
                                                if (errorMessage4) {
                                                    callback(null, errorMessage4);
                                                } else {
                                                    var salt = bcrypt.genSaltSync(10);
                                                    var hash = bcrypt.hashSync(client.password, salt);
                                                    var zero = 0;
                                                    var loaiTaiKhoan = 'Thành viên';

                                                    pool.query("insert into TAIKHOAN(MaTaiKhoan, DiemTichLuy, LoaiTaiKhoan, SoTien, TenDangNhap, MatKhau, MaKhachHang) values($1, $2, $3, $4, $5, $6, $7)", [MaTaiKhoanMoi, zero, loaiTaiKhoan, zero, client.username, hash, MaKhachHangMoi], function(error5, result5) {
                                                        if (error5) {
                                                            console.log(error5);
                                                            callback(error5, null);
                                                        } else {
                                                            callback(null, null);
                                                        }
                                                    });
                                                }
                                            }
                                        });
                                    }
                                });
                            }
                        }
                    });
                }
            }
        });
    }
};

module.exports = signUp;

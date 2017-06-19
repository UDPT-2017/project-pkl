var pool = require('../../config/db');
var bcrypt = require('bcryptjs');

var signUp = {
    taoMaKH: function(callback) {
        pool.query("select max(MaKhachHang) as MaKhachHang from KHACHHANG", [], function(error, result) {
            var MaKhachHangMoi = '';
            var Int = 0;

            if (error) {
                callback(error, null, null);
            } else {
                if (result.rowCount == 0) {
                    MaKhachHangMoi = 'KH000';
                    console.log('New MaKhachHang: ' + MaKhachHangMoi);
                    callback(null, null, MaKhachHangMoi);
                } else {
                    console.log(result.rows[0].makhachhang);
                    MaKhachHangMoi = result.rows[0].makhachhang;
                    MaKhachHangMoi = MaKhachHangMoi.substring(2, 5);
                    Int = parseInt(MaKhachHangMoi, 10);
                    Int = Int + 1;

                    if (Int < 10) {
                        MaKhachHangMoi = 'KH00' + Int;
                        console.log('New MaKhachHang: ' + MaKhachHangMoi);
                        callback(null, null, MaKhachHangMoi);
                    } else {
                        if (Int < 100) {
                            MaKhachHangMoi = 'KH0' + Int;
                            console.log('New MaKhachHang: ' + MaKhachHangMoi);
                            callback(null, null, MaKhachHangMoi);
                        } else {
                            if (Int < 1000) {
                                MaKhachHangMoi = 'KH' + Int;
                                console.log('New MaKhachHang: ' + MaKhachHangMoi);
                                callback(null, null, MaKhachHangMoi);
                            } else {
                                callback(null, 'Hết mã để tạo', null);
                            }
                        }
                    }
                }
            }
        });
    },
    taoMaTK: function(callback) {
        pool.query("select max(MaTaiKhoan) as MaTaiKhoan from TAIKHOAN", [], function(error, result) {
            var MaTaiKhoanMoi = '';
            var Int = 0;

            if (error) {
                callback(error, null, null);
            } else {
                if (result.rowCount == 0) {
                    MaTaiKhoanMoi = 'TK000';
                    console.log('New MaTaiKhoang: ' + MaTaiKhoanMoi);
                    callback(null, null, MaTaiKhoanMoi);
                } else {
                    MaTaiKhoanMoi = result.rows[0].mataikhoan;
                    MaTaiKhoanMoi = MaTaiKhoanMoi.substring(2, 5);
                    Int = parseInt(MaTaiKhoanMoi, 10);
                    Int = Int + 1;

                    if (Int < 10) {
                        MaTaiKhoanMoi = 'TK00' + Int;
                        console.log('New MaKhachHang: ' + MaTaiKhoanMoi);
                        callback(null, null, MaTaiKhoanMoi);
                    } else {
                        if (Int < 100) {
                            MaTaiKhoanMoi = 'TK0' + Int;
                            console.log('New MaTaiKhoan: ' + MaTaiKhoanMoi);
                            callback(null, null, MaTaiKhoanMoi);
                        } else {
                            if (Int < 1000) {
                                MaTaiKhoanMoi = 'TK' + Int;
                                console.log('New MaTaiKhoan: ' + MaTaiKhoanMoi);
                                callback(null, null, MaTaiKhoanMoi);
                            } else {
                                callback(null, 'Hết mã để tạo', null);
                            }
                        }
                    }
                }
            }
        });
    },
    signUp: function(client, callback) {
        pool.query("select TenDangNhap from TAIKHOAN where TenDangNhap = $1", [client.username], function(error, result) {
            if (error) {
                console.log(error);
                callback(error, null);
            } else {
                if (result.rowCount == 1) {
                    callback(null, 'Tên đăng nhập này đã tồn tại');
                } else {
                    signUp.taoMaKH(function(error2, errorMessage2, MaKhachHangMoi) {
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
                                        signUp.taoMaTK(function(error4, errorMessage4, MaTaiKhoanMoi) {
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

var pool = require('../../config/db')

module.exports = {
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
};

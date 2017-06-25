XemThongTinModel = require('../models/xem_thong_tin');
XemThongTinHelper = require('../helpers/xem_thong_tin');
var fs = require('fs');

var XemThongTin = {
    index: function(req, res) {
        if (req.user.TenDangNhap === req.params.tendangnhap) {
            XemThongTinModel.layThongTin(req.params.tendangnhap, function(error, result) {
                XemThongTinHelper.xemThongTinRender(error, req.user, result, res);
            });
        } else {
            res.redirect('/');
        }
    },
    chinhSuaThongTin: function(req, res) {
        if (req.user.TenDangNhap === req.params.tendangnhap) {
            if (req.body.Ten) {
                XemThongTinModel.chinhSuaThongTin(req.body.Ten, null, null, null, null, function(error) {
                    if (error) {
                        res.send(error);
                    } else {
                        res.send(null);
                    }
                });
            } else {
                if (req.body.GioiTinh) {
                    XemThongTinModel.chinhSuaThongTin(null, req.body.GioiTinh, null, null, null, function(error) {
                        if (error) {
                            res.send(error);
                        } else {
                            res.send(null);
                        }
                    });
                } else {
                    if (req.body.DiaChi) {
                        XemThongTinModel.chinhSuaThongTin(null, null, req.body.DiaChi, null, null, function(error) {
                            if (error) {
                                res.send(error);
                            } else {
                                res.send(null);
                            }
                        });
                    } else {
                        if (req.body.DienThoai) {
                            XemThongTinModel.chinhSuaThongTin(null, null, null, null, req.body.DienThoai, function(error) {
                                if (error) {
                                    res.send(error);
                                } else {
                                    res.send(null);
                                }
                            });
                        } else {
                            if (req.body.SoCMND) {
                                XemThongTinModel.chinhSuaThongTin(null, null, null, req.body.SoCMND, null, function(error) {
                                    if (error) {
                                        res.send(error);
                                    } else {
                                        res.send(null);
                                    }
                                });
                            }
                        }
                    }
                }
            }
        } else {
            res.redirect('/');
        }
    },
    thayDoiAnhDaiDien: function(req, res, next) {
        console.log(req.file);
        var tmp_path = req.file.path;
        console.log(tmp_path);
        /** The original name of the uploaded file
            stored in the variable "originalname". **/
        var target_path = 'public/images/' + req.file.originalname;

        /** A better way to copy the uploaded file. **/
        var src = fs.createReadStream(tmp_path);
        var dest = fs.createWriteStream(target_path);
        src.pipe(dest);
        console.log('HERE');

        var result = {
            error: null,
            image: ''
        };

        src.on('end', function() {
            XemThongTinModel.thayDoiAnhDaiDien('images/' + req.file.originalname, req.params.tendangnhap, function(error) {
                result.image = '/images/' + req.file.originalname;
                res.send(result);
            });
        });
        src.on('error', function(err) {
            result.err = error;
            res.send(result);
        });
    }
};

module.exports = XemThongTin;

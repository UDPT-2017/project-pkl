var ve = require("../models/ve");

var ve_controller = {
    index: function(req, res) {
        if (req.params.tendangnhap == req.user.TenDangNhap) {
            ve.XemTatCaVe(req.params.tendangnhap, function(error, result) {
                if (req.user.Avartar) {
                    if (error) {
                        res.render('xem_ve', {
                            layout: 'client_layout',
                            title: 'Xem vé'
                        });
                    } else {
                        var Avartar = '/' + req.user.Avartar;
                        console.log(Avartar);
                        res.render('xem_ve', {
                            layout: 'client_layout',
                            title: 'Xem vé',
                            result: result,
                            user: req.user.TenDangNhap,
                            avartar: Avartar
                        });
                    }
                } else {
                    if (error) {
                        res.render('xem_ve', {
                            layout: 'client_layout',
                            title: 'Xem vé',
                        });
                    } else {
                        console.log('here');
                        res.render('xem_ve', {
                            layout: 'client_layout',
                            title: 'Xem vé',
                            result: result,
                            user: req.user.TenDangNhap,
                            avartar: '/images/male_avartar.png'
                        });
                    }
                }
            });
        } else {
            res.redirect('/');
        }
    }
};

module.exports = ve_controller;

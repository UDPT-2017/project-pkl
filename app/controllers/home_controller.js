var home_controller = {
    index: function(req, res) {
        var message = req.flash('error')[0];

        if (message) {
            res.render('home', {
                layout: 'client_layout',
                title: 'Trang chủ',
                active1: 'active',
                message: message
            });
        } else {
            if (req.user) {
                if (req.user.Avartar) {
                    res.render('home', {
                        layout: 'client_layout',
                        title: 'Trang chủ',
                        active1: 'active',
                        user: req.user.TenDangNhap,
                        avartar: req.user.Avartar
                    });
                } else {
                    console.log('no avartar');
                    res.render('home', {
                        layout: 'client_layout',
                        title: 'Trang chủ',
                        active1: 'active',
                        user: req.user.TenDangNhap,
                        avartar: 'images/male_avartar.png'
                    });
                }
            } else {
                res.render('home', {
                    layout: 'client_layout',
                    title: 'Trang chủ',
                    active1: 'active'
                });
            }
        }
    }
};

module.exports = home_controller;

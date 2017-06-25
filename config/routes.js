var router = require('express').Router;
var controllers = require('../app/controllers');

module.exports = function(app, passport) {
    var home = router()
        .get('/', controllers.home.index);

    var signIn = router()
        .post('/', passport.authenticate('local_signIn', {

                successRedirect: '/',
                failureRedirect: '/',
                failureFlash: true
            }))
        .get('/signOut', controllers.signIn.index);

    var signUp = router()
      .get('/', controllers.signUp.index)
      .post('/', controllers.signUp.signUp);

    var about = router()
      .get('/',controllers.about.index);

    var Gallery = router()
        .get('/', controllers.Gallery.index)
        .post('/', controllers.Gallery.layDiaDiem);

        var XemThongTin = router()
        .get('/:tendangnhap', controllers.XemThongTin.index)
        .post('/:tendangnhap/ChinhSuaTen', controllers.XemThongTin.chinhSuaThongTin)
        .post('/:tendangnhap/ChinhSuaGioiTinh', controllers.XemThongTin.chinhSuaThongTin)
        .post('/:tendangnhap/ChinhSuaDiaChi', controllers.XemThongTin.chinhSuaThongTin)
        .post('/:tendangnhap/ChinhSuaDienThoai', controllers.XemThongTin.chinhSuaThongTin)
        .post('/:tendangnhap/ChinhSuaSoCMND', controllers.XemThongTin.chinhSuaThongTin);

    app.use('/about',about);
    app.use('/', home);
    app.use('/signIn', signIn);
    app.use('/signUp', signUp);
    app.use('/Gallery', Gallery);

    app.use('/XemThongTin', XemThongTin);
};

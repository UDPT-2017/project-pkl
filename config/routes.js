var router = require('express').Router;
var controllers = require('../app/controllers');
var multer = require('multer');
var upload = multer({
    dest: 'public/images/'
});

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
        .get('/', controllers.about.index);

    var Gallery = router()
        .get('/', controllers.Gallery.index)
        .post('/', controllers.Gallery.layDiaDiem);
    var tintuc = router()
        .get('/',controllers.tintuc.index)
        .post('/',controllers.tintuc.laytintuc);

    var XemThongTin = router()
        .get('/:tendangnhap', controllers.XemThongTin.index)
        .post('/:tendangnhap/ChinhSuaTen', controllers.XemThongTin.chinhSuaThongTin)
        .post('/:tendangnhap/ChinhSuaGioiTinh', controllers.XemThongTin.chinhSuaThongTin)
        .post('/:tendangnhap/ChinhSuaDiaChi', controllers.XemThongTin.chinhSuaThongTin)
        .post('/:tendangnhap/ChinhSuaDienThoai', controllers.XemThongTin.chinhSuaThongTin)
        .post('/:tendangnhap/ChinhSuaSoCMND', controllers.XemThongTin.chinhSuaThongTin)
        .post('/:tendangnhap/ThayDoiAnhDaiDien', upload.single('image'), controllers.XemThongTin.thayDoiAnhDaiDien);

    var ve = router()
        .get('/:tendangnhap', controllers.ve.index);

    app.use('/about', about);
    app.use('/', home);
    app.use('/signIn', signIn);
    app.use('/signUp', signUp);
    app.use('/Gallery', Gallery);
    app.use('/tintuc',tintuc);
    app.use('/XemThongTin', XemThongTin);
    app.use('/xem_ve', ve);
};

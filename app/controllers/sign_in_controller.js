var signInController = {
    index: function(req, res) {
        console.log('sign out');
        req.logout();
        res.redirect('/');
    }
};

module.exports = signInController;

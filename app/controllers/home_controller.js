var homeHelper = require('../helpers/home');
var homeModel = require('../models/home');

var home_controller = {
    index: function(req, res) {
        var message = req.flash('error')[0];

        homeModel.layHinhAnh(function(error, result) {
            homeModel.layTinTuc(function(error2, result2) {
                homeModel.layKhuyenMai(function(error3, result3) {
                    if (message) {
                        if (error) {
                            if (error2) {
                                if (error3) {
                                    homeHelper.homeRender(message, null, null, null, null, null, res);
                                } else {
                                    homeHelper.homeRender(message, null, null, null, null, result3, res);
                                }
                            } else {
                                if (error3) {
                                    homeHelper.homeRender(message, null, null, null, result2, null, res);
                                } else {
                                    homeHelper.homeRender(message, null, null, null, result2, result3, res);
                                }
                            }
                        } else {
                            if (error2) {
                                if (error3) {
                                    homeHelper.homeRender(message, null, null, result, null, null, res);
                                } else {
                                    homeHelper.homeRender(message, null, null, result, null, result3, res);
                                }
                            } else {
                                if (error3) {
                                    homeHelper.homeRender(message, null, null, result, result2, null, res);
                                } else {
                                    homeHelper.homeRender(message, null, null, result, result2, result3, res);
                                }
                            }
                        }
                    } else {
                        if (req.user) {
                            if (req.user.Avartar) {
                                if (error) {
                                    if (error2) {
                                        if (error3) {
                                            homeHelper.homeRender(null, req.user.TenDangNhap, req.user.Avartar, null, null, null, res);
                                        } else {
                                            homeHelper.homeRender(null, req.user.TenDangNhap, req.user.Avartar, null, null, result3, res);
                                        }
                                    } else {
                                        if (error3) {
                                            homeHelper.homeRender(null, req.user.TenDangNhap, req.user.Avartar, null, result2, null, res);
                                        } else {
                                            homeHelper.homeRender(null, req.user.TenDangNhap, req.user.Avartar, null, result2, result3, res);
                                        }
                                    }
                                } else {
                                    if (error2) {
                                        if (error3) {
                                            homeHelper.homeRender(null, req.user.TenDangNhap, req.user.Avartar, result, null, null, res);
                                        } else {
                                            homeHelper.homeRender(null, req.user.TenDangNhap, req.user.Avartar, result, null, result3, res);
                                        }
                                    } else {
                                        if (error3) {
                                            homeHelper.homeRender(null, req.user.TenDangNhap, req.user.Avartar, result, result2, null, res);
                                        } else {
                                            homeHelper.homeRender(null, req.user.TenDangNhap, req.user.Avartar, result, result2, result3, res);
                                        }
                                    }
                                }
                            } else {
                                if (error) {
                                    if (error2) {
                                        if (error3) {
                                            homeHelper.homeRender(null, req.user.TenDangNhap, 'images/male_avartar.png', null, null, null, res);
                                        } else {
                                            homeHelper.homeRender(null, req.user.TenDangNhap, 'images/male_avartar.png', null, null, result3, res);
                                        }
                                    } else {
                                        if (error3) {
                                            homeHelper.homeRender(null, req.user.TenDangNhap, 'images/male_avartar.png', null, result2, null, res);
                                        } else {
                                            homeHelper.homeRender(null, req.user.TenDangNhap, 'images/male_avartar.png', null, result2, result3, res);
                                        }
                                    }
                                } else {
                                    if (error2) {
                                        if (error3) {
                                            homeHelper.homeRender(null, req.user.TenDangNhap, 'images/male_avartar.png', result, null, null, res);
                                        } else {
                                            homeHelper.homeRender(null, req.user.TenDangNhap, 'images/male_avartar.png', result, null, result3, res);
                                        }
                                    } else {
                                        if (error3) {
                                            homeHelper.homeRender(null, req.user.TenDangNhap, 'images/male_avartar.png', result, result2, null, res);
                                        } else {
                                            homeHelper.homeRender(null, req.user.TenDangNhap, 'images/male_avartar.png', result, result2, result3, res);
                                        }
                                    }
                                }
                            }
                        } else {
                            if (error) {
                                if (error2) {
                                    if (error3) {
                                        homeHelper.homeRender(null, null, null, null, null, null, res);
                                    } else {
                                        homeHelper.homeRender(null, null, null, null, null, result3, res);
                                    }
                                } else {
                                    if (error3) {
                                        homeHelper.homeRender(null, null, null, null, result2, null, res);
                                    } else {
                                        homeHelper.homeRender(null, null, null, null, result2, result3, res);
                                    }
                                }
                            } else {
                                if (error2) {
                                    if (error3) {
                                        homeHelper.homeRender(null, null, null, result, null, null, res);
                                    } else {
                                        homeHelper.homeRender(null, null, null, result, null, result3, res);
                                    }
                                } else {
                                    if (error3) {
                                        homeHelper.homeRender(null, null, null, result, result2, null, res);
                                    } else {
                                        homeHelper.homeRender(null, null, null, result, result2, result3, res);
                                    }
                                }
                            }
                        }
                    }
                });
            });
        });
    }
};

module.exports = home_controller;

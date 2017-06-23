var galleryHelper = require('../helpers/gallery');
var galleryModel = require('../models/gallery');

var galleryController = {
    index: function(req, res) {
        galleryModel.layTatCaDiaDiem(function(error, result) {
            galleryHelper.index(error, result, req, res);
        });
    },
    layDiaDiem: function(req, res) {
        var madiadiem = parseInt(req.body.madiadiem, 10);

        galleryModel.layDiaDiem(madiadiem, function(error, result) {
            var data = {
              error: null,
              result: [],
            };

            if (error) {
              data.error = error;
            }
            else {
              data.result = result;
            }

            res.send(data);
        });
    }
};

module.exports = galleryController;

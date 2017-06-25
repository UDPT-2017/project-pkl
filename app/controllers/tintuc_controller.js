var tintucHelper = require('../helpers/tintuc');
var tintucModel = require('../models/tintuc');

var tintuccontroller = {
  index: function(req, res) {
      tintucModel.laytatcatintuc(function(error, result) {
          tintucHelper.index(error, result, req, res);
      });
  },
  laytintuc: function(req, res) {
      var matintuc = parseInt(req.body.matintuc, 10);

      tintucModel.laytintuc(matintuc, function(error, result) {
          tintucModel.laycomment(matintuc,function(error2,result2) {
            var data = {
              error: null,
              result: [],
              error2: null,
              result2: [],
            };
            console.log(result);
            if (error) { //tra ve tin tuc
              data.error = error;
            }
            else {
              data.result = result;
            }

            if(error2){ //tra ve comment
              data.error2 = error2;
            }
            else {
              data.result2 = result2;
            }

            res.send(data);

          });
      });
  }
};

module.exports = tintuccontroller;

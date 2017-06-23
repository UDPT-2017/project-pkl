var pool = require('../../config/db');

module.exports = {
    layTatCaDiaDiem: function(callback) {
        pool.query("select MaDiaDiem, TenDiaDiem, AnhDiaDiem from DIADIEM", [], function(error, result) {
            if (error) {
                callback(error, null);
            } else {
                callback(null, result.rows);
            }
        });
    },
    layDiaDiem: function(madiadiem, callback) {
        pool.query("select DiaDiem, LinkHA from DIADIEM d, GALLERY g where d.MaDiaDiem = $1 and d.MaDiaDiem = g.MaDiaDiem", [madiadiem], function(error, result) {
            if (error) {
                callback(error, null);
            } else {
                console.log(result.rows);
                callback(null, result.rows);
            }
        });
    },
};

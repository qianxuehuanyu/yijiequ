
var express = require('express');
var router = express.Router();

const conn = require("./MySqlConnection");
/* GET home page. */
//yjqxw
router.get('/yjqxw.html', function(req, res, next) {
    conn.query("SELECT * FROM nav_url", function (err, result) {
      if (!err) {
        res.render("./yjqxw/yjqxw", {title:"亿街区官方网站",navUrl: result});
      } else {
        res.json(err);
      }
    });
});


module.exports = router;

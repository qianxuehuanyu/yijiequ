var express = require('express');
var router = express.Router();

const conn = require("./MySqlConnection");
/* GET home page. */
//index
router.get('/index.html', function(req, res, next) {
    conn.query("SELECT * FROM nav_url", function (err, result) {
      if (!err) {
      	res.render("./index", {title:"亿街区官方网站",navUrl: result});
      } else {
        res.json(err);
      }
    });
});

module.exports = router;

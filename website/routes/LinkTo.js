var express = require('express');
var router = express.Router();

const conn = require("./MySqlConnection");
/* GET home page. */
//fgsq
router.post('/PtjsLinkToYxal', function(req, res, next) {
    conn.query("SELECT * FROM yxal_list WHERE city='"+req.city+"'", function (err, result) {
      if (!err) {
      	res.render("./PtjsLinkToYxal.html", {title:"亿街区官方网站",displaylist: result});       
      } else {
        res.json(err);
      }
    });
});


module.exports = router;
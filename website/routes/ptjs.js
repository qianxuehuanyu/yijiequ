var express = require('express');
var router = express.Router();

const conn = require("./MySqlConnection");
/* GET home page. */
//ptjs

router.get('/ptjs.html', function(req, res, next) {
  conn.query("SELECT * FROM nav_url", function (err, result) {
    if (!err) {
      res.render("./ptjs/ptjs", {title:"亿街区官方网站",navUrl: result});
    } else {
      res.json(err);
    }
  });
<<<<<<< HEAD
  conn.query("SELECT * FROM ptjs_url", function (err, result) {
    if (!err) {
    	ptjscontent.ptjsUrl=result;
    	ptjscontent.select++;
    } else {console.log(err);}
    connquery_count++;
  });
  conn.query("SELECT * FROM `upload_yxal` GROUP BY `city`;", function (err, result) {
    if (!err) {
    	ptjscontent.cityList=result;
    	ptjscontent.select++;
    } else {console.log(err);}
    connquery_count++;
  });
  var sqlselect=setInterval(function(){
      if(connquery_count==3){
        clearInterval(sqlselect);
        res.render("./ptjs/ptjs", {Content: ptjscontent});
      }
    },100);
=======
>>>>>>> 71d87d6be52ea68414135d2dfa3040e60d757613
});

module.exports = router;
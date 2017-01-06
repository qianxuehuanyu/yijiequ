var express = require('express');
var router = express.Router();

const conn = require("./MySqlConnection");
/* GET home page. */
//ptjs

router.get('/ptjs.html', function(req, res, next) {
	var ptjscontent={
		title:"亿街区官方网站",
		select:0,
		navUrl: {},
		cityList:{},
		ptjsUrl:{}
	};
	var connquery_count=0;
  conn.query("SELECT * FROM nav_url", function (err, result) {
    if (!err) {
    	ptjscontent.navUrl=result;
    	ptjscontent.select++;
    } else {console.log(err);}
    connquery_count++;
  });
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
        res.render("./ptjs/ptjs", {ptjsContent: ptjscontent});
      }
    },100);
});

module.exports = router;
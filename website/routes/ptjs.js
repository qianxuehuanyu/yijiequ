var express = require('express');
var router = express.Router();

const conn = require("./MySqlConnection");
/* GET home page. */
//ptjs

router.get('/ptjs.html', function(req, res, next) {

	var ptjscontent={
		title:"亿街区官方网站",
		navUrl:{},
		asideUrl:{},
		footerUrl:{},
    	selectCount:0,
		cityList:{},
		ptjsUrl:{}
	};
	var connquery_count=0;
  	conn.query("SELECT * FROM nav_url", function (err, result) {
      if (!err) {
      	ptjscontent.navUrl=result;
        ptjscontent.selectCount++;
      }else{console.log(err)}
      connquery_count++;
    });
    conn.query("SELECT * FROM aside_url", function (err, result) {
      if (!err) {
      	ptjscontent.asideUrl=result;
        ptjscontent.selectCount++;
      }else{console.log(err)}
      connquery_count++;
    });
    conn.query("SELECT * FROM footer_url", function (err, result) {
      if (!err) {
      	ptjscontent.footerUrl=result;
        ptjscontent.selectCount++;
      }else{console.log(err)}
      connquery_count++;
    });

  	conn.query("SELECT * FROM ptjs_url", function (err, result) {
    if (!err) {
    	ptjscontent.ptjsUrl=result;
    	ptjscontent.selectCount++;
    } else {console.log(err);}
    connquery_count++;
  });
  conn.query("SELECT * FROM `upload_yxal` GROUP BY `city`;", function (err, result) {
    if (!err) {
    	ptjscontent.cityList=result;
    	ptjscontent.selectCount++;
    } else {console.log(err);}
    connquery_count++;
  });
  var sqlselect=setInterval(function(){
      if(connquery_count==5){
        clearInterval(sqlselect);
        res.render("./ptjs/ptjs", {Content: ptjscontent});
      }
    },100);
});

module.exports = router;
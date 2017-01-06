var express = require('express');
var router = express.Router();

const conn = require("./MySqlConnection");
/* GET home page. */
//ptjs

router.get('/ptjs.html', function(req, res, next) {

	var ptjscontent={
		title:"亿街区官方网站",
		navUrl:{},
    navTitle:"ptjs",
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
      if(connquery_count==4){
        clearInterval(sqlselect);
        res.render("./ptjs/ptjs", {Content: ptjscontent});
      }
    },100);
});
//////////////////////////////////
/////////////////////////////////
//ptjs2
router.get('/ptjs2.html', function(req, res, next) {

  var ptjscontent={
    title:"亿街区官方网站",
    footerUrl:{},
    selectCount:0,
    cityList:{},
    ptjsUrl:{}
  };
  var connquery_count=0;
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
      if(connquery_count==3){
        clearInterval(sqlselect);
        res.render("./ptjs/ptjs2", {Content: ptjscontent});
      }
    },100);
});


module.exports = router;
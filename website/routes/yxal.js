var express = require('express');
var router = express.Router();

const conn = require("./MySqlConnection");
/* GET home page. */
//yxal
router.get('/yxal.html', function(req, res, next) {

	var yxalcontent={
		title:"亿街区官方网站",
		navUrl:{},
		navTitle:"yxal",
		footerUrl:{},
  	selectCount:0,
		uploadYxal:{}
	};
	var connquery_count=0;
  	conn.query("SELECT * FROM nav_url", function (err, result) {
      if (!err) {
      	yxalcontent.navUrl=result;
        yxalcontent.selectCount++;
      }else{console.log(err)}
      connquery_count++;
    });
    conn.query("SELECT * FROM footer_url", function (err, result) {
      if (!err) {
      	yxalcontent.footerUrl=result;
        yxalcontent.selectCount++;
      }else{console.log(err)}
      connquery_count++;
    });

  	conn.query("SELECT * FROM upload_yxal", function (err, result) {
    if (!err) {
    	yxalcontent.uploadYxal=result;
    	yxalcontent.selectCount++;
    } else {console.log(err);}
    connquery_count++;
  });
  var sqlselect=setInterval(function(){
      if(connquery_count==3){
        clearInterval(sqlselect);
        res.render("./yxal/yxal", {Content: yxalcontent});
      }
    },100);
});
///////////////////////////////////
///////////////////////////////////
//yxal10.html
router.get('/yxal10.html', function(req, res, next) {
  console.log(req.body.id);
  var yxalcontent={
    title:"亿街区官方网站",
    navUrl:{},
    navTitle:"yxal",
    footerUrl:{},
    selectCount:0,
    uploadYxal:{}
  };
  var connquery_count=0;
    conn.query("SELECT * FROM nav_url", function (err, result) {
      if (!err) {
        yxalcontent.navUrl=result;
        yxalcontent.selectCount++;
      }else{console.log(err)}
      connquery_count++;
    });
    conn.query("SELECT * FROM footer_url", function (err, result) {
      if (!err) {
        yxalcontent.footerUrl=result;
        yxalcontent.selectCount++;
      }else{console.log(err)}
      connquery_count++;
    });

    conn.query("SELECT * FROM upload_yxal", function (err, result) {
    if (!err) {
      yxalcontent.uploadYxal=result;
      yxalcontent.selectCount++;
    } else {console.log(err);}
    connquery_count++;
  });
  var sqlselect=setInterval(function(){
      if(connquery_count==3){
        clearInterval(sqlselect);
        res.render("./yxal/yxal", {Content: yxalcontent});
      }
    },100);
});


module.exports = router;
var express = require('express');
var router = express.Router();

const conn = require("./MySqlConnection");
/* GET home page. */
//hzhb
router.get('/hzhb.html', function(req, res, next) {

	var hzhbcontent={
		title:"亿街区官方网站",
		navUrl:{},
		navTitle:"hzhb",
		footerUrl:{},
  	selectCount:0,
		uploadHzhb:{}
	};
	var connquery_count=0;
  	conn.query("SELECT * FROM nav_url", function (err, result) {
      if (!err) {
      	hzhbcontent.navUrl=result;
        hzhbcontent.selectCount++;
      }else{console.log(err)}
      connquery_count++;
    });
    conn.query("SELECT * FROM footer_url", function (err, result) {
      if (!err) {
      	hzhbcontent.footerUrl=result;
        hzhbcontent.selectCount++;
      }else{console.log(err)}
      connquery_count++;
    });

  	conn.query("SELECT * FROM upload_hzhb", function (err, result) {
    if (!err) {
    	hzhbcontent.uploadHzhb=result;
    	hzhbcontent.selectCount++;
    } else {console.log(err);}
    connquery_count++;
  });
  var sqlselect=setInterval(function(){
      if(connquery_count==3){
        clearInterval(sqlselect);
        res.render("./hzhb/hzhb", {Content: hzhbcontent});
      }
    },100);
});
///////////////////////////////////////
///////////////////////////////////////
//hzhb2
router.get('/hzhb2.html', function(req, res, next) {
   
  var hzhbcontent={
    title:"亿街区官方网站",
    navUrl:{},
    navTitle:"jmhz",
    footerUrl:{},
    selectCount:0,
    hzhbCon:{}
  };
  var connquery_count=0;
    conn.query("SELECT * FROM nav_url", function (err, result) {
      if (!err) {
        hzhbcontent.navUrl=result;
        hzhbcontent.selectCount++;
      }else{console.log(err)}
      connquery_count++;
    });
    conn.query("SELECT * FROM footer_url", function (err, result) {
      if (!err) {
        hzhbcontent.footerUrl=result;
        hzhbcontent.selectCount++;
      }else{console.log(err)}
      connquery_count++;
    });
    conn.query("SELECT * FROM `upload_hzhb` WHERE `url_id`="+req.query.id, function (err, result) {
      if (!err) {
        hzhbcontent.hzhbCon=result;
        hzhbcontent.selectCount++;
      }else{console.log(err)}
      connquery_count++;
    });
  var sqlselect=setInterval(function(){
      if(connquery_count==3){
        clearInterval(sqlselect);
        res.render("./hzhb/hzhb2", {Content: hzhbcontent});
      }
    },100);
});


module.exports = router;
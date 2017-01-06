var express = require('express');
var router = express.Router();

const conn = require("./MySqlConnection");
/* GET home page. */
//index
router.get('/index.html', function(req, res, next) {
	var indexContent={
		title:"亿街区官方网站",
		navUrl:{},
		asideUrl:{},
		footerUrl:{},
		indexUrl:{},
		uploadHzhb:{},
		uploadYxal:{}
	};
    conn.query("SELECT * FROM nav_url", function (err, result) {
      if (!err) {
      	indexContent.navUrl=result;
      }else{console.log(err)}});
    conn.query("SELECT * FROM aside_url", function (err, result) {
      if (!err) {
      	indexContent.asideUrl=result;
      }else{console.log(err)}});
    conn.query("SELECT * FROM footer_url", function (err, result) {
      if (!err) {
      	indexContent.footerUrl=result;
      }else{console.log(err)}});
	conn.query("SELECT * FROM index_url", function (err, result) {
      if (!err) {
      	indexContent.indexUrl=result;
      }else{console.log(err)}});
	conn.query("SELECT * FROM upload_hzhb", function (err, result) {
      if (!err) {
      	indexContent.uploadHzhb=result;
      }else{console.log(err)}});
	conn.query("SELECT * FROM upload_yxal", function (err, result) {
      if (!err) {
<<<<<<< HEAD
      	indexcontent.uploadYxal=result;
        indexcontent.select++;
      }else{console.log(err)}
      connquery_count++;
    });
    var sqlselect=setInterval(function(){
      if(connquery_count==6){
        clearInterval(sqlselect);
        res.render("./index",{Content:indexcontent});
      }
    },100);
=======
      	indexContent.uploadYxal=result;
      }else{console.log(err)}});
		res.render("./index",indexContent);
>>>>>>> 71d87d6be52ea68414135d2dfa3040e60d757613
});

module.exports = router;

var express = require('express');
var router = express.Router();

const conn = require("./MySqlConnection");
/* GET home page. */
//index
router.get('/index.html', function(req, res, next) {
	var indexcontent={
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
      	indexcontent.navUrl=result;
      }else{console.log(err)}});
    conn.query("SELECT * FROM aside_url", function (err, result) {
      if (!err) {
      	indexcontent.asideUrl=result;
      }else{console.log(err)}});
    conn.query("SELECT * FROM footer_url", function (err, result) {
      if (!err) {
      	indexcontent.footerUrl=result;
      }else{console.log(err)}});
	conn.query("SELECT * FROM index_url", function (err, result) {
      if (!err) {
      	indexcontent.indexUrl=result;
      }else{console.log(err)}});
	conn.query("SELECT * FROM upload_hzhb", function (err, result) {
      if (!err) {
      	indexcontent.uploadHzhb=result;
      }else{console.log(err)}});
	conn.query("SELECT * FROM upload_yxal", function (err, result) {
      if (!err) {
      	indexcontent.uploadYxal=result;
      }else{console.log(err)}});
	res.render("./index",{indexContent:indexcontent});
});

module.exports = router;

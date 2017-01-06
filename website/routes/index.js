var express = require('express');
var router = express.Router();

const conn = require("./MySqlConnection");
/* GET home page. */
//index
router.get('/index.html', function(req, res, next) {
	var indexcontent={
		title:"亿街区官方网站",
    select:0,
		navUrl:{},
		asideUrl:{},
		footerUrl:{},
		indexUrl:{},
		uploadHzhb:{},
		uploadYxal:{}
	};
  var connquery_count=0;
    conn.query("SELECT * FROM nav_url", function (err, result) {
      if (!err) {
      	indexcontent.navUrl=result;
        indexcontent.select++;
      }else{console.log(err)}
      connquery_count++;
    });
    conn.query("SELECT * FROM aside_url", function (err, result) {
      if (!err) {
      	indexcontent.asideUrl=result;
        indexcontent.select++;
      }else{console.log(err)}
    connquery_count++;
    });
    conn.query("SELECT * FROM footer_url", function (err, result) {
      if (!err) {
      	indexcontent.footerUrl=result;
        indexcontent.select++;
      }else{console.log(err)}
      connquery_count++;
    });
	conn.query("SELECT * FROM index_url", function (err, result) {
      if (!err) {
      	indexcontent.indexUrl=result;
        indexcontent.select++;
      }else{console.log(err)}
      connquery_count++;
    });
	conn.query("SELECT * FROM upload_hzhb", function (err, result) {
      if (!err) {
      	indexcontent.uploadHzhb=result;
        indexcontent.select++;
      }else{console.log(err)}
      connquery_count++;
    });
	conn.query("SELECT * FROM upload_yxal", function (err, result) {
      if (!err) {
      	indexcontent.uploadYxal=result;
        indexcontent.select++;
      }else{console.log(err)}
      connquery_count++;
    });
    var sqlselect=setInterval(function(){
      if(connquery_count==6){
        clearInterval(sqlselect);
        res.render("./index",{indexContent:indexcontent});
      }
    },100);
});

module.exports = router;

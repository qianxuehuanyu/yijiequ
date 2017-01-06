var express = require('express');
var router = express.Router();

const conn = require("./MySqlConnection");
/* GET home page. */
//index
router.get('/index.html', function(req, res, next) {
	var indexcontent={
		title:"亿街区官方网站",
		navUrl:{},
		footerUrl:{},
    selectCount:0,
		indexUrl:{},
		uploadHzhb:{},
		uploadYxal:{}
	};
  var connquery_count=0;
    conn.query("SELECT * FROM nav_url", function (err, result) {
      if (!err) {
      	indexcontent.navUrl=result;
        indexcontent.selectCount++;
      }else{console.log(err)}
      connquery_count++;
    });
    conn.query("SELECT * FROM footer_url", function (err, result) {
      if (!err) {
      	indexcontent.footerUrl=result;
        indexcontent.selectCount++;
      }else{console.log(err)}
      connquery_count++;
    });
	  conn.query("SELECT * FROM index_url", function (err, result) {
      if (!err) {
      	indexcontent.indexUrl=result;
        indexcontent.selectCount++;
      }else{console.log(err)}
      connquery_count++;
    });
	  conn.query("SELECT * FROM upload_hzhb", function (err, result) {
      if (!err) {
      	indexcontent.uploadHzhb=result;
        indexcontent.selectCount++;
      }else{console.log(err)}
      connquery_count++;
    });
	  conn.query("SELECT * FROM upload_yxal", function (err, result) {
      if (!err) {
      	indexcontent.uploadYxal=result;
        indexcontent.selectCount++;
      }else{console.log(err)}
      connquery_count++;
    });
    var sqlselect=setInterval(function(){
      if(connquery_count==5){
        clearInterval(sqlselect);
        res.render("./index",{Content:indexcontent});
      }
    },100);
});

module.exports = router;

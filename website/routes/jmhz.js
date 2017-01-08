
var express = require('express');
var router = express.Router();

const conn = require("./MySqlConnection");
/* GET home page. */
//jmhz
router.get('/jmhz.html', function(req, res, next) {
   
	var jmhzwcontent={
		title:"亿街区官方网站",
		navUrl:{},
		navTitle:"jmhz",
		footerUrl:{},
  	selectCount:0,
  	kindeList:{},
		uploadYjqxw:{}
	};
	var connquery_count=0;
  	conn.query("SELECT * FROM nav_url", function (err, result) {
      if (!err) {
      	yjqxwcontent.navUrl=result;
        yjqxwcontent.selectCount++;
      }else{console.log(err)}
      connquery_count++;
    });
    conn.query("SELECT * FROM footer_url", function (err, result) {
      if (!err) {
      	yjqxwcontent.footerUrl=result;
        yjqxwcontent.selectCount++;
      }else{console.log(err)}
      connquery_count++;
    });
    conn.query("SELECT * FROM `upload_yjqxw` GROUP BY `kind`", function (err, result) {
    if (!err) {
    	yjqxwcontent.kindeList=result;
    	yjqxwcontent.selectCount++;
    } else {console.log(err);}
    connquery_count++;
  });
  	conn.query("SELECT * FROM `upload_yjqxw` ORDER BY `time` DESC", function (err, result) {
    if (!err) {
    	yjqxwcontent.uploadYjqxw=result;
    	yjqxwcontent.selectCount++;
    } else {console.log(err);}
    connquery_count++;
  });
  var sqlselect=setInterval(function(){
      if(connquery_count==4){
        clearInterval(sqlselect);
        res.render("./hzhb/hzhb", {Content: yjqxwcontent});
      }
    },100);
});

///////////////////////////////////////
///////////////////////////////////////


module.exports = router;

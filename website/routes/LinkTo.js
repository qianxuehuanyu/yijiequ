var express = require('express');
var router = express.Router();

const conn = require("./MySqlConnection");
/* GET home page. */
//fgsq
router.post('/PtjsLinkToYxal', function(req, res, next) {
  	res.render("./ptjs/PtjsLinkToYxal.html", {displayCity: req.displayCity});       
});

router.get('/ptjs/PtjsLinkToYxal.html', function(req, res, next) {

	var linkTocontent={
		title:"亿街区官方网站",
		navUrl:{},
		footerUrl:{},
  		selectCount:0,
		cityList:{},
		uploadYxal:{}
	};
	var connquery_count=0;
  	conn.query("SELECT * FROM nav_url", function (err, result) {
      if (!err) {
      	linkTocontent.navUrl=result;
        linkTocontent.selectCount++;
      }else{console.log(err)}
      connquery_count++;
    });
    conn.query("SELECT * FROM footer_url", function (err, result) {
      if (!err) {
      	linkTocontent.footerUrl=result;
        linkTocontent.selectCount++;
      }else{console.log(err)}
      connquery_count++;
    });

  	conn.query("SELECT * FROM upload_yxal", function (err, result) {
    if (!err) {
    	linkTocontent.uploadYxal=result;
    	linkTocontent.selectCount++;
    } else {console.log(err);}
    connquery_count++;
  });
  conn.query("SELECT * FROM `upload_yxal` GROUP BY `city`;", function (err, result) {
    if (!err) {
    	linkTocontent.cityList=result;
    	linkTocontent.selectCount++;
    } else {console.log(err);}
    connquery_count++;
  });
  var sqlselect=setInterval(function(){
      if(connquery_count==4){
        clearInterval(sqlselect);
        res.render("./ptjs/PtjsLinkToYxal.html", {Content: linkTocontent});
      }
    },100);
});



module.exports = router;
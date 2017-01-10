var express = require('express');
var router = express.Router();

const conn = require("./MySqlConnection");
/* GET home page. */
//ptjsLinkToyxal

var choose;
router.post("/ptjsLinkToyxal", function(req, res, next) {
  // console.log(req.body.displayCity,choose);
  choose=req.body.displayCity;
  var linkTocontent={
    title:"亿街区官方网站",
    navUrl:{},
    navTitle:"yxal",
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
      linkTocontent.kind=req.body.displayCity;
      if(connquery_count==4){
        clearInterval(sqlselect);
        res.render("./PtjsLinkToYxal/PtjsLinkToYxal", {Content: linkTocontent,theKind:{kind:"other"}});
      }
    },100);
});


router.get('/PtjsLinkToYxal.html', function(req, res, next) {
  // console.log(choose);
	var linkTocontent={
		title:"亿街区官方网站",
		navUrl:{},
		navTitle:"yxal",
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
        if(choose==undefined){choose="全部";}
        res.render("./PtjsLinkToYxal/PtjsLinkToYxal", {Content: linkTocontent , theKind:{kind:choose}});
      }
    },100);
});



module.exports = router;
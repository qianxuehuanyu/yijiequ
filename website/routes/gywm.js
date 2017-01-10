var express = require('express');
var router = express.Router();

const conn = require("./MySqlConnection");
/* GET home page. */
//gywm
router.get('/gywm.html',function (req,res,next) {
	var gywmcontent={
		title:"亿街区官方网站",
		navUrl:{},
		navTitle:"gywm",
		footerUrl:{},
  		selectCount:0,
		gywmCon:{},
	};
	var connquery_count=0;
  	conn.query("SELECT * FROM nav_url", function (err, result) {
      if (!err) {
      	gywmcontent.navUrl=result;
        gywmcontent.selectCount++;
      }else{console.log(err)}
      connquery_count++;
    });
    conn.query("SELECT * FROM footer_url", function (err, result) {
      if (!err) {
      	gywmcontent.footerUrl=result;
        gywmcontent.selectCount++;
      }else{console.log(err)}
      connquery_count++;
    });
    conn.query("SELECT * FROM `gywm_content`", function (err, result) {
    if (!err) {
    	gywmcontent.jmhzUrl=result;
    	gywmcontent.selectCount++;
    } else {console.log(err);}
    connquery_count++;
  });
  var sqlselect=setInterval(function(){
      if(connquery_count==3){
        clearInterval(sqlselect);
        res.render("./gywm/gywm", {Content: gywmcontent});
      }
    },100);
	
})

module.exports = router;
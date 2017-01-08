
var express = require('express');
var router = express.Router();

const conn = require("./MySqlConnection");
/* GET home page. */
//jmhz
router.get('/jmhz.html', function(req, res, next) {
   
	var jmhzcontent={
		title:"亿街区官方网站",
		navUrl:{},
		navTitle:"jmhz",
		footerUrl:{},
  	selectCount:0,
		jmhzUrl:{},
    jmhzLink:{}
	};
	var connquery_count=0;
  	conn.query("SELECT * FROM nav_url", function (err, result) {
      if (!err) {
      	jmhzcontent.navUrl=result;
        jmhzcontent.selectCount++;
      }else{console.log(err)}
      connquery_count++;
    });
    conn.query("SELECT * FROM footer_url", function (err, result) {
      if (!err) {
      	jmhzcontent.footerUrl=result;
        jmhzcontent.selectCount++;
      }else{console.log(err)}
      connquery_count++;
    });
    conn.query("SELECT * FROM `jmhz_url`", function (err, result) {
    if (!err) {
    	jmhzcontent.jmhzUrl=result;
    	jmhzcontent.selectCount++;
    } else {console.log(err);}
    connquery_count++;
  });
  	conn.query("SELECT * FROM `jmhz_link`", function (err, result) {
    if (!err) {
    	jmhzcontent.jmhzLink=result;
    	jmhzcontent.selectCount++;
    } else {console.log(err);}
    connquery_count++;
  });
  var sqlselect=setInterval(function(){
      if(connquery_count==4){
        clearInterval(sqlselect);
        res.render("./jmhz/jmhz", {Content: jmhzcontent});
      }
    },100);
});

///////////////////////////////////////
///////////////////////////////////////
//jmhz2
router.get('/jmhz2.html', function(req, res, next) {
   
  var jmhzcontent={
    title:"亿街区官方网站",
    navUrl:{},
    navTitle:"jmhz",
    footerUrl:{},
    selectCount:0,
  };
  var connquery_count=0;
    conn.query("SELECT * FROM nav_url", function (err, result) {
      if (!err) {
        jmhzcontent.navUrl=result;
        jmhzcontent.selectCount++;
      }else{console.log(err)}
      connquery_count++;
    });
    conn.query("SELECT * FROM footer_url", function (err, result) {
      if (!err) {
        jmhzcontent.footerUrl=result;
        jmhzcontent.selectCount++;
      }else{console.log(err)}
      connquery_count++;
    });
  var sqlselect=setInterval(function(){
      if(connquery_count==2){
        clearInterval(sqlselect);
        res.render("./hzhb/hzhb2", {Content: jmhzcontent});
      }
    },100);
});
////////////////////////////////////////////
////////////////////////////////////////////
//post
router.post('/jmhzJoinCheck',function(req,res,next){
  var returnback={};
  conn.query("SELECT `jmhz_company` WHERE `company`="+req.body.company, function (req,res ,next) {
    if(!err){
      //返回该公司已经注册
      res.json({status:1,retrunback:result});
    }else{
      jmhzJoin();
    }
  });
  function jmhzJoin() {
    conn.query("INSERT `jmhz_company` (`id`,`company`,`city`,`address`,`contact`,`phone`,`email`,`weixin_public`) "+
    "VALUE ('','"+req.body.company+"','"+req.boyd.city+"','"+req.boy.address+"','"+req.body.contact+"','"+req.body.phone+
    "','"+req.body.email+"','"req.body.weixin_public"')",function (err,result) {
    if(!err){
      res.json({status:0,retrunback:result});
    }else{
      res.json({status:0,retrunback:err});
    }
  });
  }

});



module.exports = router;

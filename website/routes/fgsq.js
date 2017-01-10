var express = require('express');
var router = express.Router();

const conn = require("./MySqlConnection");
/* GET home page. */
//fgsq
router.get('/fgsq.html', function(req, res, next) {
     
  var fgsqcontent={
    title:"亿街区官方网站",
    navUrl:{},
    navTitle:"fgsq",
    footerUrl:{},
    selectCount:0,
  };
  var connquery_count=0;
    conn.query("SELECT * FROM nav_url", function (err, result) {
      if (!err) {
        fgsqcontent.navUrl=result;
        fgsqcontent.selectCount++;
      }else{console.log(err)}
      connquery_count++;
    });
    conn.query("SELECT * FROM footer_url", function (err, result) {
      if (!err) {
        fgsqcontent.footerUrl=result;
        fgsqcontent.selectCount++;
      }else{console.log(err)}
      connquery_count++;
    });
  var sqlselect=setInterval(function(){
      if(connquery_count==2){
        clearInterval(sqlselect);
        res.render("./fgsq/fgsq", {Content: fgsqcontent});
      }
    },100);
});


module.exports = router;
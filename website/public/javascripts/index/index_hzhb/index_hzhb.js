/**
 * Created by Administrator on 2017/1/6 0006.
 */
$(document).ready(function () {

    var sysj=$(".suoyousj");
    var hzsj=$(".hezuosj");
    var wyqy=$(".wuyeqy");
    var sy=$(".suoyou");
    var hz=$(".hezuo");
    var wy=$(".wuye");

    console.log(hzsj);
        sysj[0].onclick=function () {
            sy[0].style.display="block";
            hz[0].style.display="none";
            wy[0].style.display="none";
            console.log(sy)
        }
    hzsj[0].onclick=function (event) {
        sy[0].style.display="none";
        hz[0].style.display="block";
        wy[0].style.display="none";
        console.log(22)
    };

    wyqy[0].onclick=function (event) {
        sy[0].style.display="none";
        hz[0].style.display="none";
        wy[0].style.display="block";
        console.log(33)
    };
});
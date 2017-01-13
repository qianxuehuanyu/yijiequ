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

        sysj[0].onclick=function () {
            sy[0].style.display="block";
            hz[0].style.display="none";
            wy[0].style.display="none";
            sysj.addClass("index_hzhb_colorAndBorder");
            hzsj.removeClass("index_hzhb_colorAndBorder");
            wyqy.removeClass("index_hzhb_colorAndBorder");
        }
    hzsj[0].onclick=function (event) {
        sy[0].style.display="none";
        hz[0].style.display="block";
        wy[0].style.display="none";
        sysj.removeClass("index_hzhb_colorAndBorder");
        hzsj.addClass("index_hzhb_colorAndBorder");
        wyqy.removeClass("index_hzhb_colorAndBorder");
    };

    wyqy[0].onclick=function (event) {
        sy[0].style.display="none";
        hz[0].style.display="none";
        wy[0].style.display="block";
        sysj.removeClass("index_hzhb_colorAndBorder");
        hzsj.removeClass("index_hzhb_colorAndBorder");
        wyqy.addClass("index_hzhb_colorAndBorder");
    };
});
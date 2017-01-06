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

        sysj[0].click(function (event) {
            sy[0].show();
            hz[0].hide();
            wy[0].hide();
            console.log(11)
        });
    hzsj[0].click(function (event) {
        hz[0].show();
        sy[0].hide();
        wy[0].hide();
        console.log(22)
    });

    wyqy[0].click(function (event) {
        wy[0].show();
        hz[0].hide();
        sy[0].hide();
        console.log(33)
    });
});
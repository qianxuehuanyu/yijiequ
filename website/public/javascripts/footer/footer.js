/**
 * Created by Administrator on 2017/1/5 0005.
 */
(window.onload = function () {
    var weiB=$(".footer_sian");
    var weiX=$(".footer_weixing");
    var app=$(".footer_app");
    var weiBoErWeiMa=$(".erweima_weib");
    var weiXinErWeiMa=$(".erweima_weix");
    var appErWeiMa=$(".erweima_app");

    function disPlay_noneAndBlock(btn,img,src1,src2) {
        btn.hover(function () {
                btn[0].src=src1;
                img.show();
            },
            function () {
                btn[0].src=src2;
                img.hide();
            });
    }
    disPlay_noneAndBlock(weiB,weiBoErWeiMa,"/images/footer/weibo_l.png","/images/footer/sian.png");
    disPlay_noneAndBlock(weiX,weiXinErWeiMa,"/images/footer/weixin_l.png","/images/footer/wei.png");
    disPlay_noneAndBlock(app,appErWeiMa,"/images/footer/app_l.png","/images/footer/app.png");



})();
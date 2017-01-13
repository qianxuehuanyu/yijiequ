/**
 * Created by Administrator on 2017/1/11 0011.
 */
$(function () {

    var lis=$("#header").find(".margin_top").find(".nav").find("ul").find("li").find("a");

    function bot_border(html,num) {
        if (location.href.indexOf(html)!=-1){
                for (var i=0;i<lis.length;i++){
                    lis[i].removeClass="bottom-border";
                }
            lis[num].className="bottom-border";
        }
    }
    bot_border("index",0);
    bot_border("ptjs",1);
    bot_border("fgsq",2);
    bot_border("yxal",3);
    bot_border("hzhb",4);
    bot_border("yjqxw",5);
    bot_border("jmhz",6);
    bot_border("gywm",7);


//     var windowWidth=document.body.clientWidth;
//     var navWidth=$(".nav").width();
//     if (windowWidth/navWidth<1){
//         $("#header").css("width",(windowWidth/navWidth)*100+"%");
//         $(".margin_top").css("width",(windowWidth/navWidth)*100+"%");
//         $(".nav").css({"width":(windowWidth/navWidth)*navWidth+"px"})
//     }
// console.log(windowWidth);
//     console.log(navWidth)

    $(".btn").click(function () {

        if ($(this).hasClass("block")){
            $("#header").find(".margin_top").find(".nav").find("ul").hide();
            $(this).css("background","url('/images/header/jiantou.jpg')no-repeat center");
            $(this).css("background-size", "100%");
            $(this).removeClass("block")
        }else {
            $("#header").find(".margin_top").find(".nav").find("ul").show();
            $(this).addClass("block");
            $(this).css("background","url('/images/header/jiantou_f.jpg')no-repeat center");
            $(this).css("background-size", "100%");
        }
    })
    
var clickTime=setInterval(function () {
    if (document.body.clientWidth<1000){
        $(".btn")[0].click();
        clearInterval(clickTime)
    }
},10)
});
/**
 * Created by Administrator on 2017/1/12 0012.
 */
$(function () {
    var imgs=$("#lb").find(".content").find("img");
    var imgIndex=0;
    function fade() {
        imgs.each(function () {
            imgs.css("display","none")
        })
        imgs.eq(imgIndex).fadeIn(1000);
        imgIndex++;
        if(imgIndex>=imgs.length){
            imgIndex=0
        }
        console.log("imgIndex: "+imgIndex)
    }
for (var i=0;i<imgs.length;i++){
    $("#lb").find(".arc").append("<div index="+i+"></div>");
}
    $("#lb").find(".arc").find("div").click(function () {
        imgIndex=$(this).index();
        fade();
        console.log("index: "+$(this).index())
    });


    fade();

    var lb_time=setInterval(function(){

        fade();
    },3000)
});
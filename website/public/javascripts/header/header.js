/**
 * Created by Administrator on 2017/1/11 0011.
 */
$(function () {

    var lis=$("#header").find(".margin_top").find(".nav").find("ul").find("li").find("a");

    // switch (location.href.split("/")[3]){
    //     case "index.html":
    //         lis[0].addClass(".bottom-border");
    //         break;
    //     case "ptjs.html":
    //         lis[1].addClass("bottom-border");
    //         break;
    //     case "fgsq.html":
    //         lis[2].addClass("bottom-border");
    //         break;
    //     case "yxal.html":
    //         lis[3].addClass("bottom-border");
    //         break;
    //     case "hzhb.html":
    //         lis[4].addClass("bottom-border");
    //         break;
    //     case "yjqxw.html":
    //         lis[5].addClass("bottom-border");
    //         break;
    //     case "jmhz.html":
    //         lis[6].addClass("bottom-border");
    //         break;
    // }


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



   console.log()
});
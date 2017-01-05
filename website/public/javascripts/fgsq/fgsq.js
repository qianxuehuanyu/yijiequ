/**
 * Created by Administrator on 2017/1/5.
 */
window.onload=function () {
    var oContent=document.createElement("div");
    var ocontentChild=document.createElement("div");
    var oLittleChild=document.createElement("div");
    oLittleChild.className='dressTitle';
    ocontentChild.className="cityMessgaeList";
    oContent.className="cityMessage";
    function addMessageCity(city) {
        var boxShowCenter=document.getElementsByClassName("boxShowCenter")[0];
        oContent.innerHTML="<h1><span>"+"["+city+"]"+"</span></h1>";
        ocontentChild.appendChild(oLittleChild);
        oLittleChild.innerHTML="<h5><span>地址</span></h5><h5><span>小区名称</span></h5>";
        oContent.appendChild(ocontentChild);
        boxShowCenter.appendChild(oContent);
    }
    function cityImgClicked(imageArr) {
        for(var i=0;i<imageArr.length;i++){
            imageArr[i].index=i;
            imageArr[i].onclick=function () {
                addMessageCity(this.id)
            }
        }
    }
    var imgs=document.getElementsByClassName("hoverMap");
    cityImgClicked(imgs);

};

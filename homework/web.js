var arrWarp = document.getElementById("arr");
var arrleft = document.getElementById("left");
var arrright = document.getElementById("right");
var nav=document.getElementById("nav").getElementsByTagName("li");
var cont=document.getElementById("content1").getElementsByTagName("li");
var len=cont.length,index,focusTimeHandler;
var pic=document.getElementById("pic");
var slide=document.getElementById("slide");
      slide.onmouseover=function(){
       pic.style.display="";
      }

    slide.onmouseout=function(){
       pic.style.display="none";
      }



   

    var getCurIndex = function () {
        for(var i=0;i<nav.length;i++)
        {
            if(nav[i].className.indexOf("selected")!= -1)
            {
                return i;
            }
        }
    }



    function move(flag) {//左右移动
        index = getCurIndex();
        if(!flag){
            index++;
            index %= len;
        }
        else{
            index--;
            if(index<0)
            {
                index = len - 1;
            }
        }
        show(index);
    }



    function autoTabStart() {//自动切换
        focusTimeHandler = setInterval(function () {
            move(false);
        },3000);
    }
    var autoTabStop = function () {//切换停止
        clearInterval(focusTimeHandler);
    }




    var navmouseover = function(na){
        if(na.className.indexOf('selected')!=-1)
        {
            return;
        }
        for(var i=0;i<nav.length-1;i++)//循环取数
        {
            if(nav[i] == na)
            {
                show(i);
                return;
            }
        }
    }
    var show = function (index) {//不懂，别人指导
        for(var i=0;i<nav.length-1;i++)
        {
            if(nav[i].className.indexOf('selected') != -1 && nav[i].className.indexOf('last') != -1)
            {
                nav[i].className = "last";
                cont[i].className = "pic2";
                var t;
                t=setInterval(function(){
                    if(cont[i].className.indexOf('show') == -1)
                        cont[i].className = "";
                        clearInterval(t);
                },1000)
                break;
            }
            else if(nav[i].className.indexOf('selected') != -1)
            {
                nav[i].className = "";
                cont[i].className = "pic1";
                var t;
                t=setInterval(function(){
                    if(cont[i].className.indexOf('show') == -1)
                        cont[i].className = ""; 
                        clearInterval(t);
                },1000)
                break;
            }
        }
        cont[index].className = "show";
        if(nav[index].className.indexOf('last') != -1)
        {
            nav[index].className = "last selected";
        }
        else{
            nav[index].className = "selected";
        }
    }




      
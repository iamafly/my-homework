function javascript(){

     var swrap=document.getElementById("slider");
     var cursors=document.getElementById("snav").getElementsByTagName("li");
     var imgs=document.getElementById("scont").getElementsByTagName("li");
     var left=document.getElementById("tleft");
     var right=document.getElementById("tright");
     var index=0;
     
     left.style.display="none";
     right.style.display="none";

     for(var i=0;i<cursors.length;i++){  
          var cursor_item=cursors[i];
          cursor_item.onclick=function(){
       
             for(var j=0;j<cursors.length;j++){
                 if(this.innerText==cursors[j].innerText){
                        index=j;
                        break;
                   }
              }

            for(var m=0;m<imgs.length;m++){
               cursors[m].className="";
               imgs[m].style.display="none";
              }
            imgs[index].style.display="";
            cursors[index].className="selected";
         }
     
    }


    function show(){

      for(i=0;i<cursors.length;i++){
        imgs[i].style.display="none";
        cursors[i].className="";
      }
        
        imgs[index].style.display="";
        cursors[index].className="selected";

        if(index<imgs.length-1)
          index++;
          else
          index=0;          
  }
     show();


   var timer=setInterval(show,2000);
   swrap.onmouseover=function(){
    clearInterval(timer);
    left.style.display="";
    right.style.display="";
   }

   swrap.onmouseout=function(){
    timer=setInterval(show,2000);
    left.style.display="none";
    right.style.display="none";
   }

  function getCurIndex(){
    for(var g=0;g<cursors.length;g++)
      if(imgs[g].style.display=="" && cursors[g].className=="selected")
        return g;
   }




  

  left.onclick=function(){
       index=getCurIndex();
       index--;
        if(index==-1){
          index=imgs.length-1;
        }

   show();
  }


  right.onclick=function(){
     index=getCurIndex();
      index++;
      if(index>(imgs.length-1)){
        index=0;
      }

   show();
  }


}

window.onload=javascript;
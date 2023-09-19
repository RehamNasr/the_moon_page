let stars1=document.getElementById("stars1")
let moon2=document.getElementById("moon2")
let nouvil=document.getElementById("nouvil")
let mountains3=document.getElementById("mountains3")
let mountains4=document.getElementById("mountains4")
let river=document.getElementById("river")
let boat=document.getElementById("boat")

document.onscroll=function(){
    let value=scrollY;
    stars1.style.left=value+"px";
    moon2.style.top=value*4+"px";
    mountains3.style.top=value*2+"px";
    mountains4.style.top=value*1.5+"px";
    river.style.top=value+"px";
    boat.style.top=value+"px";
    boat.style.left=value*3+"px";
    nouvil.style.fontSize=value+"px"
     if(value>=81){
    nouvil.style.fontSize=81+"px"
    nouvil.style.position="fixed"
      if(scrollY>=478){
         nouvil.style.display="none"
      }else{
        nouvil.style.display="block"
      }
      if(scrollY>=127){
        document.getElementById("section").style.background='linear-gradient(#7ec8e8,#000)';
      }else{
        document.getElementById("section").style.background='linear-gradient(#1a0818,#000)';

      }
     }
}
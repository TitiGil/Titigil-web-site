console.log("js Loaded");
var sam=document.getElementById("sample");
var smediaStyle=document.getElementsByClassName("smedia")[0].style;
var smis=$(".smi");
var mouseevt=(/Firefox/i.test(navigator.userAgent))?"DOMMouseScroll":"mousewheel";
window.addEventListener(mouseevt,scrolling);
function scrolling(){
  sam.style.top="0px";
 // console.log("scrolled1");
  $(document).ready(function(){
    //console.log("scrolled");
    $(".smedia").animate({
      
      'width' : '7%',
      'margin-right':'+=5px'
    },"slow");

    
     $('#tele,#insta,#git').animate({
        'width':'100%',
       'height' : '30%',
      
      });
   
      $('#tele,#insta,#git').css({
        'margin-top':'5px'
      });
    
     


  
   $(".smedia").animate({
    'height' : '30%',
    'top':'35%'
       },1500);
  

       $(".contactMe").css({
         'position':'absolute'
       });

       $(".contactMe").html("!");

      $(".contactMe").animate({
        'left':'+=46%',
        'width':'70px',
        'content':''
      });
  

    //document.getElementsByClassName("smedia")[0].classList.replace("smedia","side");
//
     
    });


    

    window.removeEventListener(mouseevt,scrolling);
    setTimeout( asd, 1000);
      function asd(){
        console.log("done");
        window.addEventListener(mouseevt,check);
      }
     
   
}
var checking=false;
function check(e){
  var evt=window.event || e;


  var kind=evt.detail || evt.wheelDelta*(-1);
  console.log(kind<0?"go down":"go up");
if( kind<0)goDown(addEvent);
else goUp();
}
 
var cardHeight=Number((window.getComputedStyle(document.getElementById("sample"),null).height).replace('px',''));
var counter=0;
function goDown(){
  if(window.removeEventListener){
    console.log("has");
  }
  
  window.removeEventListener(mouseevt,check);


  if(counter==0){
    $("#sample").css("top","0px");
    
  }else{
    
 console.error("botoom:"+Number(window.getComputedStyle(document.getElementById("sample")).bottom.replace('px','')));
  if(Number(window.getComputedStyle(document.getElementById("sample")).bottom.replace('px','')) >= 0 ){
var sampleTop=Number((window.getComputedStyle(document.getElementById("sample")).top).replace('px','').replace('-',''));
//console.log('-'+(sampleTop+cardHeight+50)+'px');
var te='-'+(Math.ceil(sampleTop)+Math.ceil(cardHeight)-16)+'px';
var x=String($(".sample").css("height")).replace("px",""),y=String($(".sample").css("top")).replace("px","").replace("-","");
console.log("height sample:"+x);
x=Number(x)+Number(y);
console.log(" x" +x);
sam.style.top="-"+x+"px";



 


}}

setTimeout(() => {
  window.addEventListener(mouseevt,check);
}, 1500); 
counter++;
}
function goUp(){
  console.log("goUp");
}
function addEvent(){
 
}
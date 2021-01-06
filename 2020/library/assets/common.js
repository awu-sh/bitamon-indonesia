$(document).ready(function(){
//TweenMax.set("#loadEgg" , {rotation:-9, transformOrigin:"50% 100%"});
TweenMax.to("#loadEgg", 0.6, {rotation:-9, transformOrigin:"50% 100%", yoyo: true, repeat: -1, ease: Power1.easeInOut});
TweenMax.to("#loadEgg,#loadTXT", 0.1, {opacity:0.8, yoyo: true, repeat: -1, ease: Power2.easeInOut});
});

function resizeCommonFunc(){

var w = window.innerWidth;
var h = window.innerHeight;

if(w>=820){
//PC
$('.imgChange').each(function(){ $(this).attr("src",$(this).attr("src").replace('_sp', '_pc')); });
}else{
//SP
$('.imgChange').each(function(){ $(this).attr("src",$(this).attr("src").replace('_pc', '_sp')); });
}

}


function commonFunc(){

/////////////////////////////////////
//ãƒžã‚¦ã‚¹ã‚ªãƒ¼ãƒãƒ¼ã§ç”»åƒãŒå…‰ã‚‹ï¼ˆã‚¹ãƒžãƒ›å¯¾å¿œï¼‰//
/////////////////////////////////////

moCNT=0;

var ua = navigator.userAgent;
if(ua.indexOf('iPhone') > 0 || ua.indexOf('iPod') > 0 ||ua.indexOf('iPad') > 0 || ua.indexOf('Android') > 0) {

$( '.fade, input[type="button"], input[type="submit"], button' )
  .bind( 'touchstart', function(){
    $( this ).addClass( 'SPhover' );
}).bind( 'touchend', function(){
    $( this ).removeClass( 'SPhover' );
});

}else{

 $('.fade').fadeTo(0, 1.0);
 $('.fade').hover(function(){
 if(moCNT==0){$(this).fadeTo(0, 0.2).fadeTo(400, 1.0); moCNT=1;}
 }, function(){
 $(this).fadeTo(150, 1.0); moCNT=0;
 });
 }

/////////////////////////////
//ãƒšãƒ¼ã‚¸å†…ãƒªãƒ³ã‚¯ã§ã‚¢ãƒ‹ãƒ¡ãƒ¼ã‚·ãƒ§ãƒ³//
/////////////////////////////

$('a.ctsMove').click(function(){
var speed = 600;
var href= $(this).attr("href");
var target = $(href == "#" || href == "" ? 'html' : href);
var position = target.offset().top;
$("html, body").animate({scrollTop:position}, speed, "easeOutExpo");
resizeCommonFunc();
return false;
});

}


$(function(){
  // ç”»é¢å…¨ä½“ã§å³ã‚¯ãƒªãƒƒã‚¯ã‚’ç¦æ­¢ã«ã™ã‚‹
  $(document).on("contextmenu",function(){
    return false;
  });
});

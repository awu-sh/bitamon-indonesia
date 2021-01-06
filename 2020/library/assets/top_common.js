$(window).load(function(){
$("#loadEgg,#loadTXT").delay(300).fadeOut(0);
/*$("#loading").delay(600).fadeOut(1500);*/
$("#loading").delay(600).fadeOut(2500);
});

function topCommonFunc(){

////////////
//å‰å£²åˆ¸WIN//
////////////

$('#popupMae,#popupMae2').click(function(){
popupFunc();
$('#maeWin, #popupBG').fadeIn(200);
TweenMax.fromTo("#maeWinWrap", 0.4, {scale:0.8} , {scale:1.0, ease:Power4.easeOut});
});

$('#maeWin .close, #popupBG').click(function(){
$("#maeWin,#popupBG").fadeOut(200);
});

////////////
//å…¥ãƒ—ãƒ¬WIN//
////////////

$('#popupNyu,#popupNyu2').click(function(){
popupFunc();
$('#nyuWin, #popupBG').fadeIn(200);
TweenMax.fromTo("#nyuWinWrap", 0.4, {scale:0.8} , {scale:1.0, ease:Power4.easeOut});
});

$('#nyuWin .close, #popupBG').click(function(){
$("#nyuWin,#popupBG").fadeOut(200);
});

}


//ãƒãƒƒãƒ—ã‚¢ãƒƒãƒ— ä½ç½®èª¿æ•´
function popupFunc(){

var w = $(window).width();
var h = $(window).height();

var popupW = $(".popup").width();
var popupH = $(".popup").height();

var popupLeft = (w-popupW)/2;
var popupTop = (h-popupH)/2;

if(popupLeft<10){ popupLeft = 10; }
if(popupTop<20){ popupTop = 20; }

var sc = $(this).scrollTop();

$('.popup').css({'left':popupLeft,'top':sc+popupTop});
}

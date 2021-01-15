// nav 
$(function() {
    var showFlag = false;
    var topBtn = $('#gnavi');
    topBtn.css('bottom', '-200px');
    var showFlag = false;
    //スクロールが100に達したらボタン表示
    $(window).scroll(function () {
    	var scrollTop = $(window).scrollTop();
        if (300 < scrollTop && scrollTop < 6000) {
            if (showFlag == false) {
                showFlag = true;
                topBtn.stop().animate({'bottom' : '35px'}, 200); 
            }
        } else {
            if (showFlag) {
                showFlag = false;
                topBtn.stop().animate({'bottom' : '-200px'}, 200); 
            }
        }
    });
    //スクロールしてトップ
    // topBtn.click(function () {
    //     $('body,html').animate({
    //         scrollTop: 0
    //     }, 500);
    //     return false;
    // });

    $(function(){
        $('a[href^="#"]').click(function(e) {
            e.preventDefault();//これも追加しておきますか
            var speed = 500;
            var href= $(this).attr("href");
            var target = $(href == "#" ? 'html' : href);
            var position = target.offset().top;
            if($(this).hasClass("game")) {
                position = target.offset().top - 167;
            }
            $('body,html').animate({scrollTop:position}, speed, 'swing');
            return false;
        });
    });
});
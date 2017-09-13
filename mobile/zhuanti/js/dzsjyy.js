$(function () {
    setTimeout('window.location.href="http://pdt.zoosnet.net/LR/Chatpre.aspx?id=PDT21034666&lng=cn";', 15000);
    $('.fix-close').click(function () {
        $('.fix-img').css('z-index', -1);
        setTimeout("$('.fix-img').css('z-index',9999);", 10000);
    });
    setTimeout("$('.fix-img').css('z-index',9999);", 5000);
//banner
    (function () {
        var banner = new Swiper('.caonima', {
            pagination: '.pag',
            calculateHeight: true,
            loop: true,
            autoplay: 3000,
            speed: 500
        });
    })();

    $('.eban').owlCarousel({
        singleItem: true,
        autoPlay: true
    });


});
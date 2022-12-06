$(function () {
    $('.main').fullpage({
        afterLoad: function (l, idx) {
            if (idx > 1) {
                $('.header').addClass('on')
            } else {
                $('.header').removeClass('on');
            }
        },



    });


    $('.mainSlide').on('init afterChange', function () {
        var currnet = $('.mainSlide .slick-current');
        currnet.addClass('on').siblings().removeClass('on')
    })

    $('.mainSlide').slick({
        dots: true,
        autoplay: true,
        pauseOnHover: false,
        pauseOnFocus: false,
    });

    $(window).on('scroll', function () {
        var sct = $(window).scrollTop();
        sct > 0 ? $('.header').addClass('on') : $('.header').removeClass('on');
    })



})
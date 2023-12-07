$(document).ready(function () {

    $(window).on('scroll', function () {
        // console.log($(window).scrollTop())
        if ($(window).scrollTop() > 80) {
            $('body').addClass('blackmode')
            $('body').addClass('logo1')
            // $(".logo").attr('src',"http://www.jawsfood.co.kr/images/common/logo2.png")
        } else {
            $('body').removeClass('blackmode')
            $('body').addClass('logo0')
            // $(".logo").attr('src',"http://www.jawsfood.co.kr/images/common/logo1.png")
        }
    })

    $("#jyy_gnb").on('mouseenter', function () {
        $('body').addClass('mouseblackmode')
    }).on('mouseleave', function () {
        $('body').removeClass('mouseblackmode')
    })

})
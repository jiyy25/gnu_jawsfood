$(document).ready(function () {

    $(window).on('scroll', function () {
        // console.log($(window).scrollTop())
        if ($(window).scrollTop() > 80) {
            $('body').addClass('blackmode no')
        
            // $(".logo").attr('src',"http://www.jawsfood.co.kr/images/common/logo2.png")
        } else {
            $('body').removeClass('blackmode no')
          
            // $(".logo").attr('src',"http://www.jawsfood.co.kr/images/common/logo1.png")
        }
    })

    $("#jyy_gnb").on('mouseenter', function () {
        $('body').addClass('mouseblackmode')
    }).on('mouseleave', function () {
        $('body').removeClass('mouseblackmode')
    })

})
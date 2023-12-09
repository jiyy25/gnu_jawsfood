$(document).ready(function () {

    $(window).on('scroll', function () {
        // console.log($(window).scrollTop())
        if ($(window).scrollTop() > 80) {
            $('body.mainpage ').addClass('blackmode no')

            // $(".logo").attr('src',"http://www.jawsfood.co.kr/images/common/logo2.png")
        } else {
            $('body.mainpage ').removeClass('blackmode no')

            // $(".logo").attr('src',"http://www.jawsfood.co.kr/images/common/logo1.png")
        }
    })

    $(".mainpage #jyy_gnb").on('mouseenter', function () {
        $('body').addClass('blackmode no')

    }).on('mouseleave', function () {
        if($(window).scrollTop()>80){
            $('body').addClass('no')
        }else{
            $('body').removeClass('no blackmode')
        }
    })

})
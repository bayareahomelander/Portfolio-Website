$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass('sticky');
        }else{
            $('.navbar').removeClass('sticky');
        }

        if(this.scroll > 50) {
            $('.scroll').addClass('show');
        }else{
            $('.scroll').removeClass('show');
        }
    });

    $('.scroll').click(function(){
        $('html').animate({scrollTop: 0})
    });

    $('.menu-btn').click(function(){
        $(".navbar .menu").toggleClass("active");
        $(".menu-btn i").toggleClass("active");
    });
});
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

    var typed = new Typed(".typing", {
        strings: ['Data Analyst', 'Software Engineer', 'ML Enthusiast'],
        typeSpeed: 100,
        backSpeed: 70,
        loop: true,
        showCursor: false
    });

    $('.carousel').owlCarousel({
        margin: 20,
        loop: false,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        dots: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },

            600:{
                items: 2,
                nav: false
            },

            1000:{
                items: 3,
                nav: false
            }
        }
    })
});

function myFunction() {
    var popup = document.getElementById("popuptext");
    popup.classList.toggle("show");
}

function mailFunction() {
    var popup = document.getElementById("mailText");
    popup.classList.toggle("show");
}
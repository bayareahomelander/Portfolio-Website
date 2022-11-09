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
        $('.navbar .menu').toggleClass('active');
        $('.menu-btn i').toggleClass('active');
    });

    var typed = new Typed(".typing", {
        strings: ['Data Analyst', 'Software Engineer', 'ML Enthusiast'],
        typeSpeed: 100,
        backSpeed: 70,
        loop: true,
        showCursor: false
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
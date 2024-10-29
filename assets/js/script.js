// window scroll
$(window).on("scroll", function() {
    var scrollTop = $(window).scrollTop();
    if(scrollTop >= 100) {
        $('body').addClass('fixed-header');
    } else {
        $('body').removeClass('fixed-headder');
    }
});

document.addEventListener("DOMContentLoaded", function() {
    new Typed("#type-it", {
        strings: ["Software Developer", "Full-Stack Developer", "Home-Chef"],
        typeSpeed: 70,
        backSpeed: 70,
        loop: true
    });

    $('.owl-carousel').owlCarousel({
        loop:true,
        items:2,
        margin:30,
        autoplay: true,
        autoplayTimeout: 2000,
        responsive:{
            0:{
                items:1
            },
            900:{
                items:2
            },
        }
    })

    $.scrollIt({
        easing: 'linear',
        topOffset: -70
    });

    
});

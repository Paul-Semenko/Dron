$(document).ready(function () {
    $('.single-item').slick({
        arrows: true,
        dots: true,
        adaptiveHeight: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed:600,
        easing: 'ease',
        infinite: false,
        initialSlide: 0,
        autoplay: false,
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        draggable: false,
        swipe: true,
        centerMode: true,
        variableWidth: true,
        responsive: [{
            breakpoint: 768,
            settings:{}
        },
        {breakpoint: 480,
                settings: {}
            },
        {breakpoint: 320,
            settings: {}
        }
        ],
        mobileFist:true,
    });
});
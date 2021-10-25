// header fixed js
// $(document).on("scroll", function() {
//     if ($(document).scrollTop() >= 101) {
//         $(".mr-menu-header").addClass("shrink");
//     } else {
//         $(".mr-menu-header").removeClass("shrink");
//     }
// });
$(window).scroll(function(){
    if ($(window).scrollTop() >= 130) {
        $('.mr-menu-header').addClass('shrink');
    }
    else {
        $('.mr-menu-header').removeClass('shrink');
    }
});
/*-- active menu js --*/
$(document).ready(function() {
    $('.mr-nav-manu ul li a').click(function() {
        $('li a').removeClass("mr-active-menu");
        $(this).addClass("mr-active-menu");
    });
});
// toogle js 
$(document).ready(function() {
    $(".mr-mobile-menubar").click(function() {
        $(".mr-nav-manu ").slideToggle(200);
    });

});
// service select search dropdown js
$(function() {

    $('.mr-category-dropdown > .mr-category-select').on('click', function() {
        $(this).parent().toggleClass('open');
    });

    $('.mr-category-dropdown > .list > .item').on('click', function() {
        $('.mr-category-dropdown > .list > .item').removeClass('selected');
        $(this).addClass('selected').parent().parent().removeClass('open').children('.mr-category-select').text($(this).text());
    });

    $(document).on('keyup', function(evt) {
        if ((evt.keyCode || evt.which) === 27) {
            $('.mr-category-dropdown').removeClass('open');
        }
    });

    $(document).on('click', function(evt) {
        if ($(evt.target).closest(".mr-category-dropdown > .mr-category-select").length === 0) {
            $('.mr-category-dropdown').removeClass('open');
        }
    });

});
// slider js 
$(document).ready(function() {
    $('#noticeboard-owl-carousel').owlCarousel({
        items: 1,
        margin: 10,
        lazyLoad: true,
        loop: true,
        autoHeight: true,
        autoplay: true,
        autoplayTimeout: 6000,
        autoplayHoverPause: true
    });
});
// feature product js
$(document).ready(function() {
    $('#mr-camping-fp-owlcarousel').owlCarousel({
        loop: true,
        margin: 10,
        autoHeight: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            576: {
                items: 2,
                nav: false
            },
            767: {
                items: 3,
                nav: true,
                loop: false,
                margin: 20
            },
            993: {
                items: 4,
                nav: true,
                loop: false,
                margin: 20
            },
            1200: {
                items: 4,
                nav: true,
                loop: false,
                margin: 20
            }
        }
    })
});


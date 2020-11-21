$( function() {

    /*** Слайдер на главной ***/

    $('.hero__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<div class="hero-prev"></div>',
        nextArrow: '<div class="hero-next"></div>',
        dots: true,
    });
});

$(function () {
    $('.menu a,.header__icon,.logo').on('click', function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500)
    });

    $('.slider-blog__wrapper').slick({
        dots: true,
        arrows: false
    });

    $('.header__burger,.menu__link').on('click', function () {
        $('.header__burger').toggleClass('header__menu-open');
        $('.menu').toggleClass('header__menu-open');
    });

    $('.header__burger').on('click', function () {
        $('body').toggleClass('fixed-page');
    });

    $('.menu__link').on('click', function () {
        $('body').removeClass('fixed-page');
    });

    var mixer = mixitup('.portfolio__content');
});
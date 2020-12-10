$('.panel_heading .block_title').click(function () {
    $(this).toggleClass('in').next().slideToggle();
    $('.panel_heading .block_title').not(this).removeClass('in').next().slideUp();
});

$(".slider-range").slider({
    range: true,
    min: 80000, // минимальное значение цены
    max: 1000000, // максимальное значение цены
    step: 1, // шаг слайдера
    values: [0, 1000000],  // начальные значения - позиции ползунков на шкале

    slide: function (event, ui) {
        $("input[name=price_s]").val(ui.values[0]); // выводим  значение от
        $("input[name=price_f]").val(ui.values[1]); // выводим  значение до
    },
    stop: function (event, ui) {
        show();
    } // выполняем действие  после остановки ползунка, в нашем случае функция show
});

$(".dec1").val($(".slider-range").slider("values", 0));
$(".dec2").val($(".slider-range").slider("values", 1));

$('.select-dropDown__item').click(function () {
    $(this).siblings('.select-dropDown__menu').fadeToggle();
});

$('.sidebar-menu__links').click(function (e) {
    e.preventDefault();
    $('.dropDown-wrapper').fadeOut();
    $('.sidebar-menu__links').removeClass('active');
    $(this).addClass('active').siblings('.dropDown-wrapper').fadeToggle();
});


$(document).mouseup(function (e) { // событие клика по веб-документу
    var div = $(".dropDown-wrapper"); // тут указываем ID элемента
    var btn = $('.sidebar-menu__links');
    if (!div.is(e.target) && !btn.is(e.target) && div.has(e.target).length === 0) { // и не по его дочерним элементам
        div.fadeOut(); // скрываем его
        btn.removeClass('active');
    }
});

$('.sidebar-close').click(function () {
   $('.sidebar').fadeOut();
});

$('.btn-filter').click(function () {
   $('.sidebar').fadeToggle();
});

$('ul.tabs__caption').on('click', 'li:not(.active)', function () {
    $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
});

$('.similar-products-slider').slick({
    slidesToShow: 4,
    dots: true,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><svg width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '<path d="M9.69974 0L0.000104904 9.70024L9.65474 19.354L10.3617 18.646L1.41432 9.70024L10.4067 0.708L9.69974 0Z"/>\n' +
        '<path d="M12.5289 2.82898L5.65709 9.70022L12.4829 16.525L13.8969 15.111L8.53851 9.67698L13.9429 4.24298L12.5289 2.82898Z"/>\n' +
        '</svg>\n</button>',
    nextArrow: '<button type="button" class="slick-next"><svg width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '<path d="M4.24313 0L13.9428 9.70024L4.28813 19.354L3.58113 18.646L12.5286 9.70024L3.53613 0.708L4.24313 0Z"/>\n' +
        '<path d="M1.414 2.82898L8.28578 9.70022L1.46 16.525L0.046 15.111L5.40436 9.67698L0 4.24298L1.414 2.82898Z"/>\n' +
        '</svg>\n</button>',
    appendArrows: '.slider-nav',
    appendDots: '.slider-nav',
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});

if ($(".product-page h1").length){
    $('.product-page h1').clone().appendTo('.mobile-title');
}
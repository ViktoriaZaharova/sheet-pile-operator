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
    appendArrows: '.slider-nav',
    appendDots: '.slider-nav'
});
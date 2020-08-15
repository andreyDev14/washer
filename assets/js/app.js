$(function () {

	// Фиксированное меню
	function fixedMenu() {
		if ($(window).width() > 991) {
			let s = $(window).scrollTop();
			if (s > 100) {
				$('.header__menu_fixed').css({
					display: 'flex'
				});
				$('.nice-select-wrapper').hide();
				$('.header__top-wrapper').addClass('header__top-wrapper_fixed');
			} else {
				$('.header__menu_fixed').css({
					display: 'none'
				});
				$('.nice-select-wrapper').show();
				$('.header__top-wrapper').removeClass('header__top-wrapper_fixed');
			}
		}
	}
	fixedMenu();

	$(window).on('scroll', function () {
		fixedMenu();
	});

	$(window).resize(function () {
		fixedMenu();
		if ($(window).width() > 991) {
			$('.header__bottom-wrapper').removeClass('header__bottom-wrapper_active');
			$('.menu-link').removeClass('menu-link_active');
		}
	})

	// Мобильное меню
	let link = $('.menu-link'),
		menu = $('.mobile-menu-wrapper');

	link.on('click', function (e) {
		e.preventDefault();
		link.toggleClass('menu-link_active');
		// menu.toggleClass('mobile-menu-wrapper_active');
		// $('.header__bottom-wrapper').toggleClass('mobile-menu-wrapper');
		$('.header__bottom-wrapper').toggleClass('header__bottom-wrapper_active');
	});

	// Открытие/закрытие модальных окон
	$('.popup-close').on('click', function () {
		$('.popup').fadeOut();
	});

	$('.modal__button').on('click', function () {
		$('.header__bottom-wrapper').removeClass('header__bottom-wrapper_active');
		$('.menu-link').removeClass('menu-link_active');
		$('.popup-call').fadeIn();
	});

	$('.feedback__button').on('click', function () {
		$('.popup-feedback').fadeIn();
	});

	$('.popup form').on('submit', function (e) {
		e.preventDefault();
		$('.popup').fadeOut();
		$('.popup-thank').fadeIn();
	});

	$('form').on('submit', function (e) {
		e.preventDefault();
		$('.popup-thank').fadeIn();
	});

	$('.popup-thank__button').on('click', function () {
		$('.popup').fadeOut();
	});

	// Плавная прокрутка
	$('.menu li, .header__menu_fixed li').click(function () {
		var scroll_el = $(this).find('a').attr('href');
		if ($(scroll_el).length != 0) {
			$('html, body').animate({
				scrollTop: $(scroll_el).offset().top - 110
			}, 800);
			$('.header__bottom-wrapper').removeClass('header__bottom-wrapper_active');
			$('.menu-link').removeClass('menu-link_active');
		}
		return false;
	});

	$('.logo-wrapper').on('click', function (e) {
		var scroll_el = $(this).attr('href');
		if ($(scroll_el).length != 0) {
			$('html, body').animate({
				scrollTop: $(scroll_el).offset().top - 180
			}, 800);
		}
	});

	// Select box
	$('select').niceSelect();

	// Кнопка "Увидеть все возможные поломки" 
	$(".price__row").hide();
	$(".price__row").slice(0, 11).show();
	$(".price__button").on('click', function (e) {
		e.preventDefault();
		$('.price__button').hide();
		$(".price__row:hidden").slice(0, 100).fadeIn();
	});

	// Слайдер отзывов
	var feedbackSlider = new Swiper('.feedback-container', {
		loop: true,
		navigation: {
			nextEl: '.slide-next-feedback',
			prevEl: '.slide-prev-feedback',
		},
		slidesPerView: 1,
		speed: 600,
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true
		},
	})


});
// Отсчет даты до окончания акции
function counterDate() {
	// Устанавливаем дату обратного отсчета ММ-ДД-ГГ
	var end = $('.counter').attr('end');
	var countDownDate = new Date(end).getTime();
	// Обновление счетчика каждую секунду
	var x = setInterval(function() {
		var now = new Date().getTime();
		var distance = countDownDate - now;
		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);
		// Вывод
		$('.counter .days span').text(days);
		$('.counter .hours span').text(hours);
		$('.counter .minutes span').text(minutes);
		$('.counter .seconds span').text(seconds);
		// Счетчик завершен
		if (distance < 0) {
			clearInterval(x);
			$('.counter').hide();
		}
	}, 1000);
}

// Функция слайдеров на главной
function pdtSlider() {
	// Функция слайдер для "Акции" на главной странице
	$('#pdt__sales .products__grid.owl-carousel').owlCarousel({
		items: 1,
		margin: 0,
		loop: false,
		rewind: true,
		lazyLoad: true,
		nav: true,
		navContainer: '#pdt__sales .owl-nav[data-content="pdt__sales"]',
		navText: [ , ],
		dots: false,
		dotsContainer: '',
		autoHeight: false,
		autoHeightClass: 'owl-height',
		autoplay: false,
		autoplayHoverPause: true,
		smartSpeed: 500,
		mouseDrag: true,
		touchDrag: true,
		pullDrag: true,
		responsiveClass: true,
		responsiveRefreshRate: 100
	});

	// Функция вертикального слайдера для Распродажи
	// Навигация след слайда
	$('.product__thumblist-nav--bottom').on('click', function (){
		var cur = parseInt($('.product__thumblist-items').attr('data-index'));
		var next = cur + 1;
		var prev = cur - 1;
		var length = $('.product__thumblist-items').attr('data-length')
		// Если последний элемент
		if(next > length){
			next = 1;
			prev = length - 1
		}
		$('.product__thumblist-item[data-index='+ length +']').removeClass('show')
		$('.product__thumblist-item[data-index='+ prev +']').removeClass('show')
		$('.product__thumblist-item[data-index='+ cur +']').addClass('show')
		$('.product__thumblist-item[data-index='+ next +']').addClass('show')
		$('.product__thumblist-items').attr('data-index', next);
	});
	// Навигация пред слайда
	$('.product__thumblist-nav--top').one('click', function (){
		var cur = parseInt($('.product__thumblist-items').attr('data-index') - 1);
		$('.product__thumblist-items').attr('data-index', cur);
	});
	// Навигация пред слайда
	$('.product__thumblist-nav--top').on('click', function (){
		var cur = parseInt($('.product__thumblist-items').attr('data-index'));
		var next = cur - 1;
		var prev = cur + 1;
		var length = $('.product__thumblist-items').attr('data-length')
		console.log('cur 2', cur)
		// Если первый элемент
		if(cur == 1){
			next = length;
			prev = 2
		}
		if(cur == length){
			next = length - 1;
			prev = 1
		}
		$('.product__thumblist-item[data-index='+ prev +']').removeClass('show')
		$('.product__thumblist-item[data-index='+ cur +']').addClass('show')
		$('.product__thumblist-item[data-index='+ next +']').addClass('show')
		$('.product__thumblist-items').attr('data-index', next);
	})

	// Функция слайдера для "Лидеры продаж" на главной странице
	$('#pdt__best .owl-carousel').owlCarousel({
		items: 4,
		margin: 32,
		loop: false,
		rewind: true,
		lazyLoad: true,
		nav: true,
		navContainer: '#pdt__best .owl-nav[data-content="pdt__best"]',
		navText: [ , ],
		dots: false,
		dotsContainer: '',
		autoHeight: false,
		autoHeightClass: 'owl-height',
		autoplay: false,
		autoplayHoverPause: true,
		smartSpeed: 500,
		mouseDrag: true,
		touchDrag: true,
		pullDrag: true,
		responsiveClass: true,
		responsiveRefreshRate: 100,
		responsive: {
			0:{items:1, autoHeight: true},
			540:{items:2},
			768:{items:3},
			1200:{items:4}
		}
	});

	// Функция слайдера для Новинок на главной странице
	$('#pdt__new .owl-carousel').owlCarousel({
		items: 4,
		margin: 32,
		loop: false,
		rewind: true,
		lazyLoad: true,
		nav: true,
		navContainer: '#pdt__new .owl-nav[data-content="pdt__new"]',
		navText: [ , ],
		dots: false,
		autoHeight: false,
		autoHeightClass: 'owl-height',
		autoplay: false,
		autoplayHoverPause: true,
		smartSpeed: 500,
		mouseDrag: true,
		touchDrag: true,
		pullDrag: true,
		responsiveClass: true,
		responsiveRefreshRate: 100,
		responsive: {
			0:{items:1, autoHeight: true},
			540:{items:2},
			768:{items:3},
			1200:{items:4}
		}
	});

	// Функция слайдера для Хитов продаж на главной странице
	$('#pdt__sale .owl-carousel').owlCarousel({
		items: 4,
		margin: 32,
		loop: false,
		rewind: true,
		lazyLoad: true,
		nav: true,
		navContainer: '#pdt__sale .owl-nav[data-content="pdt__sale"]',
		navText: [ , ],
		dots: false,
		autoHeight: false,
		autoHeightClass: 'owl-height',
		autoplay: false,
		autoplayHoverPause: true,
		smartSpeed: 500,
		mouseDrag: true,
		touchDrag: true,
		pullDrag: true,
		responsiveClass: true,
		responsiveRefreshRate: 100,
		responsive: {
			0:{items:1, autoHeight: true},
			540:{items:2},
			768:{items:3},
			1200:{items:4}
		}
	});

	// Функция слайдера для Хитов продаж на главной странице
	$('#popular .owl-carousel').owlCarousel({
		items: 3,
		margin: 32,
		loop: false,
		rewind: true,
		lazyLoad: true,
		nav: false,
		navContainer: '',
		navText: [ , ],
		dots: true,
		autoHeight: false,
		autoHeightClass: 'owl-height',
		autoplay: false,
		autoplayHoverPause: true,
		smartSpeed: 500,
		mouseDrag: true,
		touchDrag: true,
		pullDrag: true,
		responsiveClass: true,
		responsiveRefreshRate: 100,
		responsive: {
			0:{items:1},
			540:{items:2},
			768:{items:3}
		}
	});

	// Функция слайдера для Хитов продаж на главной странице
	$('#advantages .owl-carousel').owlCarousel({
		items: 3,
		margin: 32,
		loop: false,
		rewind: true,
		lazyLoad: true,
		nav: false,
		navContainer: '',
		navText: [ , ],
		dots: true,
		autoHeight: false,
		autoHeightClass: 'owl-height',
		autoplay: false,
		autoplayHoverPause: true,
		smartSpeed: 500,
		mouseDrag: true,
		touchDrag: true,
		pullDrag: true,
		responsiveClass: true,
		responsiveRefreshRate: 100,
		responsive: {
			0:{items:1},
			320:{items:1, autoHeight: true},
			480:{items:1},
			641:{items:2},
			768:{items:3},
			992:{items:3},
			1200:{items:3}
		}
	});
}

// Слайдер для главной страницы
function slideShow() {
	// Слайдер на главной
	var owlS = $('#slideshow .owl-carousel');
	owlS.owlCarousel({
		items: 1,
		loop: false,
		rewind: true,
		lazyLoad: true,
		nav: true,
		navText: [ , ],
		navContainer: '',
		dots: true,
		dotsContainer: '',
		URLhashListener: true,
		autoplay: false,
		autoplayHoverPause: true,
		autoHeight: true,
		autoHeightClass: 'owl-height',
		smartSpeed: 500,
		dotsSpeed: 400,
		mouseDrag: true,
		touchDrag: true,
		pullDrag: true
	});
}

// Новости
function newsCarousel() {
	$("#news .owl-carousel").owlCarousel({
			items: 2,
			margin: 32,
			loop: false,
			rewind: true,
			lazyLoad: true,
			nav: true,
			navContainer: '#news .owl-nav',
			navText: [ , ],
			dots: false,
			autoHeight: true,
			autoHeightClass: 'owl-height',
			autoplay: false,
			autoplayHoverPause: true,
			smartSpeed: 500,
			mouseDrag: true,
			touchDrag: true,
			pullDrag: true,
			responsiveClass: true,
			responsiveRefreshRate: 100,
			responsive: {
				0:{items:1, autoHeight: true},
				540:{items:2},
				768:{items:3}
			}
		});
}

// Загрузка основных функций шаблона
$(document).ready(function(){
	counterDate();
	slideShow();
	newsCarousel();
	pdtSlider();
});
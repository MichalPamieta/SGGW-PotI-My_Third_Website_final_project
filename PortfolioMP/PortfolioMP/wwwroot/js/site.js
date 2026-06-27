const skills = {
	csharp: 5.0,
	java: 5.0,
	python: 4.5,
	sql: 4.5,
	html: 4.0,
	css: 4.0,
	javascript: 3.5,
	php: 2.0
};

const starTotal = 5;
for (const skill in skills) {
	const starPercentage = (skills[skill] / starTotal) * 100;
	const starPercentageRounded = `${(Math.round(starPercentage / 10) * 10)}%`;
	document.querySelector(`.${skill} .stars-inner`).style.width = starPercentageRounded;
}

(function ($) {
	"use strict";
	var nav = $('nav');
	var navHeight = nav.outerHeight();

	$('.navbar-toggler').on('click', function () {
		if (!$('#mainNav').hasClass('navbar-reduce')) {
			$('#mainNav').addClass('navbar-reduce');
		}
	})

	$(window).on('load', function () {
		if ($('#preloader').length) {
			$('#preloader').delay(100).fadeOut('slow', function () {
				$(this).remove();
			});
		}
	});

	if (localStorage.getItem('cookieSeen') != 'shown') {
		$(".cookie-banner").delay(2000).fadeIn();
		localStorage.setItem('cookieSeen', 'shown')
	}

	$('.close').click(function (e) {
		$('.cookie-banner').fadeOut();
	});

	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('.back-to-top').fadeIn('slow');
		} else {
			$('.back-to-top').fadeOut('slow');
		}
	});
	$('.back-to-top').click(function () {
		$('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
		return false;
	});

	$('.scrolltop-mf').on("click", function () {
		$('html, body').animate({
			scrollTop: 0
		}, 1000);
	});

	$('a.js-scroll[href*="#"]:not([href="#"])').on("click", function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: (target.offset().top - navHeight + 5)
				}, 1000, "easeInOutExpo");
				return false;
			}
		}
	});

	$('.js-scroll').on("click", function () {
		$('.navbar-collapse').collapse('hide');
	});

	$('body').scrollspy({
		target: '#mainNav',
		offset: navHeight
	});

	$(window).trigger('scroll');
	$(window).on('scroll', function () {
		var pixels = 50;
		var top = 1200;
		if ($(window).scrollTop() > pixels) {
			$('.navbar-expand-xl').addClass('navbar-reduce');
			$('.navbar-expand-xl').removeClass('navbar-trans');
		} else {
			$('.navbar-expand-xl').addClass('navbar-trans');
			$('.navbar-expand-xl').removeClass('navbar-reduce');
		}
		if ($(window).scrollTop() > top) {
			$('.scrolltop-mf').fadeIn(1000, "easeInOutExpo");
		} else {
			$('.scrolltop-mf').fadeOut(1000, "easeInOutExpo");
		}
	});

	if ($('.text-slider').length == 1) {
		var typed_strings = $('.text-slider-items').text();
		var typed = new Typed('.text-slider', {
			strings: typed_strings.split(','),
			typeSpeed: 80,
			loop: true,
			backDelay: 1100,
			backSpeed: 30
		});
	}

	new WOW().init();

	var portfolioIsotope = $('.portfolio-container').isotope({
		itemSelector: '.portfolio-item',
		layoutMode: 'fitRows'
	});

	$('#portfolio-filter li').on('click', function () {
		$("#portfolio-filter li").removeClass('filter-active');
		$(this).addClass('filter-active');
		portfolioIsotope.isotope({ filter: $(this).data('filter') });
	});

})(jQuery);
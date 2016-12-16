var w;
var $boxReserva = $('.box-reserva');
var $boxService = $('.box-servicios');
var $boxGalery = $('.foto-galery');
var classAnimateReservaDown = "slideInDown";
var classAnimateReservaUp = "slideOutUp";
var noneDisplay = "none-display";
var clickReserva = false;
var inAnimate = true;
var endAnimate = "webkitAnimationEnd mozAnimationEnd oAnimationEnd animationEnd"
var responsiveWidth = 768;

function AnimateReserva(classAnimate, hasDisplay) {
	inAnimate = true;
	if (hasDisplay) {
		$boxReserva.removeClass(noneDisplay);
		$boxReserva.addClass(classAnimate).one(endAnimate, function(){
			$(this).removeClass(classAnimate);
			inAnimate = false;
		});
	} else {
		$boxReserva.addClass(classAnimate).one(endAnimate, function(){
			$(this).removeClass(classAnimate);
			$(this).addClass(noneDisplay);
			inAnimate = false;
		});
	};	
}

function AnimateService(scrollPos) {
	$boxService.each(function(i){
		if (scrollPos >= $(this).position().top - 450) {
			if (i%2 == 0) {
				$(this).addClass('bounceInRight');
			} else {
				$(this).addClass('bounceInLeft');
			};
			$(this).removeClass(noneDisplay);
		};
	});
}

function AnimateGalery(scrollPos) {
	$boxGalery.each(function(i){
		if (scrollPos >= $(this).position().top - 450) {
			if (i%2 == 0) {
				$(this).addClass('bounceInRight');
			} else {
				$(this).addClass('bounceInLeft');
			};
			$(this).removeClass(noneDisplay);
		};
	});
}

$(document).ready(function() {
	w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	var scrollPos = $(this).scrollTop();

	if (w >= responsiveWidth) {
		var hasDisplay = $boxReserva.hasClass(noneDisplay);
		AnimateReserva(classAnimateReservaDown, hasDisplay);
	};

	AnimateService(scrollPos);
	AnimateGalery(scrollPos);
});

$(document).on('scroll', function() {
	w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	var scrollPos = $(this).scrollTop();

	if (w >= responsiveWidth && !inAnimate) {
		var $mC = $('#mainCarousel');
		var bottomC = $mC.position().top + $mC.offset().top + $mC.outerHeight(true);
		
		if (scrollPos >= bottomC - 150) {
			var hasDisplay = $boxReserva.hasClass(noneDisplay);
			if (!hasDisplay && !clickReserva) {
				AnimateReserva(classAnimateReservaUp, hasDisplay);
			};
		};
	};

	AnimateService(scrollPos);
	AnimateGalery(scrollPos);
});

$('.btn-reserva').on('click', function() {
	w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

	if (w >= responsiveWidth && !inAnimate) {
		var hasDisplay = $boxReserva.hasClass(noneDisplay);
		clickReserva = true;
		if (hasDisplay) {
			AnimateReserva(classAnimateReservaDown, hasDisplay);
		} else {
			AnimateReserva(classAnimateReservaUp, hasDisplay);
		};
	} else {
		// Anchor
	};
})
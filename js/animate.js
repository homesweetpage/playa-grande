var w;
var $boxReserva = $('.box-reserva');
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

$(document).ready(function() {
	w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

	if (w >= responsiveWidth) {
		var hasDisplay = $boxReserva.hasClass(noneDisplay);
		AnimateReserva(classAnimateReservaDown, hasDisplay);
	};
});

$(document).on('scroll', function() {
	w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

	if (w >= responsiveWidth && !inAnimate) {
		var $mC = $('#mainCarousel');
		var bottomC = $mC.position().top + $mC.offset().top + $mC.outerHeight(true);
		
		if ($(this).scrollTop() >= bottomC - 150) {
			var hasDisplay = $boxReserva.hasClass(noneDisplay);
			if (!hasDisplay && !clickReserva) {
				AnimateReserva(classAnimateReservaUp, hasDisplay);
			};
		};
	};
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
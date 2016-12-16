var w;
var $hostelSection = $('#hostels');
var $serviceSection = $('#services');
var $locationSection = $('#location');
//var $actividadSection = $('#actividades');
var $tarifaSection = $('#tarifas');
var $newsSection = $('#news');
var $contactSection = $('#contacts');
var arrSections = [$hostelSection, $serviceSection, $locationSection, $tarifaSection, $newsSection, $contactSection];
var $boxReserva = $('.box-reserva');
var $boxService = $('.box-servicios');
var $boxGalery = $('.foto-galery');
var classAnimateReservaDown = "slideInDown";
var classAnimateReservaUp = "slideOutUp";
var noneDisplay = "none-display";
var clickReserva = false;
var inAnimate = true;
var inTransition = false;
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
	$boxService.each(function (i){
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
	$boxGalery.each(function (i){
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

function ActiveNav(scrollPos) {
	for (var i = 0; i < arrSections.length; i++) {
		var sectionTop = arrSections[i].position().top - 80;
		var sectionBottom = arrSections[i].position().top + arrSections[i].outerHeight(true) - 80;
		var sectionId = arrSections[i].attr('id');
		var li_href = $('a[href="#'+sectionId+'"]').parent();
		if ((sectionTop <= scrollPos) && (scrollPos <= sectionBottom)){
			li_href.addClass('active');
		} else {
			li_href.removeClass('active');
		};
	};
}

function TransitionNav(target) {
	inTransition = true;
	$('html, body').animate({
		scrollTop: target.offset().top
	}, 1500, function (){
		inTransition = false;
	});
}

$(document).ready(function () {
	w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	var scrollPos = $(this).scrollTop();

	if (w >= responsiveWidth) {
		var hasDisplay = $boxReserva.hasClass(noneDisplay);
		AnimateReserva(classAnimateReservaDown, hasDisplay);
	};

	AnimateService(scrollPos);
	AnimateGalery(scrollPos);

	ActiveNav(scrollPos);
});

$(document).on('scroll', function () {
	w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	var scrollPos = $(this).scrollTop();

	if (w >= responsiveWidth && !inAnimate) {
		var $mC = $('#mainCarousel');
		var bottomC = $mC.position().top + $mC.offset().top + $mC.outerHeight(true);
		
		if (scrollPos >= bottomC - 250) {
			var hasDisplay = $boxReserva.hasClass(noneDisplay);
			if (!hasDisplay && !clickReserva) {
				AnimateReserva(classAnimateReservaUp, hasDisplay);
			};
		};
	};

	AnimateService(scrollPos);
	AnimateGalery(scrollPos);

	ActiveNav(scrollPos);
});

$('.btn-reserva').on('click', function () {
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
		if (!inTransition) {
			TransitionNav($boxReserva);
		};
	};
})

$(".anchor-link a").on("click", function (e){
	e.preventDefault();
	if (!inTransition) {
		var target = $(this.hash);
		TransitionNav(target);
	};
})

$("#logo a").on("click", function (e){
	e.preventDefault();
	if (!inTransition) {
		var target = $('html, body');
		TransitionNav(target);
	};
})
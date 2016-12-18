function closeModalOut(modal) {
	$(modal).click(function (e) {
		if ($(e.target).is(modal)){
			$(this).fadeOut(175);
		}
	});
}

// Galery Modal
// Get the modal
var gmodal = document.getElementById('galeryModal');
var modalImg = document.getElementById("imgModal");
var captionText = document.getElementById("imgCaption");

// Get the image and insert it inside the modal - use its "alt" text as a caption
$('.foto-galery .box-img img').on('click', function() {
	gmodal.style.display = "block";
	modalImg.src = this.src;
	captionText.innerHTML = this.alt;
});

// Get the <span> element that closes the modal
var gspan = document.getElementsByClassName("gclose")[0];

// When the user clicks on <span> (x), close the modal
gspan.onclick = function() {
	$(gmodal).fadeOut(175);
}

$(gmodal).click(function (e) {
	closeModalOut(this);
});

// Activities Modal
// Get the modal
var amodal = document.getElementById('activitiesModal');
var modalTitulo = document.getElementById('tituloModal');
var modalTexto = document.getElementById('textoModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
$('.box-actividades').on('click', function() {
	amodal.style.display = "block";
	var $titulo = $(this).children('.box-bot').children('span').html();
	var $texto = $(this).children('.box-bot').children('.texto').html();
	$(modalTitulo).html($titulo);
	$(modalTexto).html($texto);
});

// Get the <span> element that closes the modal
var aspan = document.getElementsByClassName("aclose")[0];

// When the user clicks on <span> (x), close the modal
aspan.onclick = function() {
	$(amodal).fadeOut(175);
}

$(amodal).click(function (e) {
	closeModalOut(this);
});
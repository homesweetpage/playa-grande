// Get the modal
var modal = document.getElementById('galeryModal');
var modalImg = document.getElementById("imgModal");
var captionText = document.getElementById("imgCaption");

// Get the image and insert it inside the modal - use its "alt" text as a caption
$('.foto-galery .box-img img').on('click', function() {
	modal.style.display = "block";
	modalImg.src = this.src;
	captionText.innerHTML = this.alt;
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
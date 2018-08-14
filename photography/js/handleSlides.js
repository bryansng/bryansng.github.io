// Get Body.
var body = document.getElementsByTagName("body")[0];

// Get modal.
var modal = document.getElementById("modal");

var slideIndex = 1;
var slideValidLength = 0; // length based on where lazyLoad is scrolled to.

// Downloaded slide based on how many gallery_img is loaded. Required in showSlide to know where is start index and the last index.
function updateSlideLength(){
	slideValidLength = document.querySelectorAll(".gallery_img[src]").length;
}

// Open the modal.
function openModal(){
	modal.style.display = "block";
	body.style.overflow = "hidden";
}
// Close the modal.
function closeModal(){
	modal.style.display = "none";
	body.style.overflow = "auto";
}

// When user clicks anywhere outside the modal, close it
modal.addEventListener("click", function(event){
	if (event.target == modal){
		modal.style.display = "none";
		body.style.overflow = "auto";
	}
});

// Next/previous controls.
function plusSlides(offset){
	showSlides(slideIndex += offset);
}

// Thumbnail image controls.
function currentSlide(orderNum){
	var slides = document.querySelectorAll(".slide");
	showSlides(slideIndex = parseInt(orderNum) + parseInt(slides.length));
	/*
	-4 -3 -2 -1  0		[orderNum]
	 0  1  2  3  4		[What we want]
	*/
}

function showSlides(index){
	var i;
	var slides = document.querySelectorAll(".slide");
	var captionText = document.getElementById("caption");
	
	if (index > slideValidLength) {slideIndex = 1}
	if (index < 1) {slideIndex = slideValidLength}
	
	for (i = 0; i < slideValidLength; i++){
		slides[i].style.display = "none";
	}
	
	slides[slideIndex-1].style.display = "block";
	//captionText.innerHTML = ;
}

function handleClick(elm){
	openModal();
	// Get element's parent's order style.
	currentSlide(elm.parentNode.style.order);
}
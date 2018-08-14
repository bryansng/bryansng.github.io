var heights = [];	// array to store all the img heights relative to screen.

function checkImageIntersect(){
	// currentY = (window.pageYOffset + window.innerHeight)
	if (windowResized && heights && ((window.pageYOffset + window.innerHeight) > (heights[0] - (window.innerHeight * 2)))){
		var removed_h = heights.shift();
		lazyLoadImagesByHeight(removed_h);
	}
}

// Function lazy-loads the images by setting the src to its data-src. Which image to lazy-load is based on height. A height is taken in as input.
function lazyLoadImagesByHeight(height){
	var imgs = document.querySelectorAll(".gallery_img[data-src]");
	var modal_imgs = document.querySelectorAll(".modal_img[data-src]");
	
	// while rect.y == height, set img src to data-src.
	for (var i = 0; i < imgs.length && getPosition(imgs[i]).y === height; i++){
		img = imgs[i];
		modal_img = modal_imgs[i];
		
		// set modal_img src to data-src.
		modal_img.setAttribute('src', modal_img.getAttribute("data-src"));
		modal_img.removeAttribute("data-src");
		
		// set img src to data-src.
		img.setAttribute('src', img.getAttribute("data-src"));
		img.removeAttribute("data-src");
		
		// Display the image by setting img's parentNode to block.
		img.parentNode.style.display = "block";
	}
}

// Function erases previous heights and acquires the new heights of the elements.
function getNewElementsHeight(){
	var wrappers = document.querySelectorAll(".gallery_wrapper");
	// Show images temporary.
	wrappers.forEach(function(wrapper){
		if (wrapper.style.display == "block"){
			wrapper.setAttribute("data-style", "display: 'block';");
		}
		wrapper.style.display = "block";
	});
	
	heights = [];	// remove previous heights.
	
	// get new heights.
	var imgs = document.querySelectorAll(".gallery_img[data-src]");
	imgs.forEach(getElementHeight);	// takes in an img from imgs at each loop.
	
	windowResized = 1;
	
	// Hide images.
	wrappers.forEach(function(wrapper){
		if (wrapper.getAttribute("data-style") != "display: 'block';"){
			wrapper.style.display = "none";
		}
	});
}

// Function gets the top left (x, y) coordinate of the element.
function getPosition(element){
	element.parentNode.style.display = "block";
	
	var rect = element.getBoundingClientRect();
	// getBoundingClientRect returns the position relative to the window, i.e. screen instead of the whole page. To get the position of the rect or element, we need to account for the window scrolled Y offset.
	var l = rect.left;
	var h = rect.top + window.scrollY;
	
	element.parentNode.style.display = "none";
	
	return {x : l, y : h};
}

// Function gets the height of the element and adds it into the array of heights.
function getElementHeight(img){
	var y = (img.getBoundingClientRect().top + window.scrollY);
	
	// If the height is not in the list of heights, then we push it.
	if (!(heights.includes(y))){
		heights.push(y);
	}
}

// Function returns the vh value in terms of JavaScript.
function vh(v){
  var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  return (v * h) / 100;
}

// Function returns the vw value in terms of JavaScript.
function vw(v){
  var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  return (v * w) / 100;
}



// Run on successive resizing.
window.addEventListener("resize", function(){
	if (window.matchMedia("(orientation: landscape)").matches){
		console.log("Landscape");
		handleLazyLoadOnResize();
	}
	else if (window.matchMedia("(orientation: portrait)").matches){
		console.log("Portrait");
		handleLazyLoadOnResize();
	}
});

function handleLazyLoadOnResize(){
	windowResized = 0;
	
	getNewElementsHeight();
}




// On mobile screens, show first few images to enable scrolling.
function enableScrollOnMobile(){
	if (window.matchMedia("(max-width: 600px)").matches){
		var numImgsToShow = 2;
		
		var imgs = document.querySelectorAll(".gallery_img[data-src]");
		var modal_imgs = document.querySelectorAll(".modal_img[data-src]");
		
		// while rect.y == height, set img src to data-src.
		for (i = 0; i < numImgsToShow && imgs[i].hasAttribute("data-src"); i++){
			img = imgs[i];
			modal_img = modal_imgs[i];
			
			// set modal_img src to data-src.
			modal_img.setAttribute('src', modal_img.getAttribute("data-src"));
			modal_img.removeAttribute("data-src");
			
			// set img src to data-src.
			img.setAttribute('src', img.getAttribute("data-src"));
			img.removeAttribute("data-src");
			
			// Display the image by setting img's parentNode to block.
			img.parentNode.style.display = "block";
		}
	}
}
// Run on successive resizing.
window.addEventListener("resize", function(){
	addVisualSpaceForTimelines();
});

addVisualSpaceForTimelines();

function addVisualSpaceForTimelines(){
	var contents = document.querySelectorAll(".content");

	// loop from start to second last.
	for (var i = 0; i < contents.length-1; i++){
		// get first content to be compared with second content.
		content_1 = contents[i];
		content_2 = contents[i+1];
		
		// get first content's h2 and second content's h2.
		h2_fir = content_1.getElementsByTagName("h2")[0];
		h2_sec = content_2.getElementsByTagName("h2")[0];
		
		// get time difference in milliseconds from the individual h2s.
		time_1 = new Date(h2_fir.innerHTML);
		time_2 = new Date(h2_sec.innerHTML);
		time_diff = time_2 - time_1;
		
		// if difference between years more than 0.
		if ((time_diff / (1000*60*60*24*365)) >= 1){
			var padding_bottom = window.getComputedStyle(content_1, null).getPropertyValue("padding-bottom");
			
			addMarginBottom(padding_bottom, content_1, 5);
		} // if difference between months more than 0.
		else if ((time_diff / (1000*60*60*24*30)) >= 1){
			var padding_bottom = window.getComputedStyle(content_1, null).getPropertyValue("padding-bottom");
			
			addMarginBottom(padding_bottom, content_1, 3);
		} // if difference between days more than 14.
		else if ((time_diff / (1000*60*60*24)) >= 15){
			var padding_bottom = window.getComputedStyle(content_1, null).getPropertyValue("padding-bottom");
			
			addMarginBottom(padding_bottom, content_1, 1.5);
		} // if difference between days more than 4.
		else if ((time_diff / (1000*60*60*24)) >= 5){
			var padding_bottom = window.getComputedStyle(content_1, null).getPropertyValue("padding-bottom");
			
			addMarginBottom(padding_bottom, content_1, 1.25);
		} // if difference between days more than 0.
		else if ((time_diff / (1000*60*60*24)) >= 1){
			var padding_bottom = window.getComputedStyle(content_1, null).getPropertyValue("padding-bottom");
			
			addMarginBottom(padding_bottom, content_1, 1);
		}
	}
}

// Add margin bottom based on the padding bottom.
function addMarginBottom(padding_bottom, content, multiplier){
	content.style.marginBottom = (parseInt(padding_bottom) * multiplier) + getCSSUnit(padding_bottom);
}

// Returns the css unit of measurement, i.e. px, vw, vh, rem.
function getCSSUnit(padding_bottom){
	for (var i = 0; i < padding_bottom.length; i++){
		if (isNaN(padding_bottom[i]) && (padding_bottom[i] !== '.')){
			return padding_bottom.slice(i, padding_bottom.length);
		}
	}
}
// Initialize Cloud Firestore through Firebase.
var db = firebase.firestore();

// Get a reference to the storage service, which is used to create references in your storage bucket.
var storage = firebase.storage();
// Create a storage reference from our storage service.
var storageRef = storage.ref();

// Get parent.
var slides_parent = document.getElementById("slides_parent");
var wrapper_parent = document.getElementById("gallery_parent");

var order_num = 0;
//db.collection("photography").orderBy("filename").get().then((querySnapshot) => {
db.collection("photography").orderBy("time_uploaded", "asc").get().then((querySnapshot) => {
	querySnapshot.forEach((doc) => {
		// TODO: Wrap the entire thing in a promise.
		// https://stackoverflow.com/questions/51007999/how-to-wait-until-all-data-is-downloaded-in-firebase-firestore-storage?answertab=votes#tab-top
		data = doc.data();
		
		// For slides.
		var new_slide = document.createElement("div");
		new_slide.classList.add("slide");
		new_slide.style.order = -order_num;
		
		// For gallery wrapper.
		var new_wrapper = document.createElement("div");
		new_wrapper.classList.add("gallery_wrapper");
		new_wrapper.style.order = -order_num++;
		// Neg because, the order is based on left to right. The most left is the first one. i.e., if there is -3, -2, -1. -3 will be the most left.
		
		slides_parent.insertBefore(new_slide, slides_parent.childNodes[0]); // insert into first node.
		wrapper_parent.insertBefore(new_wrapper, wrapper_parent.childNodes[0]); // insert into first node.
		
		// Create a child reference to the file we want to download.
		var imgRef = storageRef.child(data["filepath"]);
		
		// Get the download URL.
		imgRef.getDownloadURL().then(function(url){
			// Insert url into an <img> tag to "download".
			// Slide.
			var new_slide_img = document.createElement("img");
			new_slide_img.src = url;
			new_slide_img.classList.add("modal_img");
			
			// Gallery_wrapper.
			var new_wrapper_img = document.createElement("img");
			new_wrapper_img.setAttribute("data-src", url);
			new_wrapper_img.classList.add("gallery_img");
			new_wrapper_img.onclick = function() {handleClick(this);};
			
			// Adds a class to the image, depending if image is horizontal or vertical.
			new_wrapper_img.onload = function() {
				var width = new_wrapper_img.naturalWidth;
				var height = new_wrapper_img.naturalHeight;
				
				if (width > height){
					new_wrapper_img.classList.add("horizontal");
					new_slide_img.classList.add("horizontal");
				} else if (height > width){
					new_wrapper_img.classList.add("vertical");
					new_slide_img.classList.add("vertical");
				}
			}
			
			new_slide.appendChild(new_slide_img);
			new_wrapper.appendChild(new_wrapper_img);	// insert img into div.
		/*
		}).catch(function(error){
			// A full list of error codes is available at,
			// https://firebase.google.com/docs/storage/web/handle-errors
			switch(error.code){
				case 'storage/object_not_found':
					// File doesn't exist.
					console.log('Object not found');
					break;
				case 'storage/unauthorized':
					// User doesn't have permission to access the object.
					console.log('You do not have the righr permissions');
					break;
				case 'storage/canceled':
					// User canceled the upload.
					console.log('Canceled');
					break;
				case 'storage/unknown':
					// Unknown error occurred, inspect the serve response.
					console.log('Who knows...');
					break;
			}
		*/
		});
	});
});
wrapper_parent.style.display = "flex";

var temp_wrapper_parent = document.getElementById("temp_wrapper_parent");
temp_wrapper_parent.style.display = "none";
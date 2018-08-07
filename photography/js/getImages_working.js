// Initialize Cloud Firestore through Firebase.
var db = firebase.firestore();

// Get a reference to the storage service, which is used to create references in your storage bucket.
var storage = firebase.storage();
// Create a storage reference from our storage service.
var storageRef = storage.ref();

var parent = document.getElementById("gallery_parent"); // get parent.

var order_num = 0;
//db.collection("photography").orderBy("filename").get().then((querySnapshot) => {
db.collection("photography").orderBy("time_uploaded", "asc").get().then((querySnapshot) => {
	querySnapshot.forEach((doc) => {
		data = doc.data();
			
		var new_div = document.createElement("div");
		new_div.classList.add("gallery_wrapper");
		new_div.style.order = -order_num++;
		// Neg because, the order is based on left to right. The most left is the first one. i.e., if there is -3, -2, -1. -3 will be the most left.
		
		parent.insertBefore(new_div, parent.childNodes[0]); // insert into first node.
		
		// Create a child reference to the file we want to download.
		var imgRef = storageRef.child(data["filepath"]);
		
		// Get the download URL.
		imgRef.getDownloadURL().then(function(url){
			// Insert url into an <img> tag to "download".
			var new_img = document.createElement("img");
			new_img.src = url;
			new_img.classList.add("gallery_img");
			
			// Adds a class to the image, depending if image is horizontal or vertical.
			new_img.onload = function() {
				var width = new_img.naturalWidth;
				var height = new_img.naturalHeight;
				
				if (width > height){
					new_img.classList.add("horizontal");
				} else if (height > width){
					new_img.classList.add("vertical");
				}
			}
			
			//new_img.onclick = handleClick(order_num);
		
			new_div.appendChild(new_img);	// insert img into div.
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
parent.style.display = "flex";

var temp_parent = document.getElementById("temp_parent");
temp_parent.style.display = "none";
// Initialize Map.
function initMap(){
	// Create a new StyledMapType object, passing it an array of styles, and the name to be displayed on the map type control.
	var styledMapType = new google.maps.StyledMapType(
	[
	  {
		"elementType": "geometry",
		"stylers": [
		  {
			"color": "#f5f5f5"
		  }
		]
	  },
	  {
		"elementType": "labels.icon",
		"stylers": [
		  {
			"visibility": "off"
		  }
		]
	  },
	  {
		"elementType": "labels.text.fill",
		"stylers": [
		  {
			"color": "#616161"
		  }
		]
	  },
	  {
		"elementType": "labels.text.stroke",
		"stylers": [
		  {
			"color": "#f5f5f5"
		  }
		]
	  },
	  {
		"featureType": "administrative.land_parcel",
		"elementType": "labels.text.fill",
		"stylers": [
		  {
			"color": "#bdbdbd"
		  }
		]
	  },
	  {
		"featureType": "poi",
		"elementType": "geometry",
		"stylers": [
		  {
			"color": "#eeeeee"
		  }
		]
	  },
	  {
		"featureType": "poi",
		"elementType": "labels.text.fill",
		"stylers": [
		  {
			"color": "#757575"
		  }
		]
	  },
	  {
		"featureType": "poi.park",
		"elementType": "geometry",
		"stylers": [
		  {
			"color": "#e5e5e5"
		  }
		]
	  },
	  {
		"featureType": "poi.park",
		"elementType": "labels.text.fill",
		"stylers": [
		  {
			"color": "#9e9e9e"
		  }
		]
	  },
	  {
		"featureType": "road",
		"elementType": "geometry",
		"stylers": [
		  {
			"color": "#ffffff"
		  }
		]
	  },
	  {
		"featureType": "road",
		"elementType": "geometry.stroke",
		"stylers": [
		  {
			"color": "#1f1f1f"
		  },
		  {
			"visibility": "on"
		  }
		]
	  },
	  {
		"featureType": "road.arterial",
		"elementType": "geometry.fill",
		"stylers": [
		  {
			"color": "#c9c9c9"
		  }
		]
	  },
	  {
		"featureType": "road.arterial",
		"elementType": "geometry.stroke",
		"stylers": [
		  {
			"color": "#1f1f1f"
		  }
		]
	  },
	  {
		"featureType": "road.arterial",
		"elementType": "labels.text.fill",
		"stylers": [
		  {
			"color": "#757575"
		  }
		]
	  },
	  {
		"featureType": "road.highway",
		"elementType": "geometry",
		"stylers": [
		  {
			"color": "#dadada"
		  }
		]
	  },
	  {
		"featureType": "road.highway",
		"elementType": "geometry.stroke",
		"stylers": [
		  {
			"color": "#1f1f1f"
		  }
		]
	  },
	  {
		"featureType": "road.highway",
		"elementType": "labels.text.fill",
		"stylers": [
		  {
			"color": "#616161"
		  }
		]
	  },
	  {
		"featureType": "road.highway.controlled_access",
		"elementType": "geometry.stroke",
		"stylers": [
		  {
			"color": "#1f1f1f"
		  }
		]
	  },
	  {
		"featureType": "road.local",
		"elementType": "geometry.stroke",
		"stylers": [
		  {
			"color": "#1f1f1f"
		  }
		]
	  },
	  {
		"featureType": "road.local",
		"elementType": "labels.text.fill",
		"stylers": [
		  {
			"color": "#9e9e9e"
		  }
		]
	  },
	  {
		"featureType": "transit.line",
		"elementType": "geometry",
		"stylers": [
		  {
			"color": "#e5e5e5"
		  }
		]
	  },
	  {
		"featureType": "transit.station",
		"elementType": "geometry",
		"stylers": [
		  {
			"color": "#eeeeee"
		  }
		]
	  },
	  {
		"featureType": "water",
		"elementType": "geometry",
		"stylers": [
		  {
			"color": "#c9c9c9"
		  }
		]
	  },
	  {
		"featureType": "water",
		"elementType": "geometry.fill",
		"stylers": [
		  {
			"color": "#6a6a6a"
		  }
		]
	  },
	  {
		"featureType": "water",
		"elementType": "labels.text.fill",
		"stylers": [
		  {
			"color": "#9e9e9e"
		  }
		]
	  }
	],
	{name: 'Styled Map'});
	
	// Create a map object, and include the MapTypeId to add to the map type control.
	var LatLng = {lat: 53.309298, lng: -6.223868}
	
	var map = new google.maps.Map(document.getElementById('map'), {
		center: LatLng,
		zoom: 12,
		draggable: false,
		scrollwheel: false,
		disableDoubleClickZoom: true,
		zoomControl: false,
		mapTypeControl: false,
		streetViewControl: false,
		rotateControl: false,
		scaleControl: false,
		fullscreenControl: false
		/*
		mapTypeControlOptions: {
			mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain', 'styled_map']
		}
		*/
	});
	/*
	var marker = new google.maps.Marker({
		position: LatLng,
		map: map,
	});
	*/
	
	// Associate the sytled map with the MapTypeId and set it to display.
	map.mapTypes.set('styled_map', styledMapType);
	map.setMapTypeId('styled_map');
	
	/*
	var daCenter = new google.maps.LatLng(53.309298, -6.223868);
	var mapCanvas = document.getElementById("map");
	var mapOptions = {center: daCenter, zoom: 12};
	var map = new google.maps.Map(mapCanvas, mapOptions);
	var marker = new google.maps.Marker({position: daCenter});
	marker.setMap(map);
	*/
}
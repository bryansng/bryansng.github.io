/* Sorts the wrappers. */
/*
// TODO: Figure out this sort stuff by style.
https://stackoverflow.com/questions/32256644/sort-an-array-with-dom-tags-and-attributes-by-left-and-top-values#fromHistory

var elements = document.querySelectorAll(".gallery_wrapper");
console.log(elements);

// Create our function generator.
function sortBy(prop){
	return function(a, b){
		var filter_a = parseInt(a.style[prop]);
		var filter_b = parseInt(b.style[prop]);
		return filter_a < filter_b
		? -1
		: (filter_a > filter_b ? 1 : 0);
	}
}

function sortDom(filter){
	// Transform our nodeList into array and apply sort function.
	return [].map.call(elements, function(elm){
		return elm;
	}).sort(sortBy(filter))
}

// Sort by order style property.
var byOrder = sortDom("order");
console.log(byOrder);
*/
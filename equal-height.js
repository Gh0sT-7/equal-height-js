/*
*   - Finds the largest content box within a parent div and applies the same height to smaller child boxes.
*/
function equalHeightContent(elements) {
	var maxHeight = 0;
	$.each(elements, function(i, element) {
		var elementHeight = $(element).height();
		if (elementHeight > maxHeight) {
			maxHeight = elementHeight;
		}
	});

	elements.height(maxHeight);
}

equalHeightContent($('.row .col-md-6'));
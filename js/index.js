// external js: masonry.pkgd.js

var gutterSize = 20;
var columnSize = 176;

var columnSizeSub = 80;
var gutterSizeSub = 10;
$(document).ready( function() {

  $('.grid').masonry({
    itemSelector: '.grid-item',
    columnWidth: columnSize,
    gutter: gutterSize,
    isFitWidth: true
  });  


	$('.subcategoryItem').click(function(event) {
	  $('.grid').masonry( 'remove', $('#crimeBook1') )
	    // layout remaining item elements
	    .masonry('layout');
	});

});

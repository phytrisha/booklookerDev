// external js: masonry.pkgd.js

var gutterSize = 20;
var columnSize = 176;
$(document).ready( function() {

  $('.grid').masonry({
    itemSelector: '.grid-item',
    columnWidth: columnSize,
    gutter: gutterSize,
    isFitWidth: true
  });
  
});
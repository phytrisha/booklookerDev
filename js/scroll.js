/*var script = document.createElement('script');
script.src = 'http://code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);*/
/*document.addEventListener("DOMContentLoaded", function(event) {
  console.log("DOM fully loaded and parsed");
});*/
var lastScroll;
var currentScroll = $("body").scrollTop();
var scrolling = false;
$(window).scroll(function() {
  /*Act on the event*/
  /*var p = $( "html" );*/
  /*currentScroll = $("body").scrollTop();*/
  /*if (currentScroll > lastScroll) {
    console.log("down")
  };
  if (currentScroll < lastScroll) {
    console.log("up")
  };
  lastScroll = $("body").scrollTop();
  console.log(currentScroll);
  console.log(lastScroll);*/
  scrolling = true;
  //console.log(scrolling);
});

if (scrolling!=true) {
  //console.log("yeah!")
}

document.onScroll = function() {console.log("scrolling!!!")};
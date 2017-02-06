$(document).ready(function() {
  // Code based on this demo: https://jsfiddle.net/atcwL1mz/
  var windowHeight = document.body.clientHeight,
    gridTop = windowHeight * .1,
    gridBottom = windowHeight * .9;

  $(window).on('scroll', function() {
    $('button').each(function() {
      var thisTop = $(this).offset().top - $(window).scrollTop();
      if (thisTop >= gridTop && (thisTop + $(this).height()) <= gridBottom) {
        $(this).addClass('animated');
      } else {
        $(this).removeClass('animated');
      }
    });
  });
  $(window).trigger('scroll');
});
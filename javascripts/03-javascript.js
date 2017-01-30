$(function() {
  // jQuery is ready
  $('#js-demo-input').keyup(function() {
    var thisVal = $(this).val();
    if ("hello".indexOf(thisVal) === -1) {
      $('#js-demo-input').addClass('invalid').removeClass('valid');
    } else if ("hello".indexOf(thisVal) > -1) {
      if (thisVal === 'hello') {
        $('#js-demo-input').addClass('valid').removeClass('invalid');
      } else {
        $('#js-demo-input').removeClass('valid').removeClass('invalid');
      }
    }
  });
});
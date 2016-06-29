
$(window).on('resize', function(){
  var cw = $('.big-block').width();
  $('.big-block').css({'height':cw+'px'});
});

$(document).ready(function(){
  $(window).trigger('resize');
});
$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").toggle();
    $("#walrus-hidden").toggle();
  });

  $(".clickable1").click(function() {
    $("#castle-hidden").fadeToggle();
    $("#castle-showing").fadeToggle();
  });
});

$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").toggle();
    $("#walrus-hidden").toggle();
  });

  $(".clickable1").click(function() {
    $("#castle-hidden").fadeToggle();
    $("#castle-showing").fadeToggle();
  });

  $(".clickable2").click(function() {
    $("#seashell-hidden").slideToggle();
    $("#seashell-showing").slideToggle();
  });

  $("button#dark").click(function() {
    $("body").removeClass();
    $("body").addClass("dark-background")
    $("body").addClass("light-text");
  });

  $("button#medium").click(function() {
    $("body").removeClass();
    $("body").addClass("medium-background")
    $("body").addClass("medium-text")
  });

  $("button#light").click(function() {
    $("body").removeClass();
    $("body").addClass("light-background");
  });
});



$("#no").click(function() {
  alert("Sao chị lại nỡ không yêu em. Cho suy nghĩ lại");
});
$("#yes").click(function() {
  $(".body1").remove();
  $("body").addClass("yeu");
$("yeu").fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100);
});

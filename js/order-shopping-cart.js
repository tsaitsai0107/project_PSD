$(document).ready(function () {
  $(".delete button").on("click", function () {
    $(this).parents(".shopping-list").remove();
  });
});

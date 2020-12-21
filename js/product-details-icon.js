$(".product-details button").click(function () {
  $(this).children("i").toggleClass("icon-red");
});
$(".product-details button.heart").click(function () {
  $(this).children("i").toggleClass("far").toggleClass("fas");
});

// menu-big
$(".products-btn").click(function () {
  $(".menu").toggle();
});
// search
$(".search-icon").click(function () {
  $(".search").toggle();
});
$(".delete-btn").click(function () {
  $(this).parents(".search").hide();
});
// shopping-cart
$(".shopping-cart-with-number").click(function () {
  $(".cart").toggle();
});
$(".delete-btn").on("click", function () {
  $(this).parents(".product").remove();
});

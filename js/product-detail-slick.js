$(document).ready(function () {
  $(".main-img").slick({
    asNavFor: ".sliders",
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
  });
  $(".sliders").slick({
    asNavFor: ".main-img",
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    centerMode: true,
    focusOnSelect: true,
    centerMode: true,
    centerPadding: "15px",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          centerMode: false,
          slidesToShow: 1,
        },
      },
    ],
  });
});

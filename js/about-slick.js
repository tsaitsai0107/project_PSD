$(".sliders").slick({
  centerMode: true,
  centerPadding: "110px",
  slidesToShow: 1,
  dots: true,
  arrows: true,
  customPaging: function () {
    return '<div class="pager__item">  </div>';
  },
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: "60px",
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 1,
      },
    },
  ],
});

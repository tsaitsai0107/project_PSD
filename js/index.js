document.addEventListener("DOMContentLoaded", function () {
  new Splide(".banner-splide", {
    gap: "15px",
  }).mount();

  new Splide(".products", {
    type: "loop",
    perPage: 4,
    perMove: 1,
    pagination: false,
    gap: "2rem",
    breakpoints: {
      1200: {
        perPage: 3,
        gap: "1rem",
      },
      991: {
        perPage: 2,
        gap: "1rem",
      },
      480: {
        perPage: 1,
      },
    },
  }).mount();

  new Splide(".bestseller", {
    type: "loop",
    perPage: 5,
    perMove: 1,
    pagination: false,
    gap: "2rem",
    breakpoints: {
      1200: {
        perPage: 4,
        gap: "1rem",
      },
      991: {
        perPage: 3,
        gap: "1rem",
      },
      480: {
        perPage: 1,
      },
    },
  }).mount();

  new Splide(".brands", {
    type: "loop",
    perPage: 6,
    perMove: 1,
    pagination: false,
    gap: "3rem",
    padding: {
      left: "3rem",
      right: "3rem",
    },
    breakpoints: {
      991: {
        perPage: 4,
        gap: "3rem",
      },
      768: {
        perPage: 3,
        gap: "3.5rem",
      },
      480: {
        perPage: 1,
      },
    },
  }).mount();
});

$("#Modal").modal("show");

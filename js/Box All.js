$("#blog-featured-post-carousel").owlCarousel({
  loop: true,
  margin: 50,
  items: 1,
});

$("#blog-products-carousel").owlCarousel({
  loop: true,
  nav:true,
  dots: false,
  navText: [
    "<img src='./images/arrow-left.svg'>",
    "<img src='./images/arrow-right.svg'>",
  ],
  margin: 25,
  items: 3,
});

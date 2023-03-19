$nextArrow = $(".brand__listing .arrow-slider .arrow--right");
$prevArrow = $(".brand__listing .arrow-slider .arrow--left");
$brandCarousel = $(".brand__listing .brands .brand-carousel");

$nextArrow.on("click", function () {
  $lists = $(".brand__listing .brands .brand-carousel .brand");
  $brandCarousel.append($lists.get(0));
});

$prevArrow.on("click", function () {
  $lists = $(".brand__listing .brands .brand-carousel .brand");
  $brandCarousel.prepend($lists[$lists.length -1])
});
$(document).ready(function () {
  $(".text-content-slider").slick({
    autoplay: true,
    dots: false,
    fade: true,
    infinite: true,
    arrows: false,
    autoplaySpeed: 500,
  });

  $(".heder-toggler").click(function () {
    $("body").toggleClass("menu-active");
  });
});

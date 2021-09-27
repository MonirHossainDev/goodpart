$(document).ready(function () {
  var aplandWindow = $(window);
  var $scrollTopBtn = $("#scrollTopBtn");

  aplandWindow.on("scroll", function () {
    if (aplandWindow.scrollTop() > 0) {
      $(".header").addClass("header-sticky");
    } else {
      $(".header").removeClass("header-sticky");
    }
  });

  // Show Scroll Top Button
  aplandWindow.on("scroll", function () {
    if ($(this).scrollTop() > 400) {
      $scrollTopBtn.addClass("actived");
    } else {
      $scrollTopBtn.removeClass("actived");
    }
  });

  // Animate Body after Clicking on Scroll Top Button
  $scrollTopBtn.on("click", function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      500
    );
  });
});

(function ($) {
  $(document).ready(function () {
    // Scroll to Top
    jQuery(".scrolltotop").click(function () {
      jQuery("html").animate({ scrollTop: "0px" }, 400);
      return false;
    });

    jQuery(window).scroll(function () {
      var upto = jQuery(window).scrollTop();
      if (upto > 500) {
        jQuery(".scrolltotop").fadeIn();
      } else {
        jQuery(".scrolltotop").fadeOut();
      }
    });

    // code for owl caursol
    $(".products-slider").owlCarousel({
      loop: true,
      margin: 30,
      center: false,
      nav: false,
      // rtl: true,
      dots: false,
      autoplay: false,
      autoplayTimeout: 2000,
      responsiveClass: true,
      responsiveRefreshRate: true,
      responsive: {
        0: {
          items: 2.2,
          margin: 5,
        },
        768: {
          items: 2.2,
          margin: 5,
        },
        960: {
          items: 2.5,
          margin: 5,
        },
        1200: {
          items: 3.2,
          margin: 15,
        },

        1360: {
          items: 4,
          margin: 15,
        },
        1920: {
          items: 4,
        },
      },
    });

    var owl = $(".products-slider");
    owl.owlCarousel();
    // Go to the next item
    $(".owl-next").click(function () {
      owl.trigger("next.owl.carousel");
    });
    // Go to the previous item
    $(".owl-prev").click(function () {
      // With optional speed parameter
      // Parameters has to be in square bracket '[]'
      owl.trigger("prev.owl.carousel", [300]);
    });
  });
})(jQuery);

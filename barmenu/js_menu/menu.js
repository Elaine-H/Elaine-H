/* wow
  -------------------------------*/
new WOW({
mobile: false
}).init();

});

/*owlcarousel
----------------------------------------*/
$(document).ready(function () {
    $("#menu-carousel").owlCarousel({
        items: 3,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3],
        slideSpeed: 300,
        itemsDesktop: [1199, 2],
        itemsTablet: [768, 1],
        itemsTabletSmall: [985, 2],
        itemsMobile: [479, 1],
    });
});
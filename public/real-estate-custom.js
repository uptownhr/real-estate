//sticky header

$(window).resize(function () {
  $(".navbar-collapse").css({maxHeight: $(window).height() - $(".navbar-header").height() + "px"});
});
//sticky header on scroll
$(document).ready(function () {
  $(window).load(function () {
    $(".sticky").sticky({topSpacing: 0});
  });
});



//slider revolution
jQuery(document).ready(function () {

  revapi = jQuery('.tp-banner').revolution(
    {
      delay: 6000,
      startwidth: 1170,
      startheight: 450,
      hideThumbs: 10,
      fullWidth: "on",
      navigationStyle: "preview4"
    });

});	//ready
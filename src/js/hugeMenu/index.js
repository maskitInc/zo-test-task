$("[data-btn-action='huge-menu--open']").on("click", function (e) {
  const el = $(this),
    hugeMenu = el.closest(".huge-menu"),
    hugeMenuList = hugeMenu.find(".huge-menu--list");

  hugeMenuList.addClass("--showed");

  e.preventDefault();
});

$("[data-btn-action='huge-menu--close']").on("click", function (e) {
  const el = $(this),
    hugeMenu = el.closest(".huge-menu"),
    hugeMenuList = hugeMenu.find(".huge-menu--list");

  hugeMenuList.removeClass("--showed");

  e.preventDefault();
});



$(window).on('resize', function(e) {
  $(".huge-menu--list").removeClass("--showed");
});

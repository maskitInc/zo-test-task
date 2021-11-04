// Dropdown menu - Select
function dropdownSelect(el) {
  const dropdown = el.closest(".dropdown"),
    dropdownMenu = el.parent(),
    allElements = dropdownMenu.find("li");

  const value = el.text();

  allElements.removeClass("--active");
  el.addClass("--active");

  dropdown.find(".btn .value").text(value);

  // Finds a hidden input and adds the selected value to it
  dropdown.find("input").attr("value", value);
}

$(".dropdown-menu li").on("click", function (e) {
  const el = $(this),
    dropdownMenu = el.parent();

  // Dropdown menu - Select
  if (dropdownMenu.hasClass("--dropdown-select")) {
    dropdownSelect(el);
  }

  dropdownMenu.removeClass("--showed");
});

$(".dropdown-toggle").on("click", function (e) {
  const el = $(this),
    dropdown = el.closest(".dropdown"),
    dropdownMenu = dropdown.find(".dropdown-menu");

  if (dropdown.hasClass("--mobile-collapse")) {
    if (!dropdownMenu.hasClass("--showed")) {
      $(".dropdown-menu").removeClass("--showed");
      dropdownMenu.addClass("--showed");
    } else {
      dropdownMenu.removeClass("--showed");
    }
  }

  if (dropdown.hasClass("--simple")) {
    $(".dropdown-menu").removeClass("--showed");
    dropdownMenu.addClass("--showed");
  }

  e.preventDefault();
});

// Hides dropdown if clicked outside of it
$(document).on("click", function (e) {
  if (!$(e.target).closest(".dropdown").length) {
    $(".dropdown-menu").removeClass("--showed");
  }
});


$(window).on('resize', function(e) {
  $(".dropdown-menu").removeClass("--showed");
});

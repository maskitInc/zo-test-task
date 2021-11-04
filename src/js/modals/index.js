$("[data-btn-action='profile-menu-open']").on("click", function (e) {
  $("[data-modal='profile']").addClass("--showed");
  e.preventDefault();
});

$("[data-btn-action='cart-menu-open']").on("click", function (e) {
  $("[data-modal='cart']").addClass("--showed");
  e.preventDefault();
});

$("[data-btn-action='modal--close']").on("click", function (e) {
  const el = $(this),
    modal = el.closest(".modal");

  modal.removeClass("--showed");
  e.preventDefault();
});

// Hides modal if clicked outside of it
$(document).on("click", function (e) {
  if (!$(e.target).closest(".modal-container").length) {
    $(e.target).closest(".modal").removeClass("--showed");
  }
});

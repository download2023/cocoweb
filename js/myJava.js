document.addEventListener("DOMContentLoaded", function () {
  let navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      navLinks.forEach(function (otherLink) {
        otherLink.classList.remove("active");
      });
      this.classList.add("active");
    });
  });
});
